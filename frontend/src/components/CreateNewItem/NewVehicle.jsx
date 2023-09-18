
/* eslint-disable no-unused-vars */
import axios from "axios";
import "./NewApart.css";
import { useState } from "react";

const NewVehicle = () => {
  const [stage, setStage] = useState(1);
  //Step 1
  // const [whichProp, setWhichProp] = useState("");
  const [propType, setPropType] = useState("");
  const [propBrand, setPropBrand] = useState("");
  const [propModel, setPropModel] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState(0);

  const [numOfDoors, setNumOfDoors] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [gearboxType, setGearboxType] = useState("");

  //Step 2

  const [vehicleColor, setVehicleColor] = useState(0);
  const [testExpire, setTestExpire] = useState(0);
  const [whichHand, setWhichHand] = useState("");
  const [currentOwnership, setCurrentOwnership] = useState("");
  const [lastOwnership, setLastOwnership] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [moreDetails, setMoreDetails] = useState("");
  //Step 3
  const [price, setPrice] = useState("");
  const [vehicleLocation, setVehicleLocation] = useState("");
  const [vehicleArea, setVehicleArea] = useState("");
  //Step 4
  const [selectedImages, setSelectedImages] = useState([]);
  //Step5
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const token = localStorage.getItem("access_token") ;
  console.log("token +" +token);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup =  () => {
    let temp;
    setIsPopupOpen(false);
    const authorization = VerifyToken().then((result) => {
        temp = result;
        console.log(result)
        console.log(temp)
    }).then(async () => {
      if(temp == 200){
        //Call to createPost()
        try {
          const res = await axios.post("http://127.0.0.1:5002/create",{
            whichAction:whichProp,
            userOwnerId:whichProp,
            apType:propType,
            apCity:propCity,
            apStreet:propStreet,
            numOfRooms:numOfRooms,
            parkingNum:parkingNum,
            moreDesc:propDesc,
            builtInMeter:buildInMeter,
            price:propPrice,
            availDate:availDate,
            apImages:selectedImages,
            ownerName:ownerName,
            ownerPhone:ownerPhone,
          });
          if(res.status == 201){
            alert("המודעה שלך פורסמה בהצלחה")
          }
          else{
            console.log(res.status)
            console.log(res.data)
          }
     
        } catch (error) {
          console.log(error)
        }
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
      setStage(2);
  
  };
  const handleStep2 = (e) => {
    e.preventDefault();
      setStage(3);
   
  };

  const handlePriceChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatPrice(rawValue);
    setPrice(formattedValue);
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
    setStage(4);
  };
  const handleStep4 = (e) => {
    e.preventDefault();
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
        return "פרטי";
      case 2:
        return "מסחרי"
      case 3:
        return "ג'יפים"
      case 4:
        return "אופנועים"
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
            <h3 style={{ textAlign: "center" }}>הגדרת הרכב</h3>

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
                <option value={1}>פרטי</option>
                <option value={2}>מסחרי</option>
                <option value={3}>ג'יפים</option>
                <option value={4}>אופנועים</option>
                <option value={5}>אחר</option>
     
              </select>
              <p style={{ textAlign: "center", alignItems: "center" }}>
                : סוג רכב
              </p>
            </div>
            <div className="input-item">
            <input
                className="inputBox"
                placeholder="יצרן הרכב"
                onChange={(e) => setPropBrand(e.target.value)}
              />
              <p style={{ textAlign: "center", alignItems: "center" }}>
               יצרן :
              </p>
            </div>
            <div className="input-item">
              <input
                className="inputBox"
                placeholder="דגם"
                onChange={(e) => setPropModel(e.target.value)}
              />
              <p>: דגם</p>
            </div>
            <div className="input-item">
              <input
                className="inputBox"
                placeholder="שנת ייצור"
                onChange={(e) => setYearOfManufacture(e.target.value)}
              />
              <p>: שנת ייצור</p>
            </div>
            <div className="input-item">
              <input
                className="inputBox"
                placeholder="מס' דלתות"
                onChange={(e) => setNumOfDoors(e.target.value)}
              />
              <p>: מס' דלתות </p>
            </div>
            <div className="input-item">
              <input
                className="inputBox"
                placeholder="נפח מנוע"
                onChange={(e) => setEngineCapacity(e.target.value)}
              />
              <p>: נפח מנוע</p>
            </div>
            <div className="input-item">
                <input
                  className="inputBox"
              
                  placeholder="תיבת הילוכים"
                  onChange={(e) => setGearboxType(e.target.value)}
                />
                <p>תיבת הילוכים</p>
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
            <h3 style={{ textAlign: "center" }}>פרטים על הרכב</h3>
            <form>
              <div className="input-item">
                <input
                  className="inputBox"
           
                  placeholder="צבע הרכב"
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
                <p>צבע הרכב</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="date"
                  placeholder="טסט עד"
                  onChange={(e) => setTestExpire(e.target.value)}
                />
                <p>טסט עד</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="number"
                  placeholder="איזה יד"
                  onChange={(e) => setWhichHand(e.target.value)}
                />
                <p>איזה יד</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="בעלות נוכחית"
                  onChange={(e) => setCurrentOwnership(e.target.value)}
                />
                <p>בעלות נוכחית</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="בעלות קודמת"
                  onChange={(e) => setLastOwnership(e.target.value)}
                />
                <p>בעלות קודמת</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="number"
                  placeholder="קילומטר"
                  onChange={(e) => setKilometer(e.target.value)}
                />
                <p>כמה ק"מ</p>
              </div>
              <div className="input-item">
                <textarea
                  placeholder="כתוב תיאור קצר"
                  onChange={(e) => setMoreDetails(e.target.value)}
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
            <h3 style={{ textAlign: "center" }}>מחיר ומיקום</h3>
            <form>
        
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  onChange={handlePriceChange}
                  value={price}
                  placeholder="מחיר"
                />
                <p>מחיר</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="עיר"
                  onChange={(e) => setVehicleLocation(e.target.value)}
                />
                <p>עיר</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="אזור"
                  onChange={(e) => setVehicleArea(e.target.value)}
                />
                <p>אזור</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="שם"
                  onChange={(e) => setOwnerName(e.target.value)}
                />
                <p>שם בעל הרכב</p>
              </div>
              <div className="input-item">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="טלפון"
                  onChange={(e) => setOwnerPhone(e.target.value)}
                />
                <p>טלפון בעל הרכב</p>
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
            <strong>יצרן :</strong>  {parseSelectValue(propBrand)}  
            </p>
            <p className="preview">
            <strong>דגם :</strong>  {(propModel)}  
            </p>
            <p className="preview">
              <strong>עיר :</strong> {vehicleLocation}
            </p>
            <p className="preview">
              <strong>אזור :</strong> {vehicleArea}
            </p>
            <p className="preview">
              <strong>שנת ייצור :</strong>{" "}
              {(yearOfManufacture)}
            </p>
            <p className="preview" style={{textAlign:'center'}}>
              <strong> כמה דלתות :</strong> {numOfDoors}
            </p>
            <p className="preview">
              <strong> נפח מנוע :</strong>{" "}
              {(engineCapacity)}
            </p>
            <p className="preview">
              <strong>מס' חדרים :</strong> {numOfDoors}
            </p>
            <p className="preview">
              <strong>תיבת הילוכים : </strong> {gearboxType}
            </p>
            <p className="preview">
              <strong>צבע :</strong> {vehicleColor}
            </p>
            <p className="preview">
              <strong>טסט עד : </strong> {testExpire}
            </p>
            <p className="preview">
              <strong> יד : </strong> {whichHand}
            </p>
            <p className="preview">
              <strong> בעלות נוכחית : </strong> {currentOwnership}
            </p>
            <p className="preview">
              <strong>  ק"מ : </strong> {kilometer}
            </p>
            <p className="preview">
              <strong>  פרטים נוספים : </strong> {moreDetails}
            </p>
            <p className="preview">
              <strong>  מחיר : </strong> {price}
            </p>
            <p className="preview">
              <strong>  טלפון : </strong> {ownerPhone}
            </p>
            <p className="preview">
              <strong>  שם  : </strong> {ownerName}
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
            <button className="stepBtn" onClick={closePopup}>אישור</button>
          </div>
        )}
        {stage === 0 && null}
      </div>
      {/* {isPopupOpen && popupContent} */}
    </div>
  );
};

export default NewVehicle;
