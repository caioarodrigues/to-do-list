import { BsPersonCircle, BsHouse } from "react-icons/bs";

export const Header = () => {
  const today = new Date().toString().split(" ").slice(0, 4).join(" ");

  return (
    <div
      className="flex justify-between items-center w-full fixed top-0 px-4 py-2 
    bg-zinc-700 z-10 md:z-0 md:relative"
    >
      <p className="text-xl text-nowrap">{today}</p>
      <div className="flex gap-4">
        <BsHouse
          className="text-4xl cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <BsPersonCircle
          className="text-4xl cursor-pointer"
          onClick={() => (window.location.href = "/profile")}
        />
      </div>
    </div>
  );
};
