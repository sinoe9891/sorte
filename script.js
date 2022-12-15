window.onload = inicio;

function inicio() {
	// console.log('entró1'); 
	document.getElementById("limpiar").addEventListener('click', limpiar);
}

function limpiar() {
	// console.log('entró2');
	var activo = document.activeElement.id;
	activo.innerHTML = "";
}

$(function () {
	//lista recursiva hasta detenerse en el elemento configurado
	var msa = [
		{ id: 1, name: '- Jorge Sierra', Cargo: 'Periodista', empresa: 'Proceso Digital' },
		{ id: 2, name: '- Alejandra Canales ', Cargo: 'Periodista', empresa: 'Medio' },
		{ id: 3, name: '- Alejandro	Ochoa', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 4, name: '- Alex Lagos', Cargo: 'Periodista', empresa: 'Zona Trendy' },
		{ id: 5, name: '- Ana Belinda  Colindres ', Cargo: 'Periodista', empresa: 'Stereo Luz' },
		{ id: 6, name: '- Ana Ruth Cáceres', Cargo: 'Periodista', empresa: 'DARA MAGAZINE' },
		{ id: 7, name: '- Bruce Villatoro', Cargo: 'Periodista', empresa: 'Quien Opina' },
		{ id: 8, name: '- Camarógrafo HCH', Cargo: 'Periodista', empresa: 'HCH' },
		{ id: 9, name: '- Camarógrafo Suyapa Medios ', Cargo: 'Camarógrafo', empresa: 'Suyapa Medios' },
		{ id: 10, name: '- Camarógrafo', Cargo: 'Camarógrafo', empresa: 'Canal 11' },
		{ id: 11, name: '- Camarógrafo', Cargo: 'Camarógrafo', empresa: 'Canal 6' },
		{ id: 12, name: '- Camarógrafo', Cargo: 'Camarógrafo', empresa: 'Maya TV' },
		{ id: 13, name: '- Carlos Zúniga', Cargo: 'Periodista', empresa: 'Lo Eliges' },
		{ id: 14, name: '- Carlos Zúniga', Cargo: 'Periodista', empresa: 'El Espectador' },
		{ id: 15, name: '- Carmen Barrientos', Cargo: 'Periodista', empresa: 'Faro Informativo' },
		{ id: 16, name: '- Carmen Peña', Cargo: 'Periodista', empresa: 'Canal 45' },
		{ id: 17, name: '- David Medina', Cargo: 'Periodista', empresa: 'Radio América' },
		{ id: 18, name: '- Denia Salgado', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 19, name: '- Eloina Valle', Cargo: 'Periodista', empresa: 'Suyapa Medios' },
		{ id: 20, name: '- Elsa Ordoñez', Cargo: 'Periodista', empresa: 'RSD Radio' },
		{ id: 21, name: '- Ericka Bertrand', Cargo: 'Periodista', empresa: 'Stereo Amor' },
		{ id: 22, name: '- Fabian Sevilla', Cargo: 'Periodista', empresa: 'Canal 51' },
		{ id: 23, name: '- Flor Serrano', Cargo: 'Periodista', empresa: 'Maya TV' },
		{ id: 24, name: '- Francisco Romero ', Cargo: 'Periodista', empresa: 'Canal 51' },
		{ id: 25, name: '- Gisela Cálix', Cargo: 'Periodista', empresa: 'Canal 11' },
		{ id: 26, name: '- Glenda Urbina', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 27, name: '- Gustavo Castillo', Cargo: 'Periodista', empresa: 'TVC' },
		{ id: 28, name: '- Humberto Quiroz', Cargo: 'Periodista', empresa: 'TVC' },
		{ id: 29, name: '- Indira Aceituno', Cargo: 'Periodista', empresa: 'Hondudiario' },
		{ id: 30, name: '- Ingrid Antúnez', Cargo: 'Periodista', empresa: 'Tgusta' },
		{ id: 31, name: '- Iris Ramírez', Cargo: 'Periodista', empresa: 'La Tribuna' },
		{ id: 32, name: '- Iris Castillo', Cargo: 'Periodista', empresa: 'Canal 51' },
		{ id: 33, name: '- Ivis Romero ', Cargo: 'Periodista', empresa: 'Azteca Honduras' },
		{ id: 34, name: '- Jhonny  Sevilla', Cargo: 'Periodista', empresa: 'El Libertador' },
		{ id: 35, name: '- Josefina Perez', Cargo: 'Periodista', empresa: 'Q´ Hubo TV' },
		{ id: 36, name: '- Julie Ayestas', Cargo: 'Periodista', empresa: '' },
		{ id: 37, name: '- Karen Zuniga', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 38, name: '- Karen Borjas', Cargo: 'Periodista', empresa: 'Stereo Luz' },
		{ id: 39, name: '- Leticia Martínez ', Cargo: 'Periodista', empresa: 'Mujeres emprendedoras' },
		{ id: 40, name: '- Lili Valladares', Cargo: 'Periodista', empresa: 'Canal 6' },
		{ id: 41, name: '- Lisandro Vallecillo', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 42, name: '- Manuel Alvarez', Cargo: 'Periodista', empresa: 'CODIS' },
		{ id: 43, name: '- Mayra Ávila ', Cargo: 'Periodista', empresa: 'El Diario de Honduras' },
		{ id: 44, name: '- Melissa Coca', Cargo: 'Periodista', empresa: 'CETECO' },
		{ id: 45, name: '- Michelle Alvarado', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 46, name: '- Miriam Kafie', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 47, name: '- Noé Zúniga ', Cargo: 'Periodista', empresa: 'Medio' },
		{ id: 48, name: '- Nubia Osorto', Cargo: 'Periodista', empresa: 'Emprendedores.hn' },
		{ id: 49, name: '- Oscar Rosinoglli', Cargo: 'Periodista', empresa: 'Grupo K' },
		{ id: 50, name: '- Oscar Bojas ', Cargo: 'Periodista', empresa: 'Revista Honduras Market' },
		{ id: 51, name: '- Oscar Esquivel', Cargo: 'Periodista', empresa: 'El Pulso' },
		{ id: 52, name: '- Patricia Romero ', Cargo: 'Periodista', empresa: 'Kairos FM' },
		{ id: 53, name: '- Rosa  Pineda', Cargo: 'Periodista', empresa: 'La Tribuna' },
		{ id: 54, name: '- Rosemary Rivera', Cargo: 'Periodista', empresa: 'Radio América' },
		{ id: 55, name: '- Ruth Flores', Cargo: 'Periodista', empresa: 'INVOSA' },
		{ id: 56, name: '- Sandra Corea', Cargo: 'Periodista', empresa: 'Seproc' },
		{ id: 57, name: '- Stephanie Rivera', Cargo: 'Periodista', empresa: 'HCH' },
		{ id: 58, name: '- Suyapa Reyes', Cargo: 'Periodista', empresa: 'Canal 51' },
		{ id: 59, name: '- Suyapa Banegas', Cargo: 'Periodista', empresa: 'Suyapa Medios' },
		{ id: 60, name: '- Teresa Torres', Cargo: 'Periodista', empresa: 'Azteca Honduras' },
		{ id: 61, name: '- Walter Castro', Cargo: 'Periodista', empresa: 'Honduras al Día' },
		{ id: 62, name: '- Wilfredo Oseguera', Cargo: 'Periodista', empresa: '50 Minutos' },

	], $input = $('input'),
		random_index;
	let total = msa.length;
	let arreglo = msa;


	random_index = Math.floor(Math.random() * msa.length);
	// console.log(arreglo);

	$('.slot').jSlots({
		number: 1,
		spinner: '.jSlots-wrapper',
		spinEvent: 'spin',
		time: 1000,
		loops: 2,
		endNum: 2,//finaliza en el segundo elmento del arreglo aleatorio
		onEnd: function (finalElement) {
			// console.log('Hola')
			// Arreglo Vacío


			//set result
			let persona = (random_index);
			// Nombre del ganador
			$input.val(arreglo[random_index].name + ' - ' + arreglo[random_index].empresa);

			//oculta spiner
			$(this.spinner).hide();
			// console.log('TamaÑo de arreglo:' + arreglo.length);

			let suma = arreglo.length - 1;
			ganadores = total - suma;
			// console.log(msa.length);

			document.getElementById("participantes").innerHTML = '(' + (msa.length - 1) + ')';

			function eliminar(persona) {

				// console.log(random_index);
				let elementoaeliminar = random_index;
				let resultado = [];
				let elementoborrado = arreglo.splice(elementoaeliminar, 1);


				const dataId = resultado;

				const setData = (idData) => {
					// setReload(!reload);
					// Agregamos al arreglo vacío un elemento
					dataId.push(idData);
					
				};
				
				agregar = [];
				persona = persona;

				// Nombre del ganador que se muestra en la lista.
				agregar = elementoborrado[0].name + ' - ' + elementoborrado[0].empresa;
				// agregarvacio = []
				// agreagar = dataId.push(elementoborrado);
				
				// console.log(dataId);
				// console.log(agregar.sort());
				document.getElementById('foo').appendChild(makeUL(agregar));
				
				let list = '';
				//EVENTO A LOS BOTONES PARA OBTENER ID
				//MANDAMOS A LLAMAR TU FUNCION
				setData(agregar);
				//MOSTRAMOS EL ARREGLO
				
				function makeUL(array) {
					console.log(array);
					// Create the list element:
					// var cabeza = document.createElement('th');
					var list = document.createElement('ul');
					var item = document.createElement('li');
					// list.appendChild(cabeza);
					for (var i = 0; i < array.length; i++) {
						// Create the list item:

						// Item se agregar a la lista de elementos ganadores:
						item.appendChild(document.createTextNode(array[i]));

						// Add it to the list:
						list.appendChild(item);
					}
					// console.log(array);
					// Cofetti
					var duration = 3 * 1000;
					var animationEnd = Date.now() + duration;
					var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

					function randomInRange(min, max) {
						return Math.random() * (max - min) + min;
					}

					var interval = setInterval(function () {
						var timeLeft = animationEnd - Date.now();

						if (timeLeft <= 0) {
							return clearInterval(interval);
						}

						var particleCount = 50 * (timeLeft / duration);
						// since particles fall down, start a bit higher than random
						confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
						confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
					}, 250);


					// Finally, return the constructed list:
					return list;
				}
				// console.log('-------------------------FIN--------------------------------');
				clearInterval();
				// return msa = msa1;
			}


			// console.log(msa);
			eliminar((arreglo[random_index].id));

			// console.log('Sumatorio:' + (ganadores + 1));
			var ganador = ganadores;

			document.getElementById("ganadores").innerHTML = '(' + ganador + ')';
		}
	});



	// Lista Random
	function makeSlotList(list) {
		//soporta hasta 18 valores en la animacion
		// console.log(list);
		persona = '';
		if (list.length < 2000) {//el valor puede ser ajustado
			var index = _.random(msa.length - 1);
			// console.log(index);
			if (list.length === 1) {
				/*
				elemento inicial de la lista
				*/

				random_index = index;
				// console.log(arreglo[random_index]);
			}

			// console.log('Ramdom: ' + (random_index));
			persona = random_index;
			// console.log(persona);
			if (arreglo.length == 0) {
				// alert('Ya no hay participantes');
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Ya no cuentas con participantes!'
				});
				return false;
			}

			// Nombre Giratorio
			list.push('<li index=' + _.random(arreglo.length - 1) + '>' + arreglo[index].name + '</li>');
			return makeSlotList(list);
		} else {
			//dio un giro
			//la entrada se limpia
			$input.val('');
			// se agrega el elemento seleccionado
			$('#slot').html(list.join('')).parent().show().trigger('spin');
			return list;
		}
	}
	//se crea la lista de elementos o slot
	function makeSlots() {
		//inicia en el valor aleatorio previo
		var list = ['<li>' + $input.val() + '</li>'];
		// console.log(list);
		var contenido = document.getElementsByName('ganador')[0].placeholder = '';
		//se hace recursivo el llamado
		makeSlotList(list);

	}
	$('#random_location').on('click', makeSlots);

});

