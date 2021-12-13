import React from 'react'
import'./Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
const header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt='' />
            </div>
            <div className='searchBar'>
                <div className='searchIcon'>
                    <img src={searchIcon}  alt=''/>
                </div>
                <input className='searchInput' placeholder='Collection, Items or User....'/>
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt='' />
                </div>
            </div>
            <div className='loginBtn'>
                GET IN
            </div>
        </div>
    )
}

export default header
