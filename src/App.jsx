
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./COMPONENTS/Footer"
import Header from "./COMPONENTS/Header"
import Home from "./COMPONENTS/Home"
import Nav from "./COMPONENTS/Nav"
import Section1 from "./COMPONENTS/Section1"
import Section2 from "./COMPONENTS/Section2"
import Section3 from "./COMPONENTS/Section3"
import Section4 from "./COMPONENTS/Section4"
import Section5 from "./COMPONENTS/Section5"
import Shirts from "./COMPONENTS/Shirts"
import Pants from "./COMPONENTS/Pants"
import Tshirts from "./COMPONENTS/Tshirts"
import Jackets from "./COMPONENTS/Jackets"
import Caps from "./COMPONENTS/Caps"
import Shous from "./COMPONENTS/Shous"
import Seppals from "./COMPONENTS/Seppals"
import Accsories from "./COMPONENTS/Accsories"
import Hoodies from "./COMPONENTS/Hoodies"
import Jeans from "./COMPONENTS/Jeans"
import Innerwear from "./COMPONENTS/Innerwear"
let App = () => {


    return (
        <div>

            <BrowserRouter>
                <Header></Header>
                <Nav></Nav>

                <Routes>
                    
                    <Route path="/shirt" element={<Shirts />}></Route>
                    <Route path="/pants" element={<Pants></Pants>}></Route>
                    <Route path="/tshirts" element={<Tshirts></Tshirts>}></Route>
                    <Route path="/hoodies" element={<Hoodies></Hoodies>}></Route>
                    <Route path="/jeans" element={<Jeans></Jeans>}></Route>
                    <Route path="/jackets" element={<Jackets></Jackets>}></Route>
                    <Route path="/caps" element={<Caps></Caps>}></Route>
                    <Route path="/shous" element={<Shous></Shous>}></Route>
                    <Route path="/seppals" element={<Seppals></Seppals>}></Route>
                    <Route path="/accsories" element={<Accsories></Accsories>}></Route>
                    <Route path="/innerwear" element={<Innerwear></Innerwear>}></Route>


                </Routes>
                <Home></Home>
                <Section1></Section1>
                <Section2></Section2>
                <Section3></Section3>
                <Section4></Section4>
                <Section5></Section5>
                <Footer></Footer>
                

            </BrowserRouter>

         
        </div>
    )

}

export default App