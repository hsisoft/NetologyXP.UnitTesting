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
		if (this._bombState === BombState.ready) {
			this._bombState = BombState.planted;
		}
	}

	defuse(){
		if (this._bombState === BombState.planted) {
			this._bombState = BombState.defused;
		}
	}
};

module.exports.BombState = BombState;