import { signal, Signal } from "@preact/signals-core";

export type CoreState<TYPE> = Signal<TYPE>;

export class BoutiqueCore<TYPE extends object> {
  signalsBoutique = {} as { [KEY in keyof TYPE]: Signal<TYPE[KEY]> };

  constructor(initialState: TYPE) {
    for (const key in initialState) {
      if (initialState.hasOwnProperty(key)) {
        this.createSignal(key as keyof TYPE, initialState[key]);
      }
    }
  }

  createSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.signalsBoutique[key] = signal(value);
  }

  getSignal<KEY extends keyof TYPE>(key: KEY): Signal<TYPE[KEY]> {
    return this.signalsBoutique[key];
  }
}

export class BoutiqueAccessor<TYPE extends object> {
  private static instance: BoutiqueAccessor<any> | null = null;
  private boutiqueCore: BoutiqueCore<TYPE>;

  private constructor(initialState: TYPE) {
    this.boutiqueCore = new BoutiqueCore<TYPE>(initialState);
  }

  static getInstance<TYPE extends object>(
    initialState: TYPE
  ): BoutiqueAccessor<TYPE> {
    if (BoutiqueAccessor.instance) {
      throw new Error("BoutiqueAccessor is a singleton class");
    }
    BoutiqueAccessor.instance = new BoutiqueAccessor<TYPE>(initialState);
    return BoutiqueAccessor.instance;
  }

  get items() {
    return this.boutiqueCore.signalsBoutique;
  }

  static resetInstance() {
    BoutiqueAccessor.instance = null;
  }
}

export function createBoutique<TYPE extends object>(initialState: TYPE) {
  return BoutiqueAccessor.getInstance(initialState);
}
