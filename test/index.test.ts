import { describe, it, expect, beforeEach } from "bun:test";
import { Signal } from "@preact/signals-core";
import mockBoutique from "./mocks/mockBoutique";
import {
  BoutiqueAccessor,
  createBoutique,
} from "../src/accessors/boutiqueAccessors";

const exampleInitialState = {
  user: "John",
  isAdmin: false,
  counter: 0,
};

const upStoreFourTimes = (countSignal: Signal<number>) => {
  for (let i = 0; i < 4; i++) {
    countSignal.value = countSignal.value + 1;
  }
};

describe("should", () => {
  beforeEach(() => {
    BoutiqueAccessor.resetInstance();
  });

  it("create a boutique", () => {
    expect(mockBoutique.items).toBeDefined();
  });

  it("get a signal counter signal", () => {
    expect(mockBoutique.items.counter).toBeDefined();
  });

  it("update a signal", () => {
    mockBoutique.items.user.value = "John Doe";
    expect(mockBoutique.items.user.value).toEqual("John Doe");
  });

  it("add value to counter", () => {
    mockBoutique.items.counter.value = 1;
    expect(mockBoutique.items.counter.value).toEqual(1);
  });

  it("add value to counter four times", () => {
    upStoreFourTimes(mockBoutique.items.counter);
    expect(mockBoutique.items.counter.value).toEqual(5);
  });

  it("throw an error if boutique already exists", () => {
    let error: Error | undefined;
    try {
      createBoutique(exampleInitialState); // First instance
      createBoutique(exampleInitialState); // Second instance
    } catch (e) {
      error = e as Error;
    }
    expect(error).toBeDefined();
    expect(error?.message).toEqual("BoutiqueAccessor is a singleton class");
  });
});
