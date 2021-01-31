/**
*	@filename	FastDiabloHelper.js
*	@author		BadKidPk
*	@desc		help leading player in FastDiablo Script!
*/

function FastDiabloHelper() {
    	this.diabloPrep = function () {
		var trapCheck,
			tick = getTickCount();

		while (getTickCount() - tick < 17500) {
			if (getTickCount() - tick >= 8000) {
				switch (me.classid) {
				case 1: // Sorceress
					if ([56, 59, 64].indexOf(Config.AttackSkill[1]) > -1) {
						if (me.getState(121)) {
							delay(500);
						} else {
							Skill.cast(Config.AttackSkill[1], 0, 7793, 5293);
						}

						break;
					}

					delay(500);

					break;
				case 3: // Paladin
					Skill.setSkill(Config.AttackSkill[2]);
					Skill.cast(Config.AttackSkill[1], 1);

					break;
				case 5: // Druid
					if (Config.AttackSkill[1] === 245) {
						Skill.cast(Config.AttackSkill[1], 0, 7793, 5293);

						break;
					}

					delay(500);

					break;
				case 6: // Assassin
					if (Config.UseTraps) {
						trapCheck = ClassAttack.checkTraps({x: 7793, y: 5293});

						if (trapCheck) {
							ClassAttack.placeTraps({x: 7793, y: 5293, classid: 243}, trapCheck);

							break;
						}
					}

					delay(500);

					break;
				default:
					delay(500);
				}
			} else {
				delay(500);
			}

			if (getUnit(1, 243)) {
				return true;
			}
		}

		throw new Error("Diablo not found");
	};
    
    //start
    Town.doChores();
	Pather.useWaypoint(107 ,true);
    Pather.moveTo(me.x + 5, me.y + 5);
	Precast.doPrecast(true);
    me.overhead("Pre Bo done!");
    Pather.useWaypoint(103 ,true);
    Town.move("portalspot");
	var	commands = [];
    
    addEventListener("chatmsg",
		function (nick, msg) {
			if (nick === Config.Leader) {
				commands.push(msg);
			}
		});
    
	// Wait until leader is partied
	while (!Misc.inMyParty(Config.Leader)) {
		delay(1000);
	}
    
    while (Misc.inMyParty(Config.Leader)) {
		if (commands.length > 0) {
			switch (commands[0]) {
			case "in":
				if (me.inTown) {
					Pather.usePortal(108, Config.Leader);
					delay(250);
					//break;
				}
                    	}
		}
		if (me.area === 108) {
			delay(250);
			break; 
    }
        delay(250);
	}
    
this.diabloPrep();    
Attack.kill(243); // Diablo
Pickit.pickItems();
Town.goToTown();
    
	return true;
}
