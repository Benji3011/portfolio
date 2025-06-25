import React, { useRef, useEffect } from 'react';

interface Props { mode: 'light'|'dark' }
export default function ParticlesBackground({ mode }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const isSnow = mode === 'light';
        type P = { x: number; y: number; r: number; dy: number; dx?: number };
        const particles: P[] = Array.from({ length: isSnow ? 200 : 300 }, () => ({
            x: Math.random()*w, y: Math.random()*h,
            r: isSnow ? Math.random()*3+2 : Math.random()*1.5+0.2,
            dy: Math.random()*(isSnow?1:0.2)+(isSnow?0.5:0.05),
            dx: isSnow ? Math.random()*0.6-0.3 : undefined
        }));

        const render = () => {
            ctx.fillStyle = isSnow ? '#ddeeff' : '#000011';
            ctx.fillRect(0,0,w,h);
            ctx.fillStyle = 'white';
            particles.forEach(p => {
                ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,2*Math.PI); ctx.fill();
                p.y += p.dy;
                if(isSnow && p.dx!==undefined) { p.x += p.dx; if(p.x> w) p.x=0; if(p.x<0) p.x=w; }
                if(p.y>h) p.y=0;
            });
            requestAnimationFrame(render);
        };
        render();
        const onResize = () => { w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [mode]);

    return <canvas ref={canvasRef} style={{ position:'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex:0 }} />;
}
