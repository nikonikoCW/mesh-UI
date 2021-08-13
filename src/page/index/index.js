import React from 'react';
import MeshInput from "../components/input/input"
import MeshButton from "../components/button/button"
import "./index.css"

export default class Component extends React.Component {
    constructor(){
        super();
        this.state={
            menu:[
                {title:'input'},
                {title:'button'},
                {title:'select'},
                {title:'radio'},
                {title:'checkbox'},
                {title:'switch'},
                {title:'slider'},
                {title:'upload'},
                {title:'tables'},
                {title:'tag'},
                {title:'process'},
                {title:'datapick'},
            ],
        }
    }
    componentDidMount(){
        //地址栏跳转传参
        // console.log(this.props.match.params);

        //函数跳转传参
        console.log(this.props.history.location.state);
    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }
    render() {
        return (
            <div className='home' id='baba'>
                <div className='header'>
                    <button onClick={() =>{
                        this.props.history.push({
                            pathname : '/',
                        });
                    }}>首页</button>
                    <button>组件</button>
                </div>
                <div className='content'>
                    <div className='leftMenu'>
                        <ul>
                            {
                                this.state.menu.map((item,index) =>{
                                    return <li key={index} onClick={() =>{this.scrollToAnchor(item.title)}}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='rightUi'>
                        <div id='input'>
                            <p>input</p>
                            <MeshInput title={'姓名：'}></MeshInput>
                            <MeshInput title={'描述：'} type={'textarea'}></MeshInput>
                            <MeshInput title={'地址：'} type={'input'} maxlength={50}></MeshInput>
                        </div>
                        <div id='Button'>
                            <p>Button</p>
                            <MeshButton type={'success'}>
                            <svg t="1628752522463" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3629" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m-49.590857-377.197714L315.977143 498.614857 219.428571 590.848c70.217143 37.814857 168.594286 106.788571 252.854858 213.723429C531.821714 692.662857 715.337143 463.725714 804.571429 443.245714c-14.409143-57.709714-22.528-166.034286 0-223.817143-183.003429 120.685714-342.162286 427.373714-342.162286 427.373715z" p-id="3630"></path></svg>成功
                            </MeshButton>
                            <MeshButton type={'danger'}>危险</MeshButton>
                            <MeshButton type={'warning'}>警告</MeshButton>
                            <MeshButton type={'primary'}>默认</MeshButton>
                            <MeshButton>默认</MeshButton>
                        </div>
                    </div>
                </div>
                <div className='footer'>组件</div>
            </div>
        )
    }
}