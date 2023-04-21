import axios from "axios";
import { useState } from "react";
import React from "react";
const Login = () => {
    // let username = "vandna patidar"
    //let password = "12345678"
    const [username, setUsername] = useState("vandna patidar")
    const [password, setPassword] = useState("12345678")
    const [fname,setFname] = useState("")
    const handleMyLogin = async (e) => {
        e.preventDefault();
        if (username == "" || password == "") {
            alert("username or password is empty")
            return
        }
        let resp = await axios.post(`http://localhost:8888/api/v1/login`, {
            "username":username,
            "password":password
        }).catch(err=>{
            console.log(err.message);
        })
        
        if(!resp.data){
            alert("no data found")
            return
        }
        if(!resp.data.fname){
            alert("No fname found")
        }
        setFname(resp.data.fname)
        console.log("response===>",resp.data);
        return;
        
    }
    return (
        <>
            <form >
                <div className="mb-3">
                    <label className="form-label">user name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username}
                        onChange={(e) => setUsername(e.target.value)
                        } />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={password}
                        onChange={(e) => setPassword(e.target.value)
                        }
                    />
                </div>

                <button onClick={handleMyLogin} className="btn btn-primary">Submit</button>
            </form>
            username : {username}<br></br>
            password : {password}<br></br>
            fname: {fname}
        </>
    )
}
export default Login;