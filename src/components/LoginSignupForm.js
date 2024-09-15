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
                <div className="signupModal">
                    <h2></h2>
                    <form className="signupForm">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" />

                        <label htmlFor="address">Address</label>
                        <input type="text" />

                        <label htmlFor="age">Age</label>
                        <input type="text" />

                        <label htmlFor="username">Username</label>
                        <input type="text" />

                        <label htmlFor="pass">Password</label>
                        <input type="password" />

                        <label htmlFor="cpass">Confirm Password</label>
                        <input type="password" />
                    </form>
                    <p>Already have an account?<span>Login here</span></p>
                </div>
            </div>
        </div>
    )
}
