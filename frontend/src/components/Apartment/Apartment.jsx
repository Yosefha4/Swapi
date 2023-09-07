/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Apartment.css";

const Apartment = (props) => {
  // const [convertefPrice,setConvertedPrice] = useState("");
  const [expanded, setExpanded] = useState(false);
  // const [pressed, setPressed] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    // Toggle the `expanded` state when the component is clicked
    setExpanded(!expanded);
  };

  const handleSpanClick = (e,phoneNumber) => {
    // Prevent the click event from propagating to the parent container
    e.stopPropagation();
    // Add any additional logic you need for the <span> click here
        // Construct the tel: URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
        // Open the phone application to initiate the call
    window.location.href = telUrl;
    console.log(telUrl)
  };
  // const handleClick = () => {
  //   // Execute your condition here and toggle the `clicked` state accordingly
  //   // For example, let's say you set `clicked` to true when a certain condition is met
  //   if (/* your condition */) {
  //     setExpanded(!expanded); // Toggle expanded state
  //   }
  // };

  const dataArray = props.data;
  const dataArrayAsArray = dataArray
    ? dataArray.map((item) => {
        if (typeof item === "string") {
          return item.split(",");
        }
        // If it's not a string, leave it as is
        return item;
      })
    : [];

  const itemImageUrl = dataArrayAsArray ? dataArrayAsArray[12] : ["", ""];
  const firstItem = itemImageUrl;

  // Assuming dataArrayAsArray[12] contains the price value as a string
  const originalPrice = dataArrayAsArray[10]?.toLocaleString() || "0"; // Default to '0' if undefined
  const numericPrice = parseFloat(
    originalPrice.replace(/,/g, "").replace("₪", "")
  ); // Remove commas and parse
  const formatedPrice = isNaN(numericPrice)
    ? "Invalid Price"
    : numericPrice.toLocaleString() + "₪";

  // Now, use the formatedPrice in your code where needed
  // console.log(formatedPrice);

  const containerClassName = `container ${expanded ? "container-click" : ""}`;
  const firstClassName = `firstContainer ${expanded ? "first-click" : ""}`;
  const middleClassName = `middContainer ${expanded ? "middle-click" : ""}`;
  const lastClassName = `lastClassName ${expanded ? "last-click" : ""}`;

  return (
    <div className={containerClassName} onClick={handleClick}>
      <div className={firstClassName}>
   <div  >
        <span style={{ color: "#3c3b3b", fontWeight: "bold", fontSize: 20 }}>
          {" "}
          {formatedPrice}
        
        </span>
        </div>
        {expanded && (
          <div style={{display:'flex',flexDirection:'column',margin:'auto',gap:18}}>
          <div className="contantInfo">
            <strong>שם : </strong>
            <span style={{backgroundColor:'white',boxShadow:'0px 1px 5px black',color:'black',borderRadius:1.5,padding:8,fontWeight:'bold'}}>אורן</span>
         </div>
          <div style={{display:'flex',flexDirection:'column',marginTop:16,gap:6}}>
          <span>טלפון</span>
          <span  onClick={(e) => handleSpanClick(e, '050-123-4567')}  style={{backgroundColor:'lightseagreen',color:'black',boxShadow:'0px 1px 5px yellow',borderRadius:5,padding:6,fontWeight:'bold',cursor:'pointer',border:'1px solid black'}}>050-123-4567</span>
         </div>

  
           
          </div>
        )}
      </div>
      <div className={middleClassName}>
        <div className="trmpc">
          <div className="info">
            <span className="subTitles">חדרים</span>
            <span className="subInfor">{dataArrayAsArray[6]}</span>
          </div>

          <div className="info">
            <span className="subTitles">עיר</span>
            <span className="subInfor">{dataArrayAsArray[4]}</span>
          </div>
          <div className="info">
            <span className="subTitles">מ"ר</span>
            <span className="subInfor">{dataArrayAsArray[9]}</span>
          </div>
        </div>
       {expanded && (<><div className="middle-open">

<div style={{display:'flex',flexDirection:'column',gap:24}}>
        <div className="trmpc">
          
            <span className="subInfor">{dataArrayAsArray[8]}</span>
            <span className="subTitles">: תיאור</span>
          </div>
        <div className="trmpc">
          
            <span className="subInfor">{dataArrayAsArray[11]}</span>
            <span className="subTitles">: תאריך כניסה</span>
          </div>
          </div>

        
        </div> <div className="trmpc">
          <div className="info">
          <span className="subTitles">חניות</span>
            <span className="subInfor">{dataArrayAsArray[7]}</span>
          </div>

          <div className="info">
            <span className="subTitles">רחוב</span>
            <span className="subInfor">{dataArrayAsArray[5]}</span>
          </div>
          <div className="info">
            <span className="subTitles"> סוג הנכס</span>
            <span className="subInfor">{dataArrayAsArray[3]}</span>
          </div>
        </div> </> )}
      </div>
      {/* <span>מ"ר</span> */}

      <div className={lastClassName}>
        {" "}
    
        {expanded && firstItem?.map((item,index) => (
        <img key={index} className="image" src={item} />

        ))}
        <img className="image" src={firstItem ? firstItem[0] : ""} />
      </div>
    </div>
  );
};

export default Apartment;
