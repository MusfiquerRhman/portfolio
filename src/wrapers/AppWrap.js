import React from 'react'
import NavigationDots from './components/NavigationDots'

const AppWrap = (Component, idName) => function HOC () {
  return (
    <div id={idName} className='app__container'>
        <div>
            <Component />
        </div>
  
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap