// main.js
const diagnosticsDB = {
    'F810': {
        name: 'Trastorno específico de la lectura',
        indicators: ['I001', 'I002', 'I003', 'I004', 'I005', 'I006', 'I007', 'I008', 'I009'],
        concept: "Su característica principal es un deterioro específico y significativo del desarrollo de las habilidades de la lectura, que no puede ser atribuido exclusivamente a la edad mental, problemas de agudeza visual o una enseñanza inadecuada. Pueden alterarse la habilidad para comprender la lectura, la capacidad para reconocer palabras escritas (mediante la lectura), la habilidad para la lectura oral y el desempeño de tareas que requieren lectura. Con el trastorno específico de la lectura se asocian con frecuencia dificultades en la ortografía, las cuales subsisten a menudo hasta la adolescencia, incluso después de haberse realizado algún progreso en la lectura. Los trastornos específicos del desarrollo de la lectura son precedidos generalmente por una historia de trastornos del desarrollo del habla o del lenguaje. Son frecuentes las perturbaciones emocionales y de la conducta concomitantes, durante la edad escolar."
    },
    'F811': {
        name: 'Trastorno específico del deletreo [ortografía]',
        indicators: ['I010', 'I011', 'I002', 'I012', 'I013'],
        concept: "Este es un trastorno cuya característica principal es un deterioro específico y significativo del desarrollo de las habilidades para deletrear, en ausencia de una historia de trastorno específico de la lectura. El trastorno no es exclusivamente atribuible a una baja edad mental, problemas de agudeza visual o una enseñanza inadecuada. Se halla afectada la habilidad para deletrear y para escribir correctamente cada palabra."
    },
    'F812': {
        name: 'Trastorno específico de las habilidades aritméticas',
        indicators: ['I014', 'I002', 'I015', 'I016', 'I017', 'I018', 'I019'],
        concept: "Este es un trastorno cuya característica principal es un deterioro específico y significativo del desarrollo de las habilidades para deletrear, en ausencia de una historia de trastorno específico de la lectura. El trastorno no es exclusivamente atribuible a una baja edad mental, problemas de agudeza visual o una enseñanza inadecuada. Se halla afectada la habilidad para deletrear y para escribir correctamente cada palabra."
    },
    'F813': {
        name: 'Trastorno mixto de las habilidades escolares',
        indicators: ['I010', 'I011', 'I002', 'I012', 'I013', 'I015', 'I016', 'I017', 'I018', 'I019', 'I014'],
        concept: 'Esta es una categoría residual mal definida de trastornos en los cuales hay deterioro significativo tanto aritmético como de la lectura o de la ortografía, y en la que el deterioro no es exclusivamente explicable en términos de retraso mental generalizado, ni por una enseñanza inadecuada. Debe ser usada para los trastornos que cumplen con los criterios para F81.2, junto con F81.0 o F81.1.'
    },
    'F411': {
        name: 'Trastorno de ansiedad generalizada',
        indicators: ['I020', 'I021', 'I022', 'I023', 'I024', 'I025', 'I026', 'I027', 'I028', 'I029'],
        concept: 'Su característica fundamental es una ansiedad generalizada y persistente, que no se restringe ni siquiera en términos de algún fuerte predominio, a ninguna circunstancia del entorno en particular (es decir, la angustia, “flota libremente”). Los síntomas principales son variables, pero incluyen quejas de permanente nerviosidad, temblor, tensiones musculares, sudoración, atolondramiento, palpitaciones, vértigo y malestar epigástrico. A menudo los pacientes manifiestan temores de una próxima enfermedad o de un accidente, que sufrirán en breve ellos mismos o alguno de sus parientes.'
    },
    'F320': {
        name: 'Episodio depresivo leve',
        indicators: ['I030', 'I031', 'I032', 'I033', 'I034', 'I035', 'I036'],
        concept: 'Por lo común están presentes dos o tres de los síntomas antes descritos. El paciente generalmente está tenso pero probablemente estará apto para continuar con la mayoría de sus actividades.'
    },
    'F321': {
        name: 'Episodio depresivo moderado',
        indicators: ['I030', 'I031', 'I032', 'I033', 'I034', 'I035', 'I036'],
        concept: 'Por lo común están presentes cuatro o más de los síntomas antes descritos y el paciente probablemente tenga grandes dificultades para continuar realizando sus actividades ordinarias.'
    },
    'Z55.0': {
        name: 'Problemas relacionados con el analfabetismo o bajo nivel de instrucción',
        indicators: ['I037'],
        concept: "Se refiere a los problemas relacionados con el analfabetismo o bajo nivel de instrucción. Este código se utiliza para identificar situaciones en las que una persona enfrenta dificultades debido a la incapacidad para leer y escribir (analfabetismo) o a tener un nivel educativo inferior al necesario para desenvolverse adecuadamente en la sociedad."
    },
    'Z55.1': {
        name: 'Problemas relacionados con la educación no disponible o inaccesible',
        indicators: ['I038'],
        concept: "Este código se utiliza para identificar situaciones en las que una persona enfrenta dificultades debido a la falta de acceso a la educación, ya sea porque no hay instituciones educativas disponibles en su área o porque existen barreras que impiden su acceso. Estas barreras pueden incluir factores socioeconómicos, geográficos, culturales o políticos que limitan la capacidad de una persona para recibir una educación adecuada."
    },
    'Z55.2': {
        name: 'Problemas relacionados con la falla en los exámenes',
        indicators: ['I039'],
        concept: "Este código se utiliza para identificar situaciones en las que una persona enfrenta dificultades debido a no cumplir con los estándares o expectativas en evaluaciones educativas, como los exámenes académicos."
    },
    'Z55.3': {
        name: 'Problemas relacionados con el bajo rendimiento escolar',
        indicators: ['I040'],
        concept: "Este código se utiliza para identificar situaciones en las que una persona experimenta dificultades para alcanzar y mantener un rendimiento académico acorde a sus capacidades cognitivas. Estas dificultades pueden reflejar una discrepancia entre el potencial del estudiante y su rendimiento actual, sin que necesariamente haya una causa orgánica o un trastorno psiquiátrico diagnosticado. Los problemas de bajo rendimiento escolar pueden deberse a diversos factores, como dificultades de concentración, falta de interés en las actividades escolares, problemas emocionales o conductuales, y un ambiente de estudio inadecuado"
    },
    'Z55.4': {
        name: 'Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros',
        indicators: ['I041'],
        concept: "Este código se utiliza para identificar situaciones en las que una persona enfrenta dificultades para adaptarse al entorno educativo, así como conflictos o desavenencias con maestros y compañeros. Estas dificultades pueden manifestarse como problemas de comportamiento, aislamiento social, bajo rendimiento académico y estrés emocional."
    }
};

const indicatorsDB = {
    'I001': 'Deterioro específico y significativo del desarrollo de las habilidades de la lectura.',
    'I002': 'No atribuible exclusivamente a la edad mental, problemas de agudeza visual o enseñanza inadecuada.',
    'I003': 'Alteraciones en la habilidad para comprender la lectura.',
    'I004': 'Alteraciones en la capacidad para reconocer palabras escritas.',
    'I005': 'Alteraciones en la habilidad para la lectura oral.',
    'I006': 'Alteraciones en el desempeño de tareas que requieren lectura.',
    'I007': 'Dificultades en la ortografía, persistentes hasta la adolescencia.',
    'I008': 'Historia de trastornos del desarrollo del habla o del lenguaje.',
    'I009': 'Perturbaciones emocionales y de conducta durante la edad escolar.',
    'I010': 'Deterioro específico y significativo del desarrollo de las habilidades para deletrear.',
    'I011': 'Ausencia de una historia de trastorno específico de la lectura.',
    'I012': 'Afectación de la habilidad para deletrear.',
    'I013': 'Afectación de la habilidad para escribir correctamente cada palabra.',
    'I014': 'Deterioro específico de las habilidades aritméticas.',
    'I015': 'Déficit en el dominio de habilidades elementales para la adición.',
    'I016': 'Déficit en el dominio de habilidades elementales para la sustracción.',
    'I017': 'Déficit en el dominio de habilidades elementales para la multiplicación.',
    'I018': 'Déficit en el dominio de habilidades elementales para la división.',
    'I019': 'Habilidades matemáticas más abstractas (álgebra, trigonometría, geometría, cálculo) menos afectadas.',
    'I020': 'Ansiedad no restringida a ninguna circunstancia del entorno en particular.',
    'I021': 'Permanente nerviosidad.',
    'I022': 'Temblores.',
    'I023': 'Tensiones musculares.',
    'I024': 'Sudoración.',
    'I025': 'Atolondramiento.',
    'I026': 'Palpitaciones.',
    'I027': 'Vértigo.',
    'I028': 'Malestar epigástrico.',
    'I029': 'Temores de una próxima enfermedad o accidente, para ellos mismos o sus parientes.',
    'I030': 'Decaimiento del ánimo, con reducción de su energía y disminución de su actividad.',
    'I031': 'Deterioro de la capacidad de disfrutar, el interés y la concentración.',
    'I032': 'Frecuente cansancio importante, incluso después de la realización de esfuerzos mínimos.',
    'I033': 'Perturbación del sueño.',
    'I034': 'Disminución del apetito.',
    'I035': 'Decaimiento de la autoestima y la confianza en sí mismo.',
    'I036': 'Aparición de ideas de culpa o de ser inútil, incluso en las formas leves.',
    'I037': 'Problemas relacionados con el analfabetismo o bajo nivel de instrucción.',
    'I038': 'Problemas relacionados con la educación no disponible o inaccesible.',
    'I039': 'Problemas relacionados con la falla en los exámenes.',
    'I040': 'Problemas relacionados con el bajo rendimiento escolar.',
    'I041': 'Problemas relacionados con la inadaptación educacional y desavenencias con maestros y compañeros.'
};

class DiagnosticSystem {
    constructor() {
        this.selectedIndicators = new Set();
        this.initializeElements();
        this.bindEvents();
        this.updateDiagnostics();
        this.initializeFuse(); // Inicializa Fuse.js
    }

    initializeElements() {
        this.searchInput = document.getElementById('searchInput');
        this.indicatorsContainer = document.getElementById('indicatorsContainer');
        this.differentialDiagnostics = document.getElementById('differentialDiagnostics');
        this.finalDiagnostic = document.getElementById('finalDiagnostic');
        this.diagnosticDetail = document.getElementById('diagnosticDetail');
        
        this.initializeIndicators();
    }

    bindEvents() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
    }

    initializeIndicators() {
        this.indicators = Object.entries(indicatorsDB).map(([id, text]) => ({ id, text }));
        this.indicators.forEach(indicator => {
            const div = document.createElement('div');
            div.className = 'indicator-item';
            div.textContent = indicator.text;
            div.dataset.id = indicator.id;
            div.onclick = () => this.toggleIndicator(indicator.id, div);
            this.indicatorsContainer.appendChild(div);
        });
    }

    initializeFuse() {
        const options = {
            includeScore: true,
            threshold: 0.5, // Ajusta este valor para hacer la búsqueda más o menos tolerante a errores
            keys: ['text']
        };
        this.fuse = new Fuse(this.indicators, options);
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const results = this.fuse.search(searchTerm);
        const resultIds = results.map(result => result.item.id);

        document.querySelectorAll('.indicator-item').forEach(item => {
            const matches = resultIds.includes(item.dataset.id);
            item.style.display = matches ? 'block' : 'none';
        });
    }

    toggleIndicator(id, element) {
        if (this.selectedIndicators.has(id)) {
            this.selectedIndicators.delete(id);
            element.classList.remove('selected');
        } else {
            this.selectedIndicators.add(id);
            element.classList.add('selected');
        }
        this.updateDiagnostics();
    }

    updateDiagnostics() {
        this.updateDifferentialDiagnostics();
        this.updateFinalDiagnostic();
        
        if (this.selectedIndicators.size === 0) {
            this.diagnosticDetail.innerHTML = '<p>Seleccione indicadores para ver el detalle diagnóstico.</p>';
        }
    }

    updateDifferentialDiagnostics() {
        this.differentialDiagnostics.innerHTML = '';
        if (this.selectedIndicators.size === 0) {
            this.differentialDiagnostics.innerHTML = '<p>Seleccione indicadores para ver diagnósticos posibles.</p>';
            return;
        }

        const possibleDiagnostics = new Set();
        this.selectedIndicators.forEach(indicator => {
            Object.entries(diagnosticsDB).forEach(([id, diagnostic]) => {
                if (diagnostic.indicators.includes(indicator)) {
                    possibleDiagnostics.add(id);
                }
            });
        });

        if (possibleDiagnostics.size === 0) {
            this.differentialDiagnostics.innerHTML = '<p>No se encontraron diagnósticos que coincidan con los indicadores seleccionados.</p>';
            return;
        }

        possibleDiagnostics.forEach(id => {
            const div = document.createElement('div');
            div.className = 'diagnostic-item';
            div.textContent = `${id}: ${diagnosticsDB[id].name}`;
            div.onclick = () => this.showDiagnosticDetail(id);
            this.differentialDiagnostics.appendChild(div);
        });
    }

    updateFinalDiagnostic() {
        this.finalDiagnostic.innerHTML = '';
        let hasFinalDiagnostic = false;

        Object.entries(diagnosticsDB).forEach(([id, diagnostic]) => {
            if (id === 'F320' || id === 'F321') {
                return; // Saltar los diagnósticos de episodios depresivos aquí
            }

            const hasAllIndicators = diagnostic.indicators.every(indicator => 
                this.selectedIndicators.has(indicator)
            );
            if (hasAllIndicators) {
                hasFinalDiagnostic = true;
                const div = document.createElement('div');
                div.className = 'diagnostic-item';
                div.textContent = `${id}: ${diagnostic.name}`;
                this.finalDiagnostic.appendChild(div);
                this.showDiagnosticDetail(id);
            }
        });

        // Verificar episodios depresivos
        const depressiveEpisode = determineDepressiveEpisode(Array.from(this.selectedIndicators));
        if (depressiveEpisode) {
            hasFinalDiagnostic = true;
            const div = document.createElement('div');
            div.className = 'diagnostic-item';
            div.textContent = `${depressiveEpisode}: ${diagnosticsDB[depressiveEpisode].name}`;
            this.finalDiagnostic.appendChild(div);
            this.showDiagnosticDetail(depressiveEpisode);
        }

        if (!hasFinalDiagnostic) {
            this.finalDiagnostic.innerHTML = '<p>No se cumplen todos los criterios para un diagnóstico final.</p>';
        }
    }

    showDiagnosticDetail(id) {
        const diagnostic = diagnosticsDB[id];
        const foundIndicators = diagnostic.indicators.filter(i => this.selectedIndicators.has(i));
        const missingIndicators = diagnostic.indicators.filter(i => !this.selectedIndicators.has(i));

        this.diagnosticDetail.innerHTML = `
            <h3>${id}: ${diagnostic.name}</h3>
            <p><strong>Concepto:</strong> ${diagnostic.concept}</p>
            <div class="found-indicators">
                <h4>Indicadores Encontrados:</h4>
                ${foundIndicators.map(i => `<p>• ${indicatorsDB[i]}</p>`).join('')}
            </div>
            ${missingIndicators.length > 0 ? `
                <div class="missing-indicators">
                    <h4>Indicadores Faltantes:</h4>
                    ${missingIndicators.map(i => `<p>• ${indicatorsDB[i]}</p>`).join('')}
                </div>
            ` : ''}
        `;
    }
}

function determineDepressiveEpisode(indicators) {
    const leveIndicators = ['I030', 'I031', 'I032', 'I033', 'I034', 'I035', 'I036'];
    const moderadoIndicators = ['I030', 'I031', 'I032', 'I033', 'I034', 'I035', 'I036'];

    const leveCount = indicators.filter(indicator => leveIndicators.includes(indicator)).length;
    const moderadoCount = indicators.filter(indicator => moderadoIndicators.includes(indicator)).length;

    if (leveCount >= 2 && leveCount <= 3) {
        return 'F320'; // Episodio depresivo leve
    } else if (moderadoCount >= 4 && moderadoCount <= 7) {
        return 'F321'; // Episodio depresivo moderado
    } else {
        return null; // No cumple con los criterios
    }
}

function diagnose(indicators) {
    const diagnosis = {};

    // Verificar otros diagnósticos
    for (const [code, data] of Object.entries(diagnosticsDB)) {
        if (code !== 'F320' && code !== 'F321') {
            const match = data.indicators.every(indicator => indicators.includes(indicator));
            if (match) {
                diagnosis[code] = data.name;
            }
        }
    }

    // Verificar episodios depresivos
    const depressiveEpisode = determineDepressiveEpisode(indicators);
    if (depressiveEpisode) {
        diagnosis[depressiveEpisode] = diagnosticsDB[depressiveEpisode].name;
    }

    return diagnosis;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    new DiagnosticSystem();
});
