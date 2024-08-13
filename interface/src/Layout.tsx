import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex w-full md:grid md:grid-cols-10">
        <SideMenu />
        <div className="flex flex-col items-center min-h-screen p-2 w-full md:col-span-7">
          {children}
        </div>
      </div>
    </div>
  );
};
