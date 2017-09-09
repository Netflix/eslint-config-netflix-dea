const eslint = require('eslint')
const test = require('tape')
const dir = require('@jameswomack/dir')

// const showResultMessagesForCLIExecution = execution => execution.results[0].messages.forEach(dir)

const reactSpecificESLintConfig = {
  plugins: [ 'react' ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}

const createESLintCLIEngine = ({ withReactSupport = false } = { }) => {
  const otherCLIOptions = withReactSupport ? reactSpecificESLintConfig : { }
  return new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json',
    ...otherCLIOptions
  })
}

const getESLintExecutionForText = (text, options) =>
  createESLintCLIEngine(options).executeOnText(text)

test('load config in eslint to validate all rule syntax is correct', t => {
  const code = 'const foo = 1\nconst bar = function () { return \'bar\' }\nbar(foo)\n'

  const execution = getESLintExecutionForText(code)

  t.equal(execution.errorCount, 0)
  t.end()
})

test('functions should not be empty', t => {
  const code = 'const foo = 1\nconst bar = function () { }\nbar(foo)\n'

  const execution = getESLintExecutionForText(code)

  t.equal(execution.errorCount, 1)
  t.equal(execution.results[0].messages[0].ruleId, 'no-empty-function')

  t.end()
})

test('const should be used where possible', t => {
  const code = 'let foo = 1\nconst bar = function (f) { return f }\nbar(foo)\n'

  const execution = getESLintExecutionForText(code)

  t.equal(execution.errorCount, 1)
  t.equal(execution.results[0].messages[0].ruleId, 'prefer-const')

  t.end()
})

test('JSX props should be found no more than once per component', t => {
  const code = `
const Foo = props => <div {...props} />
Foo.displayName = 'foo-young'
const foo = Foo.displayName
const bar = function (myName) {
  return <Foo myName={myName} myName={myName} />
}
module.exports = bar(foo)\n`

  const execution = getESLintExecutionForText(code, { withReactSupport : true })

  t.equal(execution.errorCount, 1)
  t.equal(execution.results[0].messages[0].ruleId, 'react/jsx-no-duplicate-props')

  t.end()
})


test('object rest spread can be used to functionally omit fields preceding the ellipsis',  t => {
  const code = `
const Foo = ({ myFirstName, ...myOtherNames }) => <div {...myOtherNames} />
const createFooWithDefaultNames = function () {
  return <Foo myFirstName={'Jim'} myLastName={'James'} myNickName={'JJ'} />
}
module.exports = createFooWithDefaultNames\n`

    const execution = getESLintExecutionForText(code, { withReactSupport : true })

    t.equal(execution.errorCount, 0)

    t.end()
  })
