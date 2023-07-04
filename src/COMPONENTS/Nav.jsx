
import { Link } from 'react-router-dom'
import x from './nav.module.css'


const Nav = () => {




    return (
        <div>
            <nav className={x.navbar}>

                <div className={x.nav}>



                    <div className={x.box}>
                        <Link to="/shirt">
                            <img src={require('./images/shirtss.png')} alt="" />
                            <small>Shirts</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/pants">
                            <img src={require('./images/pants.png')} alt="" />
                            <small>Pants</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/tshirts">
                            <img src={require('./images/tshirtss.png')} alt="" />
                            <small>TShirts</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/hoodies">
                            <img src={require('./images/hoodies.png')} alt="" />
                            <small>Hoodies</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/seppals">
                            <img src={require('./images/seppals.png')} alt="" />
                            <small>Seppals</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/jeans">
                            <img src={require('./images/jeanss.png')} alt="" />
                            <small>Jeans</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/jackets">
                            <img src={require('./images/jacketss.png')} alt="" />
                            <small>Jackets</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/caps">
                            <img src={require('./images/caps.png')} alt="" />
                            <small>Caps</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/shous">
                            <img src={require('./images/shouss.png')} alt="" />
                            <small>Shous</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/accsories    ">
                            <img src={require('./images/accsories.png')} alt="" />
                            <small>Accsories</small>
                        </Link>
                    </div>
                    <div className={x.box}>
                        <Link to="/innerwear">
                            <img src={require('./images/innerwear.png')} alt="" />
                            <small>Innerwear</small>
                        </Link>
                    </div>
            

                </div>

            </nav>
        </div>
    )
}

export default Nav