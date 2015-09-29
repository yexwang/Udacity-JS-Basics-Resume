'use strict';

// TODO: make Google Maps better, open only one infowindow at a time!  ??? abandonded
// TODO: sharper and more responsive images.
// TODO: a sharper favicon
// TODO: project part: shows an image, and on focus, the details
// and link shows on the page
// TODO: do something with d3.js
// TODO: return to original on second click of internationalize
// TODO: mapping issue on small screens
// TODO: no js thing on html tag


var bio = {
	'name': 'Yay Wang',
	'role': 'Javascript Ninja',
	'contacts': {
		'mobile': '1 (619)-9406106',
		'email': 'wangyegp@gmail.com',
		'twitter': '@wangyegp',
		'github': 'yaywang',
		'location': 'Ho Chi Minh City'
	}, // you must add a coma
	'bioPic': 'images/images_src/fixed/me.jpg',
	'welcomeMsg': 'Hey, welcome. I\'m working to be the best Javascript developer in the world!!!',
	'skills': ['Javascript', 'HTML', 'CSS', 'Web Design', 'Swift', 'Python', 'Data Analysis',
			'Event Organization', 'Coffee Tasting', 'Driving', 'Scuba Diving', 'Fencing', 'Copywriting',
			'Photography', 'Filmmaking', 'Awesomeness', 'Coolness'
		] // no coma here
};

bio.display = function() {
	var data = '%data%';
	var $header = $('#header');

	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$header.prepend(formattedName, formattedRole);

	var contacts = bio.contacts;
	var formattedMobile = HTMLmobile.replace(data, contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, contacts.email);
	var formattedTwitter = HTMLtwitter.replace(data, contacts.twitter);
	var formattedGithub = HTMLgithub.replace(data, contacts.github);
	var formattedLocation = HTMLlocation.replace(data, contacts.location);
	$('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedTwitter +
		formattedGithub + formattedLocation);
	/**
	 * $('#footerContacts').append(formattedMobile, formattedEmail, formattedTwitter,
	 * formattedGithub, formattedLocation);
	 */

	/** Append allows us to attach more than one parameter and to more than one target,
	 * separated by commas: $('target1, target2').append(parameter1, parameter2, ..., parameterN);.
	 * Or since we're dealing with strings, it's also possible to concatenate them all first, then
	 * append the product once.
	 */

	var formattedBiopic = HTMLbioPic.replace(data, bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMsg);
	$header.append(formattedBiopic + formattedWelcomeMsg);

	/** Due to the nature of falsy values in JS, it's possible to write this as:
	  * if (bio.skills.length) {*/
	if (bio.skills.length) {
		$header.append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
};

var education = {
	'schools': [{
		'name': 'UC Berkeley',
		'degree': 'BA not yet completed',
		'dates': 2014,
		'location': 'Berkeley, CA',
		'url': 'http://www.berkeley.edu',
		/** you got to add http:// here for the link to work */
		'majors': ['Undeclared', 'Rocket Science']
	}],
	'onlineCourses': [{
		'title': 'Front-End Developer Nanodgree',
		'school': 'Udacity',
		'dates': 2015,
		'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
	}, {
		'title': 'Full-stack Developer Nanodegree',
		'school': 'Udacity',
		'dates': 2015,
		'url': 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
	}, {
		'title': 'Data Analyst Nanodegree',
		'school': 'Udacity',
		'dates': 2015,
		'url': 'https://www.udacity.com/course/data-analyst-nanodegree--nd002'
	}]
};

education.display = function() {
	var data = '%data%';
	var $education = $('#education');
	var $lastEntry = $('.education-entry:last');

	education.schools.forEach(function(school) {
		$education.append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace(data,
			school.name).replace('#',
			school.url);
		var formattedSchoolDegree = HTMLschoolDegree.replace(data,
			school.degree);
		var formattedSchoolDates = HTMLschoolDates.replace(data,
			school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data,
			school.location);
		$lastEntry.append(formattedSchoolName + formattedSchoolDegree +
			formattedSchoolDates + formattedSchoolLocation);

		school.majors.forEach(function(major) {
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, major);
			$lastEntry.append(formattedSchoolMajor);
		});
	});

	$education.append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$education.append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace(data, course.title).replace('#',
			course.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, course.school);
		var formattedOnlineDates = HTMLonlineDates.replace(data, course.dates);
		var formattedOnlineUrl = HTMLonlineURL.replace(data, course.url).replace('#',
			course.url);

		$lastEntry.append(formattedOnlineTitle + formattedOnlineSchool +
			formattedOnlineDates + formattedOnlineUrl);
	});
};


// ??? why on earth we want the jobs array inside another object.
// now I know, for encapsulation
var work = {
	jobs: [{
		'employer': 'Big Bang Rocket Institute',
		'title': 'Aerospace Engineer',
		'location': 'Beijing',
		'dates': 'Nov 2014 - July 2015',
		'description': 'This was my very first engineering job. I successfully helped' +
			' my company launch our new space shuttle to the Mars!',
		'url': 'https://github.com/yaywang'
	}, {
		'employer': 'Big Bang Rocket Institute Guangzhou',
		'title': 'Programmer',
		'location': 'Guangzhou',
		'dates': 'Aug 2015 - Aug 2016',
		'description': 'I made programs to prepare our big rocket launching event!',
		'url': 'https://github.com/yaywang'
	}, {
		'employer': 'Self-employed',
		'title': 'Programmer',
		'location': 'Bangkok',
		'dates': 'Nov 2015 - Jan 2016',
		'description': 'I independently worked on various challenging JS projects.',
		'url': 'https://github.com/yaywang'
	}, {
		'employer': 'Self-employed',
		'title': 'Programmer',
		'location': 'Istanbul',
		'dates': 'Feb 2016 - Mar 2016',
		'description': 'I worked on harder and more complex web development projects!!!',
		'url': 'https://github.com/yaywang'
	}, {
		'employer': 'Self-employed',
		'title': 'Programmer',
		'location': 'Prague',
		'dates': 'Apr 2016 - July 2016',
		'description': 'I made significant achievements in making large cutting-edge projects!',
		'url': 'https://github.com/yaywang'
	}]
};

/**
 * Any reused reference can be abstracted:
 *
 * var data = '%data%';
 * var thisJob = work.jobs[job];
 * var $header = $('#header');
 *
 * For jQuery objects, a $ conventionally starts the variable name.
 */

work.display = function() {
	work.jobs.forEach(function(job) {
		var data = '%data%';

		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('#', job.url).replace(data,
			job.employer);
		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedLocation = HTMLworkLocation.replace(data, job.location);
		var formattedDates = HTMLworkDates.replace(data, job.dates);
		var formattedDescription = HTMLworkDescription.replace(data, job.description);

		$('.work-entry:last').append(formattedEmployer + formattedTitle,
			formattedLocation + formattedDates + formattedDescription);
	});
};


var projects = {
	'projects': [{
		'title': 'Resume Project',
		'dates': 'Sept 15 2015 - Sept 24 2015',
		'description': 'My first student project on the Udacity platform. ' + 'I spent 90% of time studying and implementing new features in the design.',
		'images': ['images/udacityProject1.png'],
		'url': 'https://github.com/yaywang/Udacity-P2-Resume'
	}, {
		'title': 'About Me Project',
		'dates': 'Sept 19 2015 - Sept 20 2015',
		'description': 'This simple project was the first one I delivered on the Udacity platform.',
		'images': ['images/udacityProject0.png'],
		'url': 'https://github.com/yaywang/Udacity-P0-About-Me'
	}, {
		'title': 'Imagined Project 1',
		'dates': 'Sept  2015 - Sept 18 2015',
		'description': 'This will happen in near future.',
		'images': ['images/imaginedProject1.jpg'],
		'url': 'https://github.com/yaywang?tab=repositories'
	}, {
		'title': 'Imagined Project 2',
		'dates': 'Sept 19 2015 - Sept 21 2015',
		'description': 'Like Imagined Project 1, this will happen in near future. This will!',
		'images': ['images/imaginedProject2.jpg'],
		'url': 'https://github.com/yaywang?tab=repositories'
	}]
};

projects.display = function() {
	projects.projects.forEach(function(project) {
		var data = '%data%';

		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('#', project.url).replace(data,
			project.title);
		var formattedDates = HTMLprojectDates.replace(data,
			project.dates);
		var formattedDescription = HTMLprojectDescription.replace(data,
			project.description);

		$('.project-entry:last').append(formattedTitle + formattedDates +
			formattedDescription);

		project.images.forEach(function(image) {
			var formattedImages = HTMLprojectImage.replace(data, image);
			$('.project-entry:last').append(formattedImages);
		});
	});
};


bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);

/* Merged into css file
// Style manipulation code:
//$('.#projects').css('background', 'black');
$('.project-entry img').css('border-radius', '2px');
$('.project-entry img').css('border', '3px solid #5E6B71');
$('.project-entry img').css('margin', '5px');
*/

/*
var inName = function(name) {
	var nameArray = name.trim().split(' ');
	var inName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase()
				+ ' ' + nameArray[1].toUpperCase();
	return inName;
};
$('#main').append(internationalizeButton);
*/