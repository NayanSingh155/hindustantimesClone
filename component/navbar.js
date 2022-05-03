
function navbar(){
    return ` <div id="Upper-part-div">
    <div id="navbar">
        <div id="navbar-left">
            <div id="navbar-left-top">
                <div id="navbar-left-hambargur">
                    <span class="material-symbols-outlined">
                        menu
                        </span><span>Explore</span></div>
                <div id="navber-left-search">
                <span class="material-symbols-outlined" style="color: white;">
                        search
                        </span>
                        <a href="#"> <span>Search</span></a></div>
            </div>
            <div id="navbar-left-bottom" style="color: white;">Tueday,May 03,2022| New Delhi 31 C</div>
        </div>
        <div id="navbar-mid"><a href="index.html"><img src="https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg" style="  height: 50px;"  alt=""></a></div>
        <div id="navbar-right">
            <div id="navbar-right-top">
               <div id="navbar-right-game">
                <span class="material-symbols-outlined">
                    stadia_controller
                    </span>   <a href="#"> <span>Game</span></a></div>
               <div id="navbar-right-epage">
                <span class="material-symbols-outlined">
                    newspaper
                    </span>   <a href="#"> <span>E-Papar</span></a></div>
               <div id="navbar-right-login">
                <span class="material-symbols-outlined">
                    person
                    </span>   <a href="#"><span>Sign in</span></a></div>
            </div>
            <div id="navbar-right-bottom" style="color: white; text-align: end;">Start 15 Days Free Trial <button id="subscribe">Subscribe</button></div>
        </div>
    </div>
   
</div>
<div id="navbar-bottom">
    <ul id="ul-bottom">
        <li><a href="index.html">Home</a></li>
        <li><a href="#">Latest</a></li>
        <li><a href="#">India</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Cities</a></li>
        <li><a href="#">Entertainment</a></li>
        <li><a href="#">Cricket</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Astrology</a></li>
        <li><a href="#">Editorials</a></li>
        <li><a href="#">For You</a></li>
        <li><a href="#">Saved</a></li>
    </ul>
</div>`
}

// console.log(navbar())
function hambarger(){
    return`  <div id="hambarger-main-top">
    <div id="hambarger-top">
        <div id="hambarger-top-img">
           <a href="index.html"><img src="https://www.hindustantimes.com/res/images/logo.png" alt=""></a>
        </div>
        <div id="hambarger-top-loction">
            New Delhi 37 C <br> Tuesday,May 03,2022
        </div>
        <div id="hambarger-top-wrong">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <hr style="border: 0.5px solid ;">
    </div>
    <div id="hambarger-bottom">
        <div id="hamberger-option">
            <a href="#">Home</a>
            <a href="#">India News</a>
            <a href="#">Entertainment</a>
            <a href="#">IPL 2022</a>
            <a href="#">Election</a>
            <a href="#">Cities</a>
            <a href="#">World News</a>
            <a href="#">Lifestyle</a>
            <a href="#">Trending</a>
            <a href="#">Education</a>
            <a href="#">Astrology</a>
            <a href="#">Opinion</a>
            <a href="#">Analysis</a>
            <a href="#">Video</a>
            <a href="#">photo</a>
            <a href="#">Sport</a>
            <a href="#">Web Stories</a>
            <a href="#">Business</a>
        </div>
       
        <div id="hambarger-bottom-signIn">
            
<div id="sign-in">
<a href="#">Sign in</a>
</div>

<div id="social-media">

<div id="social-media-facebook"><i class="fa-brands fa-facebook-square"></i></div>
<div id="social-media-twitter"><i class="fa-brands fa-twitter-square"></i></div>
<div id="social-media-linkedin"><i class="fa-brands fa-linkedin"></i></div>
</div>
        </div>
    </div>`
}

export {navbar,hambarger}