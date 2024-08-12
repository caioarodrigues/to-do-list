interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-2 w-full">
      {children}
    </div>
  );
};