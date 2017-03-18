const convert = require('../dist/convert.min')

var
celsius    = '15°C',
temp       = convert(celsius),
kelvin     = temp.to('°K'),
fahrenheit = temp.to('°F')

document.body.innerHTML = temp.value() + '&deg;C = ' + kelvin + '&deg;K' + ' = ' + fahrenheit + '&deg;F'