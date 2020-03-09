import cars from "./reducer";

describe("cars Reducers", () => {
  const initState = {
    isFetching: false,
    cars: [],
    car: {}
  };

  it("returns the initial state when actions is not passed", () => {
    const reducer = cars(undefined, {});
    expect(reducer).toEqual(initState);
  });
  it("isFetching should be true when action REQUEST_CARS is called", () => {
    const reducer = cars(initState, { type: "REQUEST_CARS" });
    expect(reducer).toEqual({
      isFetching: true,
      cars: [],
      car: {}
    });
  });
});
