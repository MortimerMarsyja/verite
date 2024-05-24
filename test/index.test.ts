import { describe, it, expect } from "bun:test";
import createBoutique from "../src";

const exampleInitialState = {
  user: "John",
  isAdmin: false,
  counter: 0,
};

const upStoreFourTimes = (boutique: ReturnType<typeof createBoutique>) => {
  for (let i = 0; i < 4; i++) {
    const countSignal = boutique.getSignal("counter");
    boutique.updateSignal("counter", countSignal.value + 2);
  }
};

describe("should", () => {
  it("create a boutique", () => {
    const boutique = createBoutique(exampleInitialState);
    expect(boutique).toBeDefined();
  });

  it("get a signal", () => {
    const boutique = createBoutique(exampleInitialState);
    expect(boutique.getSignal("isAdmin").value).toEqual(false);
  });

  it("update a signal", () => {
    const boutique = createBoutique(exampleInitialState);
    boutique.updateSignal("user", "John");
    expect(boutique.getSignal("user").value).toEqual("John");
  });

  it("add value to counter", () => {
    const boutique = createBoutique(exampleInitialState);
    boutique.updateSignal("counter", boutique.getSignal("counter").value + 1);
    expect(boutique.getSignal("counter").value).toEqual(1);
  });

  it("add value to counter four times", () => {
    const boutique = createBoutique(exampleInitialState);
    upStoreFourTimes(boutique);
    expect(boutique.getSignal("counter").value).toEqual(4);
  });

  it("throw an error if signal not found", () => {
    const boutique = createBoutique(exampleInitialState);
    // to test the error we need to ignore the type
    // @ts-ignore
    expect(() => boutique.getSignal("level")).toThrow();
  });

  it("throw an error if boutique already exists", () => {
    createBoutique(exampleInitialState);
    expect(() => createBoutique(exampleInitialState)).toThrow();
  });
});
