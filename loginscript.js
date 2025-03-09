var adminuser="admin"
var adminpass="Admin@123"

var user="user"
var userpass="User@123"

function valid(){
    var a=document.getElementById("username").value
    var b= document.getElementById("password").value
    if((a!=adminuser && b!=adminpass) && (a!=user && b!=userpass))
    {
        alert("Invalid Username or Password")
        a=""
        b=""
        document.getElementById("form").reset()
    }
    else if(a==adminuser)
    {
        if(b==adminpass){
            localStorage.setItem("mode",a)
            a=""
            b=""
            window.location.href="booking.html"
        }
        else
            alert("Invalid Password")
                
    }
    else if(a==user)
    {
        if(b==userpass)
        {
            localStorage.setItem("mode",a)
            a=""
            b=""
            window.location.href="booking.html"
        }
        else
        alert("Invalid Password")
        
    }
}