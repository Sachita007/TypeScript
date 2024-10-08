// This is used for passing event (mouse event) props to components

import React from 'react'

type buttonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: buttonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    )
}

export default Button