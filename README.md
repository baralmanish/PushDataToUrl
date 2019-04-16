# Push to URL parameters
This is a plugin to add, update and remove data to url params without reloading the webpage.


## Commands
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.


## Installation
  `npm i push-data-to-url`


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
