let phnNo

let count = () => {
    phnNo = document.querySelector("#input").value;
    let btn = document.getElementById("continue")
    if (phnNo.length == 10) {        
        btn.style.background = "#1cb1cd";
        localStorage.setItem("phnNo",phnNo)
    }
    else {
        btn.style.background = "";
    }
}

function otp() {
    location.href = "otp.html"
}