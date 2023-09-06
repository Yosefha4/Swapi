/* eslint-disable no-unused-vars */
import axios from "axios";
import "./NewApart.css";
import { useState } from "react";

const NewApart = () => {
  const [stage, setStage] = useState(1);
  //Step 1
  const [whichProp, setWhichProp] = useState("");
  const [propType, setPropType] = useState("");
  const [propState, setPropState] = useState("");
  const [propCity, setPropCity] = useState("");
  //Step 2
  const [numOfRooms, setNumOfRooms] = useState(0);
  const [buildInMeter, setBuildInMeter] = useState("");
  const [parkingNum, setParkingNum] = useState(0);


  const token = localStorage.getItem("access_token");
  console.log(token);

  const VerifyToken = async () => {
    const opts = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.get(
        "http://127.0.0.1:5000/user/verifyToken",
        opts
      );
      if (res.status === 200) {
        console.log("Test Authoriztion Success !");
        return res.status;
      } else {
        return res.status;
      }
    } catch (error) {
      alert("You Must Login Before Add New Post");
      console.log(error);
    }
  };

  const handleCreatePost = async () => {
    let verifyStatusCode = null;
    const isVerify = VerifyToken();
    isVerify
      .then((result) => {
        verifyStatusCode = result;
        console.log(result); // This will log 200
        console.log("verifyStatusCode", verifyStatusCode);
      })
      .catch((error) => {
        console.error(error); // Handle any errors that might occur during the Promise execution
      })
      .finally(() => {
        if (verifyStatusCode == null) {
          alert("You not authorize to create new post. Please login / signup");
        } else {
          alert("Success! You can upload your apartment now !");
        }
      });
  };

  const handleStepOne = (e) => {
    e.preventDefault();
    if (
      whichProp == 0 ||
      propState == 0 ||
      propType == 0 ||
      propCity.length < 1
    ) {
      alert("You Must select all fields!");
    }
    else{
      console.log(
        "Step 1 finish success",
        whichProp,
        propState,
        propType,
        propCity
      );
      setStage(2);
    }

  };
  const handleStep2 = (e) => {
    e.preventDefault();
    if (
      numOfRooms == 0 ||
      buildInMeter == 0 
    ) {
      alert("You Must select all fields!");
    }
    else{
      console.log(
        "Step 1 finish success",
        "numOfRooms",
        numOfRooms,
        "buildInMeter",
        buildInMeter,
    
      );
      setStage(3);
    }

  };

  return (
    <div className="apartContainer">
      <div className="title">פרסום מודעה</div>

      <div className="newApart">
        {stage === 1 && (
          <form onSubmit={handleStepOne}>
            <h3 style={{ textAlign: "center" }}>שלב 1</h3>

            <div className="firstStep">
              {/* <input  type="checkbox" name="sdsd" id="sdsd" value={1} /> */}
              <select
                style={{
                  width: "70%",
                  textAlign: "right",
                  fontWeight: "bold",
                  height: 30,
                }}
                onChange={(e) => setWhichProp(e.target.value)}
              >
                <option value={0}>בחר</option>
                <option value={1}>מכירה</option>
                <option value={2}>השכרה</option>
                <option value={3}>מסחרי</option>
              </select>
              <p style={{ textAlign: "center", alignItems: "center" }}>
                : מכירה/השכרה
              </p>
            </div>
            <div className="input-item">
              <select
                style={{
                  width: "70%",
                  textAlign: "right",
                  fontWeight: "bold",
                  height: 30,
                }}
                onChange={(e) => setPropType(e.target.value)}
              >
                <option value={0}>בחר</option>
                <option value={1}>דירה</option>
                <option value={2}>דירת גן</option>
                <option value={3}>בית פרטי / קוטג'</option>
                <option value={4}>מגרש</option>
                <option value={5}>דופלקס</option>
                <option value={6}>יחידת דיור</option>
                <option value={7}>משק חלקאי</option>
                <option value={8}>סטודיו</option>
                <option value={9}>מחסן</option>
                <option value={10}>כללי</option>
              </select>
              <p style={{ textAlign: "center", alignItems: "center" }}>
                : סוג הנכס
              </p>
            </div>
            <div className="input-item">
              <select
                style={{
                  width: "70%",
                  textAlign: "right",
                  fontWeight: "bold",
                  height: 30,
                }}
                onChange={(e) => setPropState(e.target.value)}
              >
                <option value={0}>בחר</option>
                <option value={1}>חדש מקבלן</option>
                <option value={2}>חדש</option>
                <option value={3}>משופץ</option>
                <option value={4}>דרוש שיפוץ</option>
              </select>
              <p style={{ textAlign: "center", alignItems: "center" }}>
                : מצב הנכס
              </p>
            </div>
            <div className="input-item">
              <input
                className="inputBox"
                placeholder="איפה נמצא הנכס"
                onChange={(e) => setPropCity(e.target.value)}
              />
              <p>: יישוב</p>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <button  className="stepBtn"  type="submit">הבא</button>
            </div></form>
        )}
        {stage === 2 && (
          <div>
            <h3 style={{ textAlign: "center" }}>שלב 2</h3>
            <form>
              <div className="input-item">
                <input className="inputBox" type="number" placeholder="כמה חדרים בנכס " onChange={(e) => setNumOfRooms(e.target.value)} />
                <p>מס' חדרים</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="number"
                  placeholder="עבור 150,000 לכתוב 150"
                  onChange={(e) => setBuildInMeter(e.target.value)} 
                />
                <p> מטר בנוי</p>
              </div>
              <div className="input-item">
              <input
                  className="inputBox"
                  type="number"
                  placeholder="כמה חניות "
                  onChange={(e) => setParkingNum(e.target.value)} 
                />
                <p>מס' חניות</p>
              </div>
              <div className="buttonsCont">
              
              <button className="stepBtn" type="submit" onClick={handleStep2} >הבא</button>
              <button className="stepBtn" onClick={() => setStage(1)}>אחורה</button>
              </div>

            </form>
          </div>
        )}
        {stage === 3 && (
          <div> 
            <h3>STEP - 3</h3> </div>
        )}
      </div>
    </div>
  );
};

export default NewApart;
