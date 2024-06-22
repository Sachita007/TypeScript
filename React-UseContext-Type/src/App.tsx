
import './App.css'
import User from './Components/Context/User'
import { UserContextProvider } from './Components/Context/UserContext'

function App() {


  return (
    <>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  )
}

export default App
