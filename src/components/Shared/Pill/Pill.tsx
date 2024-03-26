interface PillProps {
  text: string;
  className?: string;
}

function Pill({ text, className }: PillProps) {
  return <div className={`rounded-[3px] font-bold py-[2px] px-[3px] text-[10px] ${className}`}>{text}</div>;
}

export default Pill;
