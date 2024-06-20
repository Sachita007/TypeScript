
import './App.css'

import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Header from './components/Header'
import Rapper from './components/Rapper'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'

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
      {/* This section Is for Passing general Props , like string , array, etc and also in Greet components we used not necessary props by using ? */}
      {/* <Rapper>
        <Header>This is header of this site we used children props here</Header>
      </Rapper>
      <Greet name="Sachita Nand" messageCount={10} isLogged={true} />
      */}


      {/* This section is for passing children as props also passing components as children props using "React.ReactNode" type in react */}
      {/* <Person name={person} />
      <PersonList name={personList} />
      <Status status='success' /> */}

      {/* This section is for passing events as props like mouse clicked event , eventHandler etc

      <Button handleClick={(id, event) => { console.log("Button Clicked", event, id) }}></Button>
      <Input value='' handleChange={(event) => { console.log(event.target.value) }} /> */}

      This section for passing css as props
      <Container style={{ backgroundColor: "red", width: "10rem", height: "10rem", borderRadius: "10px" }} />

    </>
  )
}

export default App
