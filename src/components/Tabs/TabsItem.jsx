import React from 'react'

const TabsItem = ({children, isActive}) => {
    const className = isActive ? "tab-pane fade in active" : "tab-pane fade";
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default TabsItem