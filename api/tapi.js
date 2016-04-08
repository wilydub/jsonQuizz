//Sharer FB

//var shareButton = '<ul class="juiz_sps_links_list" style="border-radius:5px;background:#4864B4;text-align:center;padding:5px;margin:5px;"><li class="juiz_sps_item juiz_sps_link_facebook" id="shareResults"><a href="#" rel="nofollow" title="Partager sur Facebook"><span class="juiz_sps_icon jsps-facebook"></span><span class="juiz_sps_network_name">Partager mon résultat</span></a></li></ul>';
var shareButton = '<img src="fb.png" alt="share on Facebook" id="shareResults" style="text-align:center;width:150px;"/>';
window.fbAsyncInit = function() {
	FB.init({
		appId      : '180144518991489',
		xfbml      : true,
		version    : 'v2.5',
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function postToFeed  (tab) {
	var obj = {
		method: 'feed',
		link: tab.link,
		description: tab.desc.substr(0,85)+'...',
		picture: tab.picture,
		name: 'Je suis '+tab.name.replace(/_/g,' ')+' ... Compares ton résultat au mien sur ECAILLEDEPURSON.COM'       
	};
	FB.ui(obj);
}

var test = (function() {
	var randomProfil = function(){return t.profilName[Math.floor(Math.random() * t.profilName.length)];};
	var setTest = function(){
		//monter les datas
		mountDatas();
        //montrer les premières questions
        $("#totalQ").text('/'+t.numberToShow);
        $("#qTitle").html(t.questionTitle);
        //$("#Qimage").html(t.Qimage);
        $("#QsubTitle").html(t.QsubTitle); 
        $("#Qvideo").html(t.Qvideo);      
        displayFormQuestions.getQuestion();
        BindOnClickNext();
    }

    var BindOnClickNext = function(){
    	$("#next").click(function(){
    		if(profilPoints())
    			displayFormQuestions.getQuestion();
    	});
    };

    var profilPoints = function(){
    	if(!lastResponse)return false;
    	else 
    		if(!userProfil[lastResponse]){
    			userProfil[lastResponse]=0;
    		}
    		userProfil[lastResponse]++;
    		lastResponse='';
    		return true;
    	}
	//Le test a afficher	
	var test = [];
	var t ={};
	var num=0;
	var numberToShow = 0;
	var lastResponse ='';
	var userProfil = [];

	var displayFormQuestions= {
		getQuestion :function (){
			this.display(getRandomElement(test));
			$('input:radio[name="r"]').each(function(){
				$(this).checked = false;  
			});
			this.bindResponses();					
		},
		display : function(t){
			//$("#responses").fadeOut();
			//Dernière question on affiche le resultat
			if(!t){return this.getResults();}
			var q = t.qTitle;
			var responses = t.responses;
			var buttons = '';	
			//console.log((responses));		
			for(i=0;i<=responses.length+(1) ;i++){
				var it = getRandomElement(responses);
				//console.log(it);
				var img='';
				if(it.img){
					img='<img src="'+it.img+'" class="imgResponse" alt="'+it.value+'"/>';
				}
				buttons=buttons+'<p class="presponses"><label for='+it.poids+'><input type="radio" class="response" name="r" id="'+it.poids+'" / >'+img+'<figcaption>'+it.value+'</figcaption></label></p>';
			}
			//Affichage de la question
			$("#q").text(q);
			//Affichage dess boutton reponse
			$("#responses").html(buttons);
			//Affichage question 3/6
			num++;$("#num").text(num);
			//Si dernière question change la valeur du bouton suivant
			if(num===numberToShow){
				$("#next").val('Afficher le résultat');
			}
			this.bindResponses();
			$("#responses").fadeIn();
		},

		getResults:function(){
			  //console.log(userProfil);
			  var max =0;
			  var res ='';
			  for (var prop in userProfil) {
			  	if(userProfil[prop]>=max){
			  		res = prop
			  		max = userProfil[prop];
			  	}
			  }
			  this.setResult(res);
			},
			setResult : function (res){
				$("#num_question").text("Résultat");
				$("#content").html('<h2>'+t.profilsResultsTitle[res]+'</h2><div>'+t.profilsVideo[res]+'<p>'+t.profilsResults[res]+'</p></div>'+shareButton);
				$("#shareResults").click(function(){
					var tabRes = [];
					tabRes.link=t.link;
					tabRes.desc =t.profilsResults[res];
					tabRes.picture=t.profilsPicture[res];
					tabRes.name=res;
					postToFeed(tabRes);
				});
			},
			bindResponses : function(){
				$('input:radio[name="r"]').click(function() { 
					lastResponse = $(this).attr('id');
					if(lastResponse.match(/\?/g) || ! lastResponse){
						lastResponse = randomProfil();
					}
				});
				$("label").click(function(){
					if(profilPoints())
						displayFormQuestions.getQuestion();
				});
			}		
		};

		function getRandomElement (tab){
			var r = Math.round (Math.random() * (tab.length - 1));
			var rec = tab[r];
			tab.splice (r, 1);
			return rec;
		}	
	//On rempli la variable test
	var mountDatas = function(){
		var list = t.questionList;
		console.log(list.length);
		var maxQ = t.numberToShow;
		numberToShow = t.numberToShow;			
		for(var i=0;i<list.length;i++){
			test[test.length++]=list[i];
		}
	}
	/**PUBLIC**/
	var testAPI = {       
		init: function(JSON) {
			if(JSON){
				t=JSON;
				setTest();
			}
		}
	};
	return testAPI;
});