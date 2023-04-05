import jPrettify from "../src";

const whitespace = (len: number) => " ".repeat(len);

it("should prettify a string input", () => {
    expect(jPrettify("hello")).toBe("- hello");
});

it("should prettify a boolean input", () => {
    expect(jPrettify(true)).toBe("- true");
});

it("should prettify a number input", () => {
    expect(jPrettify(123)).toBe("- 123");
});

it("should prettify a null input", () => {
    expect(jPrettify(null)).toBe("- null");
});

it("should prettify an undefined input", () => {
    expect(jPrettify(undefined)).toBe("- undefined");
});

it("should prettify an object with nested objects and arrays", () => {
    const input = {
        foo: "bar",
        arr: [1, 2, { a: "b", c: [3, 4] }],
        obj: { nested: { key: "value" } },
    };

    const expectedOutput = [
        "foo:",
        `${whitespace(2)}- bar`,

        "arr:",
        `${whitespace(2)}- 1`,
        `${whitespace(2)}- 2`,
        `${whitespace(2)}a:`,
        `${whitespace(4)}- b`,
        `${whitespace(2)}c:`,
        `${whitespace(4)}- 3`,
        `${whitespace(4)}- 4`,

        "obj:",
        `${whitespace(2)}nested:`,
        `${whitespace(4)}key:`,
        `${whitespace(6)}- value`,
    ].join("\n");

    console.log(expectedOutput);

    expect(jPrettify(input)).toBe(expectedOutput);
});

it("should allow customization of the number of spaces used for indentation", () => {
    const input = { foo: { bar: "baz" } };

    const expectedOutput = ["foo:", "    bar:", "        - baz"].join("\n");

    expect(jPrettify(input, 4)).toBe(expectedOutput);
});

it("should print out arrays normally", () => {
    const input = [1, 2, 3];

    const expectedOutput = ["- 1", "- 2", "- 3"].join("\n");

    expect(jPrettify(input)).toBe(expectedOutput);
});
