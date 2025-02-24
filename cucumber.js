module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/stepDefinitions/*.ts'],
    format: ['progress-bar'],
  },
}
