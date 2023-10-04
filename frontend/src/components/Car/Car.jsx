/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import './Car.css'
import "../Apartment/Apartment.css";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

const Car = ({carsDataArr}) => {
  const [isOpen, setIsOpen] = useState(false);

  // const carsDataArr = props.carData;

  const [currentImgUrl,setCurrentImgUrl] = useState("");

  useEffect(() => {
    // Define a function to get the download URL for an image based on its name
    const getImageDownloadURL = async (imageName) => {
      try {
        const url = await getDownloadURL(ref(storage, `images/${imageName}`));
        setCurrentImgUrl(url);
        return url;
      } catch (error) {
        console.error("Error fetching image URL:", error);
        return null;
      }
    };
    carsDataArr && getImageDownloadURL(carsDataArr.vehicleImages);
    // console.log("temptemp: temp :" + currentImgUrl)
  },[currentImgUrl,carsDataArr])


  const containerClassName = `container ${isOpen ? "container-click" : ""}`;
  const firstClassName = `firstContainer ${isOpen ? "first-click" : ""}`;
  const middleClassName = `middContainer ${isOpen ? "middle-click" : ""}`;
  const lastClassName = `lastClassName ${isOpen ? "last-click" : ""}`;



  const carImages = carsDataArr ? carsDataArr.vehicleImages : ["", ""];
  const tempItem = carImages;
  // console.log(tempItem)

  const originalPrice = carsDataArr?.price?.toLocaleString() || "0"; // Default to '0' if undefined
  const numericPrice = parseFloat(
    originalPrice.replace(/,/g, "").replace("₪", "")
  ); // Remove commas and parse
  const formatedPrice = isNaN(numericPrice)
    ? "Invalid Price"
    : "₪" + numericPrice.toLocaleString();

  // {carsDataArr && console.log(carsDataArr)}

  return (
    <div className={containerClassName} onClick={() => setIsOpen(!isOpen)}>
      <div className={firstClassName}>
        <div>
          <span style={{ color: "#3c3b3b", fontWeight: "bold", fontSize: 20 }}>
            {formatedPrice}
          </span>
        </div>
        {isOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              gap: 18,
            }}
          >
            <div className="contantInfo">
              <strong>שם : </strong>
              <span
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 1px 5px black",
                  color: "black",
                  borderRadius: 1.5,
                  padding: 8,
                  fontWeight: "bold",
                }}
              >
                {carsDataArr.ownerName ? carsDataArr.ownerName : "לא ידוע"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 16,
                gap: 6,
              }}
            >
              <span>טלפון</span>
              <span
                // onClick={(e) => handleSpanClick(e, dataArrayAsArray[14])}
                style={{
                  backgroundColor: "lightseagreen",
                  color: "black",
                  boxShadow: "0px 1px 5px yellow",
                  borderRadius: 5,
                  padding: 6,
                  fontWeight: "bold",
                  cursor: "pointer",
                  border: "1px solid black",
                }}
              >
                {carsDataArr.ownerPhoneNum}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={middleClassName}>
        <div className="trmpc">
          <div className="info">
            <span className="subTitles">סמ"ק</span>
            <span className="subInfor">{carsDataArr?.engineCapacity}</span>
          </div>

          <div className="info">
            <span className="subTitles">שנה</span>
            <span className="subInfor">{carsDataArr?.yearOfManufacture}</span>
          </div>
          <div className="info">
            <span className="subTitles">דגם</span>
            <span className="subInfor">{carsDataArr?.vehicleModel}</span>
          </div>
          <div className="info">
            <span className="subTitles">יצרן</span>
            <span className="subInfor">{carsDataArr?.vehicleBrand}</span>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="middle-open">
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div className="trmpc">
                  <span className="subInfor">{carsDataArr.moreDetails}</span>
                  <span className="subTitles">: תיאור</span>
                </div>
                <div className="trmpc">
                  <span className="subInfor">{carsDataArr.gearboxType}</span>
                  <span className="subTitles">:תיבת הילוכים</span>
                </div>
                <div className="trmpc">
                  <span className="subInfor">{carsDataArr.vehicleColor}</span>
                  <span className="subTitles">: צבע</span>
                </div>
                <div className="trmpc">
                  <span className="subInfor">
                    {carsDataArr.currentOwnership}
                  </span>
                  <span className="subTitles">: בעלות נוכחית</span>
                </div>
              </div>
            </div>{" "}
            <div className="trmpc">
              <div className="info">
                <span className="subTitles">ק"מ</span>
                <span className="subInfor">{carsDataArr.kilometer}</span>
              </div>

              <div className="info">
                <span className="subTitles">טסט עד</span>
                <span className="subInfor">{carsDataArr.testExpire}</span>
              </div>
              <div className="info">
                <span className="subTitles"> יד</span>
                <span className="subInfor">{carsDataArr.whichHand}</span>
              </div>
            </div>{" "}
          </>
        )}
      </div>
      {/* <span>מ"ר</span> */}

      <div className={lastClassName}>
        {/* {isOpen &&
          tempItem
            ?.filter((item, index) => index !== 0) // Filter out the first item
            .map((item, index) => (
              <img key={index} className="image" src={item} />
            ))} */}

        <img className="image" src={currentImgUrl} />
      </div>
    </div>
  );
};

export default Car;
