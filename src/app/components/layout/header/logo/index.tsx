"use client";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="block select-none">
      {/* Aumentamos a largura para 220px e limpamos o viewBox para o texto ocupar 100% do espaço */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 290 55" 
        width="220" 
        height="60"
        className="w-auto h-auto max-w-[220px] md:max-w-[240px]"
      >
        <defs>
          <linearGradient id="kidsLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF007A" />
            <stop offset="60%" stopColor="#E0118F" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
        </defs>
        
        <g transform="translate(0, 0)">
          {/* Coroa levemente maior e melhor posicionada */}
          <path 
            d="M12 4L17 9.5L24 6L21 15H3L0 6L7 9.5L12 4Z" 
            fill="url(#kidsLogoGrad)" 
            transform="translate(0, 4) scale(1.6)" 
          />
          
          {/* Aumentamos o tamanho da fonte (fontSize) de 24 para 32 */}
          <text 
            x="46" 
            y="30" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="32" 
            fill="#FFFFFF" 
            letterSpacing="1"
          >
            MUNDO
          </text>
          
          {/* Ajustamos a posição X para colar certinho no MUNDO */}
          <text 
            x="178" 
            y="30" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="32" 
            fill="url(#kidsLogoGrad)" 
            letterSpacing="1"
          >
            KIDS
          </text>
          
          {/* Subtítulo reposicionado e mais visível */}
          <text 
            x="48" 
            y="48" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="700" 
            fontSize="10.5" 
            fill="#B3B3B3" 
            letterSpacing="3"
          >
            FASHION EXPERIENCE
          </text>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;