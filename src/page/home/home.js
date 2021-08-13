import React from 'react';
import "./home.css"


export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <button>首页</button>
                    <button onClick={() =>{
                        this.props.history.push({
                            pathname : '/index',
                            state :{
                                id:3
                            }
                        });
                    }}>组件</button>
                </div>
                <div className='home-content'>
                    <p className='e1'>用爱发电！</p>
                    <p className='e2'>Power generation with love</p>
                </div>
                <div className='footer'>首页</div>
            </div>
        )
    }
}