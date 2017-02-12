"use strict";

var assert = require('assert');
const GameModule = require('../homework/cs');
const BombModule = require('../homework/bomb');
const TerroristModule = require('../homework/terrorists');
const CounterTerroristModule = require('../homework/counterTerrorists');

suite('When a game starts', function () {
	test('game status should be idle', function () {
        // Arrage
		let game = new GameModule.Game();
		let referenceResult = GameModule.GameState.Idle;

		// Missed Action Scheme
		// no actions needed

        // Assert
		assert.equal(referenceResult, game.gameState);
	});
});

suite('When a round starts', function () {
	test('w/o round number - its number should be 1', function () {
		// Arrage
		let game = new GameModule.Game();
		let referenceResult = 1;

		// Action
		game.StartRound();

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('with number 1 - its number should be 1', function () {
		// Arrage
		let game = new GameModule.Game();
		let referenceResult = 1;

		// Action
		game.StartRound(1);

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('with number 2 - its number should be 2', function () {
		// Arrage
		let game = new GameModule.Game();
		let referenceResult = 2;

		// Action
		game.StartRound(2);

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('game status should be playing', function () {
		// Arrage
		let game = new GameModule.Game();
		let referenceResult = GameModule.GameState.Playing

		// Action
		game.StartRound();

		// Assert
		assert.equal(referenceResult, game.gameState);
	});

	test('a bomb should be ready', function () {
		// Arrage
		let game = new GameModule.Game();
		let referenceResult = BombModule.BombState.ready;

		// Action
		game.StartRound();

		// Assert
		assert.equal(referenceResult, game.activeRound.bombState);
	});
});