import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function CashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01M18 14v.01" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M12 13 16 8" />
      <path d="M4.6 19a9 9 0 1 1 14.8 0" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function PuzzleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 3a2 2 0 1 1 4 0v1h2a1 1 0 0 1 1 1v2h1a2 2 0 1 1 0 4h-1v2a1 1 0 0 1-1 1h-2v1a2 2 0 1 1-4 0v-1H9a1 1 0 0 1-1-1v-2H6a2 2 0 1 1 0-4h2V6a1 1 0 0 1 1-1h2V4a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9.5c0-1 1-1.5 2.4-1.5 1.6 0 2.6.8 2.6 1.7 0 2.3-5 1.3-5 3.6 0 1 1.1 1.7 2.6 1.7 1.4 0 2.4-.5 2.4-1.5" />
      <path d="M12 6.5v11" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.6 7.5 9 4.3-1.4 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 12 2 2 4-4" />
      <path d="M12 2.5 14.4 4h2.1l1.2 1.8 1.9.8.2 2.1L21 10.5 19.8 12l1 1.5-.2 2.1-1.9.8-1.2 1.8h-2.1L12 21.5 9.6 20H7.5l-1.2-1.8-1.9-.8-.2-2.1L3 13.5 4.2 12l-1-1.5.2-2.1 1.9-.8L6.5 5.8h2.1L12 2.5Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 2h12v20l-3-2-2 2-2-2-2 2-3-2V2Z" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 3h-2" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.5 2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.5 6.1 20.6l1.3-6.6-4.9-4.6 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.5 6C6 7 4 10 4 13.5 4 16.5 6 18.5 8.5 18.5 10.7 18.5 12.3 16.9 12.3 14.8 12.3 12.9 11 11.4 9.2 11.3 9.4 9.6 10.9 8 13 7.3L9.5 6ZM19 6C15.5 7 13.5 10 13.5 13.5 13.5 16.5 15.5 18.5 18 18.5 20.2 18.5 21.8 16.9 21.8 14.8 21.8 12.9 20.5 11.4 18.7 11.3 18.9 9.6 20.4 8 22.5 7.3L19 6Z" />
    </svg>
  );
}

export const ICONS = {
  cash: CashIcon,
  bolt: BoltIcon,
  trend: TrendUpIcon,
  gauge: GaugeIcon,
  target: TargetIcon,
  puzzle: PuzzleIcon,
  coin: CoinIcon,
  shield: ShieldCheckIcon,
  badge: BadgeCheckIcon,
  clock: ClockIcon,
  receipt: ReceiptIcon,
  headset: HeadsetIcon,
} as const;

export type IconKey = keyof typeof ICONS;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.36.66 4.56 1.8 6.44L3 29l7.78-2.73a12.9 12.9 0 0 0 5.24 1.11h.01c6.61 0 12-5.37 12-11.98C28.03 8.37 22.64 3 16.02 3Zm0 21.86h-.01a10.86 10.86 0 0 1-5.53-1.52l-.4-.24-4.62 1.62 1.54-4.5-.26-.46a9.89 9.89 0 0 1-1.53-5.28c0-5.48 4.46-9.93 9.94-9.93 2.65 0 5.14 1.04 7.01 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.48-4.46 9.93-9.05 9.93Zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
