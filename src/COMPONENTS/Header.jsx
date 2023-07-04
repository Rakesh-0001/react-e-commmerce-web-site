import React, { useEffect, useState } from 'react'
import x from './header.module.css'
import Login from './Login'
import axios from 'axios'


const Header = () => {

    let [show, setshow] = useState(false)


    return (
        <div>

            <header className={x.header}>

                <div className={x.logo}>
                    <img src={require('./images/logo.png')} alt="logo" />
                    <h3>MEN'S WEAR</h3>
                </div>

                <div className={x.searchbar}>

                    <div className={x.search}>
                        <input type="text" placeholder='search item....' />
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>

                </div>

                <div className={x.mainmenu}>

                    <div className={x.selectcountry}>

                        <select >
                            <option> ENG 🌏</option>
                            <option> Tamil</option>
                            <option> French</option>
                            <option> Arabic</option>
                            <option> French</option>
                            <option> Japanese</option>
                            <option> korean</option>
                            <option>Italian</option>
                        </select>
                    </div>

                    <div className={x.aboutme}>

                        <button> <i class="fa-solid fa-user"></i> Account details</button>

                    </div>
                    <div className={x.login}>


                        <button className={x.loginbtn} onClick={() => setshow(true)} > <i class="fa-sharp fa-solid fa-right-to-bracket"></i>Login</button>

                    </div>
                    <div className={x.others}>

                    </div>
                    <div className={x.card}>

                        <button><i class="fa-solid fa-cart-shopping"></i> Cart</button>

                    </div>

                </div>

            </header>

            {show && (

                <Login close={setshow} ></Login>
            )}


        </div>


    )
}

export default Header