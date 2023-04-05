type Literal = string | number | boolean | null | undefined;

interface NestedLiteral {
    [key: string]:
        | NestedLiteral
        | Literal
        | (Literal | NestedLiteral)[]
        | Record<string, NestedLiteral>;
}

type Input = Literal | NestedLiteral | (Literal | NestedLiteral)[];

export default function jPrettify(input: Input, spaces = 2): string {
    const recurse = (input: Input, span = 0): string => {
        const whitespace = " ".repeat(span * spaces);

        if (
            ["string", "boolean", "number"].includes(typeof input) ||
            input === null ||
            input === undefined
        ) {
            return `${whitespace}- ${input}`;
        }

        if (Array.isArray(input)) {
            return (
                input
                    .map(value => recurse(value, span))
                    .join("\n")
                    // if the array has an object inside, the newlines would double
                    // because we already set the newline on the for loop
                    .trimEnd()
            );
        }

        let message = "";
        Object.entries(input).forEach(([key, value]) => {
            message += `${whitespace}${key}:\n`;
            message += `${recurse(value, span + 1)}\n`;
        });

        return message;
    };

    return recurse(input).trim();
}
