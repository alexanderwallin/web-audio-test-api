export default function contract({ precondition, postcondition }) {
  return (target, name, descriptor) => {
    const func = descriptor.value;

    descriptor.value = function contract(...args) {
      if (typeof precondition === "function") {
        try {
          this::precondition(...args);
        } catch (e) {
          e.message = `${this.constructor.name}#${name}; ${e.message}`;
          throw e;
        }
      }

      const res = this::func(...args);

      if (typeof postcondition === "function") {
        try {
          this::postcondition(res);
        } catch (e) {
          e.message = `${this.constructor.name}#${name}; ${e.message}`;
          throw e;
        }
      }

      return res;
    };

    return descriptor;
  };
}