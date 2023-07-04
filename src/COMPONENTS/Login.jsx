import React from 'react'
import x from "./login.module.css"

const Login = ({ close }) => {
  return (
    <div>
      <div className={x.logincontainer}>
        <div className={x.loginsub}>
          <div className={x.sitename}>
            <img src={require('./images/logo.png')} alt="" />
            <h1>MEN'S FASHION</h1>
          </div>
          <div onClick={() => close(false)} className={x.icon} >
            <i class="fa-sharp fa-solid fa-xmark"></i>
          </div>

          <div className={x.minibox}>

            <h5>Sign Up Now</h5>
            <small>Already have a account?
              <span> Log in</span>
            </small>
            <div className={x.btns}>
              <button><i class="fa-brands fa-square-facebook"></i> Facebook</button>
              <button><i class="fa-brands fa-square-google-plus"></i> Google</button>

            </div>
            <small>________ or sign up with ______</small>
            <small>Phone Number or Email</small>
            <input type="text" placeholder='+91' />
            <button className={x.submit}>Sign up</button>

          </div>

         <div className={x.imgs}>
          <img src="https://img.freepik.com/free-vector/fashion-man-illustration_23-2148220021.jpg?w=740&t=st=1688064456~exp=1688065056~hmac=148af908303dc52edada9e760453e89816959ce446017c218d6b2e031902bc7f" alt="" />

         </div>

        </div>

      </div>

    </div>

  )
}

export default Login