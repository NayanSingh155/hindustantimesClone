
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
                        <a href="Search.html"> <span>Search</span></a></div>
            </div>
            <div id="navbar-left-bottom" style="color: white;">Tueday,May 03,2022| New Delhi 31 C</div>
        </div>
        <div id="navbar-mid"><a href="index.html"><img id="navbar-img" src="https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg" style="  height: 50px;"  alt=""></a></div>
        <div id="navbar-right">
            <div id="navbar-right-top">
               <div id="navbar-right-game">
                <span class="material-symbols-outlined">
                    stadia_controller
                    </span>   <a href="#"> <span>Game</span></a></div>
               <div id="navbar-right-epage">
                <span class="material-symbols-outlined">
                    newspaper
                    </span>   <a href="e-page.html"> <span>E-Papar</span></a></div>
               <div id="navbar-right-login">
                <span class="material-symbols-outlined">
                    person
                    </span>   <a href="/login/login.html" id="sign-in-account"><span id="sign-in-account">Sign in</span></a></div>
            </div>
            <a href="/subscirbe/subscribe.html"><div id="navbar-right-bottom" style="color: white; text-align: end;">Start 15 Days Free Trial <button id="subscribe">Subscribe</button></div></a>
        </div>
    </div>
   
</div>
<div id="navbar-bottom">
    <ul id="ul-bottom">
        <li><a id="Home" href="index.html">Home</a></li>
        <li><a id="Latest" href="latest.html">Latest</a></li>
        <li><a id="India" href="india.html">India</a></li>
        <li><a id="World" href="World.html">World</a></li>
        <li><a id="Cities" href="Cities.html">Cities</a></li>
        <li><a id="Entertainment" href="Entertainment.html">Entertainment</a></li>
        <li><a id="Cricket" href="cricket.html">Cricket</a></li>
        <li><a id="Lifestyle" href="Lifestyle.html">Lifestyle</a></li>
        <li><a id="Astrology" href="Astrology.html">Astrology</a></li>
        <li><a id="Editorials" href="Editorials.html">Editorials</a></li>
        <li><a  href="#">For You</a></li>
        <li><a id="Saved" href="saved.html">Saved</a></li>
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
           <span id="loction">New Delhi 37 C</span><br><span id="dayTime"></span>
        </div>
        <div id="hambarger-top-wrong">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <hr style="border: 0.5px solid ;">
    </div>
    <div id="hambarger-bottom">
        <div id="hamberger-option">
            <a href="index.html">Home</a>
            <a href="india.html">India News</a>
         
            <div id="option-menu-Entertainment">
            <div class="option-menu" >
            <div class="option-menu-name">Entertainment</div>
            <div class="option-menu-icon" id="option-menu-Entertainment-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-Entertainment">
            <div class="choose-icon">
                <div class="choose-left">Entertainment</div>
                <div class="choose-right" id="choose-Entertainment-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="newsData.html">Bollywood</a></li>
                <li><a href="newsData.html">Tv</a></li>
                <li><a href="newsData.html">Web Series</a></li>
                <li><a href="newsData.html">Hollywood</a></li>
                <li><a href="newsData.html">Tamil Cinema</a></li>
            </ul>
        </div>
            
            <div id="option-menu-IPL">
            <div class="option-menu" >
            <div class="option-menu-name">IPL 2022</div>
            <div class="option-menu-icon" id="option-menu-IPL-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-IPL">
            <div class="choose-icon">
                <div class="choose-left">IPL 2022</div>
                <div class="choose-right" id="choose-IPL-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="Astrology.html">Overview</a></li>
                <li><a href="Astrology.html">News</a></li>
                <li><a href="Astrology.html">Point Table</a></li>
                <li><a href="Astrology.html">Schedule</a></li>
                <li><a href="Astrology.html">Teams</a></li>
                <li><a href="Astrology.html">Results</a></li>
            </ul>
        </div>
            
            <div id="option-menu-Election">
            <div class="option-menu" >
            <div class="option-menu-name">Election</div>
            <div class="option-menu-icon" id="option-menu-Election-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-Election">
            <div class="choose-icon">
                <div class="choose-left">Election</div>
                <div class="choose-right" id="choose-Election-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="Cities.html">Uttar Pradesh</a></li>
                <li><a href="Cities.html">Punjab</a></li>
                <li><a href="Cities.html">Uttarakhand</a></li>
                <li><a href="Cities.html">Goa</a></li>
                <li><a href="Cities.html">Manipur</a></li>
                <li><a href="Cities.html">Delhi</a></li>
            </ul>
        </div>

            <div id="option-menu-cities">
            <div class="option-menu" >
            <div class="option-menu-name">Cities</div>
            <div class="option-menu-icon" id="option-menu-cities-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-cities">
            <div class="choose-icon">
                <div class="choose-left">Cities</div>
                <div class="choose-right" id="choose-cities-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="Cities.html">Delhi</a></li>
                <li><a href="Cities.html">Pune</a></li>
                <li><a href="Cities.html">Goa</a></li>
                <li><a href="Cities.html">Patna</a></li>
                <li><a href="Cities.html">Shri Nager</a></li>
            </ul>
        </div>
            <a href="World.html">World News</a>
            <a href="Lifestyle.html">Lifestyle</a>
            <a href="#">Trending</a>
           
            
            <div id="option-menu-Education">
            <div class="option-menu" >
            <div class="option-menu-name">Education</div>
            <div class="option-menu-icon" id="option-menu-Education-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-Education">
            <div class="choose-icon">
                <div class="choose-left">Education</div>
                <div class="choose-right" id="choose-Education-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="Editorials.html">Exam Results</a></li>
                <li><a href="Editorials.html">Competitive Exams</a></li>
                <li><a href="Editorials.html">Board Exams</a></li>
                <li><a href="Editorials.html">Admission News</a></li>
                <li><a href="Editorials.html">Employement news</a></li>
              
            </ul>
        </div>
         
            <div id="option-menu-Astrology">
            <div class="option-menu" >
            <div class="option-menu-name">Astrology</div>
            <div class="option-menu-icon" id="option-menu-Astrology-icon" style="color: white;"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        </div>
            <div class="hamberger-choose" id="choose-Astrology">
            <div class="choose-icon">
                <div class="choose-left">Astrology</div>
                <div class="choose-right" id="choose-Astrology-icon" style="color: #00b1cd;" ><i class="fa-solid fa-angle-up"></i></div>
            </div>
            <ul class="choose-down-bar">
                <li><a href="Astrology.html">Heroscop</a></li>
                <li><a href="Astrology.html">Festive Calender 2022</a></li>
                <li><a href="Astrology.html">Compatibility Calculator</a></li>
            
              
            </ul>
        </div>
            <a href="#">Opinion</a>
            <a href="#">Analysis</a>
            <a href="#">Video</a>
            <a href="#">photo</a>
            <a href="#">Sport</a>
            <a href="#">Web Stories</a>
            <a href="Lifestyle.html">Business</a>
            <a href="#">Opinion</a>
            <a href="#">Analysis</a>
            <a href="#">Video</a>
            <a href="#">photo</a>
            <a href="#">photo</a>
           
            <a href="#">Web Stories</a>
           
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

function signhambarger(){
    return ` <div id="sign-hambarger-top">
    <div id="sign-hambarger-cross">
        <div><i class="fa-solid fa-xmark"></i></div>
    </div>
    <div id="sign-hambarger-profile">
        <i class="fa-solid fa-circle-user"></i>
        <h1>Reader</h1>
        <h3>165164526@htdigital.sso</h3>
        <button>Edit Profile</button>
    </div>
</div>
<div id="sign-hambarger-bottom">
    <div><a href="saved.html">Saved Articles</a> </div>
    <div>         <a href="#">Following</a> </div>
    <div>         <a href="#">My Reads</a> </div>
    <div>         <a href="index.html" id="sign-out">Sign out</a> </div>
</div>`
}



function fotter(){
    return `
    
    <!-- inside footer two div are present upper and lower -->
    <div id="upper_fotter">
        <!-- on upper footer one is subscribe div another is containing table in which all a tag are present-->
        <div id="subscribe">

            <div id="subscribe_logo">
              <img src="https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg" alt="">

               <img src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg">
            </div> <!-- subscribe_logo end-->

            <div id="subscribe_input">
                <div id="subscribe_by_input">
                    <label id="newsletter">Subscribe to our best newsletter</label><br>
                    <select name="" id="fotter_select">
                        <option value="">HT Daily Capsule</option>
                        <option value="">@HT_Ed Calling</option>
                        <option value="">HT Wknd</option>
                        <option value=""> HT Week Ahead</option>
                        <option value="">HT Capital Letter</option>
                        <option value="">Wired Wisdom</option>
                        <option value="">HT City</option>
                        <option value=""> HT Mind the Gap</option>
                        <option value="">HT Kick off</option>
                    </select>
                    <input type="text" placeholder="Enter  Email Address" id="fotter_input">
                    <button id="fotter_button">Subscribe</button>
                    </div><!-- subscribe_by_input   end-->
                    
                        
                    <div class="subscribe__social">
                        <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" alt=""></div>
                        <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" alt=""></div>
                        <div><img src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg" alt=""></div>
                        <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" alt=""></div>
                    </div> <!-- subscribe_by_social   end-->
                
                
                </div> <!-- subscribe_input   end-->

            </div> <!-- subscribe   end-->
           <div class="fotter_a_tags">
               <ul>
                   <li id="fotter_mid_head"><a href="#">LATEST NEWS</a></li>
                   <li id="fotter_mid_head"><a href="#">INDIA NEWS</a></li>
                   <li id="fotter_mid_head"><a href="#">CRICKET</a></li>
                   <li id="fotter_mid_head"><a href="#">CITY NEWS</a></li>
                    <li><a href="#">Bengaluru</a></li>
                     <li><a href="#">Bhopal</a></li>
                     <li><a href="#">Chandigarh</a></li>
                     <li><a href="#">Dehradun</a></li>
                     <li><a href="#">Delhi</a></li>
                     <li><a href="#">Gurugram</a></li>
                     <li><a href="#">Indore</a></li>
                     <li><a href="#">Jaipur</a></li>
                     <li><a href="#">Kolkata</a></li>
                     <li><a href="#">Lucknow</a></li>
                     <li><a href="#">Mumbai</a></li>
                     <li><a href="#">Noida</a></li>
                     <li><a href="#">Patna</a></li>
                     <li><a href="#">Pune</a></li>
               
               
                </ul>   <!--line 1  -->
               <ul>
               <li><a href="#">Ranchi</a></li>
               <li><a href="#">Other</a></li>
               <li id="fotter_mid_head"><a href="#">ENTERTAINMENT</a></li>
               <li><a href="#">Bollywood</a></li>
               <li><a href="#">Hollywood</a></li>
               <li><a href="#">Music</a></li>
               <li><a href="#">Tamil Cinema</a></li>
               <li><a href="#">Telagu Cinema</a></li>
               <li><a href="#">TV</a></li>
               <li><a href="#">Web Stories</a></li>
               <li><a href="#">Other</a></li>
               <li id="fotter_mid_head"><a href="#">ASTROLOGY</a></li>
               <li><a href="#">Horoscope</a></li>
               <li><a href="#">Vastu</a></li>
               <li><a href="#">Gemstones</a></li>
               <li><a href="#">Panchang Today</a></li>
               <li><a href="#">Compatibility Calculator</a></li>
               <li><a href="#">Your Fortune Today</a></li>
               

               </ul>  <!--  line2-->
               <ul>
                <li id="fotter_mid_head"><a href="#">EDUCATION</a></li>
                <li><a href="#">Admission News</a></li>
                <li><a href="#">Board Exams</a></li>
                <li><a href="#">Competitive Exams</a></li>
                <li><a href="#">Employment News</a></li>
                <li><a href="#">Exam Results</a></li>
                <li><a href="#">Education News</a></li>
                <li id="fotter_mid_head"><a href="#">LIFESTYLE</a></li>
                <li><a href="#">Art and Culture</a></li>
                <li><a href="#">Brunch</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Festivals</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Relationship</a></li>
                <li><a href="#">Travel</a></li>
                <li id="fotter_mid_head"><a href="#">WEB STORIES</a></li>
                <li id="fotter_mid_head"><a href="#">TRENDING</a></li>
               </ul>  <!--  line3-->
               <ul>
                <li id="fotter_mid_head"><a href="#">BUSINESS</a></li>
                <li id="fotter_mid_head"><a href="#">PHOTOS</a></li>
                <li id="fotter_mid_head"><a href="#">VIDEOS</a></li>
                <li id="fotter_mid_head"><a href="#">BUDGET</a></li>
                <li id="fotter_mid_head"><a href="#">ENVIRONMENT</a></li>
                <li id="fotter_mid_head"><a href="#">SCIENCE</a></li>
                <li id="fotter_mid_head"><a href="#">OPINION</a></li>
                <li id="fotter_mid_head"><a href="#">EDITORIALS</a></li>
                <li id="fotter_mid_head"><a href="#">SPORTS</a></li>
                <LI><a href="#">Badminton</a></LI>
                <li><a href="#">Football</a></li>
                <li><a href="#">Hockey</a></li>
                <li><a href="#">Tennis</a></li>
                <li><a href="#">Others</a></li>
                <li id="fotter_mid_head"><a href="#">BOOKS</a></li>
                <li id="fotter_mid_head"><a href="#">HT INSIGHT</a></li>
                <li id="fotter_mid_head"><a href="#">HT WEEKEND</a></li>
                <li id="fotter_mid_head"><a href="#">BRAND POST</a></li>
               </ul>  <!--  line4-->
               <ul>
                   <li id="fotter_mid_head"><a href="#">BRAND STORIES</a></li>
                   <li id="fotter_mid_head"><a href="#">ELECTION</a></li>
                   <li><a href="#">Uttar Pradesh Assembly Election</a></li>
                   <li><a href="#">Punjab Assembly Election</a></li>
                   <li><a href="#">Goa Assembly Election</a></li>
                   <li><a href="#">Utterakhand Assembly Election</a></li>
                   <li><a href="#">Manipur Assembly Election</a></li>
                   <li id="fotter_mid_head"><a href="#">QUICKREADS</a></li>
                    <li id="fotter_mid_head"><a href="#">COVID 19</a></li>
                    <li id="fotter_mid_head"><a href="#">OMICRON</a></li>
                    <li id="fotter_mid_head"><a href="#">ASSEMBLY ELECTION</a></li>
                    <LI id="fotter_mid_head"><a href="#">GAMES</a></LI>
                    <li><a href="#">Daily Sudoku</a></li>
                    <li><a href="#">Daily Crossword</a></li>
                    <li><a href="#">Daily Word Jumble</a></li>
                    <li id = "fotter_mid_head"><a href="#">QUIZ</a></li>

               </ul>  <!--  line5-->
               <ul>
              <li id="fotter_mid_head"><a href="#">TRENDING NEWS</a></li>
              <li><a href="#">India Covid Cases</a></li>
              <li><a href="#">Russia Ukraine War Live</a></li>
              <li><a href="#">Horoscope Today</a></li>
              <li><a href="#">PM Narendra Modi in Europe Live updates</a></li>
              <li><a href="#">Eid Mubarak 2022</a></li>
              <li><a href="#">Runway 34 box office collection</a></li>
              <li><a href="#">IPL 2022 Live Score,GT vs RCB</a></li>
              <li id="fotter_mid_head"><a href="#">TRENDING TOPICS</a></li>
              <li><a href="#">IPL 2022</a></li>
              <li><a href="#">Russia Ukraine Crisis</a></li>
              <li><a href="#">Petrol Prices</a></li>
              <li><a href="#">Today Horoscope</a></li>
              <li><a href="#">Ukraine</a></li>
              <li><a href="#">Russia</a></li>
               </ul>  <!--  line6-->
           </div>
        </div> <!-- upperfotter   end-->

       
  
    <div id="lower_fotter">
   <div id="lower_fotter_a">
       <ul> <li id="lower_fotter_head"><a href="">About Us</a></li>
        <li id="lower_fotter_head"><a href="">Subscription</a></li></ul>

        <ul>
            <li id="lower_fotter_head"><a href="">Contact Us</a></li>
        <li id="lower_fotter_head"><a href="">Disclaimer</a></li>
        </ul>

        <ul>
            <li id="lower_fotter_head"><a href="">Terms Of Use</a></li>
        <li id="lower_fotter_head"><a href="">Print Ad Rates</a></li>
        </ul>

        <ul>
            <li id="lower_fotter_head"><a href="">Privacy Policy</a></li>
        <li id="lower_fotter_head"><a href="">Code Of Ethics</a></li>
        </ul>
        <ul>
            <li id="lower_fotter_head"><a href="">Weather Today</a></li>
        <li id="lower_fotter_head"><a href="">Site Map</a></li>
        </ul>

        <ul>
            <li id="lower_fotter_head"><a href="">HT Newsletters</a></li>
        <li id="lower_fotter_head"><a href="">RSS Feeds</a></li>
        </ul>

   </div><!-- lower_fotter_a end -->
  <div id="lower_fotter_logo">
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-logo.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HH-logo.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tech.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-bangla.svg" alt=""></div>
    <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/healthshots.png" alt=""></div>
     <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/OTT-icon.png" alt=""></div>
     <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/slurrp-icon.svg" alt=""></div>
     <div><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/smartcast-logo.png" alt=""></div>
    </div> <!-- lower fotter_logo end-->
    <p>© 2022 HindustanTimes</p>

    </div><!-- lower_fotter  End -->`
}


export {navbar,hambarger,signhambarger,fotter}