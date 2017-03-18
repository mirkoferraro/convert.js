# [convert.js](https://github.com/mirkoferraro/convert.js)

Measure converter in javascript

## How it works
You can convert units from a measure to another one
```
convert('15°C').value()  // 15
convert('15°C').to('°K') // 288.15
convert('15°C').to('°F') // 59
```

## Measures supports
* from °C to °K
* from °C to °F
* from °K to °C
* from °K to °F
* from °F to °C
* from °F to °K

## Installation
```
npm install convert-js
```