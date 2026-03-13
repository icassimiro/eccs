import { useState, useEffect } from "react";

const sections = ["home", "sobre", "colecao", "equipe", "contato"];

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let indexAtual = 0;
            let progressoAtual = 0;

            sections.forEach((id, index) => {
                const section = document.getElementById(id);
                if (!section) return;

                const start = section.offsetTop;
                const height = section.offsetHeight;
                const end = start + height;

                if (scrollY >= start && scrollY < end) {
                    indexAtual = index;
                    progressoAtual = (scrollY - start) / height;
                    progressoAtual = Math.min(Math.max(progressoAtual, 0), 1);
                }
            });

            setActiveIndex(indexAtual);
            setProgress(progressoAtual);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const element = document.getElementById(sections[index]);
        if (!element) return;
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="sidebar">
            {sections.map((_, index) => (
                <div key={index} className="sidebar-item">
                    <button
                        onClick={() => scrollToSection(index)}
                        className={`sidebar-number ${index === activeIndex ? "active" : ""}`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </button>

                    {index === activeIndex && index < sections.length - 1 && (
                        <div className="sidebar-line">
                            <div
                                className="sidebar-line-fill"
                                style={{ height: `${progress * 100}%` }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}