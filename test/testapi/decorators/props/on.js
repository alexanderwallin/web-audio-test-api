const assert = require("power-assert");
const props = require("../../../../src/testapi/decorators/props");

describe("@props.on()", () => {
  it("defines a callback property", () => {
    class Foo {
      constructor() {
        this._ = {};
      }

      @props.on("end")
      onend() {}
    }

    const foo = new Foo();

    assert(foo.onend === null);
    assert.doesNotThrow(() => { foo.onend = it; });
    assert(foo.onend === it);
    assert.throws(() => { foo.onend = "not a function"; }, TypeError);
  });
});
