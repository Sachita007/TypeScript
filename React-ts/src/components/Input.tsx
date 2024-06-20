import React from 'react'

type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: inputProps) => {
    // handlechange can also be done by without passing the props like using types here
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
    return (
        <input type='text' value={props.value} onChange={handleInputChange}></input>
    )
}

export default Input