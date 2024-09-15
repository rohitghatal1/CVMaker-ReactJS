import React from 'react'

export default function LoginSignupForm() {
  return (
    <div>
      <div className="loginSignupModal">
        <div className="loginModal">
            <h2>User Login</h2>
            <form action="" className="loginform">
                <label htmlFor="username">Username</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span>Create here...</span></p>
        </div>
      </div>
    </div>
  )
}
