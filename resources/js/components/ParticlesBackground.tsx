import React, { useRef, useEffect } from 'react';

interface Props { mode: 'light' | 'dark' }

export default function ParticlesBackground({ mode }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const isSnow = mode === 'light';
        type P = { x: number; y: number; r: number; dy: number; dx?: number };
        const particles: P[] = Array.from({ length: isSnow ? 160 : 240 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: isSnow ? Math.random() * 3 + 1.8 : Math.random() * 1.4 + 0.2,
            dy: isSnow ? Math.random() * 0.7 + 0.2 : Math.random() * 0.9 + 0.2,
            dx: isSnow ? (Math.random() - 0.5) * 0.4 : undefined,
        }));

        const render = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.globalAlpha = isSnow ? 0.7 : 0.45;
            ctx.fillStyle = isSnow ? '#94a3b8' : '#ffffff';
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                p.y += p.dy;
                if (isSnow && p.dx !== undefined) p.x += p.dx!;
                if (p.y > h) p.y = 0;
                if (p.x > w) p.x = 0;
                if (p.x < 0) p.x = w;
            });
            requestAnimationFrame(render);
        };
        render();

        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [mode]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
