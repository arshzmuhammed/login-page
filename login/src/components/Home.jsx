import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const form = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: (values) => {  console.log(values);
        }
      })
      const {values,handleChange,handleSubmit} = form;
    return (
        <div className='App'>

        
        <nav>
    <img src="https://tinyurl.com/netflixsvglogo" alt="logo"/>
  </nav>
  <div class="form-wrapper">
    <h2>Sign In</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div class="form-control">
        <input type="text" required name='email' values={values.name} onChange={handleChange} />
        <label>Email or phone number</label>
      </div>
      <div class="form-control">
        <input type="password" required name='password' values={values.password} onChange={handleChange} />
        <label>Password</label>
      </div>
      <Link to="/detail"><button type="submit">Sign In</button></Link>

      <div class="form-help">
        <div class="remember-me">
          <input type="checkbox" id="remember-me"/>
          <label for="remember-me">Remember me</label>
        </div>
        <a href="#">Need help?</a>
      </div>
    </form>
    <p>New to Netflix? <a href="#">Sign up now</a></p>
    <small>
      This page is protected by Google reCAPTCHA to ensure you're not a bot.
      <a href="#">Learn more.</a>
    </small>
  </div>
  </div>
      
)
    }

export default Home
