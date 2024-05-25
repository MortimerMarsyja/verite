import { type Signal, signal } from "@preact/signals-core";

export type CoreState<TYPE> = Signal<TYPE>;

export class BoutiqueCore<TYPE extends object> {
  signalsBoutique = {} as { [KEY in keyof TYPE]: Signal<TYPE[KEY]> };

  createSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.signalsBoutique[key] = signal(value)
  }

  updateSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.signalsBoutique[key].value = value;
  }
}

export default BoutiqueCore;
