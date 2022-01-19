import './App.css';
import {useEffect, useState} from "react";


export const App = (props) => {



    const [unVisible, setUnVisible] = useState(false);

    const onClickText = () =>{
        setUnVisible(!unVisible);
    }

    return <div className={"app"}>
        <div className={`infoText ${unVisible && "isUnVisible"}`} onClick={onClickText} >{props.text}</div>
    </div>
}


