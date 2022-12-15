<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="css.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
	<script src="jquery.jSlots.js"></script>
	<!-- <script src="https://sula.hn/js/jquery.jSlots.js"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
	<script src="https://salud.sula.hn/lead-form/js/sweetalert2.all.min.js"></script>
</head>

<body>


	<div>
		<div class="main">
			<div class="conte">
				<div><img class="logo" src="https://grupok.com.hn/wp-content/uploads/2022/09/logo_v-copia.svg" /></div>
			</div>
			<div class="form-group">
				<div class="form-value">
					<div id="slot_wrapper">
						<input type="text" class="search" placeholder="Ganadora" id="limpiar" name="ganador">
						<ul id="slot" class="slot">
							<!-- la lista llenada por cada elemento -->
							<li>test</li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
							<li> </li>
						</ul>
						<div class="button" onmousedown="party.confetti(this)" style="height:30px">

						</div>
						<div>
							<button type="button" class="btn btn-start" id="random_location">Iniciar</button>
						</div>

					</div>

				</div>
			</div>
			<h1>Participantes <span id="participantes"></span> </h1>
			<h1>Ganadores <span id="ganadores"></span></h1>
			<!-- <input type="text" id="ganadores"> -->
			<div id="foo">
			</div>
		</div>

		<!-- <script src="https://sula.hn/js/script-periodistas.js"></script> -->
		<script src="script.js"></script>
</body>

</html>