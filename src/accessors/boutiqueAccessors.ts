import { BoutiqueCore, CoreState } from "../core/core";

export type Signal<TYPE> = CoreState<TYPE>;
export class BoutiqueCoreAccessor<
  TYPE extends { [KEY in keyof TYPE]: TYPE[KEY] }
> {
  private static instance: BoutiqueCoreAccessor<any>;

  private coreManager: BoutiqueCore<TYPE>;
  constructor(initialState: TYPE) {
    if (BoutiqueCoreAccessor.instance) {
      BoutiqueCoreAccessor.instance = this;
    }
    this.coreManager = new BoutiqueCore<TYPE>();
    for (const key in initialState) {
      this.coreManager.createSignal(key, initialState[key]);
    }
  }

  get boutique() {
    return this.coreManager.signalsBoutique;
  }

  updateSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.coreManager.updateSignal(key, value);
  }
}
