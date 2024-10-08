interface FloatingButtonProps {
  text: string;
  handler: () => void;
}

export const FloatingButton = ({ text, handler }: FloatingButtonProps) => {
  return (
    <button 
      className="fixed bottom-4 right-4 bg-zinc-700 text-white rounded-md w-14 h-14 
      shadow-md text-3xl border-2 border-white border-opacity-70 md:hidden"
      onClick={handler} data-testid="floating-button">
      {text}
    </button>
  );
};
