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
	'Finished_TerroristsWon' : 'finishedTerroristsWon',
	'Finished_CounterTerroristsWon' : 'finishedCounterTerroristsWon',
};

module.exports.Game = class Game {
	constructor(){
		this._roundPlayed = 0;
		this._activeRound = new module.exports.Round();
		this._gameState = GameState.Idle;
		this._roundsTerroristsWon = 0;
		this._roundsCounterTerroristsWon = 0;
	};

	// --- GAME ---

	get gameState (){
		return this._gameState;
	};

	// --- ROUND ---

	StartRound(roundNumber) {
		if (roundNumber === undefined){
			this._activeRound = new module.exports.Round(this._roundPlayed + 1);
		}
		else {
			this._activeRound = new module.exports.Round(roundNumber);
		}
		this._gameState = GameState.Playing;
	};

	EndRound(){
		if (this._activeRound !== undefined){
			this._activeRound.EndRound();
			this._roundPlayed++;
			this._gameState = GameState.Idle;
		}
	};

	get activeRound (){
		return this._activeRound === undefined ? undefined : this._activeRound;
	};
};

module.exports.Round = class Round {
	constructor(roundNumber) {
		this._roundNumber = roundNumber === undefined ? 1 : roundNumber;
		this._bomb = new BombModule.Bomb();
		this._terror = new TerroristModule.Terrorist();
		this._counterTerror = new CounterTerroristModule.counterTerrorists();
		this._roundState = RoundState.Running;
	}

	get roundNumber (){
		return this._roundNumber;
	}

	get roundState (){
		return this._roundState;
	}

	get bomb (){
		return this._bomb;
	};

	get terroristsTeam (){
		return this._terror;
	};

	get counterTerroristsTeam (){
		return this._counterTerror;
	};

	EndRound(){
		switch (this._bomb.state) {
			case BombModule.BombState.planted:
				this._roundState = RoundState.Finished_TerroristsWon;
				break;
			default:
				this._roundState = RoundState.Finished_CounterTerroristsWon;
				break;
		}
	}
};

module.exports.GameRules = GameRules;
module.exports.GameState = GameState;
module.exports.RoundState = RoundState;