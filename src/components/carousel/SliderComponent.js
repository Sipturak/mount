import React, { Fragment, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Aos from "aos"
import "aos/dist/aos.css"

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
        slideId.style.transition = "opacity 500ms ease 0s"
        setTimeout(() => {
            setIndex(++n)
            slideId.style.opacity = 1
        }, 800);

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
                <div className="mySlides" id = "slideId">
                    <q className="message">{item.text}</q>
                    <p className="author"><b>- {item.author}</b></p>
                </div>
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

