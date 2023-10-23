import React from 'react'

const Tab = (active,selectTab,children) => {
 const buttonClasses=active?'mr-3 font-semibold hover:text-white ':'text-[ADB7BE]'
    return (
   <button onClick={selectTab} >
    <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
    </p>

   </button>
  )
}

export default Tab