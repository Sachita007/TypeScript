import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => [
        setUser({
            name: "Sachita",
            email: "shachitnandk@gmail.com"
        })
    ]
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogIn</button>
            <h1>email:{user?.name}</h1>
            <h1>email:{user?.email}</h1>
        </div>
    )
}

export default User