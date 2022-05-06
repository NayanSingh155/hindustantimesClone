import { navbar ,hambarger,signhambarger,fotter} from "../component/navbar.js";


document.getElementById("main-navbar").innerHTML=navbar();
let loginkey=JSON.parse(localStorage.getItem("keys"))||[]
// let login=document.getElementById("sign-in-account").innerText
// console.log(login)
if(loginkey.length!=0){
  let login=document.getElementById("sign-in-account")
      login.innerText="My Account"
      login.addEventListener("click",function(){
        login.href="#"
        let signHambarger=document.getElementById("sign-hamberger")
        signHambarger.style.display="block"
        let blur=document.querySelector(".blackOverlay")
    blur.style.display="block";

      })
}


document.getElementById("hambarger").innerHTML=hambarger();

document.getElementById("sign-hamberger").innerHTML=signhambarger();
document.getElementById("fotter").innerHTML=fotter();
document.getElementById("navbar-left-hambargur").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
  let blur=document.querySelector(".blackOverlay")
    explore.style.display="block";
    blur.style.display="block";
})
document.getElementById("hambarger-top-wrong").addEventListener("click",function(){
  let  explore=document.getElementById("hambarger")
  let blur=document.querySelector(".blackOverlay")
    explore.style.display="none";
    blur.style.display="none";
})

document.getElementById("sign-hambarger-cross").addEventListener("click",function(){
    let signHambarger=document.getElementById("sign-hamberger")
    signHambarger.style.display="none"
    let blur=document.querySelector(".blackOverlay")
    blur.style.display="none";
})


document.getElementById("option-menu-cities-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-cities")
  let blur=document.querySelector("#choose-cities")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-cities-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-cities")
  let blur=document.querySelector("#choose-cities")
    explore.style.display="block";
    blur.style.display="none";
})

document.getElementById("option-menu-Entertainment-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Entertainment")
  let blur=document.querySelector("#choose-Entertainment")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-Entertainment-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Entertainment")
  let blur=document.querySelector("#choose-Entertainment")
    explore.style.display="block";
    blur.style.display="none";
})


document.getElementById("option-menu-IPL-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-IPL")
  let blur=document.querySelector("#choose-IPL")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-IPL-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-IPL")
  let blur=document.querySelector("#choose-IPL")
    explore.style.display="block";
    blur.style.display="none";
})

document.getElementById("option-menu-Election-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Election")
  let blur=document.querySelector("#choose-Election")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-Election-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Election")
  let blur=document.querySelector("#choose-Election")
    explore.style.display="block";
    blur.style.display="none";
})


document.getElementById("option-menu-Astrology-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Astrology")
  let blur=document.querySelector("#choose-Astrology")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-Astrology-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Astrology")
  let blur=document.querySelector("#choose-Astrology")
    explore.style.display="block";
    blur.style.display="none";
})

document.getElementById("option-menu-Education-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Education")
  let blur=document.querySelector("#choose-Education")
    explore.style.display="none";
    blur.style.display="block";
})
document.getElementById("choose-Education-icon").addEventListener("click",function(){
  let  explore=document.getElementById("option-menu-Education")
  let blur=document.querySelector("#choose-Education")
    explore.style.display="block";
    blur.style.display="none";
})

document.getElementById("sign-out").addEventListener("click",function(){
 
  let    loginkey=[]
        localStorage.setItem("keys",JSON.stringify(loginkey))

})





// .........f?otter............


async function search() {
  // console.log("hii");
  try {
      let me = "latest";
      let URL = `https://ndtvnews-api.herokuapp.com/general?category=values(${me})&field=values(headline,posted_date,description,url,image_url)`;
      const res = await fetch(URL);
      // console.log(res)
      const data = await res.json()

      console.log(data.news[0].articles)
      const Data=data.news[0].articles

      appendData(Data)

  } catch (err) {
      console.log(err)
  }
}

search()

function appendData(data){

  data.forEach(el => {
      const box=document.createElement("div")
      const indiaNews=document.createElement("h2")
      indiaNews.innerText="India News"
      indiaNews.style.color="#00b1cd"

      const headline=document.createElement("h3")
      headline.innerText=el.headline
      headline.setAttribute("class","indiaNews-headline")

      const posted_date=document.createElement("p")
      posted_date.innerText=`Updated ${el.posted_date}`
      box.style.cursor="pointer"
      box.addEventListener("click",function(){
        NewsData(el)
      })

      box.append(indiaNews,headline,posted_date)

      document.getElementById("hindustanNews-letest-top").append(box)





  });
}

async function mainNews() {
  // console.log("hii");
  try {
      let me = "latest";
      let URL = `https://ndtvnews-api.herokuapp.com/general?category=values(${me})&field=values(headline,posted_date,description,url,image_url)`;
      const res = await fetch(URL);
      // console.log(res)
      const data = await res.json()

      console.log(data.news[0].articles)
      const Data=data.news[0].articles

      appendmainNewsData(Data)

  } catch (err) {
      console.log(err)
  }
}

mainNews()

function appendmainNewsData(data){
  let count=0
   data.forEach((el)=>{
   count++
   console.log(count)
   if(count%5==0){
       const mainDav=document.createElement("div")
       mainDav.setAttribute("id","mainDav1")
       const mainDavleft=document.createElement("div")
  
       const mainDavimg=document.createElement("div")
       
       let image_url=document.createElement("img")
       image_url.src=el.image_url
       image_url.setAttribute("id","news-img1")
       mainDavimg.append(image_url)
       const mainDavleftbot=document.createElement("div")
       mainDavleftbot.setAttribute("id","mainDavleftbot")
       const mainDavleftbotleft=document.createElement("div")
       const mainDavleftbotright=document.createElement("div")
       mainDavleftbotright.setAttribute("id","mainDavleftbotright")
       let div=document.createElement("div")
       let itag=document.createElement("i")
       itag.setAttribute("class","fa-regular fa-bookmark")
       let itag1=document.createElement("i")
       itag1.setAttribute("class","fa-solid fa-share-nodes")
       div.append(itag)
       // div.innerHTML=<i class="fa-regular fa-bookmark"></i>
       let count=0
       div.addEventListener("click",function(){
           count++
           if(count%2==1){
           itag.setAttribute("class","fa-solid fa-bookmark")
           savedData(el)
           }else{
               itag.setAttribute("class","fa-regular fa-bookmark")
           }
       })
       let div1=document.createElement("div")
       // div1.innerHTML=<i class="fa-solid fa-share-nodes"></i>
       div1.append(itag1)
       const indiaNews=document.createElement("h2")
       indiaNews.innerText="latest News"
       indiaNews.style.color="#00b1cd"

       const headline=document.createElement("h3")
       headline.innerText=el.headline
     
       

       const posted_date=document.createElement("p")
       posted_date.innerText=`Updated ${el.posted_date}`
       mainDavleftbotright.append(div1,div)
       mainDavleftbot.append(mainDavleftbotleft,mainDavleftbotright)
       mainDavleftbotleft.append(posted_date)
       mainDavimg.style.cursor="pointer"
       mainDavimg.addEventListener("click",function(){
        NewsData(el)
    })
       
       mainDavleft.append(indiaNews,headline,mainDavimg,mainDavleftbot)
       mainDav.append(mainDavleft)

       document.getElementById("hidustanNews-mainNews-box").append(mainDav)







   }else if(count%5!=0){
     

       const mainDav=document.createElement("div")
       mainDav.setAttribute("id","mainDav")
       const mainDavleft=document.createElement("div")
  
       const mainDavimg=document.createElement("div")
       let image_url=document.createElement("img")
       image_url.src=el.image_url
       image_url.setAttribute("id","news-img")
       mainDavimg.append(image_url)
       const mainDavleftbot=document.createElement("div")
       mainDavleftbot.setAttribute("id","mainDavleftbot")
       const mainDavleftbotleft=document.createElement("div")
       const mainDavleftbotright=document.createElement("div")
       mainDavleftbotright.setAttribute("id","mainDavleftbotright")
       let div=document.createElement("div")
       let itag=document.createElement("i")
       itag.setAttribute("class","fa-regular fa-bookmark")
       let itag1=document.createElement("i")
       itag1.setAttribute("class","fa-solid fa-share-nodes")
       div.append(itag)
       // div.innerHTML=<i class="fa-regular fa-bookmark"></i>
       let count=0
       div.addEventListener("click",function(){
           count++
           if(count%2==1){
           itag.setAttribute("class","fa-solid fa-bookmark")
           savedData(el)
           }else{
               itag.setAttribute("class","fa-regular fa-bookmark")
           }
       })
       let div1=document.createElement("div")
       // div1.innerHTML=<i class="fa-solid fa-share-nodes"></i>
       div1.append(itag1)
       const indiaNews=document.createElement("h2")
       indiaNews.innerText="Latest News"
       indiaNews.style.color="#00b1cd"

       const headline=document.createElement("h3")
       headline.innerText=el.headline
     
       

       const posted_date=document.createElement("p")
       posted_date.innerText=`Updated ${el.posted_date}`
       mainDavleftbotright.append(div1,div)
       mainDavleftbot.append(mainDavleftbotleft,mainDavleftbotright)
       mainDavleftbotleft.append(posted_date)
       mainDavleft.append(indiaNews,headline,mainDavleftbot)
       mainDav.append(mainDavleft,mainDavimg)
       mainDavimg.style.cursor="pointer"
       mainDavimg.addEventListener("click",function(){
        NewsData(el)
    })

       document.getElementById("hidustanNews-mainNews-box").append(mainDav)
   }


   })
}
let savedlocalData=JSON.parse(localStorage.getItem("saved"))||[]
function savedData(el){
   
   savedlocalData.push(el)
   localStorage.setItem("saved",JSON.stringify(savedlocalData))
}

async function newsads() {
  // console.log("hii");
  try {
      let me = "badminton";
      let URL = `https://ndtvnews-api.herokuapp.com/sports?sport=values(${me})&field=values(headline,posted_date,description,url,image_url)`;
      const res = await fetch(URL);
      // console.log(res)
      const data = await res.json()

      console.log(data.news[0].articles)
      const Data=data.news[0].articles

      appendnewsadsData(Data)

  } catch (err) {
      console.log(err)
  }
}

newsads()

function appendnewsadsData(data){

  data.forEach(el => {
      const box=document.createElement("div")
      const indiaNews=document.createElement("h2")
      indiaNews.innerText="Badminton News"
      indiaNews.style.color="#00b1cd"

      const headline=document.createElement("h3")
      headline.innerText=el.headline
      headline.setAttribute("class","indiaNews-headline")

      const image_url=document.createElement("div")
      const imgurl=document.createElement("img")
      imgurl.src=el.image_url
      imgurl.setAttribute("id","vedi")
      image_url.append(imgurl)
      // console.log(el.url)

      const posted_date=document.createElement("p")
      posted_date.innerText=`Updated ${el.posted_date}`
      box.style.cursor="pointer"
      box.addEventListener("click",function(){
        NewsData(el)
      })

      box.append(indiaNews,headline,posted_date,image_url)

      document.getElementById("hindustanNews-ads-box").append(box)





  });
}
function   NewsData(el){
    let arr=[]
    arr.push(el)
    console.log(arr)
    localStorage.setItem("NewsData",JSON.stringify(arr))
    window.location.href="newsData.html"
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'world-clock.p.rapidapi.com',
		'X-RapidAPI-Key': '6c4e218b63mshe664bc990a740a4p172965jsn0dd499ada941'
	}
};

fetch('https://world-clock.p.rapidapi.com/json/utc/now', options)
	.then(response => response.json())
	.then(response => appendTime(response))
	.catch(err => console.error(err));

function appendTime(el){
    console.log(el)
  let  bag=""
    for(let i=0;i<10;i++){
     let x=el.currentDateTime
      bag+=x[i]
    }
   
  
  
      // console.log()
    
    // document.getElementById("loction").innerText=`New Delhi 37 C`
   
    document.getElementById("dayTime").innerText=` ${el.dayOfTheWeek} , ${bag}`
    document.getElementById("navbar-left-bottom").innerText=`${el.dayOfTheWeek} , ${bag} | Asia / India`
  
}

function appendDatatime(data){

  document.getElementById("loction").innerText=`${data.name} 37 C`

}
location1()
function getDatalocaton(lan,log){
  
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${log}&appid=a8a41b67efac430f74a8ffa399317e86`

  fetch(url)
  .then (function(res){
    return res.json()
  })
  .then (function(res){
      console.log(res)
      appendDatatime(res)
      // return res
  })

  .catch(function(err){
      console.log(err)

  })



}


function location1(){
  navigator.geolocation.getCurrentPosition(success);
  
  function success(position){
      var crd = position.coords;
  
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
     getDatalocaton(crd.latitude,crd.longitude)
  }
  }


