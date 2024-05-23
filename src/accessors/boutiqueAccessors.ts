import { BoutiqueCore, CoreState } from "../core/stateManagement";

export type Signal<TYPE> = CoreState<TYPE>;

export class SignalWrapper<TYPE> {
  // not sure I like this, but it's the only way to get intellisense
  private signal: Signal<TYPE>;
  constructor(signal: Signal<TYPE>) {
    this.signal = signal;
  }
  get value(): TYPE {
    return this.signal.value;
  }
  set value(value: TYPE) {
    this.signal.value = value;
  }
}

export class BoutiqueCoreAccessor<TYPE extends { [KEY in keyof TYPE]: any }> {
  private coreManager: BoutiqueCore<TYPE>;
  constructor(initialState: TYPE) {
    this.coreManager = new BoutiqueCore<TYPE>();
    for (const key in initialState) {
      this.coreManager.createSignal(key, initialState[key]);
    }
  }

  createSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    if (this.coreManager.getSignal(key)) {
      throw new Error(`Signal ${String(key)} already exists`);
    }
    this.coreManager.createSignal(key, value);
  }

  updateSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.coreManager.updateSignal(key, value);
  }

  getSignal<KEY extends keyof TYPE>(key: KEY): SignalWrapper<TYPE[KEY]> {
    return this.coreManager.getSignal(key) as unknown as SignalWrapper<
      TYPE[KEY]
    >;
  }
}

export default BoutiqueCoreAccessor;
