function container(){
    return `  <div id="hindustanNews">
    <aside id="hindustanNews-letest">
       <div id="hindustanNews-letest-linebar">
        <h2>
            <hr class="hdgTexure">
            <hr class="hdgTexure">
            <hr class="hdgTexure">
            <span class="hdgStyle">
                <span>
                    [
                </span>Top News<span>]</span>
            </span>
        </h2>
      </div>
      <div id="hindustanNews-letest-top">

      </div>

    </aside>
    <section id="hindustanNews-mainNews">
      <div id="hindustanNews-mainNews-linebar">
          <h2>
              <hr class="hindustanNews-mainNews-hdgTexure">
              <hr class="hindustanNews-mainNews-hdgTexure">
              <hr class="hindustanNews-mainNews-hdgTexure">
              <span class="hindustanNews-mainNews-hdgStyle">
                  <span>
                      [
                  </span>Home<span>]</span>
              </span>
          </h2>
        </div>
        <div id="hidustanNews-mainNews-box">

        </div>

    </section>
   
    <aside id="hindustanNews-ads">
       <div id="hindustanNews-ads-linebar">
           <h2>
               <hr class="hindustanNews-ads-hdgTexure">
               <hr class="hindustanNews-ads-hdgTexure">
               <hr class="hindustanNews-ads-hdgTexure">
               <span class="hindustanNews-ads-hdgStyle">
                   <span>
                       [
                   </span>Sports<span>]</span>
               </span>
           </h2>
         </div>
         <div id="hindustanNews-ads-box">

         </div>
    </aside>
  </div>`
}
function paymentPopup(){
    return ` 
    <!--<img src="https://accounts.hindustantimes.com/images/ht/logos/ht-logo2.svg" alt="" id="hindustan">  -->
     
    <Div id="parentContainer">
        
         <div id="leftContainer">


              <div id="left1">
                   <Div class="left1Child left1Child1">
                        <img class="left1Img" src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" alt="cardimg1">
                        <h3 class="cardDetails">Debit/Credit Card</h3>
                   </Div>

                   <div class="left1Child">
                        <img class="left1Img" src="https://images.bewakoof.com/web/Group-1645705428.png" alt="cardimg2">
                        <h3 class="cardDetails">Wallet</h3>
                   </div>

                   <div class="left1Child">
                        <img class="left1Img" src="https://images.bewakoof.com/web/upi-icon-1645705429.png" alt="cardimg3">
                        <h3 class="cardDetails">UPI</h3>
                   </div>

                   <div class="left1Child">
                        <img class="left1Img" src="https://images.bewakoof.com/web/nb-icon-1645705428.png" alt="cardimg4">
                        <h3 class="cardDetails">Net banking</h3>
                   </div>

                   <div class="left1Child">
                        <img class="left1Img" src="https://images.bewakoof.com/web/cod-icon-1645705427.png" alt="cardimg5">
                        <h3 class="cardDetails">Cash On Delivery</h3>
                   </div>
                   <div class="left1Child"></div>
                   

              </div>

              <div id="left2">

                   <div id="formImg">
                        <img class="fImg fImg1" src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg" alt="Form img1">
                        <img class="fImg" src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg" alt="Form img2">
                        <img class="fImg" src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg" alt="Form img3">
                        <img class="fImg" src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg" alt="Form img4">
                   </div>
                   
                   <form>
                        
                        <input type="text" maxlength="14" required id="cardNum" placeholder="Card Number">
                        <div id="cardD">
                             <input id="expiry" type="month" required min="2022-02" value="2022-02">
                             <input type="text" id="ccv" maxlength="3" required placeholder="CVV">
                        </div>
                        
                        
                        <input type="text" id="name"required placeholder="Name On Card">
                        <div id="parentCheckBox">
                             <input type="checkbox" id="checkbox" name="checkbox" value="Save card details for later">
                             <h2 style="font-weight: 300;color: gray;font-size: 20px;">Save card details for later</h2>
                        </div>
                        <h2 style="line-height: 21px; width: 97%;color:#737373;font-size: 18px;font-weight: 400;">This transaction you make is totally secure. We don't save your CVV number.</h2>
                        <br>
                        <br>
                        <input id="payment_confirm" type="submit" value="Pay Now" style="background-color: #00b1cd;border-radius: 10px;">
                   </form>

              </div>

         </div>

         <!-- <div id="rightContainer1">
            <div id="rightContainer">
                  <div id="paymentContainer"></div>
            </div> -->
       `
}

export {container,paymentPopup}