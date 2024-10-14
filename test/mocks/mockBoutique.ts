import { createBoutique } from "../../src/accessors/boutiqueAccessors";

const exampleInitialState = {
  user: "John Cleese",
  isAdmin: false,
  counter: 0,
};

const mockBoutique = createBoutique(exampleInitialState);

export default mockBoutique;
