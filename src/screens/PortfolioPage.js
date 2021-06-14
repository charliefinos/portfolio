import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
const PortfolioPage = ({ portfolio }) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="portfolio__content">
                <h1>Portfolio</h1>
                <div className="portfolio__cards">
                    {portfolio.map(item => (
                        <Card key={item} item={item} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage