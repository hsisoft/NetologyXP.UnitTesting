"use strict";

var assert = require('assert');
const BombModule = require('../homework/bomb');

suite('Bomb should', function () {
	test('be defused at initial status', function () {
        // Arrage
		let bomb = new BombModule.Bomb(BombModule.BombState.planted);

        // Act
        let result = BombModule.BombState.planted;

        // Assert
		assert.equal(BombModule.BombState.planted, result);
	});

	test('be planted when planted', function () {

	});

	test('be defused when defused', function () {

	});
});