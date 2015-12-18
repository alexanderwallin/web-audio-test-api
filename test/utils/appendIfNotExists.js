const assert = require("power-assert");
const appendIfNotExists = require("../../src/utils/appendIfNotExists");

describe("utils/appendIfNotExists(list: any[], value: any): void", () => {
  it("works", () => {
    let list = [];

    appendIfNotExists(list, 1);
    appendIfNotExists(list, 2);
    appendIfNotExists(list, 1);
    appendIfNotExists(list, 2);
    appendIfNotExists(list, 3);

    assert.deepEqual(list, [ 1, 2, 3 ]);
  });
});
