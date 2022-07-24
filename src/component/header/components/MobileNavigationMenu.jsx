import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';


const MobileNavigationMenu = (props) => {
    const {toggleTheme, onClickAccent, toggleClass} = props;

    const [mobileMenuClass, setmobileMenuClass] = useState(`mobile-navigation__menu`)

    const showNavigationMenu = () => {
        setmobileMenuClass(`mobile-navigation__menu display`);
    }

    const hideNavigationMenu = () => {
        setmobileMenuClass(`mobile-navigation__menu`);
    }

    return (
        <div className='mobile-navigation'>
            <div className='mobile-navigation__bars' onClick={showNavigationMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <div className={mobileMenuClass}>
                <div className='toggle-container'>
                    <p className=''>Dark Theme</p>
                    <div className={`toggle ${toggleClass}`} onClick={toggleTheme}>
                        <i className='indicator'></i>
                    </div>
                </div>

                <p className='mobile-navigation__close' onClick={hideNavigationMenu}><CloseIcon /></p>

                <div className='mobile-navigation__accents'>
                    <h4>Accent Colors: </h4>
                    <div className='accent-colors'>
                        <div className='accent-color teal' onClick={() => onClickAccent('teal')}></div>
                        <div className='accent-color red' onClick={() => onClickAccent('red')}></div>
                        <div className='accent-color purple' onClick={() => onClickAccent('purple')}></div>
                        <div className='accent-color pink' onClick={() => onClickAccent('pink')}></div>
                        <div className='accent-color blue' onClick={() => onClickAccent('blue')}></div>
                        <div className='accent-color green' onClick={() => onClickAccent('green')}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigationMenu;