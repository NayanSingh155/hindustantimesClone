import { navbar ,hambarger} from "../component/navbar.js";

document.getElementById("main-navbar").innerHTML=navbar();

document.getElementById("hambarger").innerHTML=hambarger()

document.getElementById("navbar-left-hambargur").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
    explore.style.display="block";
})
document.getElementById("hambarger-top-wrong").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
    explore.style.display="none";
})