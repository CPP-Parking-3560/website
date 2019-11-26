$(document).ready(function(e) {
    var status = localStorage.getItem("account");
        if(status == "regular")
        {
            $("#log,#signedin").show();
            $("#officerpage").hide();
        }
        else if(status == "officer")
        {
            $("#log,#signedin,officerpage").show();
        }
        else
        {   
            $("#signedin,#log,#officerpage").hide(); 
        }
    
});    

document.getElementById("log").addEventListener("click", myFunction);

function myFunction() {localStorage.clear();};