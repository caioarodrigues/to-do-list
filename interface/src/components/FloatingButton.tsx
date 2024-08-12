interface FloatingButtonProps {
  text: string;
  handler: () => void;
}

export const FloatingButton = ({ text, handler }: FloatingButtonProps) => {
  return (
    <button 
      className="fixed bottom-4 right-2 bg-zinc-500 text-white rounded-md w-12 h-12 
      shadow-md text-3xl border-2 border-zinc-300 border-opacity-70"
      onClick={handler}>
      {text}
    </button>
  );
};
