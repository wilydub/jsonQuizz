<?php 
if($_GET['t']){
	$pathJS = "../".$_GET['t']."/Q".$_GET['t'].".js";
}else{
	if(!isset($_POST["try"]) && !$_GET['res']){
		header('location:../index.php');exit;
	}
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<title></title>
	<meta charset="UTF-8">
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<link rel="stylesheet" href="style.css" />
	<meta property="og:url"           content="http://tgain.wfacto.com" />
	<meta property="og:type"          content="website" />
	<meta property="og:title"         content="Your Website Title" />   
	<meta property="og:image"         content="http://localhost/whoAreYou/nwa/nwa.jpg" />
</head>
<body>
	<h1 id="qTitle"></h1>
	<p id="Qimage"></p>
	<h3 id="QsubTitle"></h3>
	<div id="pa"></div>
	<h2 id="num_question">Question <span id="num"></span><span id="totalQ"></h2>
	<div id="content">	
		<p id="form">		
			<p id="q"></p>
			<p  id="responses"></p>	
			<input type="button" id="next" value="Question suivante" />
		</p>
	</div>
	<div class="fb-like"></div>
	<p id="facebook"></p>
	<p id="pb"></p>
	<script src="tapi.js"></script>
	<script src="<?php echo $pathJS;?>" ></script>
	<script src="http://connect.facebook.net/fr_FR/all.js" ></script>
	<script src="ga.js"></script>
	<script>var t = new test().init(questionnaire);</script>
</body>
</html>  

