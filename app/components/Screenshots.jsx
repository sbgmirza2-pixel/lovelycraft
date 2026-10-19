'use client';

import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    { src: "/screenshot-1.webp", alt: "Lovely Craft Gameplay Screenshot 1" },
    { src: "/screenshot-2.webp", alt: "Lovely Craft Gameplay Screenshot 2" },
    { src: "/screenshot-3.webp", alt: "Lovely Craft Gameplay Screenshot 3" },
    { src: "/screenshot-4.webp", alt: "Lovely Craft Gameplay Screenshot 4" },
  ];

  return (
    <section className="screenshots-section" id="screenshots">
      {/* Background Subtle Green Glows */}
      <div className="smoke-bg-container">
        <div className="smoke-blob smoke-blob-1"></div>
        <div className="smoke-blob smoke-blob-2"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#23891A] inline-block rounded-none"></span>
            <span className="font-[var(--font-display)] text-xs md:text-sm font-bold tracking-wider text-[#23891A] uppercase">
              VISUAL PREVIEW
            </span>
          </div>
          <h2 className="section-title">Lovely Craft APK Screenshots</h2>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="screenshots-scroll-container">
          <div className="screenshots-track">
            {screenshots.map((item, index) => (
              <div key={index} className="screenshot-card">
                <div className="image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={380}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="screenshot-img"
                  />
                  {/* Shiny Glaze Layer */}
                  <div className="shine-layer"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .screenshots-section {
          position: relative;
          padding: 60px 0;
          background: #ffffff;
          border-bottom: 1px solid #DCE8D6;
          overflow: hidden;
        }

        /* Animated Background Glows matching theme */
        .smoke-bg-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          filter: blur(80px);
          opacity: 0.25;
        }

        .smoke-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 0;
          animation: smokeFloat 12s ease-in-out infinite alternate;
        }

        .smoke-blob-1 {
          background: rgba(35, 137, 26, 0.25);
          top: -20%;
          left: 10%;
        }

        .smoke-blob-2 {
          background: rgba(21, 37, 27, 0.15);
          bottom: -20%;
          right: 10%;
          animation-delay: -6s;
          animation-direction: alternate-reverse;
        }

        @keyframes smokeFloat {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.2);
          }
          100% {
            transform: translate(-40px, 50px) scale(0.9);
          }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          margin-bottom: 24px;
          text-align: left;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: #15251B;
          margin: 0;
        }

        /* Horizontal Scroll Layout without scrollbar lines */
        .screenshots-scroll-container {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: #23891A #F5F9F1;
          padding-bottom: 12px;
        }

        .screenshots-scroll-container::-webkit-scrollbar {
          height: 4px;
        }

        .screenshots-scroll-container::-webkit-scrollbar-track {
          background: #F5F9F1;
          border-radius: 0;
        }

        .screenshots-scroll-container::-webkit-scrollbar-thumb {
          background: #23891A;
          border-radius: 0;
        }

        .screenshots-track {
          display: flex;
          gap: 24px;
          width: max-content;
          padding: 4px;
        }

        .screenshot-card {
          flex: 0 0 480px;
          border-radius: 0;
          overflow: hidden;
          background: #F5F9F1;
          border: 1px solid #DCE8D6;
          box-shadow: 2px 2px 0 rgba(21, 37, 27, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .screenshot-card:hover {
          transform: translateY(-4px);
          border-color: #23891A;
          box-shadow: 4px 4px 0 rgba(35, 137, 26, 0.2);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background-color: #E5F5DC;
        }

        .screenshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          transition: transform 0.5s ease, opacity 0.3s ease;
        }

        .screenshot-card:hover .screenshot-img {
          transform: scale(1.04);
        }

        /* Shine Layer Animation */
        .shine-layer {
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          pointer-events: none;
          transform: skewX(-20deg);
        }

        .screenshot-card:hover .shine-layer {
          animation: shineEffect 0.8s ease-in-out forwards;
        }

        @keyframes shineEffect {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(21, 37, 27, 0.2), transparent);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .screenshot-card {
            flex: 0 0 320px;
          }
          .image-wrapper {
            height: 200px;
          }
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}