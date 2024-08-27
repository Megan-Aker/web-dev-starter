import {sayHello, greetUser} from '../js/main.js'; // Adjust based on available functions in main.js

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });

    QUnit.test('greetUser should greet a user by name', function(assert) {
        var result = greetUser('Caden');
        assert.equal(result, 'Hello, Caden!', 'The greetUser function should return "Hello, Caden!".');
    });

    QUnit.test('greetUser should handle empty name', function(assert) {
        var result = greetUser('');
        assert.equal(result, 'Hello, Guest!', 'The greetUser function should return "Hello, Guest!" for an empty name.');
    });

});