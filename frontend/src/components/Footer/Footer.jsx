import './Footer.css';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="rightSide">   <h3 style={{margin:'14px 0'}}>קטגוריות</h3>
        <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>נדל"ן</a>
        <a style={{textDecoration:"none",color:'inherit'}}href='vehicles' >רכב</a></div>
      <div className="rightSide">   <h3 style={{margin:'14px 0'}}>קטגוריות</h3>
        <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>נדל"ן</a>
        <a style={{textDecoration:"none",color:'inherit'}}href='vehicles' >רכב</a></div>
      <div className="rightSide">
        <h3 style={{margin:'14px 0'}}>קטגוריות</h3>
        <a style={{textDecoration:"none",color:'inherit'}} href='/realEstate'>נדל"ן</a>
        <a style={{textDecoration:"none",color:'inherit'}}href='vehicles' >רכב</a>
      </div>
      
    </div>
  )
}

export default Footer