import { useContext } from 'react'
import { ThemeContext } from './TheameContext'

function Box() {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Box</div>
    )
}

export default Box