import "./Extra.css"

const Extra = () => {
  return (
    <div className="extraContainer">
      <div className="circleContainer" 
      >
        <a style={{textDecoration:'none',color:'inherit'}} href="https://www.mizrahi-tefahot.co.il/mortgages/calculator/" target="__blank__">מחשבון משכנתא</a>
      </div>
      <div className="circleContainer" >   <p>ייעוץ פיננסי</p></div>
      <div className="circleContainer"><a style={{color:'inherit',textDecoration:'none'}} href="https://www.gov.il/apps/mot/carlistprice/" target="__blank__">מחירון רכב</a></div>
    </div>
  )
}

export default Extra