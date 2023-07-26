import booking from '../../src/assets/images/booking.png';
import bmi from '../../src/assets/images/bmi.png';
import myImage from '../../src/assets/images/me.jpeg'
export const personData = [
    {
        firstName: "Kesban",
        lastName: "Ahmedova",
        city: "Hamburg",
        status: "active",
        image: myImage,
        description: 'I am a Junior full-stack web dev and constantly driven to expand my knowledge of diverse programming languages and frameworks. 👩🏼‍💻',
        hobbys: ["Volleyball", "Travel"]
    }
];

export const projectsData = [
    {
    id: 1,
    name: "Booking Site",
    image: booking,
    tags: ["html", "css"],
    source_code: "https://github.com/Kahmedowa/Visit-Bulgaria",
    demo: "https://kahmedowa.github.io/Visit-Bulgaria/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 2,
    name: "BMI",
    image: bmi,
    tags: ["html", "css", "javaScript"],
    source_code: "https://github.com/Kahmedowa/BMI",
    demo: "https://kahmedowa.github.io/BMI/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
];

export const skillsData = [
    {
        type: "JAVASCRIPT",
        level: 55
    },
    {
        type: "REACT",
        level: 30
    },
	{
		type: "HTML",
		level: 80
	},
	{
		type: "CSS",
		level: 65
	},
	{
		type: "BOOTSTRAP",
		level: 60
	},
	{
		type: "SASS",
		level: 55
	},
	{
        type: "NODE.JS",
		level: 15
	},
    {
        type: "EXPRESS.JS",
        level: 25
    },
	{
		type: "MONGODB",
		level: 25
	},
	{
		type: "GIT",
		level: 65
	}
];

export const colorsData = {
	bar: {
		hue: 32,
		saturation: 50,
		level: {
			minimum: 30,
			maximum: 70
		}
	},
	title: {
		text: {
			hue: 45,
			saturation: {
				minimum: 30,
				maximum: 70
			},
			level: 50
		},
		background: {
			hue: 30,
			saturation: {
				minimum: 30,
				maximum: 70
			},
			level: {
				minimum: 0,
				maximum: 50
			}
		}
	}
};