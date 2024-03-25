interface PillProps {
  text: string;
  bgColor: string;
  textColor: string;
}

function Pill({ text, bgColor, textColor }: PillProps) {
  return (
    <div className="rounded-sm font-bold p-[2px] text-[10px]" style={{ backgroundColor: bgColor, color: textColor }}>
      {text}
    </div>
  );
}

export default Pill;
