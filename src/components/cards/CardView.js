import React from 'react'
import {motion} from 'framer-motion'

export const CardView = ({imgUrl,text,title}) => {
    
    return (
        <motion.div class="col-sm-4 col-xs-6" 
                whileHover={{scale: 1.1}}
                transition={{type: 'spring',stiffness: 300}}>
                <div class="card text-center shadow">
                    <div class="inner">
                        <img src={imgUrl} class="card-img-top img-thumbnail img-responsive" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{text}</p>
                        <a href="#" class="btn btn-success">Go somewhere</a>
                    </div>
                </div>
        </motion.div> 
    )
}
