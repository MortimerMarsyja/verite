import { describe, it, expect } from "bun:test";
import createBoutique from "../src";
import type { Signal } from "@preact/signals-core";

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

const { boutique } = createBoutique(exampleInitialState);

describe("should", () => {
  it("create a boutique", () => {
    expect(boutique).toBeDefined();
  });

  it("get a signal counter signal", () => {
    expect(boutique.counter).toBeDefined();
  });

  it("update a signal", () => {
    boutique.user.value = "John Doe";
    expect(boutique.user.value).toEqual("John Doe");
  });

  it("add value to counter", () => {
    boutique.counter.value = 1;
    expect(boutique.counter.value).toEqual(1);
  });

  it("add value to counter four times", () => {
    upStoreFourTimes(boutique.counter);
    expect(boutique.counter.value).toEqual(5);
  });
});
