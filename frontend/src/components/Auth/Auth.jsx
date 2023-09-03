import { useState } from 'react'
import './Auth.css'

const Auth = () => {

  const [authMode,setAuthMode] = useState(false);

  const  Title = authMode ? 'הרשמה' : 'התחברות';
  // const MainBtn = authMode ? 'הרשמה' : `התחברות`;
  const SecondBtn = authMode ? 'כבר יש לך חשבון ? להתחברות' : `אין לך חשבון ? להרשמה`;

  return (
    <div className="container">
      <div className="title">{Title}</div>
      <div className="form-cont">
        <div className="input-item">
        <input className='inputBox' />

          <p>:מייל</p>
        </div>
        <div className="input-item">
        <input type='password' className='inputBox' />
        <p>:סיסמה</p>

        </div>
        {authMode && (
           <div className="input-item">
           <input type='password' className='inputBox' />
           <p>:אימות סיסמה</p>

           </div>
        )}
        {/* <p style={{textAlign:'center',fontSize:14}}>Do you have already account ?</p> */}
        <button className='secBtn' onClick={() => setAuthMode(!authMode)}>{SecondBtn}</button>
        <button className='authButton'>המשך</button>
      </div>
    </div>
  )
}

export default Auth