"use strict";

var assert = require('assert');
const BombModule = require('../homework/bomb');
const CounterTerroristModule = require('../homework/counterTerrorists');

suite('When a counterTerrorist', function () {
	test('defuse a bomb - it should be defused', function () {
        // Arrage
		let counterTerror = new CounterTerroristModule.counterTerrorists();
		let bomb = new BombModule.Bomb();
		let referenceResult = BombModule.BombState.defused;

        // Act
        counterTerror.defuseBomb(bomb);

        // Assert
		assert.equal(referenceResult, bomb.state);
	});
});