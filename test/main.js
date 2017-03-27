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