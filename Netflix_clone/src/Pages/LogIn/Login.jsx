import './login.scss'

const Login = () => {
  return (
    <div className='login'>
    <div className="top">
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    </div>
    <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='Enter email address' />
          <input type="password" placeholder='Enter your Password' />
          <button className='loginButton'>Sign In</button>
          <span>New to Netflix?<b> Register !</b></span>
          <small>This page is protected by Google reCAPTCHA to ensure you're not a bot.  <b>Learn more</b></small>
        </form>
    </div>
  </div>
  )
}

export default Login
