export default {
    preset: "ts-jest",
    testEnvironment: "node",
    coverageDirectory: "coverage",
    collectCoverage: true,
    testMatch: ["**/__test__/**/*.ts"],
    verbose: true,
    collectCoverageFrom: ["**/src/**/*.ts"],
    testPathIgnorePatterns: ["dist.*\\.ts$"],
};
