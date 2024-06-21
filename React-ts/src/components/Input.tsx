import React from 'react'

type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


// const Input = (props: inputProps) => {

// we can also deStructure the style to make it more handy to use and above old style to use props  
const Input = ({ value, handleChange }: inputProps) => {
    // // handlechange can also be done by without passing the props like using types here
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }
    return (
        <input type='text' value={value} onChange={handleChange}></input>
    )
}

export default Input