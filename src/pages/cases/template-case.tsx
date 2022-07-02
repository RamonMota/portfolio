import { motion, useCycle } from 'framer-motion/dist/framer-motion'
import React, { useEffect, useRef } from 'react'
import './template-case.scss'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
        }
    }
}
export const TemplateCase = () => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
  
     return (
    <div>
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={500}
            ref={containerRef}
            >
            <motion.div className="background" variants={sidebar} />
                <h1>TemplateCase</h1>
                <button onClick={() =>toggleOpen()}>
                   abrir
                </button>
        </motion.nav>
    </div>
    )
}