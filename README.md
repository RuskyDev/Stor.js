# Stor.js
Stor.js is a lightweight JavaScript library that provides a simple API for storing and retrieving data from localStorage.

# Usage
To use `Stor.js`, include the stor.js file in your HTML file:

```html
<script src="path/to/stor.js"></script>
```
or
```html
<script src="https://raw.githubusercontent.com/RuskyDev/Stor.js/main/stor.js"></script>
```

To store data, use the `Stor.set()` function:

```javascript
Stor.set('myKey', 'myValue', {expires: 60});
```
The first argument is the key under which the data will be stored, the second argument is the value to be stored, and the third argument is an optional object containing additional options such as an expiration time in seconds.

To retrieve data, use the `Stor.get()` function:

```javascript
var myData = Stor.get('myKey', 'defaultValue');
```
The first argument is the key under which the data was stored, and the second argument is an optional default value to be returned if the key does not exist.
