//////////////////////////////// jokes //////////////////////////////

/*
*    @filename	jokes.js
*	@author		BadKidPk
*	@desc		Tells a joke each interval. You should load jokes.js in your entry script, right under hearbeat.js
*/

var spamInterval = 35; //Interval in seconds
var q = ["q1", "q2"], a = ["a1", "a2"]; // Question joke, make sure a1 is the answer for q1. It will ask random party
var r = rand(0, q.length - 1);
var jokes = ["ha1", "ha2", "ha3"]; // single line jokes, they will NOT tag a party member
var ra = rand(0, Misc.getPlayerCount());
var p = getParty();
var i;
var r;
function main() {
	print("loaded jokes");
	    	
	while (true) {
		if (me.gameReady) {
            for (i = 0; i < ra; i++) {
            p.getNext();
            say(p.name + say("q[r]"));
            delay(4500);
            say("a[r]");
            
            delay(10000);
            say(jokes[rand(0, jokes.length - 1)]);
		}
		delay(spamInterval * 1000);
	}
}
}