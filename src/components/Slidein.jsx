import { motion } from "framer-motion"

function Slidein({ children }) {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         variants={{
            visible: { x: 0 },
            hidden: { x: -100 }
         }}
      >
         {children}
      </motion.div>
   );
}

export default Slidein;