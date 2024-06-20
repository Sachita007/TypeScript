

type Props = {
    name: string,
    messageCount?: number, // Here We used ? to specify that it is optional props
    isLogged: boolean
}

const Greet = (props: Props) => {
    const { messageCount = 0 } = props
    return (
        <>
            {props.isLogged ? <div>Hello My name is {props.name}, and the message count is {messageCount}</div> : <div>Not Loged In</div>}

        </>
    )
}

export default Greet