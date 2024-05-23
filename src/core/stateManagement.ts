import { Signal, signal } from "@preact/signals-core";

export type CoreState<TYPE> = Signal<TYPE>;

export class BoutiqueCore<TYPE extends { [KEY in keyof TYPE]: any }> {
  private signalsBoutique = {} as { [KEY in keyof TYPE]: Signal<TYPE[KEY]> };
  createSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    return (this.signalsBoutique[key] = signal(value));
  }
  updateSignal<KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) {
    this.signalsBoutique[key] = signal(value);
  }
  getSignal<KEY extends keyof TYPE>(key: KEY) {
    if (!this.signalsBoutique[key]) {
      throw new Error(`Signal ${String(key)} not found`);
    }
    return this.signalsBoutique[key];
  }
}

export default BoutiqueCore;
