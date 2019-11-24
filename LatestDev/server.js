const express = require('express')
const app = express()
const bodyPaser = require('body-parser')
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

const rooms = { }
//read in map json file into var
var dataToEJS = require('./pldata.json')

// set the view engine to ejs
app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

//used to handle assets
app.use(express.static('public'))
// use res.render to load up an ejs view file

//login-register page
app.get('/', function(req, res) {
	res.render('pages/index');
});
app.post('/',function(req,res){
    var email = req.body.txtEmail;
    var password = req.body.txtPassword;
});

//overview page
app.get('/overview', function(req, res) {
	res.render('pages/overview');
});

//payment page
app.get('/payment', function(req, res) {
	res.render('pages/payment');
});

//edit profile page
app.get('/edit', function(req, res) {
	res.render('pages/edit');
});

//officer citation page
app.get('/officer', function(req, res) {
	res.render('pages/officer');
});

//map page
app.get('/map', function(req, res, next) {
    res.render('pages/map',{ 
        parkdata: dataToEJS
    });
});
//chat system
app.get('/chat', function(req, res) {
	res.render('pages/chat',{ rooms: rooms });
});


app.post('/room', (req, res) => {
if (rooms[req.body.room] != null) {
    return res.redirect('/chat')
}
rooms[req.body.room] = { users: {} }
res.redirect(req.body.room)
// Send message that new room was created
io.emit('room-created', req.body.room)
})
  
  app.get('/:room', (req, res) => {
    if (rooms[req.params.room] == null) {
        return res.redirect('/chat')
    }
    res.render('room', { roomName: req.params.room })
  })

// Tell our app to listen on port 5000
server.listen(5000, function (err) {
    if (err) {
      throw err
    }
    console.log('Server started on port 5000')
  })

  io.on('connection', socket => {
    socket.on('new-user', (room, name) => {
      socket.join(room)
      rooms[room].users[socket.id] = name
      socket.to(room).broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', (room, message) => {
      socket.to(room).broadcast.emit('chat-message', { message: message, name: rooms[room].users[socket.id] })
    })
    socket.on('disconnect', () => {
      getUserRooms(socket).forEach(room => {
        socket.to(room).broadcast.emit('user-disconnected', rooms[room].users[socket.id])
        delete rooms[room].users[socket.id]
      })
    })
  })
  
  function getUserRooms(socket) {
    return Object.entries(rooms).reduce((names, [name, room]) => {
      if (room.users[socket.id] != null) names.push(name)
      return names
    }, [])
  }  