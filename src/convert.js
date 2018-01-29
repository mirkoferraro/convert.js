/**
 * convert.js
 * @copyright 2017, Mirko Ferraro <mirkoferraro@gmail.com>
 * @link https://github.com/mirkoferraro/convert.js
 * @license MIT
 * @version 1.0.6
 */
(function (root, factory) {

    // AMD
    if (typeof define === "function" && define.amd) {
        define(["exports"], function (exports) {
            return factory(exports);
        });
    }

    // CommonJS
    else if (typeof exports !== "undefined") {
        factory(exports);
    }

    // Browser
    else {
        factory(root);
    }

}(this, function (exports) {

    function ConvertTable() {

        var
            conversion_table = {},
            regexps = {}

        regexp = new RegExp('(\\d+)?(.+)?')

        function get(name) {
            if (typeof conversion_table[name] === 'undefined') {
                throw new Error('ConvertTable: invalid name ' + name)
            }

            return conversion_table[name];
        }

        function set(name, conversion) {
            if (typeof conversion !== 'object' ||
                typeof conversion.match !== 'string') {
                throw new Error('ConvertTable: invalid conversion object')
            }

            conversion_table[name] = conversion;
        }

        function match(str) {
            var
                match,
                data = {}

            for (var name in conversion_table) {

                if (typeof regexps[name] === 'undefined') {
                    regexps[name] = new RegExp('(\\d+)?(' + conversion_table[name].match + ')?')
                }

                match = regexps[name].exec(str)

                if (match[1]) {
                    data.value = parseFloat(match[1])
                }

                if (match[2]) {
                    data.measure = name
                    data.conversion = get(name)
                    return data
                }

            }

            return data

        }

        function convert(from_value, from_measure, to_measure) {

            var
                conversion = get(from_measure),
                func = conversion[to_measure]

            if (typeof func !== 'function') {
                throw new Error('ConvertTable: invalid conversion function [from ' + from_measure + ' to ' + to_measure + ']')
            }

            return func(from_value)
        }

        return {
            get: get,
            set: set,
            match: match,
            convert: convert
        }
    }

    function Convert() {

        var
            _args = Array.prototype.slice.call(arguments),
            _value = 0,
            _measure = null

        function _construct() {

            if (_args.length) {

                var match = table.match(_args[0])

                if (match.value) {
                    _value = match.value
                }

                if (match.measure) {
                    _measure = match.measure
                }

            }

        }

        function value(num) {

            if (typeof num === 'undefined') {
                return _value
            }

            if (typeof num !== 'number') {
                throw new Error('Convert: argument passed to function "value" is not a number')
            }

            _value = num
            return this

        }

        function measure(str) {

            if (typeof str === 'undefined') {
                return _measure
            }

            if (typeof str !== 'string') {
                throw new TypeError('Convert: argument passed to function "measure" is not a string')
            }

            var match = table.match(str)

            if (!match.measure) {
                throw new Error('Convert: argument passed to function "measure" is not a valid measure string')
            }

            _measure = match.measure
            return this
        }

        function to(str) {

            if (typeof str !== 'string') {
                throw new TypeError('Convert: argument must be a string')
            }

            var match = table.match(str)

            if (!match.measure) {
                throw new Error('Convert: conversion ' + str + ' wasn\' matched in conversion table')
            }

            return table.convert(_value, _measure, match.measure)

        }

        _construct()

        return {
            value: value,
            measure: measure,
            to: to
        }
    }

    var table = new ConvertTable()

    table.set('celsius', {
        match: '°C|celsius',
        fahrenheit: function (val) {
            return val * 1.8 + 32
        },
        kelvin: function (val) {
            return val + 273.15
        }
    })

    table.set('fahrenheit', {
        match: '°F|fahrenheit',
        celsius: function (val) {
            return (val - 32) / 1.8
        },
        kelvin: function (val) {
            return (val + 459.67) / 1.8
        }
    })

    table.set('kelvin', {
        match: '°K|kelvin',
        celsius: function (val) {
            return (val - 32) / 1.8
        },
        fahrenheit: function (val) {
            return val * 1.8 - 459.67
        }
    })

    table.set('grams', {
        match: 'g|grams',
        cups: function (val) {
            return val * 0.0042267528198649
        },
        gallons: function (val) {
            return val * 0.00026417205124156
        },
        nanolitres: function (val) {
            return val * 1000000
        },
        microlitres: function (val) {
            return val * 1000
        },
        liters: function (val) {
            return val * 0.001
        },
        milliliters: function (val) {
            return val
        },
        ounces: function (val) {
            return val * 0.035273962070595
        },
        pints: function (val) {
            return val * 0.0021133764099325
        },
        pounds: function (val) {
            return val * 0.0022046226294122
        },
        quarts: function (val) {
            return val * 0.0010566882049662
        },
        tablespoons: function (val) {
            return val * 0.06666666666666667
        },
        teaspoons: function (val) {
            return val * 0.2
        }
    })

    table.set('pounds', {
        match: 'lb|lbs|pounds',
        cups: function (val) {
            return val * 2
        },
        gallons: function (val) {
            return val / 8.35
        },
        grams: function (val) {
            return val * 453.592
        },
        litres: function (val) {
            return val * 0.45
        },
        millilitres: function (val) {
            return val * 453.59
        },
        ounces: function (val) {
            return val * 16
        },
        pints: function (val) {
            return val * 1
        },
        quarts: function (val) {
            return val / 2.20
        },
        tablespoons: function (val) {
            return val * 32
        },
        teaspoons: function (val) {
            return val * 96
        }
    })

    table.set('ounces', {
        match: 'oz|ounces',
        cups: function (val) {
            return val * 0.125
        },
        gallons: function (val) {
            return val * 0.0078125
        },
        grams: function (val) {
            return val * 28.3495
        },
        liters: function (val) {
            return val * 0.0295735
        },
        milliliters: function (val) {
            return val * 0.033814
        },
        pints: function (val) {
            return val * 0.0625
        },
        pounds: function (val) {
            return val * 0.062500
        },
        quarts: function (val) {
            return val * 0.03125
        },
        tablespoons: function (val) {
            return val * 2
        },
        teaspoons: function (val) {
            return val * 6
        }
    })

    table.set('cups', {
        match: 'c|cups',
        gallons: function (val) {
            return val * 0.0625
        },
        grams: function (val) {
            return val * 128
        },
        liters: function (val) {
            return val * 0.236588
        },
        milliliters: function (val) {
            return val * 236.588
        },
        ounces: function (val) {
            return val * 8
        },
        pints: function (val) {
            return val * 0.5
        },
        pounds: function (val) {
            return val / 2
        },
        quarts: function (val) {
            return val * 0.25
        },
        tablespoons: function (val) {
            return val * 16
        },
        teaspoons: function (val) {
            return val * 48
        }
    })

    table.set('millilitres', {
        match: 'ml|millilitres',
        cups: function (val) {
            return val * 0.00422675
        },
        gallons: function (val) {
            return val * 0.000264172
        },
        grams: function (val) {
            return val
        },
        nanolitres: function (val) {
            return val * 1000000
        },
        microlitres: function (val) {
            return val * 1000
        },
        centilitres: function (val) {
            return val * 0.1
        },
        litres: function (val) {
            return val * 0.001
        },
        ounces: function (val) {
            return val * 0.033814
        },
        pints: function (val) {
            return val * 0.00211338
        },
        pounds: function (val) {
            return val / 453.59
        },
        quarts: function (val) {
            return val * 0.00105669
        },
        tablespoons: function (val) {
            return val * 0.067628
        },
        teaspoons: function (val) {
            return val * 0.202884
        }
    })

    table.set('liters', {
        match: 'liter|liters|l',
        cups: function (val) {
            return val * 4.22675
        },
        gallons: function (val) {
            return val * 0.264172
        },
        grams: function (val) {
            return val * 0.001
        },
        millilitres: function (val) {
            return val * 1000
        },
        ounces: function (val) {
            return val * 33.814
        },
        pints: function (val) {
            return val * 2.11338
        },
        pounds: function (val) {
            return val * 2.20
        },
        quarts: function (val) {
            return val * 1.05669
        },
        tablespoons: function (val) {
            return val * 67.628
        },
        teaspoons: function (val) {
            return val * 202.884
        }
    })

    table.set('quarts', {
        match: 'quart|quarts|qt|qts',
        cups: function (val) {
            return val * 4;
        },
        gallons: function (val) {
            return val * 0.25;
        },
        grams: function (val) {
            return val * 10566882049662e-3
        },
        liters: function (val) {
            return val * 0.946353
        },
        milliliters: function (val) {
            return val * 946.353
        },
        ounces: function (val) {
            return val * 32
        },
        pints: function (val) {
            return val * 2
        },
        pounds: function (val) {
            return val * 2.20
        },
        tablespoons: function (val) {
            return val * 64
        },
        teaspoons: function (val) {
            return val * 192
        }
    })

    table.set('gallons', {
        match: 'gallons',
        cups: function (val) {
            return val * 16
        },
        grams: function (val) {
            return val * 3785.4118
        },
        liters: function (val) {
            return val * 3.7854118
        },
        milliliters: function (val) {
            return val * 3785.4118
        },
        ounces: function (val) {
            return val * 133.22787010376
        },
        pints: function (val) {
            return val * 8
        },
        pounds: function (val) {
            return val * 8.35
        },
        quarts: function (val) {
            return val * 4
        },
        tablespoons: function (val) {
            return val * 252.36078666667
        },
        teaspoons: function (val) {
            return val * 757.08236
        }
    })

    table.set('nanometres', {
        match: 'nm|nanometres',
        micrometres: function (val) {
            return val * 0.001
        },
        millimetres: function (val) {
            return val * 1e-6
        },
        centimetres: function (val) {
            return val * 1e-7
        },
        metres: function (val) {
            return val * 1e-9
        },
        kilometres: function (val) {
            return val * 1e-12
        },
        inches: function (val) {
            return val * 3.9370078740157e-8
        },
        feet: function (val) {
            return val * 3.2808398950131e-9
        },
        yards: function (val) {
            return val * 1.0936132983377e-9
        },
        miles: function (val) {
            return val * 6.2137119223733e-13
        },
        furlong: function (val) {
            return val * 4.9709695378987e-12
        }
    })

    table.set('micrometres', {
        match: 'μm|micrometres',
        nanometres: function (val) {
            return val * 1000
        },
        millimetres: function (val) {
            return val * 0.001
        },
        centimetres: function (val) {
            return val * 0.0001
        },
        metres: function (val) {
            return val * 0.000001
        },
        kilometres: function (val) {
            return val * 1e-9
        },
        inches: function (val) {
            return val * 3.937007874015748e-5
        },
        feet: function (val) {
            return val * 3.2808398950131235e-6
        },
        yards: function (val) {
            return val * 1.0936132983377078e-6
        },
        miles: function (val) {
            return val * 6.2137119223733e-10
        },
        furlong: function (val) {
            return val * 4.9709695378987e-9
        }
    })

    table.set('millimetres', {
        match: 'mm|millimetres',
        nanometres: function (val) {
            return val * 1000000
        },
        micrometres: function (val) {
            return val * 1000
        },
        centimetres: function (val) {
            return val * 0.1
        },
        metres: function (val) {
            return val * 0.001
        },
        kilometres: function (val) {
            return val * 0.000001
        },
        inches: function (val) {
            return val * 0.0393700787
        },
        feet: function (val) {
            return val * 0.0032808398
        },
        yards: function (val) {
            return val * 0.0010936133
        },
        miles: function (val) {
            return val * 6.21371192e-7
        },
        furlong: function (val) {
            return val * 0.0000049709
        }
    })

    table.set('centimetres', {
        match: 'cm|centimetres',
        nanometres: function (val) {
            return val * 10000000
        },
        micrometres: function (val) {
            return val * 10000
        },
        millimetres: function (val) {
            return val * 10
        },
        metres: function (val) {
            return val * 0.01
        },
        kilometres: function (val) {
            return val * 0.00001
        },
        inches: function (val) {
            return val * 0.393700787
        },
        feet: function (val) {
            return val * 0.0328083989
        },
        yards: function (val) {
            return val * 0.0109361329
        },
        miles: function (val) {
            return val * 0.0000062137
        },
        furlong: function (val) {
            return val * 0.0000497096
        }
    })

    table.set('metres', {
        match: 'm|metres',
        nanometres: function (val) {
            return val * 1000000800
        },
        micrometres: function (val) {
            return val * 1000000.8
        },
        millimetres: function (val) {
            return val * 1000.0008
        },
        centimetres: function (val) {
            return val * 1.0000008e-3
        },
        kilometres: function (val) {
            return val * 1.0000008e-3
        },
        miles: function (val) {
            return val * 6.213715277778e-4
        },
        yards: function (val) {
            return val * 1.0936
        },
        feet: function (val) {
            return val * 3.2808
        },
        inches: function (val) {
            return val * 39.3701
        },
        furlong: function (val) {
            return val * 0.00497096
        }
    })

    table.set('inches', {
        match: 'in|inches',
        micrometres: function (val) {
            return val * 25400
        },
        millimetres: function (val) {
            return val * 25.4
        },
        centimetres: function (val) {
            return val * 2.54
        },
        metres: function (val) {
            return val * 0.0254
        },
        miles: function (val) {
            return val * 0.0000157828
        },
        yard: function (val) {
            return val * 0.0277778
        },
        feet: function (val) {
            return val * 0.0833333
        },
        furlong: function (val) {
            return val * 0.000126262
        }
    })

    table.set('yards', {
        match: 'yd|yds|yards',
        nanometres: function (val) {
            return val * 914400000
        },
        micrometres: function (val) {
            return val * 914400
        },
        millimetres: function (val) {
            return val * 914.4
        },
        centimetres: function (val) {
            return val * 91.44
        },
        metres: function (val) {
            return val / 1.0936
        },
        kilometres: function (val) {
            return val * 9.144e-4
        },
        inches: function (val) {
            return val * 36
        },
        feet: function (val) {
            return val * 3
        },
        miles: function (val) {
            return val * 5.681818181818182e-4
        },
        furlong: function (val) {
            return val * 4.545454545454545e-3
        }
    })

    table.set('feet', {
        match: 'ft|feet',
        nanometres: function (val) {
            return val * 304800000
        },
        micrometres: function (val) {
            return val * 304800
        },
        millimetres: function (val) {
            return val * 304.8
        },
        centimetres: function (val) {
            return val * 30.48
        },
        metres: function (val) {
            return val / 3.2808
        },
        kilometres: function (val) {
            return val * 0.0003048
        },
        inches: function (val) {
            return val * 12
        },
        yards: function (val) {
            return val / 3
        },
        miles: function (val) {
            return val * 1.893939393939394e-4
        },
        furlong: function (val) {
            return val * 1.5151515151515152e-3
        }
    })

    table.set('quarts', {
        match: 'qt|qts|quarts',
        cups: function (val) {
            return val * 4;
        },
        gallons: function (val) {
            return val * 0.25;
        },
        grams: function (val) {
            return val * 1.0566882049662e-3;
        },
        liters: function (val) {
            return val * 0.946353;
        },
        milliliters: function (val) {
            return val * 946.353;
        },
        ounces: function (val) {
            return val * 32;
        },
        pints: function (val) {
            return val * 2;
        },
        pounds: function (val) {
            return val * 2.20;
        },
        tablespoons: function (val) {
            return val * 64;
        },
        teaspoons: function (val) {
            return val * 192;
        }
    })

    table.set('pints', {
        match: 'pt|pts|pints',
        cups: function (val) {
            return val * 2;
        },
        gallons: function (val) {
            return val * 0.125;
        },
        grams: function (val) {
            return val * 473.176475;
        },
        litres: function (val) {
            return val * 0.473176;
        },
        millilitres: function (val) {
            return val * 473.176;
        },
        ounces: function (val) {
            return val * 16;
        },
        pounds: function (val) {
            return val * 1;
        },
        quarts: function (val) {
            return val * 0.5;
        },
        tablespoons: function (val) {
            return val * 32;
        },
        teaspoons: function (val) {
            return val * 96;
        }
    })

    table.set('tablespoons', {
        match: 'tbsp|tablespoons',
        cups: function (val) {
            return val * 0.0625;
        },
        gallons: function (val) {
            return val * 0.00390625;
        },
        grams: function (val) {
            return val * 14.18;
        },
        liters: function (val) {
            return val * 0.0147868;
        },
        milliliters: function (val) {
            return val * 14.7868;
        },
        ounces: function (val) {
            return val * 0.5;
        },
        pints: function (val) {
            return val * 0.03125;
        },
        pounds: function (val) {
            return val / 32;
        },
        quarts: function (val) {
            return val * 0.015625;
        },
        teaspoons: function (val) {
            return val * 3;
        }
    })

    table.set('teaspoons', {
        match: 'tsp|teaspoons',
        cups: function (val) {
            return val * 0.0208333;
        },
        gallons: function (val) {
            return val * 0.00130208;
        },
        grams: function (val) {
            return val * 4.2;
        },
        liters: function (val) {
            return val * 0.00492892;
        },
        milliliters: function (val) {
            return val * 4.92892;
        },
        ounces: function (val) {
            return val * 0.166667;
        },
        pints: function (val) {
            return val * 0.0104167;
        },
        pounds: function (val) {
            return val * 0.013;
        },
        quarts: function (val) {
            return val * 0.00520833;
        },
        tablespoons: function (val) {
            return val * 0.333333;
        }
    })

    table.set('bytes', {
        match: 'bytes',
        kilobytes: function (val) {
            return val * 0.0009765625
        },
        megabytes: function (va) {
            return val * 9.5367431640625e-7
        },
        gigabytes: function (val) {
            return val * 9.3132257461548e-10
        },
        terabytes: function (val) {
            return val * 9.0949470177293e-13
        },
        petabytes: function (val) {
            return val * 8.8817841970013e-16
        }
    })

    table.set('kilobytes', {
        match: 'kb|kilobytes',
        bytes: function (val) {
            return val * 1024
        },
        megabytes: function (va) {
            return val * 0.0009765625
        },
        gigabytes: function (val) {
            return val * 9.5367431640625e-7
        },
        terabytes: function (val) {
            return val * 9.3132257461548e-10
        },
        petabytes: function (val) {
            return val * 9.0949470177293e-13
        }
    })

    table.set('megabytes', {
        match: 'mb|megabytes',
        bytes: function (val) {
            return val * 1048576
        },
        kilobytes: function (va) {
            return val * 1024
        },
        gigabytes: function (val) {
            return val * 9.765625e-4
        },
        terabytes: function (val) {
            return val * 9.5367431640625e-7
        },
        petabytes: function (val) {
            return val * 9.3132257461548e-10
        }
    })

    table.set('gigabytes', {
        match: 'gb|gigabytes',
        bytes: function (val) {
            return val * 1073741824
        },
        kilobytes: function (va) {
            return val * 1048576
        },
        megabytes: function (val) {
            return val * 1024
        },
        terabytes: function (val) {
            return val * 9.765625e-4
        },
        petabytes: function (val) {
            return val * 9.5367431640625e-7
        }
    })

    table.set('terabytes', {
        match: 'tb|terabytes',
        bytes: function (val) {
            return val * 1099511627776
        },
        kilobytes: function (va) {
            return val * 1073741824
        },
        megabytes: function (val) {
            return val * 1048576
        },
        gigabytes: function (val) {
            return val * 1024
        },
        petabytes: function (val) {
            return val * 9.765625e-4
        }
    })

    table.set('petabytes', {
        match: 'pb|petabytes',
        bytes: function (val) {
            return val * 1125899906842624
        },
        kilobytes: function (va) {
            return val * 1099511627776
        },
        megabytes: function (val) {
            return val * 1073741824
        },
        gigabytes: function (val) {
            return val * 9007199.254741
        },
        terabytes: function (val) {
            return val * 1024
        }
    })

    function createConvert(arg) {
        if ('table' == arg.toLowerCase()) {
            return table;
        }

        return new Convert(arg)
    }

    exports.convert = createConvert;
    return createConvert;
}));