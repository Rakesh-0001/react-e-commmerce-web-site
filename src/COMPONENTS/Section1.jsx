
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import x from "./section5.module.css"

const Section1 = () => {
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
                                <h1>BEST OF SHIRTS</h1>
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

                                <img src="https://rukminim1.flixcart.com/image/832/832/l5cslu80/shirt/b/s/2/l-c-um0022-cndcreation-original-imaggfu8qvjhhyhg.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/b/3/2/xxl-st10-vebnor-original-imagzdu7azhy9tvf.jpeg?q=70" alt="" />
                                <p>Printed shirt</p>
                                <small>$500</small>


                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/x/m/x/l-shirt-bikit-1-bluecorp-enterprise-original-imaghhu96wws9crz.jpeg?q=70" alt="" />
                                <p>Line shirt</p>
                                <small>$699</small>


                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/w/o/e/l-check1195-tanip-original-image85ekvh7rgue.jpeg?q=70" alt="" />
                                <p>Cheked shirt</p>
                                <small>$750</small>


                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/l1b1oy80/shirt/7/t/t/xl-printed-shirt-n-and-j-original-imagcwh6jedhhnjm.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/k/a/e/l-hlsh014596-highlander-original-imagzjnvvk25e2ng.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/y/j/m/l-hlsh014254-highlander-original-imagmgefjatedy5x.jpeg?q=70" alt="" />
                                <p>Corten shirt</p>
                                <small>$650</small>



                            </div>
                            <div className={x.box}>

                                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/a/b/f/m-den-sng-01-regrowth-original-imaganhqpmxzczqg-bb.jpeg?q=70" alt="" />
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

export default Section1