import React,{useState} from 'react'
function MeshCheckbox() {
    let [checked,setCheck] = useState(false);
    const closethis = () =>{
        setCheck(false)
    }
    const checkthis = () =>{
        setCheck(true)
    }
    if(checked){
        return  (<svg onClick={closethis} t="1629096486677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1142" width="32" height="32"><path d="M810.666667 128H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333z m-384 597.333333l-213.333334-213.333333 60.16-60.16L426.666667 604.586667l323.84-323.84L810.666667 341.333333l-384 384z" p-id="1143" fill="#1296db"></path></svg>)
    }else{
        return (<svg onClick={checkthis} t="1629096549286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1481" width="32" height="32"><path d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334m0-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z" p-id="1482"></path></svg>)
    }
}

export default MeshCheckbox