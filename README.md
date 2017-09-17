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
```celsius, fahrenheit, kelvin```
* from °C to °K
* from °C to °F
* from °K to °C
* from °K to °F
* from °F to °C
* from °F to °K

### Weight
```grams, ounces, pounds```
* from g to oz
* from g to lb
* from oz to g
* from oz to lb
* from lb to g
* from lb to oz

### Length
```nanometres, micrometres, millimetres,  centimetres,  metres,  kilometres,  inches,  feet,  yards, miles, furlong```

* from nm to μm
* from nm to mm
* from nm to cm
* from nm to m
* from nm to km
* from nm to in
* from nm to ft
* from nm to yd
* from nm to miles
* from nm to furlong
* from μm to nm
* from μm to mm
* from μm to cm
* from μm to m
* from μm to km
* from μm to in
* from μm to ft
* from μm to yd
* from μm to miles
* from μm to furlong
* from mm to nm
* from mm to μm
* from mm to cm
* from mm to m
* from mm to km
* from mm to in
* from mm to ft
* from mm to yd
* from mm to miles
* from mm to furlong
* from cm to nm
* from cm to μm
* from cm to mm
* from cm to m
* from cm to km
* from cm to in
* from cm to ft
* from cm to yd
* from cm to miles
* from cm to furlong
* from m to nm
* from m to μm
* from m to mm
* from m to cm
* from m to km
* from m to in
* from m to yd
* from m to ft
* from m to miles
* from m to furlong
* from km to nm
* from km to μm
* from km to mm
* from km to cm
* from km to m
* from km to in
* from km to ft
* from km to yd
* from km to miles
* from km to furlong
* from in to nm
* from in to μm
* from in to mm
* from in to cm
* from in to m
* from in to km
* from in to ft
* from in to yd
* from in to miles
* from in to furlong
* from ft to nm
* from ft to μm
* from ft to mm
* from ft to cm
* from ft to m
* from ft to km
* from ft to in
* from ft to yd
* from ft to miles
* from ft to furlong
* from yd to nm
* from yd to μm
* from yd to mm
* from yd to cm
* from yd to m
* from yd to km
* from yd to ft
* from ft to yd
* from yd to miles
* from yd to furlong
* from miles to nm
* from miles to μm
* from miles to mm
* from miles to cm
* from miles to m
* from miles to km
* from miles to in
* from miles to yd
* from miles to ft
* from miles to furlong
* from furlong to nm
* from furlong to μm
* from furlong to mm
* from furlong to cm
* from furlong to m
* from furlong to km
* from furlong to in
* from furlong to ft
* from furlong to yd
* from furlong to miles

### Volume (fluid)
```centilitres, millilitres, litres, teaspoons,  tablespoons,  cups,  pints,  quarts,  gallons```
* from tsp to g
* from tsp to lbs
* from tsp to oz
* from tsp to tbsp
* from tsp to ml
* from tsp to l
* from tsp to c
* from tsp to p
* from tsp to q
* from tsp to gallons
* from tbsp to g
* from tbsp to lbs
* from tbsp to oz
* from tbsp to tsp
* from tbsp to ml
* from tbsp to l
* from tbsp to c
* from tbsp to p
* from tbsp to q
* from tbsp to gallons
* from ml to g
* from ml to lbs
* from ml to oz
* from ml to tsp
* from ml to tbsp
* from ml to l
* from ml to c
* from ml to p
* from ml to q
* from ml to gallons
* from l to g
* from l to lbs
* from l to oz
* from l to tsp
* from l to tbsp
* from l to ml
* from l to c
* from l to p
* from l to q
* from l to gallons
* from c to g
* from c to lbs
* from c to oz
* from c to tsp
* from c to tbsp
* from c to ml
* from c to l
* from c to p
* from c to q
* from c to gallons
* from p to g
* from p to lbs
* from p to oz
* from p to tsp
* from p to tbsp
* from p to ml
* from p to l
* from p to c
* from p to q
* from p to gallons
* from q to g
* from q to lbs
* from q to oz
* from q to tsp
* from q to tbsp
* from q to ml
* from q to l
* from q to p
* from q to gallons
* from gallons to g
* from gallons to lbs
* from gallons to oz
* from gallons to tsp
* from gallons to tbsp
* from gallons to ml
* from gallons to l
* from gallons to c
* from gallons to p
* from gallons to q
* from gallons to gallons

### Disk Storage
```bytes, kilobytes, megabytes,  gigabytes,  terabytes,  petabytes```

* from b to kb
* from b to mb
* from b to gb
* from b to tb
* from b to pb
* from kb to b
* from kb to mb
* from kb to gb
* from kb to tb
* from kb to pb
* from mb to b
* from mb to kb
* from mb to gb
* from mb to tb
* from mb to pb
* from gb to b
* from gb to kb
* from gb to mb
* from gb to tb
* from gb to pb
* from tb to b
* from tb to kb
* from tb to mb
* from tb to gb
* from tb to pb
* from pb to b
* from pb to kb
* from pb to mb
* from pb to tb
* from pb to gb


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