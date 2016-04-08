var pathImg = '/WORDPRESS_PLUG/test-api/nwa/img/';
//http://wfacto.com/wp-content/plugins/



var questionnaire = {
	form:"nwa",
	//link:'http://wfacto.com/landing/nwa-quizz-test-le-plus-dangereux-monde/',
	link:'',
	pageTitle :'N.W.A member test personality',
	questionTitle :'Du groupe légendaire NWA',
	QsubTitle :"<i>Tu es plus Dr Dre, EASY-E ou Ice Cube?</i>",
	Qbackground  :pathImg+'/the-straight-outta-compton.jpeg',
	Qimage:'<img src="'+pathImg+'/nwa.jpg" alt="NWA test" style=""/><br /><br />',
	numberToShow : 7,
	Qvideo:'<iframe width="auto" height="auto" src="https://www.youtube.com/embed/TMZi25Pq3T8?autoplay=1&t=20s" frameborder="0" allowfullscreen></iframe>',
	profilName:['Dr_Dre','Eazy_e','Ice_Cube'],
	profilsResults : {
		Dr_Dre: "Dans ta jeunesse tu aimais porter du rouge a levres mais tu vas devenir milliardaire, grace a tes capacités auditives hors du commun, et ton sens du marketing , et meme en cas de perte de creativité , les gens auront tes beats dans les oreilles.",
		Eazy_e:"Tu etais l'ame de nwa, un \"real motherfucking G\" sans concession , decouvrant Bone Thugs-N-Harmony et le Black Eyed Peas.",
		Ice_Cube : 'Tu es un Mc exeptionnel qui aime passer ses vendredi a fumer des spliffs sous son porche avec ses potes, avec une carriere alterant la musique et les blockbusters evoluant du "amerikkka most wanted" au chef de police de 21 jump street'		
	},
	profilsResultsTitle:{
		Dr_Dre: "Tu es Dr Dee",
		Eazy_e:'Tu es Eazy E',
		Ice_Cube : 'Tu es Ice Cube'
	},
	profilsVideo : {
		Dr_Dre :'<iframe width="560px" height="315px" src="https://www.youtube.com/embed/_CL6n0FJZpk" frameborder="0" allowfullscreen></iframe>',
		Eazy_e :'<iframe width="560px" height="315px" src="https://www.youtube.com/embed/5Eh5QpaaN2I" frameborder="0" allowfullscreen></iframe>',
		Ice_Cube :'<iframe width="560px" height="315px" src="https://www.youtube.com/embed/t7hL0LrmBj8" frameborder="0" allowfullscreen></iframe>'
	},

	profilsPicture : {
		Dr_Dre :pathImg+'dr-dre.jpg',
		Eazy_e :pathImg+'Eazy-E.jpg',
		Ice_Cube :pathImg+'ice.jpg'
	},
	questionList : [{
		mandatory:1,
		img: '',
		qTitle:'Quelle est votre basket préférée ?',
		responses:[
			{
			value:'Adidas superstar',
				poids:'?',
				img: pathImg+'13-adidas.jpg'
			},
			{
				value:'Cortez',
				poids:'??',
				img: pathImg+'14-cortez.jpg'
			},
			{
				value:'Stan Smith',
				poids:'???',
				img: pathImg+'15-stan-smith.jpg'
			}
		]
	},
	{
		mandatory:1,
		img: '',
		qTitle:'Parmi ces 3 albums lequel preferez vous',
		responses:[{
				value:'E. 1999 Eternal',
				poids:'Eazy_e',
				img: pathImg +'bones_thugs.png'
			},
			{
				value:'Da Lench Mob',
				poids:'Ice_Cube',
				img: pathImg+'da_lench_mob.jpg'
			},
			{
				value:'Michel\'le',
				poids:'Dr_Dre',
				img: pathImg+'Michelle.jpg'
			}
		]
	},
	{
		mandatory:1,
		img: '',
		qTitle:'Votre coupe de cheveux',
		responses:[	
			{
			value:'Crane rasé/chauve',
			poids:'Dr_Dre',
			img: pathImg+'1-baldhead.jpg'
			},
			{
				value:'Coupe Afro',
				poids:'Ice_Cube',
				img: pathImg+'2-afro.jpg'
			},
			{
				value:'Jheri Curl',
				poids:'Eazy_e',
				img: pathImg+'3-jheri-curl.jpg'
			}
		]
	},
	{
		mandatory:1,
		img: '',
		qTitle:'Vous devez choisir un metier pour supporter votre carriere de rapper, vous préférez :',
		responses:[	
			{
				value:'Coiffeur',
				poids:'Ice_Cube',
				img: pathImg+'coiffeur.jpg'
			},
			{
				value:'Real mothefucking G',
				poids:'Eazy_e',
				img: pathImg+'gz.jpg'
			},
			{
			value:'Employé dans une laverie de voiture',
				poids:'Dr_Dre',
				img: pathImg+'laverie.jpg'
			}
		]
	},
	{ 
		mandatory:1,
		img: '',
		qTitle:'Niveau fashion vous êtes plutot:',
		responses:[	
			{
				value:'Starter Raiders',
				poids:'Eazy_e',
				img: pathImg+'4-starter.jpg'
			},
			{
				value:'Chemise à carreaux',
				poids:'Ice_Cube',
				img: pathImg+'6-daiki.png'
			},
			{
				value:'Blouse de docteur',
				poids:'Dr_Dre',
				img: pathImg+'5-blouse.jpg'
			}
		]
	},
	{ 
		mandatory:1,
		img: '',
		qTitle:'Votre couvre chef :',
		responses:[	
			{
				value:'Casquette Raiders',
				poids:'Eazy_e',
				img: pathImg+'8-raiders.jpeg'
			},
			{
				value:'Casquette Sox',
				poids:'Ice_Cube',
				img: pathImg+'7-sox.png'
			},
			{
				value:'Bonnet',
				poids:'Dr_Dre',
				img: pathImg+'bonnet.jpg'
			}
		]
	},
	{
		mandatory:1,
		img: '',
		qTitle:'Offrir une boisson à ses invités',
		responses:[	
			{ 
				value:'40 oz',
				poids:'Eazy_e',
				img: pathImg+'40oz.jpg'
			},
			{
				value:"Ceci",
				poids:'Ice_Cube',
				img: pathImg+'smoke.jpg'
			},
			{
				value:'Du champagne',
				poids:'Dr_Dre',
				img: pathImg+'champagne.jpg'
			}
		]
	}]
};
var t = new test().init(questionnaire);