(function($) {
  let urlParams;
  const BASE_URL = location.protocol + '//' + location.host + location.pathname;

  let methods = {
    init : init,
    add : add,
    removeSelected : removeSelected,
    removeAll : removeAll
  };

  window.pushToUrl = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on pushToUrl.jQuery' );
    }
  };

  function init() {
    // Add any initialization logic here...
    console.info('pushToUrl.jQuery')
    let codeDoc = [
      ["add key and value to url params", "pushToUrl('add', {key: key, value: value});"],
      ["delete selected key from url params", "pushToUrl('remove', {key: key});"],
      ["remove all url params", "pushToUrl('removeAll');"]
    ]
    console.table(codeDoc);
  }

  function add(options) {
    const settings = $.extend({
      key     : null,
      value   : null,
    }, options);
    const key = settings.key;
    const value = settings.value;
    if (key && value) {
      if (detectQueryString()) {
        urlParams = detectQueryString(key, value);
      } else {
        urlParams = key + '=' + value;
      }
      const newUrl = BASE_URL + '?' + urlParams;
      window.history.pushState({path: newUrl}, '', newUrl);
    }
  }

  function removeSelected(options) {
    const settings = $.extend({
      key : null,
    }, options);
    const key = settings.key;
    const count = countUrlParams();
    let newUrl = BASE_URL;
    if (count) {
      if (count > 1) {
        newUrl = location.href.split('?')
                              .map((url, i) => !i ? url : url
                              .replace(new RegExp(`&${key}=[^&]*|${key}=[^&]*&`), ''))
                              .join('?');

      }
      window.history.pushState({path: newUrl}, '', newUrl);
    }
  }

  function removeAll() {
    window.history.pushState({path: BASE_URL}, '', BASE_URL);
  }

  function detectQueryString(key = null, value = null) {
    const currentUrl = window.location.href;
    if (key || value) {
      let urlParams = new URLSearchParams(location.search);
      urlParams.set(key, value);
      return urlParams.toString();
    } else {
      // regex pattern for detecting ? character
      const pattern = new RegExp(/\?+/g);
      return pattern.test(currentUrl);
    }
  }

  function countUrlParams() {
    let cUrl = window.location.href;
    let matches = cUrl.match(/[a-z\d]+=[a-z\d]+/gi);
    return matches? matches.length : 0;
  }

}( jQuery ));
