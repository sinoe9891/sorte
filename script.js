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
		{ id: 1, name: '- Edin Andara', Cargo: 'Contador General', empresa: 'Azunosa' },
		{ id: 2, name: '- Juan Rivera', Cargo: 'Auditor De Calidad', empresa: 'Azunosa' },
		{ id: 3, name: '- Luis Diego Ortez', Cargo: 'Financiero  ', empresa: 'Azunosa' },
		// { id: 4, name: '- Nelson Merino', Cargo: 'Gerente De Asuntos Corporativos Y Rse', empresa: 'Azunosa' },
		// { id: 5, name: '- Raul Suazo', Cargo: 'Compras', empresa: 'Azunosa' },
		// { id: 6, name: '- Edgardo Romero', Cargo: 'Gerente General', empresa: 'Cereales' },
		// { id: 7, name: '- Francisco Ajuria', Cargo: 'Gerente General', empresa: 'Codis' },
		// { id: 8, name: '- Omar Rodríguez', Cargo: 'Auditor General', empresa: 'Codis/Surtidora' },
		// { id: 9, name: '- Johnny Alvarado', Cargo: 'Gerente Cofrutco', empresa: 'Cofrutco' },
		// { id: 10, name: '- Alvaro Araujo', Cargo: 'Ingeniero', empresa: 'Enerbasa' },
		// { id: 11, name: '- Ricardo Zuniga', Cargo: 'Director', empresa: 'Fondo Social ' },
		// { id: 12, name: '- Linda Seeham', Cargo: 'Coordinador De Fundacion', empresa: 'Fundacion Kafie' },
		// { id: 13, name: '- Juan Madrid', Cargo: 'Gerente General', empresa: 'Hondugas' },
		// { id: 14, name: '- Osman Villanueva', Cargo: 'Gerente De Ventas', empresa: 'Hondugas' },
		// { id: 15, name: '- Eduardo Madrid', Cargo: 'Proyectos', empresa: 'Inkasa' },
		// { id: 16, name: '- Erick Perdomo', Cargo: 'Administrador', empresa: 'Inkasa' },
		// { id: 17, name: '- Tania Sanchez', Cargo: '', empresa: 'Inkasa' },
		// { id: 18, name: '- Yadia Cardona', Cargo: 'Gerente De Proyectos', empresa: 'Inkasa' },
		// { id: 19, name: '- Carlos Quiroz', Cargo: 'It', empresa: 'Lachtosa' },
		// { id: 20, name: '- Alejandro Ochoa', Cargo: 'Jefe De Diseño Digital', empresa: 'Lacthosa' },
		// { id: 21, name: '- Allan Bulnes', Cargo: 'Diseñador', empresa: 'Lacthosa' },
		// { id: 22, name: '- Andrea Ramírez', Cargo: 'Abogado', empresa: 'Lacthosa' },
		// { id: 23, name: '- Denia Salgago', Cargo: 'Gerente De Comunicaciones', empresa: 'Lacthosa' },
		// { id: 24, name: '- Edgardo Leiva', Cargo: 'Asesor', empresa: 'Lacthosa' },
		// { id: 25, name: '- Elena Bonilla', Cargo: 'Contador Fiscal', empresa: 'Lacthosa' },
		// { id: 26, name: '- Francia Eguigure', Cargo: 'Asistente De Presidencia', empresa: 'Lacthosa' },
		// { id: 27, name: '- Julio Arauz', Cargo: 'Director Comercial', empresa: 'Lacthosa' },
		// { id: 28, name: '- Luis Mejia', Cargo: 'Gerente Regional', empresa: 'Lacthosa' },
		// { id: 29, name: '- Lynda Amaya', Cargo: 'Abogado', empresa: 'Lacthosa' },
		// { id: 30, name: '- Kevin Lopez', Cargo: 'Analista Financiero', empresa: 'Lacthosa' },
		// { id: 31, name: '- Marvin López', Cargo: 'Finanzas', empresa: 'Lacthosa' },
		// { id: 32, name: '- Nancy Soto', Cargo: 'Gerente De Planificación Financiera', empresa: 'Lacthosa' },
		// { id: 33, name: '- Pablo Madrid', Cargo: 'Analista Financiero', empresa: 'Lacthosa' },
		// { id: 34, name: '- Sandra Fonseca', Cargo: 'Asistente De Presidencia', empresa: 'Lacthosa' },
		// { id: 35, name: '- Saul Sinclair', Cargo: 'Analista Financiero', empresa: 'Lacthosa' },
		// { id: 36, name: '- Vanni Lopez', Cargo: 'Asuntos Corporativos', empresa: 'Lacthosa' },
		// { id: 37, name: '- Dixie Mayte Galo Rodríguez', Cargo: 'Gerente Comercial', empresa: 'Lkco' },
		// { id: 38, name: '- Francisco Javier Lagos Castillo', Cargo: 'Jefe De Créditos', empresa: 'Lkco' },
		// { id: 39, name: '- Gerson David Ramírez Garay', Cargo: 'Gerente De Auditoría', empresa: 'Lkco' },
		// { id: 40, name: '- Glenda Xiomara Urbina Sauceda', Cargo: 'Gerente De Mercadeo', empresa: 'Lkco' },
		// { id: 41, name: '- Jesús Abdallah Janineh Rivera', Cargo: 'Gerente General', empresa: 'Lkco' },
		// { id: 42, name: '- Nely Odet Rivas Varela', Cargo: 'Gerente De Ventas Y Operaciones', empresa: 'Lkco' },
		// { id: 43, name: '- Olvin Edgardo Nelson Carranza', Cargo: 'Contador General', empresa: 'Lkco' },
		// { id: 44, name: '- Raúl Antonio Zepeda Castro', Cargo: 'Gerente De Finanzas', empresa: 'Lkco' },
		// { id: 45, name: '- Ronald Bacca Alvarado', Cargo: 'Gerente De It', empresa: 'Lkco' },
		// { id: 46, name: '- Walter Amadeo Martínez', Cargo: 'Jefe De Bodega', empresa: 'Lkco' },
		// { id: 47, name: '- Adan Salgado ', Cargo: 'Gerente Financiero', empresa: 'Lufussa' },
		// { id: 48, name: '- Aldo Bove', Cargo: 'Presidente', empresa: 'Lufussa' },
		// { id: 49, name: '- Angélica López', Cargo: 'Gerente Recursos Humanos', empresa: 'Lufussa' },
		// { id: 50, name: '- Armando Ayes ', Cargo: 'Gerente Técnico', empresa: 'Lufussa' },
		// { id: 51, name: '- Armando Busmail', Cargo: 'Financiero Corporativo Y Desarrollo', empresa: 'Lufussa' },
		// { id: 52, name: '- Carlos Carranza', Cargo: 'Auditor General', empresa: 'Lufussa' },
		// { id: 53, name: '- Carlos Membreño', Cargo: 'Ingeniero', empresa: 'Lufussa' },
		// { id: 54, name: '- Cecilia Nuñez', Cargo: 'Gerente Interino Deresa', empresa: 'Lufussa' },
		// { id: 55, name: '- Cinthya Maradiaga ', Cargo: 'Contralor General', empresa: 'Lufussa' },
		// { id: 56, name: '- Claudia Reyes', Cargo: 'Asistente De Auditoria', empresa: 'Lufussa' },
		// { id: 57, name: '- Eduardo Ortega', Cargo: 'Servicios Compartidos', empresa: 'Lufussa' },
		// { id: 58, name: '- Erick Mejía', Cargo: 'Jefe De It', empresa: 'Lufussa' },
		// { id: 59, name: '- Esdras Maradiaga', Cargo: 'Corredor De Seguros', empresa: 'Lufussa' },
		// { id: 60, name: '- Gabriel Peñaranda', Cargo: 'Corredor De Seguros', empresa: 'Lufussa' },
		// { id: 61, name: '- Martin Velásquez', Cargo: 'Ingeniero Proyectos', empresa: 'Lufussa' },
		// { id: 62, name: '- Michelle Martínez', Cargo: 'Coordinador De Rrhh', empresa: 'Lufussa' },
		// { id: 63, name: '- Mauricio Bueso', Cargo: 'Gerente De Compras Corporativo', empresa: 'Lufussa' },
		// { id: 64, name: '- Neptaly Palacios', Cargo: 'Ingeniero', empresa: 'Lufussa' },
		// { id: 65, name: '- Oscar Hernández', Cargo: 'Ingeniero', empresa: 'Lufussa' },
		// { id: 66, name: '- Rafael Escoto', Cargo: 'Jefe De Contabilidad Y Costos', empresa: 'Lufussa' },
		// { id: 67, name: '- Raul Graugnard', Cargo: 'Asesor Legal', empresa: 'Lufussa' },
		// { id: 68, name: '- Wendy  Méndez', Cargo: 'Tesorera', empresa: 'Lufussa' },
		// { id: 69, name: '- Yamileth Majano', Cargo: 'Asistente De Presidencia', empresa: 'Lufussa' },
		// { id: 70, name: '- Nelson Ramírez ', Cargo: 'Gerente General', empresa: 'Lufussa Planta' },
		// { id: 71, name: '- Edmundo Del Carmen', Cargo: 'Finanzas', empresa: 'Lufusssa' },
		// { id: 72, name: '- Eymi Lagos', Cargo: 'Administradora De Proyectos', empresa: 'Planta San Martin' },
		// { id: 73, name: '- Melvin Cálix', Cargo: 'Gerente', empresa: 'Seseisa' },
		// { id: 74, name: '- Carlos Chinchilla', Cargo: 'Piloto', empresa: 'Tramecsa' },
		// { id: 75, name: '- Rene Zelaya', Cargo: 'Piloto', empresa: 'Tramecsa' },
		// { id: 76, name: '- Roger Matamoros', Cargo: 'Piloto', empresa: 'Tramecsa' },
		// { id: 77, name: '- Oscar Rosignolli', Cargo: '', empresa: '' },
		// { id: 78, name: '- Heidi Méndez', Cargo: '', empresa: '' },
		// { id: 79, name: '- Erick Cruz', Cargo: '', empresa: '' },
		// { id: 80, name: '- Fernando Castellón', Cargo: '', empresa: '' },
		// { id: 81, name: '- Daniel Rapalo', Cargo: '', empresa: '' },
		// { id: 82, name: '- Gabriel Bonnet', Cargo: '', empresa: '' },
		// { id: 83, name: '- Diego Hilsaca', Cargo: '', empresa: '' },

	], $input = $('input'),
		random_index;
	let total = msa.length;
	let arreglo = msa;

	
	random_index = Math.floor(Math.random() * msa.length);
	// console.log(arreglo);

	$('#slot').jSlots({
		number: 1,
		spinner: '.jSlots-wrapper',
		spinEvent: 'spin',
		time: 1000,
		loops: 2,
		endNum: 2,//finaliza en el segundo elmento del arreglo aleatorio
		onEnd: function (finalElement) {
			// Arreglo Vacío


			//set result
			let persona = (random_index);

			$input.val(arreglo[random_index].name);

			//oculta spiner
			$(this.spinner).hide();
			// console.log('TamaÑo de arreglo:' + arreglo.length);

			let suma = arreglo.length - 1;
			ganadores = total - suma;
			// console.log(msa.length);

			document.getElementById("participantes").innerHTML = '(' + (msa.length - 1) + ')';

			function eliminar(persona) {

				// console.log(random_index);
				let primo = random_index;
				let resultado = [];
				let elementoborrado = arreglo.splice(primo, 1);


				const dataId = resultado;


				const setData = (idData) => {
					// setReload(!reload);
					// Agregamos al arreglo vacío un elemento
					dataId.push(idData);
				};

				agregar = [];
				persona = persona;
				// console.log('Eliminados: ');
				// console.log(elementoborrado);

				agregar = elementoborrado[0].name;

				agregarvacio = []
				agreagar = dataId.push(elementoborrado);
				document.getElementById('foo').appendChild(makeUL(agregar));

				let list = '';
				//EVENTO A LOS BOTONES PARA OBTENER ID
				//MANDAMOS A LLAMAR TU FUNCION
				setData(agregar);
				//MOSTRAMOS EL ARREGLO

				function makeUL(array) {
					// Create the list element:
					var list = document.createElement('ul');
					var item = document.createElement('li');
					for (var i = 0; i < array.length; i++) {
						// Create the list item:

						// Set its contents:
						item.appendChild(document.createTextNode(array[i]));

						// Add it to the list:
						list.appendChild(item);
					}
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


document.querySelector(".button").addEventListener("click", function (e) {
	party.confetti(this);
});

party.confetti(runButton, {
	count: party.variation.range(20, 40),
});
