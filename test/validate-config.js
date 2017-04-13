const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  const code = 'const foo = 1\nconst bar = function () { return \'bar\' }\nbar(foo)\n'

  const execution = cli.executeOnText(code)

  t.equal(execution.errorCount, 0)
  t.end()
})

test('functions should not be empty', function (t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  const code = 'const foo = 1\nconst bar = function () { }\nbar(foo)\n'

  const execution = cli.executeOnText(code)

  t.equal(execution.errorCount, 1)
  t.equal(execution.results[0].messages[0].ruleId, 'no-empty-function')

  t.end()
})