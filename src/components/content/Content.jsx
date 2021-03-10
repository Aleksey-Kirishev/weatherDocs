import React, {useState} from "react"
import s from "./Content.module.css"
import ContentDataC from "./ContentData/ContentDataC";
import ContentDataF from "./ContentData/ContentDataF";
import Weather from "./Weather/Weather";

const Content = (props) => {

    let [cMode, setCMode] = useState(true)

        return <div className={s.content}>
            {props.weather.map(m =><Weather item={m} key={m.id} />)}
            {cMode
            ? <ContentDataC temp={props.temp}  />
            : <ContentDataF temp={props.temp}  />}
            <span className={s.degreesButtons}>
                        <button className={s.cButton} onClick={()=>{setCMode(true)}}>C</button>
                        <button className={s.fButton} onClick={()=>{setCMode(false)}}>F</button>
                    </span>
        </div>
    }

export default Content;