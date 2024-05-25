import { BoutiqueCoreAccessor } from "./accessors/boutiqueAccessors";

export function createBoutique<TYPE extends object>(
  initialState: TYPE
) {
  const accessor = new BoutiqueCoreAccessor(initialState);

  return {
    updateItem: accessor.updateSignal,
    boutique: accessor.boutique,
  };
}

export default createBoutique;
