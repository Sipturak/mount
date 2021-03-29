import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'


function CardComponent() {
    return (
        <div>
            <div class="row justify-content-center">
                <motion.div class="col-sm-4" 
                    whileHover={{scale: 1.1}}
                    transition={{type: 'spring',stiffness: 300}}>
                    <div class="card text-center shadow">
                        <div class="inner">
                            <img style={{height: '200px', width: '602px'}} src="images/hills.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-success">Go somewhere</a>
                        </div>
                    </div>
                </motion.div>  
                <motion.div class="col-sm-4"
                    whileHover={{scale: 1.1}}
                    transition={{type: 'spring',stiffness: 300}}>
                    <div class="card text-center shadow">
                        <div class="inner">
                            <img style={{height: '200px', width: '602px'}} src="images/road.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-success">Go somewhere</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div class="col-sm-4"
                    whileHover={{scale: 1.1}}
                    transition={{type: 'spring',stiffness: 300}}>
                    <div class="card text-center shadow">
                        <div class="inner">
                            <img style={{height: '200px', width: '602px'}} src="images/butterfly-nature-shot.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-success">Go somewhere</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default CardComponent

