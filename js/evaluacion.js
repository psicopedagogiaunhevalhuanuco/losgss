document.addEventListener('DOMContentLoaded', function() {
    const elementosSelect = document.getElementById('elementos');
    const buscador = document.getElementById('buscador');
    let opcionesOriginales = [];
    const indicadoresDiagnosticos = {
        'Problemas relacionados con el analfabetismo o bajo nivel de instrucción': ['Z55.0 Problemas relacionados con el analfabetismo o bajo nivel de instrucción'],
        'Problemas relacionados con la educación no disponible o inaccesible': ['Z55.1 Problemas relacionados con la educación no disponible o inaccesible'],
        'Problemas relacionados con la falla en los exámenes': ['Z55.2 Problemas relacionados con la falla en los exámenes'],
        'Problemas relacionados con el bajo rendimiento escolar': ['Z55.3 Problemas relacionados con el bajo rendimiento escolar'],
        'Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros': ['Z55.4 Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros'],
        'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada. ': ['F810 Trastorno especifico de la lectura','F811 Trastorno específico del deletreo [ortografía]','F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Deterioro específico y significativo del desarrollo de las habilidades para deletrear.': ['F813 Trastorno mixto de las habilidades escolares','F811 Trastorno específico del deletreo [ortografía]'],
        'Deterioro específico y significativo del desarrollo de las habilidades de la lectura.': ['F810 Trastorno especifico de la lectura'],
        'Alteraciones en la habilidad para comprender la lectura.': ['F810 Trastorno especifico de la lectura'],
        'Alteraciones en la capacidad para reconocer palabras escritas.':['F810 Trastorno especifico de la lectura'],
        'Alteraciones en la habilidad para la lectura oral.':['F810 Trastorno especifico de la lectura'],
        'Alteraciones en el desempeño de tareas que requieren lectura.':['F810 Trastorno especifico de la lectura'],
        'Dificultades en la ortografía, persistentes hasta la adolescencia.':['F810 Trastorno especifico de la lectura'],
        'Historia de trastornos del desarrollo del habla o del lenguaje.':['F810 Trastorno especifico de la lectura'],
        'Perturbaciones emocionales y de conducta durante la edad escolar.':['F810 Trastorno especifico de la lectura'],
        'Ausencia de una historia de trastorno específico de la lectura.':['F811 Trastorno específico del deletreo [ortografía]','F813 Trastorno mixto de las habilidades escolares'],
        'Afectación de la habilidad para deletrear.':['F811 Trastorno específico del deletreo [ortografía]','F813 Trastorno mixto de las habilidades escolares'],
        'Afectación de la habilidad para escribir correctamente cada palabra.':['F811 Trastorno específico del deletreo [ortografía]','F813 Trastorno mixto de las habilidades escolares'],
        'Deterioro específico de las habilidades aritméticas.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Déficit en el dominio de habilidades elementales para la adición.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Déficit en el dominio de habilidades elementales para la sustracción.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Déficit en el dominio de habilidades elementales para la multiplicación.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Déficit en el dominio de habilidades elementales para la división.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Habilidades matemáticas más abstractas (álgebra, trigonometría, geometría, cálculo) menos afectadas.':['F812 Trastorno especifico de las habilidades aritméticas','F813 Trastorno mixto de las habilidades escolares'],
        'Decaimiento del ánimo, con reducción de su energía y disminución de su actividad.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Deterioro de la capacidad de disfrutar, el interés y la concentración.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Frecuente cansancio importante, incluso después de la realización de esfuerzos mínimos.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Perturbación del sueño.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Disminución del apetito.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Decaimiento de la autoestima y la confianza en sí mismo.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Aparición de ideas de culpa o de ser inútil, incluso en las formas leves.':['F320 Episodio depresivo leve','F321 Episodio depresivo moderado','F412 Trastorno mixto de ansiedad y depresión'],
        'Ansiedad no restringida a ninguna circunstancia del entorno en particular.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Permanente nerviosidad.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Temblores.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Tensiones musculares.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Sudoración.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Atolondramiento.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Palpitaciones.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Vértigo.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Malestar epigástrico.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        'Temores de una próxima enfermedad o accidente, para ellos mismos o sus parientes.':['F411 Trastorno de ansiedad generalizada','F412 Trastorno mixto de ansiedad y depresión'],
        // Añade más indicadores y sus códigos diagnósticos correspondientes}
    };
    
    
    const diagnosticoDiferenciadoContainer = document.getElementById('diagnostico-diferenciado');
    function actualizarDiagnosticoDiferenciado() {
        diagnosticoDiferenciadoContainer.innerHTML = ''; // Limpiar el contenedor

        const codigosDiagnosticos = new Set();

        indicadoresSeleccionadosArray.forEach(indicador => {
            if (indicadoresDiagnosticos[indicador]) {
                indicadoresDiagnosticos[indicador].forEach(codigo => {
                    codigosDiagnosticos.add(codigo);
                });
            }
        });
        if (codigosDiagnosticos.size === 0) {
            diagnosticoDiferenciadoContainer.classList.add('vacio');
            diagnosticoDiferenciadoContainer.classList.remove('lleno');
            const mensajeVacio = document.createElement('p');
            mensajeVacio.textContent = 'Diagnóstico Diferenciado';
            diagnosticoDiferenciadoContainer.appendChild(mensajeVacio);
        } else {
            diagnosticoDiferenciadoContainer.classList.remove('vacio');
            diagnosticoDiferenciadoContainer.classList.add('lleno');
            codigosDiagnosticos.forEach(codigo => {
                const codigoElement = document.createElement('p');
                codigoElement.textContent = codigo;
                diagnosticoDiferenciadoContainer.appendChild(codigoElement);
            });
        }
    }    
    const diagnosticoDefinitivoContainer = document.getElementById('diagnostico-definitivo');
    function Diagnostico(diagnostico) {
        const cuadroDiagnosticoContainer = document.getElementById('cuadro-diagnostico');
        cuadroDiagnosticoContainer.innerHTML = ''; // Limpiar el contenedor
    
        fetch('../Evaluación y Diagnostico/diagnosticos.json')
            .then(response => response.json())
            .then(data => {
                if (data[diagnostico]) {
                    const { concepto, indicadores } = data[diagnostico];
    
                    // Crear el elemento para el diagnóstico (como sticker)
                    const diagnosticoElement = document.createElement('div');
                    diagnosticoElement.className = 'sticker diagnostico-sticker';
                    diagnosticoElement.innerHTML = `<span>${diagnostico}</span>`;
                    diagnosticoElement.style.backgroundColor = '#ff0000'; // Color de fondo para el diagnóstico
                    cuadroDiagnosticoContainer.appendChild(diagnosticoElement);
    
                    // Crear el elemento para el concepto (como sticker)
                    const conceptoElement = document.createElement('div');
                    conceptoElement.className = 'sticker concepto-sticker';
                    conceptoElement.innerHTML = `<span>${concepto}</span>`;
                    conceptoElement.style.backgroundColor = '#007bff'; // Color de fondo para el concepto
                    cuadroDiagnosticoContainer.appendChild(conceptoElement);
    
                    // Crear elementos para los indicadores (como stickers)
                    indicadores.forEach(indicador => {
                        const indicadorElement = document.createElement('div');
                        indicadorElement.className = 'sticker indicador-sticker';
                        indicadorElement.innerHTML = `<span>${indicador}</span>`;
                        indicadorElement.style.backgroundColor = '#218838'; // Color de fondo para los indicadores
                        cuadroDiagnosticoContainer.appendChild(indicadorElement);
                    });
                }
            })
            .catch(error => console.error('Error al cargar los diagnósticos:', error));
    }
    function actualizarDiagnosticoDefinitivo() {
        diagnosticoDefinitivoContainer.innerHTML = ''; // Limpiar el contenedor
    
        const codigosDiagnosticos = new Set();
    
        // Definir los diagnósticos que requieren un conjunto estricto de elementos
        const diagnosticosRequeridos = {
            'F810 Trastorno especifico de la lectura': {
                elementos: ['Deterioro específico y significativo del desarrollo de las habilidades de la lectura.', 'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.', 'Alteraciones en la habilidad para comprender la lectura.', 'Alteraciones en la capacidad para reconocer palabras escritas.', 'Alteraciones en la habilidad para la lectura oral.', 'Alteraciones en el desempeño de tareas que requieren lectura.', 'Dificultades en la ortografía, persistentes hasta la adolescencia.', 'Historia de trastornos del desarrollo del habla o del lenguaje.', 'Perturbaciones emocionales y de conducta durante la edad escolar.'],
                estricto: true
            },
            'F811 Trastorno específico del deletreo [ortografía]': {
                elementos: ['Deterioro específico y significativo del desarrollo de las habilidades para deletrear.', 'Ausencia de una historia de trastorno específico de la lectura.', 'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.', 'Afectación de la habilidad para deletrear.', 'Afectación de la habilidad para escribir correctamente cada palabra.'],
                estricto: true
            },
            'F812 Trastorno especifico de las habilidades aritméticas': {
                elementos: ['Deterioro específico de las habilidades aritméticas.', 'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.', 'Déficit en el dominio de habilidades elementales para la adición.', 'Déficit en el dominio de habilidades elementales para la sustracción.', 'Déficit en el dominio de habilidades elementales para la multiplicación.', 'Déficit en el dominio de habilidades elementales para la división.', 'Habilidades matemáticas más abstractas (álgebra, trigonometría, geometría, cálculo) menos afectadas.'],
                estricto: true
            },
            'F813 Trastorno mixto de las habilidades escolares': {
                elementos: ['Deterioro específico y significativo del desarrollo de las habilidades para deletrear.', 'Ausencia de una historia de trastorno específico de la lectura.', 'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.', 'Afectación de la habilidad para deletrear.', 'Afectación de la habilidad para escribir correctamente cada palabra.', 'Déficit en el dominio de habilidades elementales para la adición.', 'Déficit en el dominio de habilidades elementales para la sustracción.', 'Déficit en el dominio de habilidades elementales para la multiplicación.', 'Déficit en el dominio de habilidades elementales para la división.', 'Habilidades matemáticas más abstractas (álgebra, trigonometría, geometría, cálculo) menos afectadas.', 'Deterioro específico de las habilidades aritméticas.'],
                estricto: true
            },
            'F411 Trastorno de ansiedad generalizada': {
                elementos: ['Ansiedad no restringida a ninguna circunstancia del entorno en particular.','Permanente nerviosidad.','Temblores.','Tensiones musculares.','Sudoración.','Atolondramiento.','Palpitaciones.','Vértigo.','Malestar epigástrico.','Temores de una próxima enfermedad o accidente, para ellos mismos o sus parientes.'],
                estricto: true
            },
            'F320 Episodio depresivo leve': {
                elementos: ['Decaimiento del ánimo, con reducción de su energía y disminución de su actividad.', 'Deterioro de la capacidad de disfrutar, el interés y la concentración.', 'Frecuente cansancio importante, incluso después de la realización de esfuerzos mínimos.', 'Perturbación del sueño.', 'Disminución del apetito.','Decaimiento de la autoestima y la confianza en sí mismo.','Aparición de ideas de culpa o de ser inútil, incluso en las formas leves.'],
                min: 2,
                max: 3,
                estricto: false
            },
            'F321 Episodio depresivo moderado': {
                elementos: ['Decaimiento del ánimo, con reducción de su energía y disminución de su actividad.', 'Deterioro de la capacidad de disfrutar, el interés y la concentración.', 'Frecuente cansancio importante, incluso después de la realización de esfuerzos mínimos.', 'Perturbación del sueño.', 'Disminución del apetito.','Decaimiento de la autoestima y la confianza en sí mismo.','Aparición de ideas de culpa o de ser inútil, incluso en las formas leves.'],
                min: 4,
                max: 7,
                estricto: false
            },
            'Z55.0 Problemas relacionados con el analfabetismo o bajo nivel de instrucción': {
                elementos: ['Problemas relacionados con el analfabetismo o bajo nivel de instrucción'],
                min: 1,
                max: 1,
                estricto: false
            },
            'Z55.1 Problemas relacionados con la educación no disponible o inaccesible': {
                elementos: ['Problemas relacionados con la educación no disponible o inaccesible'],
                min: 1,
                max: 1,
                estricto: false
            },
            'Z55.2 Problemas relacionados con la falla en los exámenes': {
                elementos: ['Problemas relacionados con la falla en los exámenes'],
                min: 1,
                max: 1,
                estricto: false
            },
            'Z55.3 Problemas relacionados con el bajo rendimiento escolar': {
                elementos: ['Problemas relacionados con el bajo rendimiento escolar'],
                min: 1,
                max: 1,
                estricto: false
            },
            'Z55.4 Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros': {
                elementos: ['Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros'],
                min: 1,
                max: 1,
                estricto: false
            },
            // Añade más diagnósticos y sus criterios
        };
    
        
        Object.keys(diagnosticosRequeridos).forEach(diagnostico => {
            const { elementos, min, max, estricto } = diagnosticosRequeridos[diagnostico];
            const elementosSeleccionados = indicadoresSeleccionadosArray.filter(indicador => elementos.includes(indicador));
    
            if (estricto) {
                const cumpleRequisitos = Array.isArray(elementos) && elementos.every(elemento => indicadoresSeleccionadosArray.includes(elemento));
                if (cumpleRequisitos) {
                    codigosDiagnosticos.add(diagnostico);
                }
            } else {
                if (elementosSeleccionados.length >= min && elementosSeleccionados.length <= max) {
                    codigosDiagnosticos.add(diagnostico);
                }
            }
        });
        if (codigosDiagnosticos.size > 0) {
            codigosDiagnosticos.forEach(codigo => {
                // Llamar a la función para actualizar el cuadro diagnóstico
                actualizarCuadroDiagnostico(codigo);
            });
        } else {
            // Si no hay diagnósticos definitivos, actualizar el cuadro diagnóstico con el texto por defecto
            const cuadroDiagnosticoContainer = document.getElementById('cuadro-diagnostico');
            cuadroDiagnosticoContainer.innerHTML = '<p><b><u>Cuadro Diagnóstico</u></b></p>';
        }
        if (codigosDiagnosticos.size === 0) {
            diagnosticoDefinitivoContainer.classList.add('vacio');
            diagnosticoDefinitivoContainer.classList.remove('lleno');
            const mensajeVacio = document.createElement('p');
            mensajeVacio.textContent = 'Diagnóstico Presuntivo';
            diagnosticoDefinitivoContainer.appendChild(mensajeVacio);
        } else {
            diagnosticoDefinitivoContainer.classList.remove('vacio');
            diagnosticoDefinitivoContainer.classList.add('lleno');
            codigosDiagnosticos.forEach(codigo => {
                const codigoElement = document.createElement('p');
                codigoElement.textContent = codigo;
                diagnosticoDefinitivoContainer.appendChild(codigoElement);
            });
        }
    }
    document.getElementById('problema').addEventListener('change', function() {
        const problema = this.value;
        elementosSelect.innerHTML = ''; // Limpiar la listbox

        // Datos de ejemplo, puedes reemplazarlos con datos reales
        const datos = {
            'dificultades-aprendizaje': ['Problemas relacionados con el analfabetismo o bajo nivel de instrucción','Problemas relacionados con la educación no disponible o inaccesible','Problemas relacionados con la falla en los exámenes','Problemas relacionados con el bajo rendimiento escolar','Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros'],
            'problemas-aprendizaje': ['Deterioro específico y significativo del desarrollo de las habilidades de la lectura.','No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.','Alteraciones en la habilidad para comprender la lectura.','Alteraciones en la capacidad para reconocer palabras escritas.','Alteraciones en la habilidad para la lectura oral.','Alteraciones en el desempeño de tareas que requieren lectura.','Dificultades en la ortografía, persistentes hasta la adolescencia.','Historia de trastornos del desarrollo del habla o del lenguaje.','Perturbaciones emocionales y de conducta durante la edad escolar.','Deterioro específico y significativo del desarrollo de las habilidades para deletrear.','Ausencia de una historia de trastorno específico de la lectura.','Afectación de la habilidad para deletrear.','Afectación de la habilidad para escribir correctamente cada palabra.','Deterioro específico de las habilidades aritméticas.','Déficit en el dominio de habilidades elementales para la adición.','Déficit en el dominio de habilidades elementales para la sustracción.','Déficit en el dominio de habilidades elementales para la multiplicación.','Déficit en el dominio de habilidades elementales para la división.','Habilidades matemáticas más abstractas (álgebra, trigonometría, geometría, cálculo) menos afectadas.'],
            'estado-socioemocional': ['Decaimiento del ánimo, con reducción de su energía y disminución de su actividad.','Deterioro de la capacidad de disfrutar, el interés y la concentración.','Frecuente cansancio importante, incluso después de la realización de esfuerzos mínimos.','Perturbación del sueño.','Disminución del apetito.','Decaimiento de la autoestima y la confianza en sí mismo.','Aparición de ideas de culpa o de ser inútil, incluso en las formas leves.','Ansiedad no restringida a ninguna circunstancia del entorno en particular.','Permanente nerviosidad.','Temblores.','Tensiones musculares.','Sudoración.','Atolondramiento.','Palpitaciones.','Vértigo.','Malestar epigástrico.','Temores de una próxima enfermedad o accidente, para ellos mismos o sus parientes.']
        };

        if (datos[problema]) {
            datos[problema].forEach(elemento => {
                const option = document.createElement('option');
                option.value = elemento;
                option.textContent = elemento;
                elementosSelect.appendChild(option);
            });
        }

        // Actualizar las opciones originales después de cambiar el problema
        opcionesOriginales = Array.from(elementosSelect.options).map(option => option.textContent);
        console.log('Opciones originales actualizadas:', opcionesOriginales);

        const instrumentoSelect = document.getElementById('instrumento');
        const descripcionProblemaElement = document.getElementById('descripcionProblema');
        instrumentoSelect.innerHTML = '<option value="">Seleccione Instrumento de Evaluación</option>';

        fetch('../Evaluación y Diagnostico/instrumentos.json')
        .then(response => response.json())
        .then(data => {
            if (data[problema]) {
                data[problema].forEach(instrumento => {
                    const option = document.createElement('option');
                    option.value = instrumento.archivo;
                    option.textContent = instrumento.nombre;
                    option.dataset.descripcion = instrumento.descripcion;
                    instrumentoSelect.appendChild(option);
                });
            }
        })
        .catch(error => console.error('Error al cargar los instrumentos:', error));
    });

    buscador.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        console.log('Query:', query);
        elementosSelect.innerHTML = '';
    
        if (query === '') {
            // Si el buscador está vacío, mostrar todas las opciones originales
            opcionesOriginales.forEach(opcion => {
                const option = document.createElement('option');
                option.value = opcion;
                option.textContent = opcion;
                elementosSelect.appendChild(option);
            });
        } else {
            const fuse = new Fuse(opcionesOriginales, {
                includeScore: true,
                threshold: 0.6 // Ajusta este valor para hacer la búsqueda más o menos tolerante a errores
            });
    
            const resultados = fuse.search(query);
            console.log('Resultados:', resultados);
    
            resultados.forEach(result => {
                const option = document.createElement('option');
                option.value = result.item;
                option.textContent = result.item;
                elementosSelect.appendChild(option);
            });
        }
    });

    document.getElementById('instrumento').addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const descripcionElement = document.getElementById('descripcion');
        const descripcion = selectedOption.dataset.descripcion;

        if (descripcion) {
            // Convertir saltos de línea \n en etiquetas <br>
            const descripcionConSaltos = descripcion.replace(/\n/g, '<br>');
            descripcionElement.innerHTML = descripcionConSaltos;
        } else {
            descripcionElement.innerHTML = '';
        }
        // Eliminar la opción "Seleccione Instrumento de Evaluación" después de seleccionar un instrumento
        const defaultOption = this.querySelector('option[value=""]');
        if (defaultOption) {
            defaultOption.remove();
        }
    });

    document.getElementById('descargar').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir la redirección
        const instrumentoSelect = document.getElementById('instrumento');
        const selectedOption = instrumentoSelect.options[instrumentoSelect.selectedIndex];
        const archivo = selectedOption.value;
        const estudiante = JSON.parse(localStorage.getItem('estudiante'));

        if (archivo && estudiante) {
            estudiante.instrumentos.push(archivo);
            localStorage.setItem('estudiante', JSON.stringify(estudiante));

            // Abrir el archivo en una nueva ventana
            window.open(`../Evaluación y Diagnostico/${archivo}`, '_blank');
        }
    });

    const elementos = document.getElementById('elementos');
    const indicadoresSeleccionados = document.getElementById('indicadores-seleccionados');
    const indicadoresSeleccionadosArray = [];

    if (elementos) {
        elementos.addEventListener('dblclick', function(event) {
            const selectedOption = event.target;
            const indicador = selectedOption.value;
    
            if (indicador && !indicadoresSeleccionadosArray.includes(indicador)) {
                // Crear un elemento div para el indicador seleccionado
                const indicadorDiv = document.createElement('div');
                indicadorDiv.className = 'indicador-sticker';
                indicadorDiv.textContent = indicador;
    
                // Crear un botón de eliminación
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-btn';
                removeBtn.innerHTML = '&times;';
                removeBtn.addEventListener('click', function() {
                    // Eliminar el indicador del contenedor
                    indicadoresSeleccionados.removeChild(indicadorDiv);
                    // Eliminar el indicador del array
                    const index = indicadoresSeleccionadosArray.indexOf(indicador);
                    if (index > -1) {
                        indicadoresSeleccionadosArray.splice(index, 1);
                    }
                    // Actualizar el diagnóstico diferenciado
                    actualizarDiagnosticoDiferenciado();
                    actualizarDiagnosticoDefinitivo();
                });

                // Añadir el botón de eliminación al div del indicador
                indicadorDiv.appendChild(removeBtn);
    
                // Añadir el indicador al contenedor de indicadores seleccionados
                indicadoresSeleccionados.appendChild(indicadorDiv);
    
                // Guardar el indicador en el array
                indicadoresSeleccionadosArray.push(indicador);
    
                // Actualizar el diagnóstico diferenciado
                actualizarDiagnosticoDiferenciado();
                actualizarDiagnosticoDefinitivo();
            }
        });
    } else {
        console.error('El elemento con id "elementos" no se encontró en el DOM.');
    }
});
function actualizarCuadroDiagnostico(diagnostico) {
    const cuadroDiagnosticoContainer = document.getElementById('cuadro-diagnostico');
    cuadroDiagnosticoContainer.innerHTML = ''; // Limpiar el contenedor

    fetch('../Evaluación y Diagnostico/diagnosticos.json')
        .then(response => response.json())
        .then(data => {
            if (data[diagnostico]) {
                const { concepto, indicadores } = data[diagnostico];

                // Crear el elemento para el diagnóstico (como sticker)
                const diagnosticoElement = document.createElement('div');
                diagnosticoElement.className = 'sticker diagnostico-sticker';
                diagnosticoElement.contentEditable = true;
                diagnosticoElement.innerHTML = `<span>${diagnostico}</span>`;
                diagnosticoElement.style.backgroundColor = '#ffe6e6'; // Color de fondo para el diagnóstico
                cuadroDiagnosticoContainer.appendChild(diagnosticoElement);

                // Crear el elemento para el concepto (como sticker)
                const conceptoElement = document.createElement('div');
                conceptoElement.className = 'sticker concepto-sticker';
                conceptoElement.contentEditable = true;
                conceptoElement.innerHTML = `<span>${concepto}</span>`;
                conceptoElement.style.backgroundColor = '#e6e6ff'; // Color de fondo para el concepto
                cuadroDiagnosticoContainer.appendChild(conceptoElement);

                // Crear elementos para los indicadores (como stickers)
                indicadores.forEach(indicador => {
                    const indicadorElement = document.createElement('div');
                    indicadorElement.className = 'sticker indicador-sticker';
                    indicadorElement.contentEditable = true;
                    indicadorElement.innerHTML = `<span>${indicador}</span>`;
                    indicadorElement.style.backgroundColor = '#e6ffe6'; // Color de fondo para los indicadores
                    cuadroDiagnosticoContainer.appendChild(indicadorElement);
                });
            }
        })
        .catch(error => console.error('Error al cargar los diagnósticos:', error));
}