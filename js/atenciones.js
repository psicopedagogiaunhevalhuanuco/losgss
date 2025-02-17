document.getElementById('facultad').addEventListener('change', function() {
    const facultad = this.value;
    const carreraSelect = document.getElementById('carrera');
    carreraSelect.innerHTML = '<option value="" disabled selected>Seleccione Carrera Profesional</option>';

    const carreras = {
        'Ciencias Sociales': ['Sociología', 'Ciencias de la Comunicación'],
        'Medicina': ['Medicina Humana', 'Odontología'],
        'Medicina Veterinaria y Zootecnia': ['Veterinaria'],
        'Ciencias Agrarias': ['Ingeniería Agronómica', 'Ingeniería Agroindustrial'],
        'Psicología': ['Psicología'],
        'Obstetricia': ['Obstetricia'],
        'Ciencias Administrativas y Turismo': ['Ciencias Administrativas', 'Turismo y Hotelería'],
        'Economía': ['Economía'],
        'Ingeniería Civil y Arquitectura': ['Ingeniería Civil', 'Arquitectura'],
        'Ingeniería Industrial y de Sistemas': ['Ingeniería Industrial', 'Ingeniería de Sistemas'],
        'Ciencias Contables y Financieras': ['Contabilidad'],
        'Ciencias de la Educación': [
            'Biología, Química y Ciencias del Ambiente',
            'Ciencias Histórico Sociales y Geográficas',
            'Educación Física',
            'Filosofía, Psicología y Ciencias Sociales',
            'Lengua y Literatura',
            'Matemática y Física'
        ],
        'Enfermería': ['Enfermería'],
        'Derecho y Ciencias Políticas': ['Derecho']
    };

    if (carreras[facultad]) {
        carreras[facultad].forEach(carrera => {
            const option = document.createElement('option');
            option.value = carrera;
            option.textContent = carrera;
            carreraSelect.appendChild(option);
        });
    }
});

document.getElementById('atencionesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const facultad = document.getElementById('facultad').value;
    const carrera = document.getElementById('carrera').value;
    const fecha = document.getElementById('fecha').value;
    const messageElement = document.getElementById('message');

    // Guardar los datos del estudiante en una variable
    const estudiante = {
        nombres: nombres,
        facultad: facultad,
        carrera: carrera,
        fecha: fecha,
        instrumentos: []
    };

    // Guardar la variable en localStorage para usarla más tarde
    localStorage.setItem('estudiante', JSON.stringify(estudiante));

    // Mostrar mensaje de éxito
    messageElement.style.color = 'green';
    messageElement.textContent = 'Intervención iniciada correctamente';

    // Pasar al contenedor de evaluación y diagnóstico
    document.getElementById('atenciones-container').style.display = 'none';
    document.getElementById('evaluacion-container').style.display = 'block';
});