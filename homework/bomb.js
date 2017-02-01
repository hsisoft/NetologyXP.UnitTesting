"use strict";

const BombState = {
	'ready' : 'ready',
	'planted' : 'planted',
	'defused' : 'defused',
};

module.exports.Bomb = class Bomb{
	constructor(state) {
		this._bombState = state === undefined ? BombState.ready : state;
	}

	get state (){
		return this._bombState;
	}

	plant (){
		this._bombState = BombState.planted;
	}

	defuse(){
		this._bombState = BombState.defused;
	}
};

module.exports.BombState = BombState;