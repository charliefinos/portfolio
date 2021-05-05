import React from 'react'
import { motion } from 'framer-motion'
const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>Contact</h1>
        </motion.div>
    )
}

export default ContactPage