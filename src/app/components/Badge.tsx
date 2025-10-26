// src/app/components/Badge.tsx
type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return (
    <span
      className="
        inline-block
        rounded-[4px]
        border border-white/40
        bg-white/10
        px-2 py-[2px]
        text-[10px] leading-tight
        text-white
        whitespace-nowrap
      "
    >
      {label}
    </span>
  );
}
