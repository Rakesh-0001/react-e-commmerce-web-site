import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import x from "./section5.module.css"

const Section5 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 850 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 850, min: 560 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 560, min: 280 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 280, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className={x.sectionmain}>
                <div className={x.sectionmain1}>



                    <div className={x.sec1}>
                        <div className={x.box}>

                            <div className={x.text}>
                                <h1>BEST OF ACCSORIES</h1>
                            </div>
                            <button className={x.boxbtn} >SHOW ALL</button>
                            <div className={x.photo}>
                                <img src={require('./images/shirts.png')} alt="" />

                            </div>

                        </div>

                    </div>

                    <div className={x.sec2}>

                        <Carousel responsive={responsive} className={x.seccontent}>

                            <div className={x.box}>


                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/bangle-bracelet-armlet/l/f/s/free-freee-na-1-kd06-1-king-of-world-fashion-original-imagprkuhefr4kvr.jpeg?q=70" alt="" />
                                    <p>Corten shirt</p>
                                    <small>$650</small>
                                



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/k6l2vm80/suspender/s/8/n/maxx-3-bhh92-sunshopping-original-imafpyu8thyu566y.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/wallet-card-wallet/f/s/1/vertical-bifold-wallet-rfid-protected-top-grain-leather-compact-original-imagzh23restkp7e.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/necklace-chain/y/k/9/1-vbj-006-chain-vita-bella-original-imagzhdxngezhhyx.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/kklhbbk0/scarf/7/r/a/l-arafat-doby-men-s-scarf-black-and-cream-javinishka-original-imafzwm4whpqkmdr.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/l16rde80/belt/p/j/v/44-mens-black-casual-original-genuine-leather-belt-original-imagcswwfrephesu.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/watch/t/i/u/pe000017d-peter-england-original-imafwgb7w9cbyumh.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>




                        </Carousel>;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5