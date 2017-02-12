"use strict";

//const BombModule = require('../homework/bomb');

module.exports.Terrorist = class terrorists {
	plantBomb(bomb){
		if (bomb === undefined){
			return false;
		}

		let _bomb = bomb;
		_bomb.plant();
		return _bomb.state;
	}
}