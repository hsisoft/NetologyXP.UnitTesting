"use strict";

var assert = require('assert');
const BombModule = require('../homework/bomb');
const TerroristModule = require('../homework/terrorists');

suite('When a terrorist', function () {
	test('plant a bomb - it should be planted', function () {
        // Arrage
		let terror = new TerroristModule.Terrorist();
		let bomb = new BombModule.Bomb();
		let referenceResult = BombModule.BombState.planted;

        // Act
        terror.plantBomb(bomb);

        // Assert
		assert.equal(referenceResult, bomb.state);
	});
});