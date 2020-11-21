import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import Logout from "./Logout"


const HomePage = () => {
    const { currentUser } = useAuth()

    return (
        <>
            <h1>"Hello { currentUser ? currentUser.email : "World" } </h1>
            <h3>{ currentUser ? <Logout/> : "" }</h3>
            <h3>{ currentUser ? <Link to="/profile">Profile</Link> : ""}</h3>
            <h3>{ !currentUser ? <Link to="/login">Log In</Link> : ""}</h3>
            <h3>{ !currentUser ? <Link to="/signup">Sign Up</Link> : ""}</h3>
        </>
    )
}

export default HomePage
