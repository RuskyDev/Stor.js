var Stor = {};

Stor.isSupported = function() {
  try {
    var testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

Stor.set = function(key, value, options) {
  if (!Stor.isSupported()) {
    return false;
  }
  options = options || {};
  var expires = options.expires;
  if (typeof expires === 'number') {
    expires = new Date(new Date().getTime() + expires * 1000);
  }
  var data = {
    value: value,
    expires: expires ? expires.getTime() : null
  };
  localStorage.setItem(key, JSON.stringify(data));
  return true;
};

Stor.get = function(key, defaultValue) {
  if (!Stor.isSupported()) {
    return defaultValue;
  }
  var value = localStorage.getItem(key);
  if (!value) {
    return defaultValue;
  }
  try {
    var data = JSON.parse(value);
    if (data.expires && new Date().getTime() > data.expires) {
      localStorage.removeItem(key);
      return defaultValue;
    }
    return data.value;
  } catch (e) {
    return defaultValue;
  }
};

Stor.remove = function(key) {
  if (!Stor.isSupported()) {
    return false;
  }
  localStorage.removeItem(key);
  return true;
};
