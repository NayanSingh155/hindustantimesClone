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
      let me = "chennai,mumbai,delhi";
      let URL = `https://ndtvnews-api.herokuapp.com/cities?city=values(${me})&field=values(headline,posted_date,description,url,image_url)`;
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
       indiaNews.innerText="Cities News"
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
       indiaNews.innerText="Cities News"
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
      let me = "hockey";
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
      indiaNews.innerText="Hockey News"
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