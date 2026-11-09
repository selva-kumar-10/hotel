/** Temple gopuram line-art, used as a faint ornament on dark sections. */
export default function Gopuram({
  className,
  strokeWidth = 1.1,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 252H182M26 252V222H174V252" />
      <path d="M88 252V232a12 12 0 0 1 24 0V252" />
      <path d="M30 222L40 182H160L170 222Z" />
      <path d="M62 186V218M80 186V218M100 186V218M120 186V218M138 186V218" />
      <path d="M42 182L50 148H150L158 182Z" />
      <path d="M70 152V178M90 152V178M110 152V178M130 152V178" />
      <path d="M52 148L58 118H142L148 148Z" />
      <path d="M76 122V144M96 122V144M104 122V144M124 122V144" />
      <path d="M60 118L66 92H134L140 118Z" />
      <path d="M84 96V114M100 96V114M116 96V114" />
      <path d="M68 92L74 70H126L132 92Z" />
      <path d="M76 70L82 52H118L124 70Z" />
      <path d="M84 52Q100 22 116 52" />
      <path d="M100 26V8" />
      <circle cx="92" cy="12" r="2.4" />
      <circle cx="100" cy="6" r="2.4" />
      <circle cx="108" cy="12" r="2.4" />
    </svg>
  );
}
