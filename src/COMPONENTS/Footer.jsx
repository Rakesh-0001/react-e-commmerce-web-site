import React from 'react'
import x from "./footer.module.css"

const Footer = () => {
    return (
        <div>
            <footer className={x.foooter}>
                <div className={x.foot}>

                    <div className={x.box1}>
                        <p>ABOUT</p>

                        <li>Contact us</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Stroris</li>
                        <li>Infromation</li>

                    </div>
                    <div className={x.box2}>
                        <p>HELP</p>
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancelling</li>
                        <li>Report</li>
                        <li>Returns</li>

                    </div>

                    <div className={x.box3}>
                        <p>CONSUMER</p>
                        <li>Return policy</li>
                        <li>Terms Of use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Compliance</li>

                    </div>

                    <div className={x.box4}>
                        <p>SOCIL</p>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtupe</li>
                    </div>


                </div>

            </footer>
        </div>
    )
}

export default Footer