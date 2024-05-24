import { BoutiqueCore, CoreState } from "../core/core";

export type Signal<TYPE> = CoreState<TYPE>;
export class BoutiqueCoreAccessor<TYPE extends { [KEY in keyof TYPE]: any }> {
  private coreManager: BoutiqueCore<TYPE>;
  constructor(initialState: TYPE) {
    this.coreManager = new BoutiqueCore<TYPE>();
    for (const key in initialState) {
      this.coreManager.createSignal(key, initialState[key]);
    }
  }
  // return store signals object
  get boutique() {
    return this.coreManager.signalsBoutique;
  }

  updateSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.coreManager.updateSignal(key, value);
  }
}
