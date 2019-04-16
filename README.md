# Push to URL parameters
This is a plugin to add, update and remove data to url params without reloading the webpage.

## Commands
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

## jQuery Plugin
1. To add data to url param
  `$('body').pushToUrl('add', {key: key, value: value});`
2. To remove selected data from url param
  `$('body').pushToUrl('removeSelectedKey', {key: key});`
2. To remove all data from url param
  `$('body').pushToUrl('removeAll');`
