import { expect, describe, it } from "vitest";
import { render } from '@testing-library/react';
import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("Counter's initial value is 0", () => {
    const { getByTestId } = render(<Counter initialValue={0} />);
    const count = getByTestId("count");

    expect(count.textContent).toBe("Count: 0");
  })
});