import React, {Component} from 'react'

class TabsContainer extends Component {
    render(){
        const {children,activeTab} = this.props
        if(children.length>0 && activeTab==='') return children[0]
        return (
            <div className="tab-content">
                {React.Children.map(children, child => {
                    
                    if(child.props.label === activeTab) 
                        return React.cloneElement(child, { isActive:true })
                })}
            </div>
        )
    }
}

export default TabsContainer