
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

export {navbar}