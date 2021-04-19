import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'
import CardViewCss from '../cards/CardViewCss.css'



export const CardView = ({imgUrl,text,title}) => {
    const [hovered, setHovered] = useState(false)
    const [initialText, setInitialText] = useState(true)
    const mouseOver = () => {
        setHovered(true)
        setInitialText(false)
    }
    const mouseOut = () => {
        setHovered(false)
        setInitialText(true)
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 one-card">
            <motion.div onMouseEnter={() => mouseOver()} onMouseLeave = {() => mouseOut()}
                className="card text-center shadow card-size" style={{backgroundImage:`url(${imgUrl})`}}>
                <div className="inner">
                    {
                        initialText ? <> 
                        <h3 className="card-title"> {title}</h3>
                        <p className="card-desc"> {text}</p>
                        </> : <>
                         <h3 className="card-title-second"> {title}</h3> 
                         <p className="card-desc-second"> {text}</p>
                         </>
                    }
                    {hovered ? <button className="btn btn-success card-btn">More</button> : null}
                </div>
            </motion.div>
        </div>
    )
}
