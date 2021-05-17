import React, { useState, useContext } from "react"
import { AuthContext } from "./index"
import firebase from "firebase"

const Join = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setErrors] = useState("")

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true)
            })
            .catch(e => {
                setErrors(e.message)
            })
    };

    const handleFormJoinGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
                if (res.user) Auth.setLoggedIn(true)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="on"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="on"
                />
                <hr />
                <button className="googleBtn" type="button" onClick={handleFormJoinGoogle}>
                    {/* <img
                        src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                        alt="logo"/> */} JOIN WITH GOOGLE
                </button>
                <button type="submit">Join</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Join