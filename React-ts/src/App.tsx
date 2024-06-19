
import './App.css'

import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {

  const person = {
    first: "sachita",
    last: "Nand"
  }

  const personList = [{
    first: "sachita",
    last: "Nand"
  }, {
    first: "Sach",
    last: "Nand"
  }, {
    first: "Sachit",
    last: "Nand"
  }, {
    first: "Shachita",
    last: "Nand"
  }]

  return (
    <>
      <Greet name="Sachita Nand" messageCount={10} isLogged={true} />
      <Person name={person} />
      <PersonList name={personList} />
    </>
  )
}

export default App
