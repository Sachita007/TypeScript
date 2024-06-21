
import { Name } from "./Person.types"

// Old Code In new we Separated the type in different folder and imported here
// type personListProps = {
//     name: {
//         first: string,
//         last: string
//     }[]
// }

type PersonList = {
    name: Name[]
}

const PersonList = (props: PersonList) => {
    return (
        <div>
            {props.name.map((name) => { return (<h1 key={name.first}> {name.first} {name.last} </h1>) })}
        </div>
    )
}

export default PersonList