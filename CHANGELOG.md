<a name="3.0.1-0"></a>
### 3.0.1-0 (2017-11-20)


#### Bug Fixes

* parens conflicted w/ wrap multi ([acb4247b](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/acb4247b))


<a name="3.0.0"></a>
## 3.0.0 (2017-09-08)


#### Features

* support use with latest react-scripts ([bb64793b](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/bb64793b))


<a name="2.1.1-0"></a>
### 2.1.1-0 (2017-04-13)


#### Features

* base this on netflix config ([faa32a62](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/faa32a62))
* stricter JSX and ES2016 rules ([27770a1c](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/27770a1c))


#### Breaking Changes

* 
Netflix config contains some rule changes

 ([faa32a62](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/faa32a62))
* 
* Template strings can't have space next to brackets
* Curly brackets not used for templating in string
  prohibited to help catch typos
* Prevent using class methods without `this`

 ([27770a1c](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/27770a1c))


<a name="2.1.0"></a>
## 2.1.0 (2016-10-17)


<a name="2.0.5"></a>
### 2.0.5 (2016-08-09)


#### Bug Fixes

* jsx-wrap-multilines ([c10cb45d](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/c10cb45d))


<a name="2.0.4"></a>
### 2.0.4 (2016-08-09)


#### Bug Fixes

* lower eslint-plugin-react version ([40abae2f](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/40abae2f))


<a name="2.0.3"></a>
### 2.0.3 (2016-08-09)


<a name="2.0.2"></a>
### 2.0.2 (2016-08-09)


<a name="2.0.1-3"></a>
### 2.0.1-3 (2016-06-01)


#### Bug Fixes

* babel-eslint ([d969069a](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/d969069a))


<a name="2.0.1-2"></a>
### 2.0.1-2 (2016-06-01)


#### Bug Fixes

* es6 ([47f024c1](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/47f024c1))


<a name="2.0.1-1"></a>
### 2.0.1-1 (2016-06-01)


#### Bug Fixes

* deps ([09129d70](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/09129d70))


<a name="2.0.1-0"></a>
### 2.0.1-0 (2016-06-01)


#### Features

* include react plugin and add ES6 features ([1645a719](git+https://github.com/Netflix/eslint-config-netflix-dea.git/commit/1645a719))


# Change Log

## 2.0.0 (04.03.2016)

### Configuration changes
* "space-before-function-paren" changed to 0. We definitely don't want linting to fail because of a space before parens. 

## 1.0.1 (04.03.2016)

### Fixes
* Package *babel-eslint* and *eslint-plugin-react* for user-friendliness
