

type Props = {
    children: string
}

const Header = (props: Props) => {
    return (
        <div>{props.children}</div>
    )
}

export default Header