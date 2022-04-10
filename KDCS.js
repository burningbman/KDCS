/* global module */

// load methods defined in mafia
const {
	adv1,
	autosell,
	availableAmount,
	cliExecute,
	setProperty,
	getProperty,
	handlingChoice,
	item,
	location,
	visitUrl,
	runChoice,
	print,
	printHtml,
	userConfirm,
	wait
} = require('kolmafia');

const steps = {
	/*
	-------------------------------
	| PRE-ASCENSION
	-------------------------------
	*/
	preAscension: function() {
		cliExecute("/whitelist Alliance From Heck");
		cliExecute("stash take 1 snow suit");
		cliExecute("use 1 diabolic pizza cube");
		cliExecute("/whitelist Old CW's Germ Free Clan");
	
	if (availableAmount(Item.get("snow suit")) < 1) {
			throw 'No snow suit - try later';
	}
	
	if (!userConfirm('Do you want to acend?')) {
			throw 'Aborting before ascending';
		}
	
	// ascend
	visitUrl(`ascend.php?action=ascend&confirm=on&confirm2=on`);
	
	// go through the pearly gates
	visitUrl("afterlife.php?action=pearlygates");
	
	// get astral six-pack
	visitUrl(`afterlife.php?action=buydeli&whichitem=5046`);
	
	// get astral trousers
	visitUrl(`afterlife.php?action=buyarmory&whichitem=5035`);
	
	// Normal Community Service, Male, Blender, Pastamancer
	visitUrl(`afterlife.php?action=ascend&confirmascend=1&whichsign=8&gender=1&whichclass=3&whichpath=25&asctype=2&nopetok=1&noskillsok=1&pwd`, true);
	},

	postAscension: function() {
		
		// Set up the council tests
		visitUrl("council.php");
		
		// Turn off Lil' Doctor quests
		// setProperty("choiceAdventure1340,3");
		
		// manual visit to fireworks shop to allow purchases
		visitUrl("clan_viplounge.php?action=fwshop");
		
		// set backup camera stuff
		cliExecute("backupcamera reverser on");
		cliExecute("backupcamera ml");
		
		// set saber to famweight
		cliExecute("saber familiar");

		// get your numberology adventures
		cliExecute("numberology 69");
		
		// vote at the voting booth
		visitUrl("place.php?whichplace=town_right&action=townright_vote");
		visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
		visitUrl("place.php?whichplace=town_right&action=townright_vote");
		
		//get consults 
		cliExecute("fortune cwbot pizza batman thick");
		wait(5);
		cliExecute("fortune cwbot pizza batman thick");
		 wait(5);
		cliExecute("fortune cwbot pizza batman thick");
		
		
		// accept meatsmith quest
		visitUrl('shop.php?whichshop=meatsmith&action=talk');
		runChoice(1);

		// visit the toot oriole & get those pig jewels
		visitUrl("tutorial.php?action=toot");

		cliExecute("use 1 letter from King Ralph XI");
		cliExecute("use 1 pork elf goodies sack");
	 
		autosell(availableAmount(Item.get("hamethyst")), Item.get("hamethyst"));
		autosell(availableAmount(Item.get("baconstone")), Item.get("baconstone"));
		
		// sell all but 2 porqouises if we have 3 or more
		if (availableAmount(Item.get("porquoise")) > 2) {
		autosell(availableAmount(Item.get("porquoise"))-2, Item.get("porquoise"));
		}
		
		// manual visit to fireworks shop to allow purchases
		visitUrl('clan_viplounge.php?action=fwshop');	

		// let's get our pulls for today
		cliExecute("buy using storage 1 borrowed time");
		cliExecute("buy using storage 1 1952 Mickey Mantle card");
		cliExecute("buy using storage 1 non-Euclidean angle");
		cliExecute("pull 1 snow suit");
		cliExecute("pull 1 borrowed time");
		cliExecute("pull 1 non-Euclidean angle");
		cliExecute("pull 1 1952 Mickey Mantle card");
		cliExecute("Pull 1 staff of simmering hatred");
		
		// grab a yeg's motel toothbrush for later 
		cliExecute("cargo 284");

		// run breakfast to get clan stuff, batteries, wishes etc. 
		cliExecute("breakfast");
		
		// run detective solver script to get some cop dollars
		cliExecute("detective solver");
		
		// miscellaneous item setup stuff
		cliExecute("use 1 borrowed time");
		cliExecute("use 1 bird-a-day calendar");
		cliExecute("use 1 astral six-pack");
		cliExecute("boombox meat");
		cliExecute("autosell Newbiesport Tent");
		cliExecute("create fish hatchet");
		
		// initial adventuring gear
		cliExecute("equip hat ravioli hat");
		cliExecute("equip weapon fourth of may");
		cliExecute("equip off-hand unbreakable umbrella");
		cliExecute("retrocape mysticality thrill");
		cliExecute("fold garbage shirt");
		cliExecute("equip shirt garbage shirt");
		cliExecute("equip cargo cultist shorts");
		cliExecute("equip acc1 lil doctor");
		cliExecute("equip acc2 eight days a week pill keeper");
		cliExecute("equip acc3 hewn moon-rune spoon");
		cliExecute("familiar plastic pirate skull");
		cliExecute("equip miniature crystal ball");

		// get ready to map monsters!
		cliExecute("/aa CS_MapMonsters");
		
		// Map Monster - Haunted Pantry - Possessed Can of Tomatoes 
		cliExecute("cast 1 Map the Monsters");
		visitUrl("adventure.php?snarfblat=113");
		runChoice(1, "heyscriptswhatsupwinkwink=145");
		
		// Map Monster - Haunted Kitchen - Possessed Silverware Drawer
		cliExecute("cast 1 Map the Monsters");
		visitUrl("adventure.php?snarfblat=388");
		runChoice(1, "heyscriptswhatsupwinkwink=372");
		
		// Map Monster - Skeleton Store – Novelty tropical skeleton
		cliExecute("cast 1 Map the Monsters");
		// Need to visit twice to get past initial NC
		visitUrl("adventure.php?snarfblat=439");
		visitUrl("adventure.php?snarfblat=439");
		runChoice(1, "heyscriptswhatsupwinkwink=1746");

		//let's grab that guaranteed sausage goblin
		cliExecute("equip kramco sausage-o-matic");
		cliExecute("/aa CS_Kills");
		visitUrl("adventure.php?snarfblat=240");
		
		// sell the stuff we don't need to ensure we have funds for buying stuff
		autosell(availableAmount(Item.get("lemon")), Item.get("lemon"));
		autosell(availableAmount(Item.get("strawberry")), Item.get("strawberry"));
		autosell(availableAmount(Item.get("orange")), Item.get("orange"));	
		autosell(availableAmount(Item.get("coconut shell"))-1, Item.get("coconut shell"));
		autosell(availableAmount(Item.get("eggbeater")), Item.get("eggbeater"));
		autosell(availableAmount(Item.get("corn holder")), Item.get("corn holder"));

		cliExecute("buy 1 toy accordion");
		cliExecute("buy 1 glittery mascara");
		cliExecute("buy 1 dramatic range");
		cliExecute("use 1 dramatic range");
		cliExecute("acquire turtle totem");
		cliExecute("acquire saucepan");
		
		cliExecute("cast 1 advanced cocktailcrafting");
		cliExecute("cast 1 advanced saucecrafting");
		cliExecute("cast 1 eye and a twist");
		cliExecute("maximize MP");
		

	if (!userConfirm('About to coil wire. Continue?')) {
		throw 'Aborting before coiling wire';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=11");
		
		setProperty("_kdcs_next_step", "buffs");
		
		printHtml(`
		Next step: 
		kdcs buffs`);

	},
	
	buffs: function() {
						
		cliExecute("equip off-hand familiar scrapbook");

		// here's all our replaceable buffs
		cliExecute("use 1 glittery mascara");
		cliExecute("cast 1 advanced cocktailcrafting");
		cliExecute("cast 1 advanced saucecrafting");
		cliExecute("cast 1 feel excitement");
		cliExecute("cast 1 the magical mojomuscular melody");
		cliExecute("cast 1 get big");
		cliExecute("cast 1 manicotti meditation");
		cliExecute("cast 1 Stevedave's Shanty of Superiority");
		cliExecute("Cast 1 sauce contemplation");
		cliExecute("Cast 1 Carol of the Thrills");
		cliExecute("Cast 1 Carol of the bulls");
		cliExecute("Cast 1 Seek out a bird");
		cliExecute("Cast 1 blood bond");
		cliExecute("Cast 1 leash of linguini");
		cliExecute("Cast 1 empathy of the newt");
		cliExecute("Cast 1 Singer's Faithful Ocelot");
		cliExecute("Cast 1 Astral Shell");
		cliExecute("Cast 1 Elemental Saucesphere");
		cliExecute("Cast 1 blood bubble");
		cliExecute("Cast 1 polka of plenty");
		cliExecute("equip acc3 powerful glove");
		cliExecute("cast 1 cheat code: triple size");
		cliExecute("Create 1 ointment of the occult ");
		cliExecute("Create 1 tomato juice of powerful power");
		cliExecute("Use 1 ointment of the occult ");
		cliExecute("Use 1 tomato juice of powerful power");
		cliExecute("pool aggressive");

		
		// non replaceable buffs and +exp stuff ahead of getting stats
		cliExecute("beach head 10");
		cliExecute("beach head 11");
		cliExecute("pillkeeper free familiar");
		cliExecute("shower lukewarm");
		cliExecute("cast 1 inscrutable gaze");
		cliExecute("chew 1 non-Euclidean angle");
		cliExecute("daycare mysticality");
		cliExecute("telescope look high");
		cliExecute("monorail");
		cliExecute("use 1 votive of confidence");
		cliExecute("Bastille Myst");
		cliExecute("use 1 a ten-percent bonus");



		// Scavenge at daycare
		visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
		runChoice(3);
		runChoice(2);
		
		// get back into fighting gear
		cliExecute("equip hat coconut shell");
		cliExecute("equip weapon fourth of may");
		cliExecute("equip off-hand unbreakable umbrella");
		cliExecute("retrocape mysticality thrill");
		cliExecute("fold garbage shirt");
		cliExecute("equip shirt garbage shirt");
		cliExecute("equip cargo cultist shorts");
		cliExecute("familiar plastic pirate skull");
		cliExecute("equip miniature crystal ball");
		cliExecute("equip acc1 hewn moon-rune spoon");
		cliExecute("equip acc2 draftsman");
		cliExecute("equip acc3 backup camera");
		
		cliExecute("familiar hovering sombrero");
		cliExecute("equip miniature crystal ball");
		
		cliExecute("backupcamera ml");

		cliExecute("soak");
		
		cliExecute("create 1 magical sausage");
		cliExecute("eat 1 magical sausage");
		
		cliExecute("/aa CS_Kills");
		
		// let's fight a mushroom and pick the mushroom after!
		visitUrl("adventure.php?snarfblat=543");
		visitUrl("adventure.php?snarfblat=543");
		runChoice(2);
		cliExecute("Use 1 free-range mushroom");
		
		if (!userConfirm('About to fight Witchess Witch. Continue?')) {
			throw 'Aborting before Witchess';
		}
		
		// let's fight a witchess witch for stats and a battle broom
		
		cliExecute("equip off-hand fish hatchet");
		cliExecute("equip acc1 powerful glove");
		cliExecute("backupcamera init");
		cliExecute("/aa CS_WitchessWitch");
		cliExecute("reminisce witchess witch");
		
		if (availableAmount(Item.get("battle broom")) < 1) {
			throw 'Looks like we got beaten up!';
		}	
	
		// re-equip stuff
		cliExecute("equip unbreakable umbrella");
		cliExecute("equip acc1 hewn moon-rune spoon");
	
		// add your ML buffs
		cliExecute("swim laps");
		cliExecute("mood cs");
		
		// make and eat your MALlowed out pizza for +500% stats
		visitUrl("campground.php?action=makepizza&pizza=1008,2841,635,8404");
		cliExecute("eat 1 diabolic pizza");	

		cliExecute("equip acc3 battle broom");
	
		setProperty("_kdcs_next_step", "levelling");
		
		printHtml(`
		Next step: 
		kdcs levelling`);
	},
	
		
	levelling: function() {			
	
		
		// NEP levelling
		
		// Visit the party and reject the quest
		setProperty("choiceAdventure1322",2);
		adv1(Location.get("the neverending party"));
		
		
		// first stage - do some banishes
		cliExecute("equip acc1 lil doctor bag");
		cliExecute("/aa NEP_Banishes");
		
		// first five banishes (Reflex Hammer, Feel Hatred)
		adv1(Location.get("the neverending party"));	// 1
		adv1(Location.get("the neverending party"));	// 2
		adv1(Location.get("the neverending party"));	// 3
		adv1(Location.get("the neverending party"));	// 4
		adv1(Location.get("the neverending party"));	// 5
		
		// bowl sideways before next banish (will attack if no bowl sideways available)
		cliExecute("/aa NEP_BowlBanish");
		adv1(Location.get("the neverending party"));	// 6
		
		// put the spoon back on & fight a sausage goblin
		cliExecute("equip acc1 hewn moon-rune spoon");
		cliExecute("equip off-hand Kramco Sausage-o-Matic");
		adv1(Location.get("the neverending party"));	// 7
		
		// put the unbreakable umbrella on for more exp
		cliExecute("equip off-hand unbreakable umbrella");
		
		// this should be the NC, get Tomes of Opportunity
		setProperty("choiceAdventure1324",1);
		setProperty("choiceAdventure1325",2);
		adv1(Location.get("the neverending party"));	// 8
		
		// set the choice to fight a random partier next time
		setProperty("choiceAdventure1324",5);

		// do a few regular kills with bowl sideways active
		adv1(Location.get("the neverending party"));	// 9
		adv1(Location.get("the neverending party"));	// 10
		adv1(Location.get("the neverending party"));	// 11
		
		// bowl sideways should happen here
		adv1(Location.get("the neverending party"));	// 12

		// back to regular kills with bowl sideways active
		cliExecute("/aa CS_Kills");
		adv1(Location.get("the neverending party"));	// 13
		adv1(Location.get("the neverending party"));	// 14
		adv1(Location.get("the neverending party"));	// 15
		
		// time to feel real proud of ourselves
		cliExecute("/aa NEP_PrideKills");
		
		// the NC should be up again, fighting a random partier
		adv1(Location.get("the neverending party"));	// 16
		adv1(Location.get("the neverending party"));	// 17
		adv1(Location.get("the neverending party"));	// 18
		adv1(Location.get("the neverending party"));	// 19
		
		// bowl sideways has run out and so have free NEP fights so do your free kills 
		cliExecute("/aa NEP_FreeKills");
		adv1(Location.get("the neverending party"));	// 20
		adv1(Location.get("the neverending party"));	// 21
		adv1(Location.get("the neverending party"));	// 22
		adv1(Location.get("the neverending party"));	// 23
		cliExecute("/aa disabled");


	setProperty("_kdcs_next_step", "mox");
		
		printHtml(`
		<br>	
		// Are you levelled up enough?
		<br>
		Then run:
		kdcs mox`);
	},

	
	mox: function() {
		cliExecute("create 1 oil of expertise");
		cliExecute("use 1 oil of expertise");
		cliExecute("mood apathetic");
		cliExecute("maximize mox");
		
		if (!userConfirm('About to run Moxie test. Continue?')) {
		throw 'Aborting before doing Moxie test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=4");
		
	setProperty("_kdcs_next_step", "mus");
		
		printHtml(`
		<br>	
			// Do mox test (1)
			<br>
			Then run:
		kdcs mus`)
	},

	
	mus: function() {
		cliExecute("maximize mus");

		if (!userConfirm('About to run Muscle test. Continue?')) {
		throw 'Aborting before doing Muscle test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=2");

	setProperty("_kdcs_next_step", "mys");
		
		printHtml(`/
		<br>	
		// Do mus test (1)
			<br>
			Then run:
		kdcs hp`);
	},

	hp: function() {
		cliExecute("maximize hp");
		
		if (!userConfirm('About to run HP test. Continue?')) {
		throw 'Aborting before doing HP test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=1");


	setProperty("_kdcs_next_step", "mys");
		
		printHtml(`/
		<br>	
		// Do mus test (1)
			// Do HP test (1)
			<br>
			Then run:
		kdcs mys`);
	},
	
	mys: function() {
		cliExecute("maximize mys");
		
		if (!userConfirm('About to run Mysticality test. Continue?')) {
		throw 'Aborting before doing Mysticality test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=3");

	setProperty("_kdcs_next_step", "hot");
		
		printHtml(`
		<br>	
			// Do mys test (1)
			<br>
			Then run:
		kdcs hot`);
	},

	
	hot: function() {
		
		cliExecute("equip weapon industrial fire extinguisher");
		cliExecute("equip off-hand fourth of may cosplay saber");

		cliExecute("equip vampyric cloake");

		// go foam/mist/saber a crate
		
		setProperty("choiceAdventure1387",2);
		cliExecute("/aa CS_HotResPrep");
		visitUrl("adventure.php?snarfblat=240");
		if (handlingChoice()) runChoice(-1);
		
		
		cliExecute("familiar exotic parrot");
		cliExecute("equip snow suit");
		cliExecute("equip unwrapped knock-off retro superhero cape");
		cliExecute("retrocape vampire hold");
		cliExecute("spacegate vaccine 1");
		cliExecute("cast 1 feel peaceful");
		cliExecute("cast 1 astral shell");
		cliExecute("cast 1 elemental saucesphere");
		cliExecute("beach head 1");
		cliExecute("maximize hot res");
		
		if (!userConfirm('About to do Hot Resistance test. Continue?')) {
		throw 'Aborting before Hot Resistance test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=10");

	setProperty("_kdcs_next_step", "noncombat");
		
		printHtml(`
		<br>
			// Do hot res test (1)
			<br>
		Then run:
		kdcs noncombat`);
	},

	
	noncombat: function() {
		cliExecute("familiar disgeist");
		cliExecute("equip snow suit");
		cliExecute("buy 1 porkpie-mounted popper");
		cliExecute("create 1 shoe gum");
		cliExecute("use 1 shoe gum");
		cliExecute("cast 1 CHEAT CODE: Invisible Avatar");
		cliExecute("Cast 1 Feel Lonely");
		cliExecute("Cast 1 The Sonata of Sneakiness");
		cliExecute("Cast 1 Smooth Movement");
		cliExecute("Cast 1 seek out a bird");
		cliExecute("use 1 shady shades");
		cliExecute("maximize -combat");
		cliExecute("genie effect disquiet riot");
		
		if (!userConfirm('About to do Non Combat test. Continue?')) {
		throw 'Aborting before Non Combat test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=8");

	setProperty("_kdcs_next_step", "fam");
		
		printHtml(`<br>
			// do -combat test (1)
			<br>
			Then run:
		kdcs fam`);
	},

	
	fam: function() {
		cliExecute("cast 2 ode to booze");
		cliExecute("drink 6 astral pilsner");
		cliExecute("spoon platypus");
		cliExecute("maximize familiar weight");
		cliExecute("cast 1 empathy of the newt");
		cliExecute("use 1 silver face paint ");
		cliExecute("cast 1 blood bond");

	// go shower/saber a crate
	cliExecute("equip fourth of may cosplay saber");
	setProperty("choiceAdventure1387",2);
	cliExecute("/aa CS_ShowerSaber");
	visitUrl("adventure.php?snarfblat=240");
	if (handlingChoice()) runChoice(-1);
	
	if (!userConfirm('About to do Familiar Weight test. Continue?')) {
		throw 'Aborting before Familiar Weight test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=5");

	setProperty("_kdcs_next_step", "weapon");
		
		printHtml(`
		<br>
		// Do familiar weight test (32)
		<br>
		Then run:
		kdcs weapon`);
	},

	
	weapon: function() {
		cliExecute("familiar exotic parrot");
		cliExecute("equip snow suit");
		cliExecute("maximize spooky res");
		cliExecute("cast 1 feel peaceful");
		cliExecute("cast 1 elemental saucesphere");
		cliExecute("cast 1 astral shell");
		cliExecute("soak");
		cliExecute("cast 1 deep dark visions");
		cliExecute("cast 1 cannelloni cocoon");

	// go shower/saber an Ungulith
		cliExecute("equip fourth of may cosplay saber");
		cliExecute("/aa CS_ShowerSaber");
		setProperty("choiceAdventure1387", 3)
		cliExecute("reminisce ungulith");
		if (handlingChoice()) runChoice(-1);

		cliExecute("maximize weapon damage");
		cliExecute("boombox fists");
		cliExecute("use 1 corrupted marrow");
		cliExecute("use 1 yeg's motel toothbrush");
		cliExecute("cast 1 visit your favorite bird");
		cliExecute("cast 1 seek out a bird");
		cliExecute("cast 1 song of the north ");
		cliExecute("cast 1 carol of the bulls");
		cliExecute("cast 1 blood frenzy");
		cliExecute("cast 1 rage of the reindeer");
		cliExecute("cast 1 scowl of the auk");
		cliExecute("cast 1 blessing of the war snapper");
		cliExecute("acquire 1 disco mask");
		cliExecute("hatter 9");
		cliExecute("beach head 6");
		cliExecute("pool aggressive");
		cliExecute("cast 1 bow-legged swagger");
		
		if (!userConfirm('About to do Weapon Damage test. Continue?')) {
		throw 'Aborting before Weapon Damage test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=6");

		setProperty("_kdcs_next_step", "spell");
		
		printHtml(`
			<br>
		// do weapon dmg test (1)
			<br>
			Then run:
		kdcs spell`);
	},
	
	
	spell: function() {
		
		cliExecute("Cast 1 simmer");
		
	// go shower/saber a crate
	cliExecute("equip fourth of may cosplay saber");
	setProperty("choiceAdventure1387",2);
	cliExecute("/aa CS_ShowerSaber");
	visitUrl("adventure.php?snarfblat=240");
	if (handlingChoice()) runChoice(-1);
		
		cliExecute("cast 1 song of sauce");
		cliExecute("cast 1 carol of the hells");
		cliExecute("cast 1 arched eyebrow of the archmage");
		cliExecute("cast 1 spirit of cayenne");
		cliExecute("pool strategic");
		cliExecute("beach head 7");
		cliExecute("maximize spell damage");


		if (!userConfirm('About to do Spell Damage test. Continue?')) {
		throw 'Aborting before Spell Damage test.';
	}
	
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=7");	
		
		setProperty("_kdcs_next_step", "item");
		
		printHtml(`
		<br>
		// do spell test (34)
		<br>
		Then run:
		kdcs item`);
	},
	item: function() {
		cliExecute("soak");
		cliExecute("hermit clover");
		cliExecute("use 1 clover");
	
	// go get the cylcops eyedrops
	visitUrl('adventure.php?snarfblat=19');
		
		cliExecute("use 1 cyclops eyedrops");
		cliExecute("equip vampyric cloake");
		cliExecute("equip fourth of may cosplay saber");
		cliExecute("familiar hovering sombrero");
		cliExecute("equip snow suit");
		cliExecute("equip off-hand familiar scrapbook");

	// set auto-attack to bowl straight up, cast bat form and attack
	cliExecute("/aa CS_BlackCrayonPirate");
		cliExecute("reminisce black crayon pirate");
		
		cliExecute("maximize item drop, -equip broken champagne bottle");
		cliExecute("cast 1 feel lost");
		cliExecute("cast 1 steely-eyed squint");
		cliExecute("genie effect infernal thirst");
		cliExecute("fortune buff item");
		cliExecute("cast 1 fat leon's phat loot lyric");
		cliExecute("cast 1 singer's faithful ocelot");
		cliExecute("cast 1 the spirit of taking ");
		cliExecute("use 1 bag of grain");
		cliExecute("genie effect frosty");
		
		if (!userConfirm('About to do Item Drop test. Continue?')) {
		throw 'Aborting before Item Drop test.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=9");
		
		if (!userConfirm('Donate your body to science and do post-run stuff?')) {
		throw 'Aborting before Final Service.';
	}
		visitUrl("council.php");
		visitUrl("choice.php?whichchoice=1089&option=30");

		cliExecute("/aa disabled");
		cliExecute("/whitelist Alliance From Heck");
		cliExecute("unequip snow suit");
		cliExecute("stash put 1 snow suit");
		
		cliExecute("boombox meat");
		cliExecute("mood apathetic");
		cliExecute("pull all");
		cliExecute("use 1 cold medicine cabinet");
		cliExecute("buy 1 clockwork maid");
		cliExecute("use 1 clockwork maid");
		cliExecute("uneffect feeling lost");
		cliExecute("create 1 bitchin meatcar");
		cliExecute("breakfast");
		cliExecute("epicmall");
		cliExecute("philter");

		setProperty("_locketMonstersFought", getProperty("_locketMonstersFought") + ",-1");
	}
};

function main(step) {
	// See if the passed in step matches any of the functions named in the steps object
	if (steps.hasOwnProperty(step)) {
		// if a valid step was passed in, call the corresponding method
		steps[step]();
	} else {
		print(`Unrecognized step '${step}'`, 'red');
	}
}

// make sure mafia knows what function to call
module.exports.main = main;
