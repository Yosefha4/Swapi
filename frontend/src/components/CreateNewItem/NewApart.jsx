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
  // const [propStreet, setPropStreet] = useState("");
  //Step 2
  const [numOfRooms, setNumOfRooms] = useState(0);
  const [buildInMeter, setBuildInMeter] = useState("");
  const [parkingNum, setParkingNum] = useState(0);
  const [propDesc, setPropDesc] = useState("");
  //Step 3
  const [propPrice, setPropPrice] = useState("");
  const [availDate, setAvailDate] = useState(new Date());
  //Step 4
  const [selectedImages, setSelectedImages] = useState([]);
  //Step5
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const token = localStorage.getItem("access_token") ;
  console.log(token);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    let temp;
    setIsPopupOpen(false);
    const authorization = VerifyToken().then((result) => {
        temp = result;
        console.log(result)
        console.log(temp)
    }).then(() => {
      if(temp == 200){
        //Call to createPost()
        console.log("The status code is : " + temp + "You can post now!")
      }
      else{
        console.log("Something get wrong...")
      }
    })
    console.log("authorization: ",authorization)
    setStage(1)
  };

  const VerifyToken = async () => {
    let tempToken = token ? token : 'a1b2c3d4e5f6f6f65'
    const opts = {
      headers: {
        Authorization: "Bearer " + tempToken,
      },
    };
    try {
      const res = await axios.get("http://127.0.0.1:5000/user/verifyToken", opts);
  
      if (res.status === 200) {
        console.log("Test Authorization Success !");
        return res.status;
        // Handle the case where the user is authorized
      } else if (res.status === 422) {
        console.log("You Are Not Authorized!");
        return;
        // Handle the case where the user is not authorized
      } else {
        console.log("Unexpected Status Code: " + res.status);
        // Handle other unexpected status codes
      }
    } catch (error) {
      alert("You Must Login Before Adding a New Post");
      console.error(error);
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
    } else {
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
    if (numOfRooms == 0 || buildInMeter == 0) {
      alert("You Must select all fields!");
    } else {
      console.log(
        "Step 1 finish success",
        "numOfRooms",
        numOfRooms,
        "buildInMeter",
        buildInMeter
      );
      setStage(3);
    }
  };

  const handlePriceChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatPrice(rawValue);
    setPropPrice(formattedValue);
  };

  const formatPrice = (value) => {
    // Remove non-digit characters and leading zeros
    const numericValue = value.replace(/\D/g, "").replace(/^0+/, "");

    // Add commas every three digits
    let formattedValue = "";
    for (let i = 0; i < numericValue.length; i++) {
      formattedValue += numericValue[i];
      if (
        (numericValue.length - i - 1) % 3 === 0 &&
        i !== numericValue.length - 1
      ) {
        formattedValue += ",";
      }
    }

    return formattedValue;
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageArray = Array.from(files);
    setSelectedImages((prevImages) => [...prevImages, ...imageArray]);
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    console.log(
      whichProp,
      propCity,
      propState,
      propDesc,
      propType,
      numOfRooms,
      availDate,
      buildInMeter,
      propPrice,
      selectedImages
    );
    setStage(4);
  };
  const handleStep4 = (e) => {
    e.preventDefault();
    console.log(
      "whichProp : " + parseSelectValue(whichProp),
      "propCity : " +
        propCity +
        "  |  " +
        "propState : " +
        parseSelectValueForCondition(propState) +
        "  |  " +
        "propDesc : " +
        propDesc +
        "  |  " +
        "propType : " +
        parseSelectValueForPropType(propType) +
        "  |  " +
        "numOfRooms : " +
        numOfRooms +
        "  |  " +
        "availDate : " +
        availDate +
        "  |  |  " +
        "buildInMeter : " +
        buildInMeter +
        "  |  |  " +
        "propPrice : " +
        propPrice +
        "  |  |  " +
        "selectedImages : " +
        selectedImages
    );
    openPopup();
    setStage(0);
  };

  const parseSelectValue = (selectedValue) => {
    switch (parseInt(selectedValue)) {
      case 0:
        return "בחר";
      case 1:
        return "מכירה";
      case 2:
        return "השכרה";
      case 3:
        return "מסחרי";
      default:
        return "Unknown"; // Handle any other value as needed
    }
  };
  const parseSelectValueForPropType = (selectedValue) => {
    switch (parseInt(selectedValue)) {
      case 0:
        return "בחר";
      case 1:
        return "דירה";
      case 2:
        return "דירת גן";
      case 3:
        return "בית פרטי / קוטג'";
      case 4:
        return "מגרש";
      case 5:
        return "דופלקס";
      case 6:
        return "יחידת דיור";
      case 7:
        return "משק חלקאי";
      case 8:
        return "סטודיו";
      case 9:
        return "מחסן";
      case 10:
        return "כללי";
      default:
        return "Unknown"; // Handle any other value as needed
    }
  };

  const parseSelectValueForCondition = (selectedValue) => {
    switch (parseInt(selectedValue)) {
      case 0:
        return "בחר";
      case 1:
        return "חדש מקבלן";
      case 2:
        return "חדש";
      case 3:
        return "משופץ";
      case 4:
        return "דרוש שיפוץ";
      default:
        return "Unknown"; // Handle any other value as needed
    }
  };



  return (
    <div className="apartContainer">
      <div className="title">פרסום מודעה</div>

      <div className="newApart">
        {stage === 1 && (
          <form onSubmit={handleStepOne}>
            <h3 style={{ textAlign: "center" }}>הגדרת הנכס</h3>

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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="stepBtn" type="submit">
                הבא
              </button>
            </div>
          </form>
        )}
        {stage === 2 && (
          <div>
            <h3 style={{ textAlign: "center" }}>פרטים על הנכס</h3>
            <form>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="number"
                  placeholder="כמה חדרים בנכס "
                  onChange={(e) => setNumOfRooms(e.target.value)}
                />
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
              <div className="input-item">
                <textarea
                  placeholder="כתוב תיאור קצר"
                  onChange={(e) => setPropDesc(e.target.value)}
                  style={{ width: "70%", textAlign: "right", padding: 8 }}
                  id="desc"
                  rows={5}
                  cols={33}
                ></textarea>

                <p> : תיאור קצר</p>
              </div>
              <div className="buttonsCont">
                <button className="stepBtn" type="submit" onClick={handleStep2}>
                  הבא
                </button>
                <button className="stepBtn" onClick={() => setStage(1)}>
                  אחורה
                </button>
              </div>
            </form>
          </div>
        )}
        {stage === 3 && (
          <div>
            <h3 style={{ textAlign: "center" }}>מחיר וזמינות</h3>
            <form>
              <div className="input-item">
                <input
                  type="date"
                  style={{ textAlign: "center", width: "70%", height: 30 }}
                />
                <p>תאריך כניסה</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  onChange={handlePriceChange}
                  value={propPrice}
                />
                <p>מחיר</p>
              </div>
              <div className="buttonsCont">
                <button className="stepBtn" onClick={handleStep3}>
                  הבא
                </button>
                <button className="stepBtn" onClick={() => setStage(2)}>
                  אחורה
                </button>
              </div>
            </form>
          </div>
        )}
        {stage === 4 && (
          <div>
            <div>
              <h3 style={{ textAlign: "center" }}>העלאת תמונות</h3>
              <form>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "right",
                    padding: 16,
                    margin: 8,
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="imageUpButton"
                  />
                  {/* <p>העלה תמונות</p> */}
                </div>
              </form>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: 4,
                margin: 4,
              }}
            >
              {selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Image ${index + 1}`}
                  width="100"
                  height="100"
                />
              ))}
            </div>
            <div className="buttonsCont">
              <button className="stepBtn" onClick={handleStep4}>
                הבא
              </button>
              <button className="stepBtn" onClick={() => setStage(3)}>
                אחורה
              </button>
            </div>
          </div>
        )}
        {isPopupOpen && (
          <div className="popup">
            <h2 className="title-prev"> תצוגה מהירה </h2>
            <p className="preview">
            <strong>סוג :</strong>  {parseSelectValue(whichProp)}  
            </p>
            <p className="preview">
              <strong>עיר :</strong> {propCity}
            </p>
            <p className="preview">
              <strong>מצב הנכס :</strong>{" "}
              {parseSelectValueForCondition(propState)}
            </p>
            <p className="preview">
              <strong>תיאור נוסף :</strong> {propDesc}
            </p>
            <p className="preview">
              <strong>סוג הנכס :</strong>{" "}
              {parseSelectValueForPropType(propType)}
            </p>
            <p className="preview">
              <strong>מס' חדרים :</strong> {numOfRooms}
            </p>
            <p className="preview">
              <strong>זמינות : </strong> {availDate.toLocaleString()}
            </p>
            <p className="preview">
              <strong>מ"ר בנוי :</strong> {buildInMeter}
            </p>
            <p className="preview">
              <strong>מחיר : </strong> {propPrice}
            </p>
            {/* <p><strong>Selected Images:</strong> {selectedImages.map(image => image.name).join(', ')}</p> */}
            {selectedImages.map((image, index) => (
              <div key={index} className="imgPrev">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected Image ${index + 1}`}
                  style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust the style as needed
                />
                {/* <p>
                  <strong>Image {index + 1}:</strong> {image.name}
                </p> */}
              </div>
            ))}
            <button className="stepBtn" onClick={closePopup}>סגור</button>
          </div>
        )}
        {stage === 0 && null}
      </div>
      {/* {isPopupOpen && popupContent} */}
    </div>
  );
};

export default NewApart;
