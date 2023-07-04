import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import x from "./section5.module.css"

const Section4 = () => {
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
                                <h1>BEST OF HOODIES</h1>
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

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/u/o/b/xl-aw22-zh-m-chk-grbu-campus-sutra-original-imagg2w3xzwgff52.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/kgb5rbk0/sweatshirt/2/d/v/m-urmhoodedttsweatnam1p-urgear-original-imafwktxvesfhtry.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/g/m/l/m-fc6049-fastcolors-original-imaggfhpzcjxm68f.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/u/z/f/l-fc639-fastcolors-original-imagm74fkxebkdgn.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/knxiavk0/sweatshirt/n/l/a/s-men-swt-hoody-trend-gry-dcrooz-original-imag2hyaxeawpcey.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/r/3/8/s-mens-hoody-black-twinklers-original-imagmwbzjtjvfvzs.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/kvo55zk0/sweatshirt/i/o/j/xl-h21-m-tkt-sk-adro-original-imag8ggsttzfd6ej.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/o/i/h/xl-men-hoodie-white-badapes-original-imagjwq99446zdyd.jpeg?q=70" alt="" />
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

export default Section4