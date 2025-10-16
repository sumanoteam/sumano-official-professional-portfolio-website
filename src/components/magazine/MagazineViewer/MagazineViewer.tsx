import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

interface MagazineViewerProps {
  pages: (string | React.ReactNode)[];
}

const MagazineViewer: React.FC<MagazineViewerProps> = ({ pages }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-900"
      style={{
        perspective: "2000px",
        overflow: "hidden",
      }}
    >
      {/* 3D wrapper to apply tilt + depth */}
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(25deg) rotateY(0deg) scale(0.95)",
        }}
      >
        {/* Simulated left thickness */}
        <div
          style={{
            position: "absolute",
            left: "-18px",
            top: "0",
            width: "18px",
            height: "100%",
            background: "linear-gradient(to right, #1f2937, #4b5563)",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            boxShadow: "inset -3px 0 5px rgba(0,0,0,0.4)",
            zIndex: 0,
          }}
        ></div>

        {/* Simulated right thickness */}
        <div
          style={{
            position: "absolute",
            right: "-18px",
            top: "0",
            width: "18px",
            height: "100%",
            background: "linear-gradient(to left, #1f2937, #4b5563)",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            boxShadow: "inset 3px 0 5px rgba(0,0,0,0.4)",
            zIndex: 0,
          }}
        ></div>

        {/* Flipbook */}
        <HTMLFlipBook
          width={400}
          height={625}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={450}
          maxHeight={1600}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={isMobile}
          showCover={true}
          startPage={0}
          mobileScrollSupport={true}
          className="shadow-2xl rounded-2xl relative z-10"
          maxShadowOpacity={0.5}
          style={{}}
          useMouseEvents={true}
          swipeDistance={30}
          clickEventForward={true}
          disableFlipByClick={false}
          showPageCorners={true}
          autoSize={false}
          startZIndex={0}
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center p-6 h-full w-full rounded-2xl border ${
                index === 0
                  ? "bg-gradient-to-br from-sky-500 to-cyan-600 text-white border-sky-600"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-center">
                {typeof page === "string" ? (
                  <p className="text-lg leading-relaxed">{page}</p>
                ) : (
                  page
                )}
              </div>
            </div>
          ))}
        </HTMLFlipBook>

        {/* Optional bottom shadow to ground the book */}
        <div
          className="absolute bottom-[-40px] left-0 w-full h-[40px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)",
            filter: "blur(8px)",
            transform: "rotateX(90deg)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MagazineViewer;
