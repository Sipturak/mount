import React, { Fragment, useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


export const InfoComponent = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
        
    }, [])
    return (
        <div className="info"  >
            <p className="main-title">Serbia is waiting for you to explore it.In your own way.Soon.</p>
            <p className="main-text">Close your eyes and embark on an imaginative journey to a green country,
               where the Alps meet the Mediterranean and the Pannonian Plain. Let your mind
               wander through vast green forests or charming towns. Set your imagination
               free and descend deep into the mysterious underground world of the Karst
               region or climb high to the peaks of the Alps. 
               Take a moment to think about and plan your future holidays in Serbia.</p>
        </div>
    )
}

