

type statusProps = {
    status: "loading" | "success" | "failed"
}

const Status = (props: statusProps) => {
    let message
    if (props.status === "loading") {
        message = "Message is loading"

    } else if (props.status === "success") {
        message = "Message loaded"
    }
    else if (props.status === "failed") {
        message = "Message loading failed"

    }
    return (
        <div>{message}</div>
    )
}

export default Status