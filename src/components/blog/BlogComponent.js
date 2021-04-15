import React, {Fragment, useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import BlogComponentCss from '../blog/BlogComponentCss.css'
import { darken } from '@material-ui/core'
import { motion } from 'framer-motion'


export const BlogComponent = () =>{
    useEffect(() => {
        Aos.init()
        
    }, [])
    return (
        <>
        <div className="hero-image img-responsive" style = {{height:650, backgroundBlendMode:'darken', backgroundColor: 'rgb(2 2 2 / 35%);'}}>

            <div className = "row" style = {{marginTop:120}}>
                <motion.div transition={{type: 'tween',duration: 4, }}  animate={{ rotate: 360 }}>
                    <div className = "col-sm-6 offset-2" style = {{textAlign:'center', marginTop:50}}>
                        <div className="float-right" style = {{marginRight:50, width: "50%", marginTop:100}}> 
                            <h2 >
                                <span className = "heading-blog">COME AND EXPERIENCE THE</span>
                                ARCTIC WILD
                            </h2>
                            <p style = {{color: '#ece4cb', textAlign:'justify', fontSize: 14, marginTop:20, }}>Arctic Wild provides professionally guided Alaska adventure tours in Alaska’s vast wilderness. Trust your Alaskan adventure vacation to an experienced
                            </p>
                            <p style = {{color: '#ece4cb', textAlign:'justify', fontSize: 14}}>
                            Groups are small (1 to 8 people), we travel quietly, and the focus is on the land and its inha
                            bitants. Whether you join us for a base camp trip, river rafting, canoeing or backpacking adventure there is plenty of free time for you to explore, 
                            bird watch, photograph, fish or do whatever pleases you most.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div className = "col-sm-6">
                </div>
            </div>
        </div>
        </>
    )

}