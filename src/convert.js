/**
 * convert.js
 * @copyright 2017, Mirko Ferraro <mirkoferraro@gmail.com>
 * @link https://github.com/mirkoferraro/convert.js
 * @license MIT
 * @version 1.0.1
 */
(function(root, factory) {

  // AMD
  if (typeof define === "function" && define.amd) {
      define(["exports"], function(exports) {
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

}(this, function(exports) {

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
                    data.measure    = name
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
            get:     get,
            set:     set,
            match:   match,
            convert: convert
        }
    }

    function Convert() {
        
        var
        _args    = Array.prototype.slice.call(arguments),
        _value   = 0,
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

            if (typeof num !== 'string') {
                throw new TypeError('Convert: argument passed to function "measure" is not a string')
            }

            var match = table.match(str)

            if (!match.measure) {
                throw new Error('Convert: argument passed to function "measure" is not a valid measure string')
            }

            _measure = match.measure

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
            value:   value,
            measure: measure,
            to: to
        }
    }

    var table = new ConvertTable()

    table.set('celsius', {
        match: '°C|celsius',
        fahrenheit: function(val) {
            return val * 1.8 + 32
        },
        kelvin: function(val) {
            return val + 273.15
        }
    })

    table.set('fahrenheit', {
        match: '°F|fahrenheit',
        celsius: function(val) {
            return (val - 32) / 1.8
        },
        kelvin: function(val) {
            return (val+ 459.67) / 1.8
        }
    })

    table.set('kelvin', {
        match: '°K|kelvin',
        celsius: function(val) {
            return (val - 32) / 1.8
        },
        fahrenheit: function(val) {
            return val * 1.8 - 459.67
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