import React from 'react';
import "./input.css"

export default class MeshInput extends React.Component {
    componentDidMount(){
        console.log(this.props.type,this.props.maxlength);
    }
    render() {
        return (
            <div className='mesh-input'>
                <span>{this.props.title}</span>
                    {(() => {
                        switch (this.props.type) {
                        case "textarea":
                            return <textarea rows="3" cols="20"></textarea>
                        default:
                            return <input></input>
                        }
                    })()}
            </div>
        )
    }
}