import React, { Fragment, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Aos from "aos"
import "aos/dist/aos.css"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

export const SliderComponent = () => {
    const [index, setIndex] = useState(0)
    const [check, setCheck] = useState(false)
    const slides = [
        {
            id: 1,
            text: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
            author: 'John Keats'
        },
        {
            id: 2,
            text: 'But man is not made for defeat. A man can be destroyed but not defeated.',
            author: 'Ernest Hemingway'
        },
        {
            id: 3,
            text: "I have not failed. I've just found 10,000 ways that won't work.",
            author: 'Thomas A. Edison'
        }
    ]
    const [item, setItem] = useState(slides[0])
    
    const plusSlides = (n) => {       
        const slideId = document.getElementById("slideId");
        slideId.style.opacity = 0
        slideId.style.transition = "opacity 500ms ease-in-out 0s"
        setTimeout(() => {
            setIndex(++n)
            slideId.style.opacity = 1
        }, 500);

    }
    const minusSlides = (n) => {
        setIndex(--n)
    }

    useEffect(() => {
        console.log(index,check)
        if(index === slides.length){
            setIndex(0)
            setItem(slides[0])

        }
        else if(index < 0){
            setIndex(slides.length-1)
            setItem(slides[slides.length-1])
        }
        else{
            setItem(slides[index])
        }
    }, [index])

    useEffect(() => {
        Aos.init({
            duration: 2000})
        
    }, [])
   
    return (
        <div data-aos="fade-up" >
            <div className="slideshow-container">
                <Grid container className="move">
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <div className="logo">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="5rem" height="5rem" fill="currentColor" 
                                class="bi bi-pin-angle-fill" viewBox="0 0 9 16">
                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                            </svg>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="mySlides" id = "slideId">
                            <q className="message">{item.text}</q>
                            <p className="author"><b>- {item.author}</b></p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="dot-container">
                    <motion.div whileHover={{opacity: 0.5}}
                        className="prev" onClick={() => minusSlides(index)}>❮
                    </motion.div>
                    <div className="num"> {index+1}/{slides.length}</div>
                    <motion.div whileHover={{opacity: 0.5}}
                        className="next" onClick={() => plusSlides(index)}>❯
                    </motion.div>
            </div>
        </div>
    )
}

