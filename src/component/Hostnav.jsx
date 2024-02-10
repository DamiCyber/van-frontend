import { NavLink } from "react-router-dom"
import "../assets/styles/nav.css"

const Hostnav = () => {
    const hostlinks = [
        {
            path : '/host/dashboard',
            name : 'Dashboard'
        },
        {
            path : '/host/income',
            name : 'Income'
        },
        {
            path : '/host/vanme',
            name : 'Van'
        },
        {
            path : '/host/reviews',
            name : 'Reviews'
        }

    ]
  return (
    <main>
        {
            hostlinks.map((link,index)=>(
                <NavLink key={index} to={link.path} className="nav-link" >{link.name}</NavLink>
            ))
        }

    </main>
  )
}

export default Hostnav