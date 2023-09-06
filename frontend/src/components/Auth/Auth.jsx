/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [authMode, setAuthMode] = useState(false);

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const token = localStorage.getItem("access_token");

  const navigation = useNavigate();

  const Title = authMode ? "הרשמה" : "התחברות";
  // const MainBtn = authMode ? 'הרשמה' : `התחברות`;
  const SecondBtn = authMode
    ? "כבר יש לך חשבון ? להתחברות"
    : `אין לך חשבון ? להרשמה`;

  const handleAuth = async (e) => {
    if (authMode) {
      handleSignUp(e);
    } else {
      handleSignIn(e);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/user/login", {
        email: userEmail,
        password: userPassword,
      });
      // console.log(res)
      if (res.status === 200) {
        const { access_token } = res.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user_email", userEmail);

        console.log("the access token is : ", access_token);
        navigation("/");
        window.location.reload();
        // Cookies.set('access_token', access_token, {httponly: true });
        // console.log("The token saved success on the cookies!")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/user/signup", {
        name: userEmail,
        email: userEmail,
        password: userPassword,
      });
      console.log(res.data);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="title">{Title}</div>
      {token && token !== "" && token !== "undefined" ? (
        <div style={{marginTop:24}}>
          <h3>Hey ! Welcome Back</h3>
        </div>
      ) : (
        <div className="form-cont">
          <div className="input-item">
            <input
              className="inputBox"
              placeholder="הזן מייל"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <p>:מייל</p>
          </div>
          <div className="input-item">
            <input
              type="password"
              className="inputBox"
              placeholder="הזן סיסמה"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p>:סיסמה</p>
          </div>
          {authMode && (
            <div className="input-item">
              <input
                type="password"
                className="inputBox"
                placeholder="אימות סיסמה"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p>:אימות סיסמה</p>
            </div>
          )}
          {/* <p style={{textAlign:'center',fontSize:14}}>Do you have already account ?</p> */}
          <button className="secBtn" onClick={() => setAuthMode(!authMode)}>
            {SecondBtn}
          </button>
          <button className="authButton" onClick={handleAuth}>
            המשך
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
