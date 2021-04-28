import React ,{ useEffect } from "react";
import {blog} from "../blog/blog.css";
import Aos from "aos"


export const BlogComponent = () =>{

    useEffect(() => {
        Aos.init({
            duration: 4000})
        
    }, [])

    return (
        <div data-aos = "fade-up" className = "container container-split">
            <div className = "row" style = {{textAlign: 'center'}}>
                <div className = "col-md-4">
                    <p>
                    <span className = "g-letter">G</span>
                    <span className = "blog-text">lobal warming affects plant life, rainfall and seasonal changes. There will be warmer air and water, less ice and snow, more drought and extreme weather, 
                        acidic seas and new diseases. When living conditions change, people, animals and plants must move to find new homes where they can live. 
                        Others have no places to go. We are already experiencing the consequences of global warming – and these will become more severe in the near future.</span>
                    </p>
                </div>
                <div className = "col-md-4 blog-text">
                    <p>lobal warming affects plant life, rainfall and seasonal changes. There will be warmer air and water, less ice and snow, more drought and extreme weather, 
                        acidic seas and new diseases. When living conditions change, people, animals and plants must move to find new homes where they can live. 
                        Others have no places to go. We are already experiencing the consequences of global warming – and these will become more severe in the near future.</p>

                </div>
                <div className = "col-md-4 blog-text">
                    <p>lobal warming affects plant life, rainfall and seasonal changes. There will be warmer air and water, less ice and snow, more drought and extreme weather, 
                        acidic seas and new diseases. When living conditions change, people, animals and plants must move to find new homes where they can live. 
                        Others have no places to go. We are already experiencing the consequences of global warming – and these will become more severe in the near future.</p>

                </div>
            </div>
        </div>
    )
}