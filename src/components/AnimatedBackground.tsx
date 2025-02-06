import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration des particules
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150;
    const colors = ['#58a6ff20', '#7ee78720', '#30363d20'];

    // Classe Particle
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      speed: number;
      angle: number;
      radius: number;
      centerX: number;
      centerY: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.centerX = Math.random() * this.canvasWidth;
        this.centerY = Math.random() * this.canvasHeight;
        this.radius = Math.random() * 100 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 0.5 + 0.1) * 0.02;
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
      }

      update() {
        // Animation circulaire
        this.angle += this.speed;
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;

        // Déplacement aléatoire du centre
        this.centerX += this.directionX * 0.2;
        this.centerY += this.directionY * 0.2;

        // Rebond sur les bords
        if (this.centerX < 0 || this.centerX > this.canvasWidth) this.directionX *= -1;
        if (this.centerY < 0 || this.centerY > this.canvasHeight) this.directionY *= -1;

        // Garder les particules dans les limites
        this.centerX = Math.max(0, Math.min(this.centerX, this.canvasWidth));
        this.centerY = Math.max(0, Math.min(this.centerY, this.canvasHeight));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Créer les particules
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height));
      }
    };

    // Connecter les particules
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(88, 166, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation
    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particlesArray) {
        particle.update();
        particle.draw(ctx);
      }
      
      connect();
      requestAnimationFrame(animate);
    };
    
    // Ajuster la taille du canvas
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Réinitialiser les particules lors du redimensionnement
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Initialisation et démarrage de l'animation
    init();
    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
