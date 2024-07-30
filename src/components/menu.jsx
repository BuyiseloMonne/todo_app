import React ,{useState}from 'react'
import '../css/menu.css'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function BurgerMenu () {

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    return (
      <nav className='navbar'>
      <div className='burger-menu'>
        <div className='burger-icon' onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <h2 className='navbar-title'>To-Do List</h2>
        
        <input 
          type='text' 
          className='search-bar' 
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        
        

      </div>
        <div className={`nav-links ${isOpen ? 'show': ''}`}>
          <ul>
            <li>ALL</li>
            <li>ACTIVE</li>
            <li>COMPLETED</li>
          </ul>
        </div>
         
      </nav>
    )

  

  }

export default BurgerMenu