var search=document.getElementById("searchby")

var mode=localStorage.getItem("mode")//User or Admin
var booktkt=document.querySelectorAll(".avail-seat")
if(mode=="user")
{
    var bts=document.getElementById("add-button").style.display="none"
    const buttons = document.querySelectorAll('.del-train');
    buttons.forEach(button => {
        button.disabled = true; // Disable each button
    });
    booktkt.forEach(x=>{
        x.addEventListener("click",event=>book(event))
    })
}
else
{
    var bts=document.getElementById("add-button").style.display="block"
    const buttons = document.querySelectorAll('.del-train');
    buttons.forEach(button => {
        button.disabled = false; // Enable each button
    });
}



search.addEventListener("change",function(){
    var s=(search.value)
    if(s=="name")
    {
        document.getElementById("Train-name").style.display="inline"
        document.getElementById("Train-no").style.display="none"
        document.getElementById("From").style.display="none"
        document.getElementById("To").style.display="none"
    }  
    else if(s=="number")
    {
        document.getElementById("Train-name").style.display="none"
        document.getElementById("Train-no").style.display="inline"
        document.getElementById("From").style.display="none"
        document.getElementById("To").style.display="none"
    }
    else if(s=="from")
    {
        document.getElementById("Train-name").style.display="none"
        document.getElementById("Train-no").style.display="none"
        document.getElementById("From").style.display="inline"
        document.getElementById("To").style.display="none"
    }
    else if(s=="to")
    {
        document.getElementById("Train-name").style.display="none"
        document.getElementById("Train-no").style.display="none"
        document.getElementById("From").style.display="none"
        document.getElementById("To").style.display="inline"
    }
    else
    {
        document.getElementById("Train-name").style.display="none"
        document.getElementById("Train-no").style.display="none"
        document.getElementById("From").style.display="none"
        document.getElementById("To").style.display="none"
    }
})

function closeoverlay(event)
{
    event.target.parentElement.parentElement.style.display="none"
}



function showoverlay(event)
{
    var over=document.getElementsByClassName("overlay")[0]
    over.style.display="block"
}

function addtrain(){
    var row=document.createElement("div")
    row.setAttribute("class","list-entry")
    
    var p1=document.createElement("p")
    p1.setAttribute("class","one")
    p1.textContent=document.getElementById("newname").value

    var p2=document.createElement("p")
    p2.setAttribute("class","two")
    p2.textContent=document.getElementById("newnumber").value


    var p3=document.createElement("p")
    p3.setAttribute("class","three")
    p3.textContent=document.getElementById("newfrom").value

    var p4=document.createElement("p")
    p4.setAttribute("class","four")
    p4.textContent=document.getElementById("newto").value

    var p5=document.createElement("p")
    p5.textContent=document.getElementById("newplat").value

    var p6=document.createElement("p")
    p6.textContent=document.getElementById("newavail").value
    // p6.setAttribute("onclick","book(event)")
    p6.setAttribute("class","avail-seat")
    

    var p7=document.createElement("p")
    p7.innerHTML=`<button class="del-train" onclick="deltrain(event)">Delete</button>`
    if(p1.textContent && p2.textContent && p3.textContent && p4.textContent && p5.textContent && p6.textContent)
    {
        row.append(p1)
        row.append(p2)
        row.append(p3)
        row.append(p4)
        row.append(p5)
        row.append(p6)
        row.append(p7)
    document.querySelector(".list").append(row)
    console.log(row)
    document.getElementById("form").reset()
    }
}

function deltrain(event){
    event.target.parentElement.parentElement.remove()
}

function searches(event){
    var se
    switch(event.target.id){
        case "Train-name":
            se="one"
            break
        case "Train-no":
            se="two"
            break
        case "From":
            se="three"
            break
        case "To":
            se="four"
            break
    }
    var chk=document.getElementsByClassName(se)
    for(var i=0;i<chk.length;i++)
    {
        if(chk[i].textContent.toUpperCase().indexOf(event.target.value.toUpperCase())<0)
            chk[i].parentElement.style.display="none"
       else 
        chk[i].parentElement.style.display="flex"
    }
    
}
var num
var need
var x
function book(event){
    var old=event.target.textContent
    x=event.target
    num = parseInt(old,10)
    document.getElementById("overlay2").style.display="block"
    // cnfrm()
}

function cnfrm(event)
{
    need=parseInt(document.getElementById("tkt-need").value,10)
    if(need>num){
        alert("Insufiicient Tickets")
        document.getElementById("tkt-need").value=""
    }
    else if(!Number.isNaN(need)){
        x.textContent=(num-need)
        console.log(x.textContent)
        document.getElementById("tkt-need").value=""
        document.getElementById("success").style.display="block"
        setTimeout(() => {
            document.getElementById("success").style.display="none"
            
        }, 2000);
        closeoverlay2(event)
    }
    
}


function closeoverlay2(event)
{
    event.target.parentElement.parentElement.style.display="none"
}

function subtkt()
{
    var val=parseInt(document.getElementById("tkt-need").value,10)
    if(val>1)
    {
    document.getElementById("tkt-need").value=val-1
    }
}
function addtkt()
{
    var val=parseInt(document.getElementById("tkt-need").value,10)
    if(val<num)
    {
    document.getElementById("tkt-need").value=val+1
    }
}

function logout()
{
    window.location.href="login.html"
}
