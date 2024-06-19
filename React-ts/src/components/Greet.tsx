

type Props = {
    name: string,
    messageCount: number,
    isLogged: boolean
}

const Greet = (props: Props) => {
    return (
        <>
            {props.isLogged ? <div>Hello My name is {props.name}, and the message count is {props.messageCount}</div> : <div>Not Loged In</div>}

        </>
    )
}

export default Greet