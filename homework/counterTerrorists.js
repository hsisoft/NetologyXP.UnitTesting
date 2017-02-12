"use strict";

//const BombModule = require('../homework/bomb');

module.exports.counterTerrorists = class counterTerrorists {
	defuseBomb(bomb){
		if (bomb === undefined){
			return false;
		}

		let _bomb = bomb;
		_bomb.defuse();
		return _bomb.state;
	}
}