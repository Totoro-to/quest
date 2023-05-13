<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hello!</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rubik+Iso&family=Rubik+Wet+Paint&family=Sono:wght@200;300&display=swap" rel="stylesheet">
<link type="Image/x-icon" href="1.png" rel="icon" >



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Francois+One&family=Press+Start+2P&display=swap" rel="stylesheet">
<!-- <audio src="menu.wav" autoplay loop></audio> -->
<!-- <bgsound src="menu.wav" loop> -->
</head>

<style type="text/css">

@import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Press+Start+2P&display=swap');
*{
	margin: 0;
	padding: 0;
}
	body{
		background-color: #03032e;
		font-family: 'Francois One', sans-serif;
		font-family: 'Press Start 2P', cursive;

	border: 4px solid;
	height: 99vh;
	animation: rainbow1 5s infinite;
	}
#twobody{
	border: 4px solid;
	height: 90%;
	width: 90%;
	display: block;
	left: 5%;
	bottom: 5%;
	animation: rainbow2 5s infinite;
	position: absolute;
	border-radius: 10px;
}
@keyframes rainbow2{
0% {
       color: rgb(255 0 0);
}
20% {
         color: rgb(251 255 0);
}
30% {
        color: rgb(0 255 20);
}
40% {
        color: rgb(0 243 255);
}
50% {
        color: rgb(16 0 255);
}
60% {
        color: rgb(204 0 255);
}
70% {
        color: rgb(255 0 106);
}
100% {
        color: rgb(255, 0, 0);
}
}
	header{

		width: 100%;
		color: yellow;
		display: flex;
		align-items: center;
	}

	#start{
		left: 41.5%;
		bottom: 40%;
		position: absolute;
		letter-spacing: 1px;
		animation: rainbow 5s infinite;
		font-size: 50px;
	}
@keyframes rainbow{
0% {
        color: rgb(255, 0, 0);
}
20% {
        color: rgb(255 0 106);
}
30% {
        color: rgb(204 0 255);
}
40% {
        color: rgb(16 0 255);
}
50% {
        color: rgb(0 243 255);
}
60% {
        color: rgb(0 255 20);
}
70% {
        color: rgb(251 255 0);
}
100% {
        color: rgb(255 0 0);
}

}
	.text2{
		color: yellow;
		letter-spacing: 0.5px;
		display: block;
		left: 43%;
		bottom: 60%;
		position: absolute;
	}
		.text1{
		display: flex;
		flex-direction: column;
		align-items: center;
		color: yellow;
		letter-spacing: 4px;
		left: 31%;
		bottom: 80%;
		position: absolute;
	}

@keyframes rainbow1{
0% {
        color: rgb(255, 0, 0);
}
20% {
        color: rgb(255 0 106);
}
30% {
        color: rgb(204 0 255);
}
40% {
        color: rgb(16 0 255);
}
50% {
        color: rgb(0 243 255);
}
60% {
        color: rgb(0 255 20);
}
70% {
        color: rgb(251 255 0);
}
100% {
        color: rgb(255 0 0);
}
}
</style>
<body>

<audio autoplay src="menu.wav"  loop> </audio>


<!-- <audio controls="controls" autoplay style="display:block" src="menu.wav" loop></audio>
<source src="menu.wav" type="audio/wav" autoplay> -->
	<div id="twobody"></div>
	<h1 class="text1 text">Epic jQuery Project</h1>
	<h2 class="text2 text">ROBOCODE</h2>
	
	<a href="" id="start">Start</a>
</body>
</html>
