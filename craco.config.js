const path = require("path");

const { paths } = require("@craco/craco");

console.log('craco has started')

module.exports = {
    jest: {
        configure: {
            moduleNameMapper: {
                "^(components|containers)$": "<rootDir>.jest/componentsMock.js"
            }
        }
    }
};