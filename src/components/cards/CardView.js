import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'



export const CardView = ({imgUrl,text,title}) => {
    const [hovered, setHovered] = useState(false)
    const [initialText, setInitialText] = useState(true)
    const mouseOver = () => {
        setHovered(true)
        setInitialText(false)
    }
    const mouseOut = () => {
        console.log('mouse out')
        
        setHovered(false)
        setInitialText(true)
    }
    return (
        <div className="col-sm-3 col-xs-6">
            <motion.div onMouseEnter={() => mouseOver()} onMouseLeave = {() => mouseOut()}
                whileHover={{backgroundColor: 'rgba(0,0,0,0.9)', backgroundBlendMode: 'darken'}}
                transition={{type: 'tween',duration: 0}}
                className="card text-center shadow" style={{width: '17rem',height: '30rem',backgroundImage:`url(${imgUrl})`}}>
                <div className="inner">
                    {initialText ? <h3 className="card-title"> {title}</h3>: 
                                   <h3 className="card-title-second"> {title}</h3>}
                    {initialText ? <p className="card-desc"> {text}</p>: 
                                   <p className="card-desc-second"> {text}</p>}
                    {hovered ? <button className="btn btn-success" style={{position: 'relative',top:380,right:55}}>More</button> : null}
                </div>
            </motion.div>
        </div>
    )
}
