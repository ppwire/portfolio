import { motion } from 'framer-motion'

const FadeIn = ({ children }) => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
      >
         {children}
      </motion.div>
   )
}

export default FadeIn