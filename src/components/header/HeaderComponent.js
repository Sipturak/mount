import React from 'react'
import {motion} from 'framer-motion'

export const HeaderComponent = () => {
    return (
        <div class="hero-image img-responsive">
        <div class="hero-text">
          <motion.h1 initial={{y: -350}} animate={{y: -10}}
                     transition={{delay: 0.2,type: 'tween',duration: 3,stiffness: 120}}>
            Welcome
          </motion.h1>
        </div>
      </div>
    )
}

