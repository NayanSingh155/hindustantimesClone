let p=document.getElementById("count")
let i=30
let id=setInterval(function(){
    if(i==0)
    {
       
       clearInterval(id)
    
        
    }
    p.innerText="0."+i
    i--
  
},1000)

setTimeout(function(){

   alert("otp 123456")
},6000)
//   if(i=25)
//   {

//       clearInterval(id)
//   }
function btnfun(){
window.location.href="password.html"
}