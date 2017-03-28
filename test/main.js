const convert = require('../dist/convert.min')

var
celsius    = '15°C',
temp       = convert(celsius),
kelvin     = temp.to('°K'),
fahrenheit = temp.to('°F')

document.body.innerHTML += '<p>' + temp.value() + '&deg;C = ' + kelvin + '&deg;K' + ' = ' + fahrenheit + '&deg;F' + '</p>'

var
grams  = '35',
temp   = convert(grams).measure('g'),
pounds = temp.to('lb'),
ounces = temp.to('oz')

document.body.innerHTML += '<p>' + temp.value() + 'g = ' + pounds + 'lb' + ' = ' + ounces + 'oz' + '</p>'


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

var
c1   = '35c1',
temp = convert(c1),
c2   = temp.to('c2')

document.body.innerHTML += '<p>' + temp.value() + '(c1) = ' + c2 + '(c2)</p>'

var
c2   = '185c2',
temp = convert(c2),
c1   = temp.to('c1')

document.body.innerHTML += '<p>' + temp.value() + '(c2) = ' + c1 + '(c1)</p>'