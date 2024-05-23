import { BoutiqueCore, CoreState } from "../core/stateManagement";

export type Signal<TYPE> = CoreState<TYPE>;

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

  getSignal<KEY extends keyof TYPE>(key: KEY) {
    return this.coreManager.getSignal(key);
  }
}

export default BoutiqueCoreAccessor;
