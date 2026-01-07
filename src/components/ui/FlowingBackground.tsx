"use client";

// GPU-optimized background with CSS animations instead of Framer Motion
// This avoids the performance issues caused by Framer Motion's JS-driven animations

export function FlowingBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base warm gradient layer */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(135deg, #c9b896 0%, #d4c5a0 25%, #e8dfc8 50%, #f5f2ed 75%, #ede4d3 100%)"
                }}
            />

            {/* Blob 1 - Top Left */}
            <div
                className="absolute flowing-blob-1"
                style={{
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                    background: "radial-gradient(ellipse at 30% 30%, rgba(245, 242, 237, 0.9) 0%, rgba(232, 223, 200, 0.6) 40%, transparent 70%)",
                    filter: "blur(50px)",
                    top: "-30%",
                    left: "-30%",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* Blob 2 - Top Right */}
            <div
                className="absolute flowing-blob-2"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    background: "radial-gradient(ellipse at 70% 20%, rgba(212, 197, 160, 0.8) 0%, rgba(245, 242, 237, 0.5) 45%, transparent 75%)",
                    filter: "blur(55px)",
                    top: "-20%",
                    right: "-20%",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* Blob 3 - Bottom Left */}
            <div
                className="absolute flowing-blob-3"
                style={{
                    width: "95vw",
                    height: "95vh",
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    background: "radial-gradient(ellipse at 20% 80%, rgba(232, 223, 200, 0.85) 0%, rgba(201, 184, 150, 0.6) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    bottom: "-30%",
                    left: "-25%",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* Blob 4 - Bottom Right */}
            <div
                className="absolute flowing-blob-4"
                style={{
                    width: "80vw",
                    height: "80vh",
                    borderRadius: "50% 50% 30% 70% / 30% 50% 50% 70%",
                    background: "radial-gradient(ellipse at 80% 70%, rgba(245, 242, 237, 0.75) 0%, rgba(212, 197, 160, 0.55) 45%, transparent 75%)",
                    filter: "blur(55px)",
                    bottom: "-15%",
                    right: "-15%",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* CSS animations are defined in globals.css for maximum performance */}
            <style jsx>{`
                .flowing-blob-1 {
                    animation: flowBlob1 25s ease-in-out infinite;
                }
                .flowing-blob-2 {
                    animation: flowBlob2 30s ease-in-out infinite;
                    animation-delay: -5s;
                }
                .flowing-blob-3 {
                    animation: flowBlob3 35s ease-in-out infinite;
                    animation-delay: -10s;
                }
                .flowing-blob-4 {
                    animation: flowBlob4 28s ease-in-out infinite;
                    animation-delay: -15s;
                }

                @keyframes flowBlob1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(40px, 25px) rotate(8deg); }
                }
                @keyframes flowBlob2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-30px, 40px) rotate(-10deg); }
                }
                @keyframes flowBlob3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(50px, -30px) rotate(10deg); }
                }
                @keyframes flowBlob4 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-40px, -25px) rotate(-8deg); }
                }
            `}</style>
        </div>
    );
}
