"use strict";

var assert = require('assert');
const BombModule = require('../homework/bomb');

suite('Bomb should', function () {
	test('be in ready status by default', function () {
        // Arrage
		let bomb = new BombModule.Bomb();
		let referenceResult = BombModule.BombState.ready;

        // Missed Action Scheme
        // no actions needed

        // Assert
		assert.equal(referenceResult, bomb.state);
	});

	test('be in ready status when is set to ready status', function () {
		// Arrage
		let bomb = new BombModule.Bomb(BombModule.BombState.ready);
		let referenceResult = BombModule.BombState.ready;

		// Act
		// no actions needed

		// Assert
		assert.equal(referenceResult, bomb.state);
	});

	test('be planted when planted', function () {
		// Arrage
		let bomb = new BombModule.Bomb(BombModule.BombState.planted);
		let referenceResult = BombModule.BombState.planted;

		// Act
		bomb.plant();

		// Assert
		assert.equal(referenceResult, bomb.state);
	});

	test('be defused when defused', function () {
		// Arrage
		let bomb = new BombModule.Bomb(BombModule.BombState.defused);
		let referenceResult = BombModule.BombState.defused;

		// Act
		bomb.defuse();

		// Assert
		assert.equal(referenceResult, bomb.state);
	});
});

suite('When the bomb is planted for a second time', function () {
	test('nothing happens', function () {
		// Arrage
		let bomb = new BombModule.Bomb(BombModule.BombState.planted);
		let referenceResult = BombModule.BombState.defused;

		bomb.plant();
		bomb.defuse();

		// Act
		bomb.plant();

		// Assert
		assert.equal(referenceResult, bomb.state);
	});
});