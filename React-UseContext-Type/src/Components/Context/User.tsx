import { useContext } from 'react'
import { UserContext } from './UserContext'



const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => [
        userContext?.setUser({
            name: "Sachita",
            email: "shachitnandk@gmail.com"
        })
    ]
    const handleLogout = () => {
        userContext?.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogIn</button>
            <h1>email:{userContext?.user?.email}</h1>
            <h1>email:{userContext?.user?.name}</h1>
        </div>
    )
}

export default User