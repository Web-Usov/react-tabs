import React from 'react'

const TabNavItem = ({label,activeTab,onClick}) => {
    const classNameLi = label === activeTab ? 'active' : '';    
    console.log("TabsNavItem",label,activeTab);
    return (
        <li className={classNameLi} >
            <a className=""
                onClick={() => onClick(label)}
            >
                {label}
            </a>

        </li>
    )
}

export default TabNavItem;