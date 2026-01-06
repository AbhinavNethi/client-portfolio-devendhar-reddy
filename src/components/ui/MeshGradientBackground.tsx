"use client";

export function MeshGradientBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
            {/* 
        PREMIUM MESH GRADIENTS 
        Using pure CSS divs for max performance (GPU) vs Canvas (CPU heavy)
      */}

            {/* 1. Deep Blue Base */}
            <div
                className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[100px] animate-mesh"
                style={{ animationDuration: '25s' }}
            />

            {/* 2. Electric Purple Accent (Right) */}
            <div
                className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.25)_0%,rgba(0,0,0,0)_70%)] blur-[120px] animate-mesh"
                style={{ animationDuration: '30s', animationDirection: 'alternate-reverse' }}
            />

            {/* 3. Cyan/Teal Glow (Bottom Left) */}
            <div
                className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.2)_0%,rgba(0,0,0,0)_70%)] blur-[90px] animate-mesh"
                style={{ animationDuration: '20s', animationDelay: '5s' }}
            />

            {/* 4. Subtle Warmth (Center - prevents it being too cold) */}
            <div
                className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[120px]"
            />
        </div>
    );
}
