import React ,{useState}from 'react'
import '../css/menu.css'


function BurgerMenu () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    return (
        <div className='header'>
      <div className='burger-menu'>
        <div className='burger-icon' onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open': ''}`}></div>
          <div className={`line ${isOpen ? 'open': ''}`}></div>
          <div className={`line ${isOpen ? 'open': ''}`}></div>
        </div>
        <h1>TO-DO APP</h1>
        </div>
        <div className={`menu ${isOpen ? 'show': ''}`}>
          <ul>
            <li>ALL</li>
            <li>ACTIVE</li>
            <li>COMPLETED</li>
          </ul>
        </div>
         
      </div>
    )

  

  }

export default BurgerMenu