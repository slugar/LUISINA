interface ButterflyProps {
  className?: string;
  delay?: number;
}

export function Butterfly({ className = '', delay = 0 }: ButterflyProps) {
  return (
    <img
      src="https://pngimg.com/uploads/butterfly/butterfly_PNG103830.png"
      alt="Butterfly decoration"
      className={`absolute opacity-80 pointer-events-none animate-float ${className} mx-[17px] my-[61px]`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
}
