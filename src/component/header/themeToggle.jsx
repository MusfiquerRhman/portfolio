import React, {useState, useEffect, useContext} from 'react'
import { ThemeContextAPI } from '../../context APIs/themeContextAPI'


const Toggle = () => {
    const [isLightMode, setIsLightMode] = useState(true)
    const [toggleClass, setToggleClass] = useState("");
	const {setTheme} = useContext(ThemeContextAPI)


    const toggleTheme = () => {
        const newTheme = isLightMode === true ? false : true;
        setIsLightMode(newTheme);
        setTheme(newTheme === true ? 'light' : 'dark')
    }

    useEffect(() => {
        const newClass = isLightMode === true ? "" : 'active'
        setToggleClass(newClass);
    }, [isLightMode])

    return (
        <div className='theme'>
            <div className='accent-container'>
                <p className='accent-text'>Accent</p>
                <div className='accent-colors'>
                    <div className='accent-color teal'></div>
                    <div className='accent-color red'></div>
                    <div className='accent-color green'></div>
                    <div className='accent-color cyan'></div>
                    <div className='accent-color urple'></div>
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