<?php 

/*

Plugin Name: test & quizz
Description: Moteur de test à la volée.
Author: Dr.Wil
Version:0.0.1 
Author URI: 
*/
function load_test_quizz($atts, $content = null){	
	$html = TQgetHtml();
	enqueue_scripts($atts['t']);
	return $html;
}

/***Chargement des JS & CSS ***/
function enqueue_scripts($nameTest){	
	$pathDir = str_replace('/var/www','',plugin_dir_path( __FILE__ ));
	wp_enqueue_script('jquery-test', '//code.jquery.com/jquery-1.10.2.js' , array(), '1.0.0', true );
	wp_enqueue_script('moteur-test', $pathDir.'api/tapi.js' , array(), '1.0.0', true );
	wp_enqueue_script('conf-test',   $pathDir.$nameTest.'/Q'.$nameTest.'.js' , array(), '1.0.0', true );
	wp_enqueue_style( 'style-name', plugins_url('api/style.css', __FILE__));
}
/****HTML - TEMPLATE ************/
function TQgetHtml(){
	return '
	<h1 id="qTitle"></h1>
	<p id="Qimage"></p>
	<h3 id="QsubTitle"></h3>
	<div id="content">	
	<p id="form">
	<h2 id="num_question">Question <span id="num"></span><span id="totalQ"></h2>		
		<p id="q"></p>
		<p  id="responses"></p>	
		<input type="button" id="next" value="Question suivante" />
	</p>
	</div>';
}
add_shortcode( 'testQuizz', 'load_test_quizz' );