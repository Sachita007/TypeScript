

type personListProps = {
    name: {
        first: string,
        last: string
    }[]
}

const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.name.map((name) => { return (<h1 key={name.first}> {name.first} {name.last} </h1>) })}
        </div>
    )
}

export default PersonList