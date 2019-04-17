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
  - Package Manager: `PM> Install-Package PushDataToUrl -Version 1.0.0`
  - .Net CLI: `> dotnet add package PushDataToUrl --version 1.0.0`
  - Paket CLI: `> paket add PushDataToUrl --version 1.0.0`


## Implementation
### To add data to url param
  ```javascript
  $('body').pushToUrl('add', {key: key, value: value});
  ```
### To remove selected data from url param
  ```javascript
  $('body').pushToUrl('removeSelected', {key: key});
  ```
### To remove all data from url param
  ```javascript
  $('body').pushToUrl('removeAll');
  ```
