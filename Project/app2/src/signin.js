import "./signin.css"

// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

function Signin() {
    return (
        <>
            <div className="mainbody">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form className="mainform" action="#">
                            <h1 className="mainh1">Create Account</h1>
                            <div class="social-container">
                                <a className="maina" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                <a className="maina" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                <a className="maina" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="mainspan">or use your email for registration</span>
                            <input className="maininput" type="text" placeholder="Name" />
                            <input  className="maininput" type="email" placeholder="Email" />
                            <input  className="maininput" type="password" placeholder="Password" />
                            <button className="mainbutton">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form className="mainform" action="#">
                            <h1 className="mainh1">Sign in</h1>
                            <div class="social-container">
                                <a className="maina" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                <a className="maina" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                <a className="maina" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="mainspan">or use your account</span>
                            <input className="maininput" type="email" placeholder="Email" />
                            <input className="maininput" type="password" placeholder="Password" />
                            <a className="maina" href="#">Forgot your password?</a>
                            <button className="mainbutton" >Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1 className="mainh1">Welcome Back!</h1>
                                <p className="mainp">To keep connected with us please login with your personal info</p>
                                <button  class="ghost mainbutton" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1 className="mainh1">Hello, Friend!</h1>
                                <p className="mainp">Enter your personal details and start journey with us</p>
                                <button  class="ghost mainbutton" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default Signin;