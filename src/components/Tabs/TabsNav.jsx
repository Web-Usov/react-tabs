import React from 'react'

const TabsNav = ({ children, activeTab, setActive }) => (
    <ul className="nav nav-tabs">
        {React.Children.map(children, (child, i) =>
            React.cloneElement(child, { 
                isActive:activeTab.toLowerCase() === child.props.label.toLowerCase() || (i === 0 && activeTab===""), 
                onClick: setActive 
            }))
        }
    </ul>
)

export default TabsNav