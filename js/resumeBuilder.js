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
	"JS, HTML, CSS, bootstrap, jQuery, responsive-web-design"
	],
	"biopic":"images/biopic.jpg"
};

bio.display = function(){

if(bio.skills.length> 0)	{
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data",bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[5]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[6]);
	$("#skills").append(formattedSkill);

	}
}

var formatedName = HTMLheaderName.replace("%data%",bio.name);
var formatedRole = HTMLheaderRole.replace("%data%",bio.role);
var formatedContacts=HTMLcontactGeneric.replace("%contact%",bio.contacts);
var formatedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formatedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formatedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formatedwelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var	formatedSkills=HTMLskillsStart.replace("%data%",bio.skills);
var	formatedBio=HTMLbioPic.replace("%data%",bio.biopic);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
$("#topContacts").append(formatedContacts);
$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedGithub);
$("#topContacts").append(formatedTwitter);
$("#topContacts").prepend(formatedwelcomeMsg);
$("#topContacts").append(formatedSkills);
$("#header").append(formatedBio);

bio.display();


var projects = {
	"Projects": [
		{
			"Title": "Portfolio Website",
			"Site": "add later",
			"Dates": "2015",
			"Description": "Built the basis of my portfolio website using bootstrap, html5 & css.",
		"Images": [
		"Images/portfolio page.jpg"]

		}
	]
}


projects.display = function() {
	for (project in projects.Projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].Title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].Dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0)	{
			for (image in projects.projects[project].images)	{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].Images[image]);
				$(".project-entry:last").append(formattedImage);
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
		"location":"NY",
		"description": "will add later",
		},
	]
}

work.diplay = function() {

for (job in work.jobs)	{
	$("#workExperience").append(HTMLworkStart);

	var formattedemployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedtitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer + formattedTitle;
	$(".work-entry:list").append(formattedEmployerTitle);

	var formatteddates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(
	formattedDescription);

	var formattedlocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
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
            "Dates": "2011"
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
            "Dates": "2015",
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "Dates": "2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title": "Responsive Web Design Fundumentals",
            "school": "Udacity",
            "Dates": "2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "Dates": "015",
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
		var formattedtDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onCourse].year);
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


name = HTMLheaderName

function inName(name) {
	name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];

}

$('#header').prepend(internationalizeButton)



$('#mapDiv').append(googleMap);

$('#footerContacts').append(bio.contact.twitter);
$('#footerContacts').append(bio.contact.Cellphone);
$('#footerContacts').append(bio.contact.emailAddress);
