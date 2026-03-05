// test/setupTests.js
const { expect } = require('@jest/globals')
const matchers = require('@testing-library/jest-dom/matchers')

expect.extend(matchers)
