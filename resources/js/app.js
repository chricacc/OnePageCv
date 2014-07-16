(function(){
	var app = angular.module('onePageCv', []);

	app.controller('CvController', function(){
		this.skills = skills;
	});

	app.controller('SkillTabController', function(){
		this.tab = 1;
		this.setTab = function(value){
			this.tab = value;
		}
		this.isSet = function(value){
			return this.tab === value;
		}
	});

	app.controller('EndorsementController', function(){
		this.endorsement = {};
		this.addEndorsement = function(skill){
			skill.endorsements.push(this.endorsement);
			this.endorsement = {};
		};
	});

	var skills = [
		{ 	name: 'Php',
			level: 'intermediate',
			description: 'The most-used server-side programming language.',
			projects: [	{name: 'TimeBox', description: 'A DropBox-like file upload website with versioning functionalities.'}
			],
			endorsements: [	{grade: '8', comment: 'This guy does a pretty clean job with this stuff!', author: 'Linus Torvalds'},
							{grade: '9', comment: 'He is the best, really!', author: 'Bill Gates'},
							{grade: '2', comment: 'Awful job, don\'t hire him!', author: 'Php teacher'}
			]
		},
		{ 	name: 'Angular',
			level: 'beginner',
			description: 'A client-side structural JavaScript framework.',
			projects: [	{name: 'This website', description: 'You are browsing it right now, it is a one-page CV app.'}
			],
			endorsements: []
		},
		{ 	name: 'Java',
			level: 'advanced',
			description: 'The most known Object Oriented programming language.',
			projects: [	{name: 'iLearning', description: 'A learning management tool.'},
						{name: 'DrawVS', description: 'An online, real-time drawing game.'}
			],
			endorsements: [	{grade: '7', comment: 'This guy knows how the shit works!', author: 'Oracle CEO'},
							{grade: '9', comment: 'Soooo talented!', author: 'GeoHot'},
							{grade: '2', comment: 'Awful job, don\'t hire him!', author: 'Java teacher'}
			]
		},
		{ 	name: 'Html',
			level: 'advanced',
			description: 'A declarative language used to display web pages.',
			projects: [	{name: 'iLearning', description: 'A learning management tool.'},
						{name: 'Coral', description: 'A server-side 3D picture manipulator.'},
						{name: 'TimeBox', description: 'A DropBox-like file upload website with versioning functionalities.'},
						{name: 'This website', description: 'You are browsing it right now, it is a one-page CV app.'}
			],
			endorsements: []
		}
	];
})();
