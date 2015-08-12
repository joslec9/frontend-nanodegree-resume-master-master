var bio = {
	"name": "Jose A. Lechuga",
	"role": "Web Developer",
	"contacts": {
		"mobile": "914-217-4936",
		"email": "joslec9@gmail.com",
		"github":"joslec9",
		"twitter": "joslec9",
		"location":"White Plains, NY"
	},
	"welcomeMessage":"Front-End Web Ninja",
	"skills": [
	"JS", "HTML", "CSS", "bootstrap", "jQuery", "responsive-web-design"
],
	"biopic":"images/biopic.jpg"
}

bio.display = function(){

if(bio.skills.length>= 0)	{
	$("#header").append(HTMLskillsStart);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skillsH3").append(formattedskills);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skillsH3").append(formattedskills);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skillsH3").append(formattedskills);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skillsH3").append(formattedskills);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[4]);
	$("#skillsH3").append(formattedskills);

	var formattedskills=HTMLskills.replace("%data%",bio.skills[5]);
	$("#skillsH3").append(formattedskills);

	}
}

var formattedName= HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
var formattedwelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var	formattedBio=HTMLbioPic.replace("%data%",bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedwelcomeMsg);
$("#header").append(formattedBio);

for (var contact in bio.contacts) {
var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);


$("#topContacts").append(formattedContact);
$("#footerContacts").append(formattedContact);

}

bio.display();


var projects = {
	"projects": [
		{
			"title": "Portfolio Website",
			"site": "add later",
			"dates": "2015",
			"description": "Built the basis of my portfolio website using bootstrap, html5 & css.",
		"image": [
			"images/portfolio page.jpg"
			]
		}
	]
}


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].image.length > 0)	{
			for (image in projects.projects[project].image)	{
				var formattedImages= HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
}

projects.display();


var work = {
	"jobs": [
		{
		"employer": "California pizza Kitchen",
		"title": "Regional Culinary Manager",
		"dates": "2013-present",
		"location":"Paramus, NJ",
		"description": "Collaborate with the Regional Partner in the development of General Managers and Kitchen Managers in areas of P&L, Labor, controllable’s, financial operations, food quality, recipe execution, Inventory, training and development."
		}
	]
}

function locationizer(work_obj)	{
	var locationArray = [];

	for ( job in work_obj.job)	{
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

work.display = function() {
for (job in work.jobs)	{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	}
}

work.display();


var education = {
    "schools": [
        {
            "name": "The Culinary Institute Of America",
            "degree": "Culinary Arts",
            "location": "Hyde Park, NY",
            "major": "Culinary Arts",
            "dates": "2011"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "How to use Git & Github",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title": "Responsive Web Design Fundumentals",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]
}

education.display = function() {

$("#education").append(HTMLschoolStart);
for (school in education.schools) {
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major); }


$(".education-entry").append(formattedName);
$(".education-entry").append(formattedDegree);
$(".education-entry").append(formattedDates);
$(".education-entry").append(formattedLocation);
$(".education-entry").append(formattedMajor);

	$(".education-entry").append(HTMLonlineClasses);
	for (onCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onCourse].school);
		var formattedtDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onCourse].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onCourse].url);
		$(".education-entry").append(formattedTitle);
		$(".education-entry").append(formattedSchool);
		$(".education-entry").append(formattedDates);
		$(".education-entry").append(formattedUrl);

	}
}


education.display();
// END OF WORK ALL MISC FROM HEREON IN

$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];

}

$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);
