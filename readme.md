# eslint-config-netflix-dea

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for Netflix DEA JavaScript code. By adopting a common ESLint config, we hope to encourage consistent style and quality across all of our repos.

The majority of ESLint config should be defined here rather than each project's own `.eslintrc`. If a project's maintainers desire to override some config, they can do it in their own `.eslintrc`.

## Usage

```sh
npm install --save-dev eslint-config-netflix-dea
```

Then, extend `netflix-dea` in your `.eslintrc`:

```json
{
  "extends": "netflix-dea"
}
```