import React from 'react'

const TabNavItem = ({label,isActive,onClick}) => (
    <li className={isActive ? 'active' : ''} >
        <a className="" href 
            onClick={() => onClick(label)}
        >{label}</a>

    </li>
)

export default TabNavItem;