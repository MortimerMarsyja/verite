import { describe, it, expect, beforeEach } from "bun:test";
import createBoutique from "../src";
import { Signal } from "@preact/signals-core";

const exampleInitialState = {
  user: "John",
  isAdmin: false,
  counter: 0,
};

const upStoreFourTimes = (countSignal: Signal) => {
  for (let i = 0; i < 4; i++) {
    countSignal.value = countSignal.value + 1;
  }
};

const { boutique, updateSignal } = createBoutique(exampleInitialState);

describe("should", () => {
  it("create a boutique", () => {
    expect(boutique).toBeDefined();
  });

  it("get a signal counter signal", () => {
    expect(boutique.counter).toBeDefined();
  });

  it("update a signal", () => {
    updateSignal("user", "John Doe");
    expect(boutique.user.value).toEqual("John Doe");
  });

  it("add value to counter", () => {
    updateSignal("counter", 1);
    expect(boutique.counter.value).toEqual(1);
  });

  it("add value to counter four times", () => {
    upStoreFourTimes(boutique.counter);
    expect(boutique.counter.value).toEqual(5);
  });

  it("throw an error if boutique already exists", () => {
    let error: Error | undefined;
    try {
      createBoutique(exampleInitialState); // Second instance
    } catch (e) {
      error = e as Error;
    }
    expect(error).toBeDefined();
    expect(error?.message).toEqual("BoutiqueCoreAccessor is a singleton class");
  });
});
