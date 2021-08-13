import React from 'react';
import "./button.css"

export default class MeshButton extends React.Component {
    componentDidMount(){
    }
    render() {
        return (
            <div className='mesh-input'>
                <span>{this.props.title}</span>
                    {(() => {
                        switch (this.props.type) {
                        case "primary":
                            return <button className='primary'>{this.props.children}</button>
                        case "success":
                            return <button className='success'>{this.props.children}</button>
                        case "danger":
                            return <button className='danger'>{this.props.children}</button>
                        case "warning":
                            return <button className='warning'>{this.props.children}</button>
                        default:
                            return <button className='defualt'>{this.props.children}</button>
                        }
                    })()}
            </div>
        )
    }
}