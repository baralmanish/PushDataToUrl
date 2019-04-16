(function($) {
  let urlParams;
  const BASE_URL = location.protocol + '//' + location.host + location.pathname;

  let methods = {
    init : function() {
      console.info('pushToUrl.jQuery')
      let codeDoc = [
        ["add key and value to url params", "$('body').pushToUrl('add', {key: key, value: value});"],
        ["delete selected key from url params", "$('body').pushToUrl('removeSelectedKey', {key: key});"],
        ["remove all url params", "$('body').pushToUrl('removeAll');"]
      ]
      console.table(codeDoc);
    },
    add : function(options) {
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
    },
    removeSelectedKey : function(options) {
      const settings = $.extend({
        key : null,
      }, options);
      const key = settings.key;
      const count = countUrlParams();
      if (key && count) {
        let newUrl = BASE_URL;
        if (count > 1) {
          newUrl = location.href.split('?')
                                      .map((url, i) => !i ? url : url
                                      .replace(new RegExp(`&${key}=[^&]*|${key}=[^&]*&`), ''))
                                      .join('?');
          window.history.pushState({path: newUrl}, '', newUrl);
        }
      }
    },
    removeAll : function() {
      window.history.pushState({path: BASE_URL}, '', BASE_URL);
    }
  };

  $.fn.pushToUrl = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on pushToUrl.jQuery' );
    }
  };

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
