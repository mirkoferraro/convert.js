# [convert.js](https://github.com/mirkoferraro/convert.js)

Measure converter in javascript

## How it works
You can convert units from a measure to another one
```
convert('15°C').value()              // 15
convert('15°C').to('°K')             // 288.15
convert('15°C').to('°F')             // 59
convert('15').measure('°C').to('°F') // 59
```

## Measures supports

### Temperature
* from °C to °K
* from °C to °F
* from °K to °C
* from °K to °F
* from °F to °C
* from °F to °K

### Weight
* from g to oz
* from g to lb
* from oz to g
* from oz to lb
* from lb to g
* from lb to oz

### Length
* from m to yd
* from m to ft
* from yd to m
* from yd to ft
* from ft to m
* from ft to yd


## Custom conversion
You can also add you custom conversion to the conversion table
```
convert('table').set('custom1', {
    match: 'c1|custom1',
    custom2: function(val) {
        return (val + 2) * 5
    }
})

convert('table').set('custom2', {
    match: 'c2|custom2',
    custom1: function(val) {
        return val / 5 - 2
    }
})
```

And then use it as shown
```
convert('35c1').to('c2') // 185
```


## Installation
```
npm install convert-js
```