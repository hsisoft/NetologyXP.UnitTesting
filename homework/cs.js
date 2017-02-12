"use strict";

const BombModule = require('../homework/bomb');
const TerroristModule = require('../homework/terrorists');
const CounterTerroristModule = require('../homework/counterTerrorists');

const GameRules = {
	'MaxRoundNumber' : 10,
	'NumberOfRoundsToWin' : 2,
};

const GameState = {
	'Idle' : 'idle',
	'Playing' : 'playing',
};

const RoundState = {
	'No_round' : 'no round',
	'Running' : 'running',
	'TerroristsWon' : 'terroristsWon',
	'CounterTerroristsWon' : 'counterTerroristsWon',
};

module.exports.Game = class Game {
	constructor(){
		this._roundPlayed = 0;
		this._activeRound = new module.exports.Round();
		this._gameState = GameState.Idle;
	};

	// --- GAME ---

	get gameState (){
		return this._gameState;
	};

	// --- ROUND ---

	StartRound(roundNumber){
		if (roundNumber === undefined){
			this._activeRound = new module.exports.Round(1);
		}
		else {
			this._activeRound = new module.exports.Round(roundNumber);
		}
	};

	get activeRound (){
		return this._activeRound === undefined ? undefined : this._activeRound;
	};
};

module.exports.Round = class Round {
	constructor(roundNumber) {
		this._roundNumber = roundNumber === undefined ? 1 : roundNumber;
		this._roundState = RoundState.Running;
	}

	get roundNumber (){
		return this._roundNumber;
	}

	get roundState (){
		return this._roundState;
	}
};

module.exports.GameRules = GameRules;
module.exports.GameState = GameState;