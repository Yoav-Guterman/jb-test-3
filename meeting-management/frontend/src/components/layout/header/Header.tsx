import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                Logo
            </div>

            <div>
                <nav>
                    <NavLink to="/list">meetings</NavLink>
                    <NavLink to="/add">add new meeting</NavLink>
                </nav>
            </div>

        </div>
    )
}