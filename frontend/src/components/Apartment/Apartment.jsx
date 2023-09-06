/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Apartment.css";

const Apartment = (props) => {
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

    const itemImageUrl =dataArrayAsArray ? dataArrayAsArray[10]: ["",""]
    const firstItem = itemImageUrl?.[0];
    //   console.log("firstItem",firstItem)
    //   itemImageUrl?.map((item) => console.log(item))
    // {dataArray && console.log("first",dataArrayAsArray[10][0])}
  return (
    <div className="container">
      <div className="firstContainer">
        <span style={{ color: "#3c3b3b", fontWeight: "bold", fontSize: 20 }}>₪</span>
        <span style={{ color: "#3c3b3b", fontWeight: "bold", fontSize: 20 }}>
          {" "}
          {dataArrayAsArray[8]?.toLocaleString()}
        </span>
      </div>
      <div className="middContainer">
        <div className="info">
          <span
           className="subTitles"
          >
            חדרים
          </span>
          <span className="subInfor">
            {dataArrayAsArray[5]}
          </span>
        </div>
       
        <div className="info">
          <span
           className="subTitles"
           >
            עיר
          </span>
          <span className="subInfor">
            {dataArrayAsArray[3]}
          </span>
        </div>
        <div className="info">
          <span
           className="subTitles"
           >
            מ"ר
          </span>
          <span  className="subInfor">
            {dataArrayAsArray[7]}
          </span>
        </div>
        {/* <span>מ"ר</span> */}
      </div>
      <div className="lastContainer">
        {" "}
        <img className="image" src={firstItem ? firstItem : ""} />
      </div>
    </div>
  );
};

export default Apartment;
