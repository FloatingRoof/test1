import './App.css';
import {useEffect, useState} from "react";
import {App} from "./App";



export const AppContainers = (props) => {

    const [text, setText] = useState("Начинающий web-программист / Junior Frontend Developer - Денис");

    useEffect(()=>{
        window.onkeydown = handleSpace;
        return function cleanup() {
            window.onkeydown = null
        };
    })

    const handleSpace= (e) => {
        if (e.keyCode === 32) {
            setText("");
        }
    };


    return <App text={text} />
}


