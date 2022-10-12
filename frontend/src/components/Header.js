import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
    <div className='logo'>
      {/* <Link to="/"> */}
        <a>KabylyEvents</a>
      {/* </Link> */}
    </div>

    <nav>
      <ul>
        <li>
          {/* <Link href="/events"> */}
            <a>SoccerEv</a>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link href="/events/add"> */}
            <a>Add Event</a>
          {/* </Link> */}
        </li>
        <li>
         
            
            {/* <Link href="/account/login"> */}
              <a className="btn-secondary btn-icon">
                
                Login
              </a>
            {/* </Link> */}
         
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header