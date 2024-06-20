import React from 'react'

type Props = {
    children: React.ReactNode // This is used to passing components in the as children 
}

const Rapper = (props: Props) => {
    return (
        <div>
            {props.children}
            This is used as rapper of header components ,which is passed as children
        </div>
    )
}

export default Rapper