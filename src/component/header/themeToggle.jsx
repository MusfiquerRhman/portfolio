import React, {useState, useEffect, useContext} from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { ThemeContextAPI } from '../../context APIs/themeContextAPI'
import { AccentContextAPI } from '../../context APIs/accentContextAPI';

const Toggle = () => {
    const [isLightMode, setIsLightMode] = useState(false)
    const [toggleClass, setToggleClass] = useState("");
	const {setTheme} = useContext(ThemeContextAPI);
    const {setAccent} = useContext(AccentContextAPI);
    const [accentColor, setAccentColor] = useState('teal');

    const toggleTheme = () => {
        const newTheme = isLightMode === true ? false : true;
        setIsLightMode(newTheme);
        setTheme(newTheme === true ? 'light' : 'dark')
    }

    useEffect(() => {
        const newClass = isLightMode === true ? "" : 'active'
        setToggleClass(newClass);
    }, [isLightMode])

    const onClickAccent = (color) => {
        setAccentColor(color);
    }

    useEffect(() => {
        setAccent(accentColor);
    }, [accentColor, setAccent]);

    return (
        <div className='theme'>
            <div className='accordion-container'>
                <input type="checkbox" name="accordion" id="section1" className="accordion__input"/>
                <label htmlFor="section1" className="accordion__label">Colors<ArrowForwardIosOutlinedIcon className='icon'/></label>
                <div className="accordion__content">
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
			<div className='toggle-container'>
                <div className={`toggle ${toggleClass}`} onClick={toggleTheme}>
                    <i className='indicator'></i>
                </div>
                <p className='toggle-text'>Theme</p>
            </div>
        </div>
    )
}

export default Toggle;