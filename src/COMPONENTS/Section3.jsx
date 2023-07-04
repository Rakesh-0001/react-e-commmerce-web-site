import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import x from "./section5.module.css"

const Section3 = () => {
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
                                <h1>BEST OF T-SHIRTS</h1>
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

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/g/u/2/s-vd-os-100-wntttrth-ws-veirdo-original-imagp8z3cdpkggde.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/p/r/0/l-rz01sangigreen-rodzen-original-imagnhee5zrqyxgw.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/h/d/1/xxl-rz01tiedieblue-rodzen-original-imagmu3zqgvmjm8z.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/j/i/w/s-vd-os-100-enrgy-bk-veirdo-original-imagnju9ghgcasut.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/h/f/z/l-jc23-hd-hs-navy-jmc-pckt-jump-cuts-original-imagmxhgvy3fgxha.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/f/t/i/m-231126-fugazee-original-imagzj9uznbcdr52.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/m/m/p/s-wynk-mustard-hs-smartees-original-imagzf9zgjwtdzzc.jpeg?q=70" alt="" />
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

export default Section3