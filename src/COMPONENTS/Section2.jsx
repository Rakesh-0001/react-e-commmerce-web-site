import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import x from "./section5.module.css"

const Section2 = () => {
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
                                <h1>BEST OF SHOUS</h1>
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

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/r/v/1/6-na-num278-40-numenzo-white-original-imagz6bzdt5uz9xs.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/h/m/s/6-mrj1943-6-aadi-natural-white-black-original-imagnpm5tnw9ts6u.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/f/v/l/6-g1-827-6-zixer-sky-blue-original-imagph6gphtexzyj.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/kthjy4w0/shoe/n/b/v/9-wnfhc07-wrogn-black-original-imag6tgm8u363ccg.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/x/w/v/7-lbb-b-225-7-labbin-black-white-original-imagzvcsfgrrdnmq.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/ksqeky80/shoe/g/p/u/6-805-red-6-waan-black-red-original-imag68r7vvxrffgw.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/t/u/6-brd-842-6-6-birde-grey-original-imaghynxzvpqvf4c.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/l1dwknk0/shoe/n/f/c/9-brd-648-9-birde-navy-original-imagcyuax3ntezph.jpeg?q=70" alt="" />
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

export default Section2