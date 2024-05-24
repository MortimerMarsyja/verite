import { BoutiqueCoreAccessor } from "./accessors/boutiqueAccessors";

export function createBoutique<TYPE extends { [KEY in keyof TYPE]: any }>(
  initialState: TYPE
) {
  const accessor = new BoutiqueCoreAccessor(initialState);
  return {
    updateSignal: <KEY extends keyof TYPE>(key: KEY, value: TYPE[KEY]) =>
      accessor.updateSignal(key, value),
    boutique: accessor.boutique,
  };
}

export default createBoutique;
