import { navbar ,hambarger,signhambarger,fotter} from "../component/navbar.js";

document.getElementById("main-navbar").innerHTML=navbar();

document.getElementById("hambarger").innerHTML=hambarger();

document.getElementById("sign-hamberger").innerHTML=signhambarger();
document.getElementById("fotter").innerHTML=fotter();
document.getElementById("navbar-left-hambargur").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
    explore.style.display="block";
})
document.getElementById("hambarger-top-wrong").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
    explore.style.display="none";
})

document.getElementById("sign-hambarger-cross").addEventListener("click",function(){
    let signHambarger=document.getElementById("sign-hamberger")
    signHambarger.style.display="none"
})