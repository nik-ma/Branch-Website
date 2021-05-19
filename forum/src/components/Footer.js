import React from 'react'
import './Footer.css'

function Footer() {
    
    return (
            <>
            
            <footer class="footer">
                <div class="inner-footer">
                    <div class="social-links">
                       <ul>
                         <li class="social-items1"><a href="https://www.google.com"><i class="fab fa-facebook-f"></i></a></li>
                         <li class="social-items2"><a href="#"><i class="fab fa-twitter-square"></i></a></li>
                         <li class="social-items3"><a href="#"><i class="fab fa-instagram"></i></a></li>
                         <li class="social-items4"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                         <li class="social-items5"><a href="#"><i class="fab fa-youtube"></i></a></li>
                       </ul>
                    </div>
                    <div class="logo">
                       <img src="biet lgo.png" id="image1"></img>
                       
                       <img src="logo.pg" id="image2"></img>
                       
                    </div>
                </div>
               <div class="outer-footer">
                   Copyright &copy; FEE. All Rights Reserved

                   </div> 

            </footer>
        </>
    )
}

export default Footer
