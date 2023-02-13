import React from "react";

class Menu extends React.Component {
    render () {
        return (
            <div className="header">
                {this.props.title}
            </div>
        )
    }
}
export default Menu