import React, { useState } from 'react'
import data from '../shirts-api'
import x from "./addshirts.module.css"

const Addshirts = () => {

    let [datas] = useState(data)

    return (
        <div className={x.box}>

            <div className={x.box1}>
                <div className={x.boxs}>

                </div>
                {
                    datas.map((e) => {
                        return (
                            <div className={x.minibox}>
                                <img src={e.img} alt="" />
                                <h3>{e.name}</h3>
                                <span>₹ {e.price}</span>
                                <button>Add-to-cart</button>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Addshirts