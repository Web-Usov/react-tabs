import React from 'react'

const TabsContainer = ({children,activeTab}) => (
    <div className="tab-content">
        {React.Children.map(children, (child, i) => {                        
            if(child.props.label.toLowerCase() === activeTab.toLowerCase() || (i === 0 && activeTab==="")) 
                return React.cloneElement(child)
        })}
    </div>
)

export default TabsContainer