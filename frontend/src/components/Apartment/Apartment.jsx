/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Apartment.css";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

const Apartment = ({dataArray}) => {
  const [expanded, setExpanded] = useState(false);

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
    dataArray && getImageDownloadURL(dataArray.apImages);
    // console.log("temptemp: temp :" + currentImgUrl)
  },[currentImgUrl,dataArray])

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    // Toggle the `expanded` state when the component is clicked
    setExpanded(!expanded);
  };

  const handleSpanClick = (e, phoneNumber) => {
    // Prevent the click event from propagating to the parent container
    e.stopPropagation();

    console.log(phoneNumber);
  };



  // console.log("the image url apart is : " + dataArray?.apImages);
  // console.log("the apart data is : " + dataArray?.ownerName);

  // Assuming apartmentData contains the price value as a string
  const originalPrice = dataArray?.price?.toLocaleString() || "0"; // Default to '0' if undefined
  const numericPrice = parseFloat(originalPrice.replace(/,/g, "").replace("₪", "")); // Remove commas and parse
  const formattedPrice = isNaN(numericPrice) ? "Invalid Price" : "₪" + numericPrice.toLocaleString();



  const containerClassName = `container ${expanded ? "container-click" : ""}`;
  const firstClassName = `firstContainer ${expanded ? "first-click" : ""}`;
  const middleClassName = `middContainer ${expanded ? "middle-click" : ""}`;
  const lastClassName = `lastClassName ${expanded ? "last-click" : ""}`;



  return (
    <div className={containerClassName} onClick={handleClick}>
      <div className={firstClassName}>
        <div>
          <span style={{ color: "#3c3b3b", fontWeight: "bold", fontSize: 20 }}>
            {" "}
            {formattedPrice}
          </span>
        </div>
        {expanded && (
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
                {dataArray ? dataArray.ownerName : "לא ידוע"}
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
                onClick={(e) => handleSpanClick(e, dataArray.ownerPhone)}
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
                {dataArray.ownerPhone}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={middleClassName}>
        <div className="trmpc">
          <div className="info">
            <span className="subTitles">חדרים</span>
            <span className="subInfor">{dataArray?.numOfRooms}</span>
          </div>

          <div className="info">
            <span className="subTitles">עיר</span>
            <span className="subInfor">{dataArray?.apCity}</span>
          </div>
          <div className="info">
            <span className="subTitles">מ"ר</span>
            <span className="subInfor">{dataArray?.builtInMeter}</span>
          </div>
        </div>
        {expanded && (
          <>
            <div className="middle-open">
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div className="trmpc">
                  <span className="subInfor">{dataArray?.moreDesc}</span>
                  <span className="subTitles">: תיאור</span>
                </div>
                <div className="trmpc">
                  <span className="subInfor">{dataArray?.availDate}</span>
                  <span className="subTitles">: תאריך כניסה</span>
                </div>
              </div>
            </div>{" "}
            <div className="trmpc">
              <div className="info">
                <span className="subTitles">חניות</span>
                <span className="subInfor">{dataArray.parkingNum}</span>
              </div>

              <div className="info">
                <span className="subTitles">רחוב</span>
                <span className="subInfor">{dataArray.apStreet}</span>
              </div>
              <div className="info">
                <span className="subTitles"> סוג הנכס</span>
                <span className="subInfor">{dataArray.apType}</span>
              </div>
            </div>{" "}
          </>
        )}
      </div>
      {/* <span>מ"ר</span> */}

      <div className={lastClassName}>
        {" "}
        {/* {expanded &&
          dataArray?.apImages?.map((item, index) => (
            <img key={index} className="image" src={item} />
          ))} */}
        <img className="image" src={currentImgUrl} />
      </div>
    </div>
  );
};

export default Apartment;
