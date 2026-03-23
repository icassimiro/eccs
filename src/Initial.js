import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ============================
   CONFIG
============================ */
const LOADER_DURATION = 4000;
const EXIT_FADE_DURATION = 600;

/* ============================
   ASSETS (opcional)
============================ */
const HOME_ASSETS = [
  "/images/home/hero.jpg",
  "/images/home/gallery1.jpg",
  "/images/home/gallery2.jpg"
];

/* ============================
   PRELOAD COM PROGRESSO
============================ */
const preloadAssetsWithProgress = (assets, onProgress) => {
  let loaded = 0;

  return Promise.all(
    assets.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;

          const done = () => {
            loaded++;
            onProgress(loaded / assets.length);
            resolve();
          };

          img.onload = done;
          img.onerror = done;
        })
    )
  );
};

export default function Initial() {
  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [assetsProgress, setAssetsProgress] = useState(0);

  const lastProgress = useRef(0);

  /* BLOQUEIA SCROLL */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  /* PRELOAD */
  useEffect(() => {
    preloadAssetsWithProgress(HOME_ASSETS, (p) => {
      setAssetsProgress(p);
    });
  }, []);

  /* FADE IN */
  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  /* LOADER */
  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;

      const elapsed = timestamp - start;

      const timeProgress = Math.min(elapsed / LOADER_DURATION, 1);
      const combined = Math.min(timeProgress, assetsProgress || timeProgress);

      let percent = combined * 100;

      if (percent < lastProgress.current) {
        percent = lastProgress.current;
      } else {
        lastProgress.current = percent;
      }

      setProgress(percent);

      if (combined < 1) {
        requestAnimationFrame(animate);
      } else {
        setFadeOut(true);
        setTimeout(() => navigate("/home"), EXIT_FADE_DURATION);
      }
    };

    requestAnimationFrame(animate);
  }, [navigate, assetsProgress]);

  return (
    <div
      className={`init-wrapper ${fadeIn ? "visible" : ""} ${
        fadeOut ? "exit" : ""
      }`}
    >
      <div className="center-text">ECCS</div>

      <div className="loader-bottom">
        <div className="loader-track">
          <div
            className="loader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}