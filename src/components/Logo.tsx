interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none ${className}`}>
      <img
        src="/image copy 2.png"
        alt="Monument Property Group"
        className="h-14 w-auto object-contain"
        style={{
          filter: variant === 'dark' ? 'brightness(0)' : 'none',
        }}
      />
    </div>
  );
}
