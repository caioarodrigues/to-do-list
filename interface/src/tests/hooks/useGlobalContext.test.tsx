import { screen, render } from "@testing-library/react";
import { ITask } from "../../types";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { renderHook, act } from "@testing-library/react";
import { GlobalContextProvider } from "../../context/GlobalContext";

it("Should initialize empty task list context", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <GlobalContextProvider>{children}</GlobalContextProvider>
  );
  const { result: { current: { tasks }} } = renderHook(() => useGlobalContext(), { wrapper });

  expect(tasks).toStrictEqual([]);
});
