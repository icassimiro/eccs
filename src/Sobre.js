import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* =============================
   CARD VARIANTS
============================= */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.9,
    filter: "blur(32px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

/* =============================
   FLOAT ANIMATION
============================= */
const floatAnimation = {
  y: [0, -4, 0, 4, 0],
  rotateY: [0, 2, 0, -2, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

/* =============================
   CONTAINER VARIANTS
============================= */
const containerVariants = (scrollDir) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      staggerDirection: scrollDir
    }
  }
});

/* =============================
   COMPONENT
============================= */
export default function Sobre() {
  const [scrollDir, setScrollDir] = useState(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? 1 : -1);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="divfullservico">
      
      <div className="divzero">
        <h2 className="zero">03</h2>
      </div>

      <div className="divtitleservico">
        <h2 className="titleservico">
          Descubra como a ECCS simplifica e otimiza a gestão de documentos da sua empresa.
        </h2>
      </div>

      <motion.div
        className="divboards"
        variants={containerVariants(scrollDir)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
      >

        {/* BOARD 1 */}
        <motion.div className="boards" variants={cardVariants}>
          <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            animate={floatAnimation}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="titles">
              <strong className="strongnumber">1.</strong>Informação
            </h2>
            <hr className="hr" />
            <h2 className="h2boards">
              Digitalizamos, classificamos e organizamos seus documentos em
              sistemas estruturados que facilitam a busca e o acesso imediato.
            </h2>
          </motion.div>
        </motion.div>

        {/* BOARD 2 */}
        <motion.div className="boards" variants={cardVariants}>
          <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            animate={floatAnimation}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="titles">
              <strong className="strongnumber">2.</strong>Informação
            </h2>
            <hr className="hr" />
            <h2 className="h2boards">
              Implementamos sistemas modernos de gestão documental que permitem
              armazenar e controlar arquivos com segurança.
            </h2>
          </motion.div>
        </motion.div>

        {/* BOARD 3 */}
        <motion.div className="boards" variants={cardVariants}>
          <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            animate={floatAnimation}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="titles">
              <strong className="strongnumber">3.</strong>Informação
            </h2>
            <hr className="hr" />
            <h2 className="h2boards">
              Gerenciamos seus documentos seguindo padrões rigorosos de segurança
              e conformidade com legislações e normas corporativas.
            </h2>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}