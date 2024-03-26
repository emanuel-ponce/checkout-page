interface SeparatorProps {
  text?: string;
}

function Separator({ text }: SeparatorProps) {
  return (
    <div className="flex items-center my-6">
      {text ? (
        <>
          <div className="flex-grow bg-gray-300 h-[1px]"></div>
          <span className="mx-2 text-gray-400 text-sm">{text}</span>
          <div className="flex-grow bg-gray-300 h-[1px]"></div>
        </>
      ) : (
        <div className="flex-grow bg-gray-300 h-[1px]"></div>
      )}
    </div>
  );
}

export default Separator;
