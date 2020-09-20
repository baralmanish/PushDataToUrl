# Push to URL parameters
This is a plugin to add, update and remove data to url params without reloading the webpage.


## Setup Commands
- `npm install` - Install npm packages
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.


## Installation
### [NPM](https://www.npmjs.com/package/push-data-to-url)
  `npm i push-data-to-url`
### [Nuget](https://www.nuget.org/packages/PushDataToUrl)
  - Package Manager: `PM> Install-Package PushDataToUrl`
  - .Net CLI: `> dotnet add package PushDataToUrl`
  - Paket CLI: `> paket add PushDataToUrl`

## DEMO
To view the demo please click [here](https://push2url.netlify.app)

## Implementation
### Initialize
  ```javascript
  var pushToUrl = new pushToUrl();
  ```
### Add
  ```javascript
  pushToUrl.add({key: 'name', value: 'John'});
  ```
### Get Value of Selected Key
  ```javascript
  pushToUrl.get('name');
  ```
### Remove Selected Key
  ```javascript
  pushToUrl.remove('name');
  ```
### Remove All
  ```javascript
  pushToUrl.removeAll();
  ```
