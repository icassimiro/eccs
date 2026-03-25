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
                            <strong className="strongnumber">1.</strong>Eficiência
                        </h2>
                        <hr className="hr" />
                        <h2 className="h2boards">
                            Transformamos processos manuais em fluxos digitais inteligentes, reduzindo o tempo gasto na busca e organização de documentos.
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
                            <strong className="strongnumber">2.</strong>Segurança
                        </h2>
                        <hr className="hr" />
                        <h2 className="h2boards">
                            Garantimos a proteção dos seus documentos com sistemas seguros e monitorados, evitando perdas, acessos indevidos e falhas operacionais.
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
                            <strong className="strongnumber">3.</strong>Adequação
                        </h2>
                        <hr className="hr" />
                        <h2 className="h2boards">
                          Adequamos sua gestão documental às normas e legislações vigentes, garantindo conformidade e padronização dos processos.
                        </h2>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
}