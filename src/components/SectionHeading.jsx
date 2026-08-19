import { motion } from "framer-motion";


export default function SectionHeading({
  number,
  title,
  description,
}) {

  return (

    <motion.div
      className="section-heading"

      initial={{
        opacity: 0,
        y: 35,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
      }}
    >

      <span className="eyebrow">
        {number}
      </span>


      <h2>
        {title}
      </h2>


      {description && (
        <p>
          {description}
        </p>
      )}

    </motion.div>
  );
}