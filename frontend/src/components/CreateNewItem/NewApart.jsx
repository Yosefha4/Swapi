/* eslint-disable no-unused-vars */
import axios from "axios";
import "./NewApart.css";

const NewApart = () => {

    const token = localStorage.getItem("access_token");
    console.log(token)


    const VerifyToken = async () =>{
        const opts = {
            headers:{
                "Authorization": "Bearer " + token
            }
        }
        try {
            const res = await axios.get("http://127.0.0.1:5000/user/verifyToken",opts);
            if (res.status === 200) {
                console.log("Test Authoriztion Success !")
                return res.status;
            }
            else{
                return res.status;
            }
        } catch (error) {
            alert("You Must Login Before Add New Post")
            console.log(error)
        }
    }

    const handleCreatePost = async () => {
        let verifyStatusCode = null;
        const isVerify = VerifyToken();
        isVerify.then(result => {
          verifyStatusCode = result;
          console.log(result); // This will log 200
          console.log("verifyStatusCode",verifyStatusCode)
        }).catch(error => {
          console.error(error); // Handle any errors that might occur during the Promise execution
        }).finally(()=>{
            if(verifyStatusCode == null){
                alert("You not authorize to create new post. Please login / signup")
            }
            else{
                alert("Success! You can upload your apartment now !")
            }
        })
        
   

    }

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:24,gap:36}}>
        <h2>Add New Apartment</h2>
        <button style={{padding:24,fontSize:24}} onClick={handleCreatePost}>Add New</button>
    </div>
  )
}

export default NewApart