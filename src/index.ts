import { BoutiqueCoreAccessor } from "./accessors/boutiqueAccessors";

export function createBoutique<TYPE extends { [KEY in keyof TYPE]: any }>(
  initialState: TYPE
) {
  const accessor = new BoutiqueCoreAccessor(initialState);

  return {
    createSignal: <KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) =>
      accessor.createSignal(key, value),
    updateSignal: <KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) =>
      accessor.updateSignal(key, value),
    getSignal: <KEY extends keyof TYPE>(key: KEY) => accessor.getSignal(key),
  };
}

export default createBoutique;
