import React from 'react'
import './Footer.css'

function Footer() {
    
    return (
        
            <footer class="footer">
                <div class="inner-footer">
                    <div class="social-links">
                       <ul>
                         <li class="social-items"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                         <li class="social-items"><a href="#"><i class="fab fa-twitter-square"></i></a></li>
                         <li class="social-items"><a href="#"><i class="fab fa-instagram"></i></a></li>
                         <li class="social-items"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                       </ul>
                    </div>
                    <div class="logo">
                       <img src="background.jpg" id="image"></img>
                       
                    </div>
                </div>
               <div class="outer-footer">
                   Copyright &copy; FEE. All Rights Reserved

                   </div> 

            </footer>
        
    )
}

export default Footer
