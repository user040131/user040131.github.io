// src/app/components/Badge.tsx
type BadgeProps = {
  label: string;
  className?: string;
};

export default function Badge({ label, className='' }: BadgeProps) {
  return (
    <span
      className={`
        ${className}
        inline-block
        rounded-[4px]
        border border-white/40
        px-2 py-[2px]
        text-[10px] leading-tight
        text-white
        whitespace-nowrap
      `}
    >
      {label}
    </span>
  );
}
