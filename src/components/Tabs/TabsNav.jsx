import React, {Component} from 'react'

class TabsNav extends Component {
    render(){
        const {children,activeTab, setActive} = this.props
        return (
            <ul className="nav nav-tabs">
                {React.Children.map(children, child =>  
                    React.cloneElement(child, { activeTab, onClick:setActive }))
                }
            </ul>
        )
    }
}

export default TabsNav