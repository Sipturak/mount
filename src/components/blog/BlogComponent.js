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
        <div className="hero-image img-responsive"  data-aos="fade-up">

            <div className = "row" style = {{marginTop:120}}>
                    <div className = "col-sm-6 offset-2" style = {{textAlign:'center', marginTop:50}}>
                        <div className="float-right section-right"> 
                            <h2 >
                                <span className = "heading-blog">COME AND EXPERIENCE THE</span>
                                ARCTIC WILD
                            </h2>
                            <p className = "heading-text" style = {{marginTop:20}}>Arctic Wild provides professionally guided Alaska adventure tours in Alaska’s vast wilderness. Trust your Alaskan adventure vacation to an experienced
                            </p>
                            <p className="heading-text">
                            Groups are small (1 to 8 people), we travel quietly, and the focus is on the land and its inha
                            bitants. Whether you join us for a base camp trip, river rafting, canoeing or backpacking adventure there is plenty of free time for you to explore, 
                            bird watch, photograph, fish or do whatever pleases you most.
                            </p>
                        </div>
                    </div>
                <div className = "col-sm-6">
                </div>
            </div>
        </div>
        </>
    )

}