# eslint-config-netflix-dea

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by Netflix's Data Engineering and Analysis group. By adopting a common ESLint config, we hope to encourage consistent style and quality across all of our repos.

The lion's share of ESLint configuration should be defined here rather than each project's own `.eslintrc`. If a project's maintainers want to override some configuration value, they can do it in their own `.eslintrc`.

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

## A Note on Dependencies
*eslint-config-netflix-dea* comes with *babel-eslint* and *eslint-plugin-react* because it relies on those packages for ES2015 and React support respectively. While it could be argued that we should use peerDependencies for them, we've made a decision to side with user friendliness and beginner friendliness over flexibility. Netflix's Data Engineering and Analysis group endeavors to provide a welcome and productive development environment for JavaScript rookies as well as veterans. Rookies aren't going to feel welcome and productive if they need to self-resolve a complex web of dependencies that we can easily prepare for them.