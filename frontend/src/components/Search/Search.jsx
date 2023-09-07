import "./Search.css"


const Search = () => {
  return (
    <div>
      <div className="searchTitle">
        <h3 style={{textAlign:'center',padding:8,backgroundColor:'greenyellow',borderRadius:1}}> ? איזה נכס תרצו לחפש</h3>
      </div>
      <div className="searchContainer">
        
          <div className="byCity">
              <span style={{color:"black",fontSize:14}}>לפי עיר</span>
              <input style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} placeholder="עיר"/>
          </div>
          <div className="byPrice">
          <span style={{color:"black",fontSize:14}}>לפי מחיר</span>

          <input style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} placeholder="מחיר"/>

          </div>
          <div className="byType">
          <span style={{color:"black",fontSize:14}}>לפי סוג</span>

          <input style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} placeholder="סוג נכס"/>
          </div>
          <div className="searchBtn">
              <button style={{height:30,borderRadius:5,width:150,backgroundColor:'greenyellow',fontWeight:'bold'}}>חיפוש</button>
          </div>
      </div>

    </div>
  )
}

export default Search