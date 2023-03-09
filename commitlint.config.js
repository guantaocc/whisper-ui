/* https://commitlint.js.org/#/reference-rules */
module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional']
};
