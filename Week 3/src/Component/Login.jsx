
import React from "react";
import './Login.css';
class Login  extends React.Component {
    
    render() { 
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>FORM LOGIN</h2>
                        
                            <form>
                            <h1>Tugas Pertemuan Tiga</h1>
                                <div className="form-group">
                                    <label for="Email1">Username </label>
                                     <input type="email" className="form-control" placeholder="Enter your username"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="Password1">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your Password" />
                                </div>
                                <button type="submit" >Login</button>   
                                <div class="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <button type="button" class="cancelbtn">Cancel</button>
                                  
                            </form>
                        </div>
                </div>
            </div> 
         );
    }
}
 
export default Login ;