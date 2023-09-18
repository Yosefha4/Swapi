import './Footer.css';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="rightSide">   <h3 style={{margin:'14px 0'}}>קטגוריות</h3>
        <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>מדיניות פרטיות</a>
        <a style={{textDecoration:"none",color:'inherit'}} href='vehicles' >תקנון</a>
        <a style={{textDecoration:"none",color:'inherit'}} href='vehicles' >צור קשר</a>
        </div>
      <div className="rightSide">   <h3 style={{margin:'14px 0'}}>-- SWAPI --</h3>
        {/* <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>נדל"ן</a>
        <a style={{textDecoration:"none",color:'inherit'}}href='vehicles' >רכב</a> */}
        <p>לוח מודעות רכב ונדל"ן </p>
        </div>
      <div className="rightSide">
        <h3 style={{margin:'14px 0'}}>קטגוריות</h3>
        <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>נדל"ן</a>
        <a style={{textDecoration:"none",color:'inherit'}}href='vehicles' >רכב</a>
      </div>
      
    </div>
  )
}

export default Footer