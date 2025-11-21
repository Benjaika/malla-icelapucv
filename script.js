// Lista de ramos con sus prerrequisitos
const ramos = [
  { id: "hpt", nombre: "HISTORIA DEL PENSAMIENTO POLÍTICO Y TEORÍA DEL ESTADO", semestre: 1, prerequisitos: [], creditos: 4  },
  { id: "fpb", nombre: "FUENTES, PROCESO Y BIENES EN EL DERECHO ROMANO", semestre: 1, prerequisitos: [], creditos: 3 },
  { id: "hdam", nombre: "HISTORIA DEL DERECHO ANTIGUO Y MEDIEVAL", semestre: 1, prerequisitos: [], creditos: 3  },
  { id: "ffp", nombre: "FUNDAMENTOS DE FILOSOFÍA PRÁCTICA", semestre: 1, prerequisitos: [], creditos: 3 },
  { id: "iedpc", nombre: "INTRODUCCIÓN AL ESTUDIO DEL DERECHO POSITIVO CHILENO", semestre: 1, prerequisitos: [], creditos: 3 },
  { id: "tm1", nombre: "TALLER DE MEMORIA 1", semestre: 1, prerequisitos: [], creditos: 1 },
  { id: "ing1", nombre: "INGLÉS 1", semestre: 1, prerequisitos: [], creditos: 2 },
  { id: "antro", nombre: "ANTROPOLOGÍA CRISTIANA", semestre: 1, prerequisitos: [], creditos: 2 },

  { id: "tchpcch", nombre: "TEORIA DE LA CONSTITUCION E HISTORIA POLITICA Y CONSTITUCIONAL DE CHILE", semestre: 2, prerequisitos: ["hpt"], creditos: 4 },
  { id: "fpdr", nombre: "FAMILIA Y PATRIMONIO EN EL DERECHO ROMANO", semestre: 2, prerequisitos: ["fpb"], creditos: 4 },
  { id: "hdmc", nombre: "HISTORIA DEL DERECHO MODERNO Y CONTEMPORANEO", semestre: 2, prerequisitos: ["hdam"], creditos: 3 },
  { id: "tn", nombre: "TEORÍA DE LA NORMATIVIDAD", semestre: 2, prerequisitos: ["ffp"], creditos: 3 },
  { id: "judi", nombre: "JUDICATURA", semestre: 2, prerequisitos: ["iedpc"], creditos: 3 },
  { id: "ing2", nombre: "INGLÉS 2", semestre: 2, prerequisitos: ["ing1"], creditos: 2 },
  { id: "etcr", nombre: "ÉTICA CRISTIANA", semestre: 2, prerequisitos: [], creditos: 2 },


  { id: "dco", nombre: "DERECHO CONSTITUCIONAL ORGÁNICO", semestre: 3, prerequisitos: ["iedpc", "tchpcch", "hpt", "fpb", "hdam", "ffp"], creditos: 3 },
  { id: "dip", nombre: "DERECHO INTERNACIONAL PÚBLICO", semestre: 3, prerequisitos: ["iedpc", "tchpcch", "hpt", "fpb", "hdam", "ffp"], creditos: 4 },
  { id: "nj", nombre: "NEGOCIO JURIDICO", semestre: 3, prerequisitos: ["iedpc", "hpt", "fpdr", "fpb", "hdam", "ffp"], creditos: 4 },
  { id: "epdo", nombre: "ESTRATEGIAS DE PRODUCCIÓN DEL DISCURSO ORAL", semestre: 3, prerequisitos: ["iedpc", "hpt", "fpb", "hdam", "ffp"], creditos: 3 },
  { id: "tjdp", nombre: "TUTELA JUDICIAL EFECTIVA Y DEBIDO PROCESO", semestre: 3, prerequisitos: ["judi", "hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 3 },
  { id: "tm2", nombre: "TALLER DE MEMORIA 2", semestre: 3, prerequisitos: ["tm1"], creditos: 1 },
  { id: "ing3", nombre: "INGLÉS 3", semestre: 3, prerequisitos: ["ing2"], creditos: 2 },

  { id: "df", nombre: "DERECHOS FUNDAMENTALES", semestre: 4, prerequisitos: ["tchpcch", "hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 3 },
  { id: "bienes", nombre: "BIENES", semestre: 4, prerequisitos: ["nj", "fpdr", "hpt", "fpb", "hdam", "ffp"], creditos: 4 },
  { id: "dctp", nombre: "DISPOSICIONES COMUNES A TODO PROCEDIMIENTO", semestre: 4, prerequisitos: ["tjdp", "hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 4 },
  { id: "td", nombre: "TEORÍA DEL DELITO", semestre: 4, prerequisitos: ["tn", "hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 4 },
  { id: "ing4", nombre: "INGLÉS 4", semestre: 4, prerequisitos: ["ing3"], creditos: 2 },
  { id: "fofu 3", nombre: "FORMACION FUNDAMENTAL 3", semestre: 4, prerequisitos: [], creditos: 2 },
  { id: "fofu 4", nombre: "FORMACION FUNDAMENTAL 4", semestre: 4, prerequisitos: [], creditos: 2 },

  { id: "bda", nombre: "BASES DEL DERECHO ADMINISTRATIVO", semestre: 5, prerequisitos: ["dco", "df"], creditos: 3 },
  { id: "dit", nombre: "DERECHO INDIVIDUAL DEL TRABAJO", semestre: 5, prerequisitos: ["nj", "hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 3 },
  { id: "doe", nombre: "DERECHO Y ORDEN ECONÓMICO", semestre: 5, prerequisitos: ["df"], creditos: 3 },
  { id: "oc", nombre: "OBLIGACIONES Y CONTRATOS", semestre: 5, prerequisitos: ["nj", "bienes", "fpdr"], creditos: 4 },
  { id: "rp", nombre: "RESPONSABILIDAD PENAL", semestre: 5, prerequisitos: ["td"], creditos: 4 },
  { id: "tm3", nombre: "TALLER DE MEMORIA 3", semestre: 5, prerequisitos: ["tm2"], creditos: 1 },
  { id: "jdp", nombre: "JUICIO DECLARATIVO Y PRUEBA", semestre: 5, prerequisitos: ["dctp"], creditos: 3 },

  { id: "aae", nombre: "ACTUACIÓN DE LA ADMINISTRACION DEL ESTADO", semestre: 6, prerequisitos: ["bda", "nj"], creditos: 3 },
  { id: "dct", nombre: "DERECHO COLECTIVO DEL TRABAJO", semestre: 6, prerequisitos: ["dit"], creditos: 3 },
  { id: "rec", nombre: "REGULACIÓN ECONÓMICA Y DERECHO DE LA LIBRE COMPETENCIA", semestre: 6, prerequisitos: ["doe"], creditos: 3 },
  { id: "rc", nombre: "RESPONSABILIDAD CIVIL", semestre: 6, prerequisitos: ["oc", "nj", "bienes"], creditos: 4 },
  { id: "rp2", nombre: "RECURSOS PROCESALES", semestre: 6, prerequisitos: ["jdp"], creditos: 4 },
  { id: "dcii", nombre: "DELITO CONTRA INTERESES INDIVIDUALES", semestre: 6, prerequisitos: ["rp"], creditos: 4 },
  { id: "nfa", nombre: "ENSEÑANZA CLÍNICA DEL DERECHO", semestre: 6, prerequisitos: ["tjdp"], creditos: 2 },

  { id: "crae", nombre: "CONTROL Y RESPONSABILIDAD DE LA ADMINISTRACION DEL ESTADO", semestre: 7, prerequisitos: ["jdp", "aae", "rc"], creditos: 3 },
  { id: "com", nombre: "INTRODUCCIÓN AL DERECHO COMERCIAL Y ORGANIZACIÓN JURÍDICA DE LA EMPRESA", semestre: 7, prerequisitos: ["hpt", "fpb", "hdam", "ffp", "iedpc"], creditos: 3 },
  { id: "dmf", nombre: "DERECHO DE LOS MERCADOS FINANCIEROS", semestre: 7, prerequisitos: ["doe", "rec"], creditos: 3 },
  { id: "cp", nombre: "CONTRATOS EN PARTICULAR", semestre: 7, prerequisitos: ["rc", "oc", "nj", "bienes", "fpdr"], creditos: 4 },
  { id: "tm4", nombre: "TALLER DE MEMORIA 4", semestre: 7, prerequisitos: ["tm3"], creditos: 1 },
  { id: "etc", nombre: "EJECUCIÓN Y TUTELA CAUTELAR", semestre: 7, prerequisitos: ["rp2"], creditos: 3 },

  { id: "dpp", nombre: "DERECHO PROCESAL PENAL", semestre: 8, prerequisitos: ["rp2", "dcii"], creditos: 4 },
  { id: "dt", nombre: "DERECHO TRIBUTARIO", semestre: 8, prerequisitos: ["com"], creditos: 3 },
  { id: "sc", nombre: "SOCIEDADES DE CAPITAL", semestre: 8, prerequisitos: ["com", "cp"], creditos: 3 },
  { id: "toj", nombre: "TEORÍA DEL ORDENAMIENTO JURÍDICO", semestre: 8, prerequisitos: ["tn"], creditos: 3 },
  { id: "fam", nombre: "FAMILIA", semestre: 8, prerequisitos: ["cp", "rc", "oc", "nj", "bienes", "fpdr"], creditos: 4 },
  { id: "eclo", nombre: "ENSEÑANZA CLÍNICA LITIGACIÓN ORAL", semestre: 8, prerequisitos: ["jdp"], creditos: 2 },
  { id: "fofu 5", nombre: "FORMACIÓN FUNDAMENTAL 5", semestre: 8, prerequisitos: [], creditos: 2 },
  { id: "OP 1", nombre: "OPTATIVO 1", semestre: 8, prerequisitos: [], creditos: 3 },
  { id: "OP 2", nombre: "OPTATIVO 2", semestre: 8, prerequisitos: [], creditos: 3 },


  { id: "pasantia", nombre: "ENSEÑANZA CLÍNICA: PASANTÍA PROFESIONAL: 110 creditos mínimos", semestre: 9, prerequisitos: [], creditos: 3 },
  { id: "concursal", nombre: "DERECHO CONCURSAL Y DE SEGUROS", semestre: 9, prerequisitos: ["sc"], creditos: 3 },
  { id: "fdj", nombre: "FILOSOFÍA DEL DERECHO Y TEORÍAS DE LA JUSTICIA: 110 creditos mínimos", semestre: 9, prerequisitos: [], creditos: 3 },
  { id: "sucesiones", nombre: "SUCESIONES", semestre: 9, prerequisitos: ["fam"], creditos: 3 },
  { id: "etica", nombre: "ÉTICA PROFESIONAL: 110 créditos mínimos", semestre: 9, prerequisitos: [], creditos: 2 },
  { id: "memoria", nombre: "MEMORIA", semestre: 9, prerequisitos: ["dpp", "dt", "sc", "toj", "fam", "eclo", "tm1", "tm2", "tm3", "tm4"], creditos: 1 },

  { id: "seminario", nombre: "LICENCIATURA: 186 creditos mínimos", semestre: 10, prerequisitos: [], creditos: 20 },
];

const estado = {};
const contenedor = document.getElementById("malla-container");

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estado));
}

function cargarEstado() {
  const guardado = localStorage.getItem("estadoRamos");
  if (guardado) {
    const datos = JSON.parse(guardado);
    for (const id in datos) {
      estado[id] = datos[id];
    }
  }
}

function toggleRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (!estado[id] && (!ramo.prerequisitos.every(p => estado[p]) || !cumpleCreditos(id))) return;
  estado[id] = !estado[id];
  guardarEstado();
  renderMalla();

  if (estado[id]) {
  if (confettiTimeout) clearTimeout(confettiTimeout);

  if (estado[id]) {
  if (confettiTimeout) clearTimeout(confettiTimeout);

  if (confettiHabilitado) {
    confettiTimeout = setTimeout(() => {
      const confetti = document.getElementById("confetti");
      confetti.style.display = "block";
      setTimeout(() => {
        confetti.style.display = "none";
      }, 3000);
      confettiTimeout = null;
    }, 2000);
  }
}
}actualizarContadorCreditos();
}
 
 let confettiHabilitado = true;
function toggleConfetti() {
  confettiHabilitado = !confettiHabilitado;
  const btn = document.getElementById("confetti-toggle-btn");
  btn.textContent = confettiHabilitado ? "Desactivar confeti" : "Activar confeti";
}



function renderMalla() {
  contenedor.innerHTML = "";
  for (let s = 1; s <= 10; s++) {
    const semestre = document.createElement("div");
    semestre.className = "semestre"; // 👈 Añade esta línea
    semestre.innerHTML = `<h2>${s}° Semestre</h2>`;
    
    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "course";
      div.textContent = `${ramo.nombre} (${ramo.creditos || 0} cr)`;
      div.dataset.id = ramo.id;

      if (
        !estado[ramo.id] &&
        (!ramo.prerequisitos.every(p => estado[p]) || !cumpleCreditos(ramo.id))
      ) {
  div.classList.add("locked");
}

      if (estado[ramo.id]) {
        div.classList.add("approved");
      }

      div.onclick = () => toggleRamo(ramo.id);
      semestre.appendChild(div);
    });

    contenedor.appendChild(semestre);
  }
}

window.onload = () => {
  if (localStorage.getItem("modoOscuro") === "1") {
  document.body.classList.add("dark-mode");
  const btn = document.getElementById("darkmode-btn");
  if (btn) btn.textContent = "Modo claro";
  actualizarContadorCreditos();

}

  ramos.forEach(r => estado[r.id] = false);
  cargarEstado();
  renderMalla();
};

function resetearMalla() {
  localStorage.removeItem("estadoRamos");
  location.reload();
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeActivo = body.classList.toggle("dark-mode");
  localStorage.setItem("modoOscuro", darkModeActivo ? "1" : "0");

  const btn = document.getElementById("darkmode-btn");
  btn.textContent = darkModeActivo ? "Modo claro" : "Modo oscuro";
}


 let confettiTimeout = null;
function toggleConfetti() {
  confettiHabilitado = !confettiHabilitado;
  localStorage.setItem("confettiActivo", confettiHabilitado ? "1" : "0");

  const texto = document.getElementById("confetti-text");
  if (texto) {
    texto.textContent = confettiHabilitado ? "🚫 Desactivar ¡felicidades!" : "🎉 Activar ¡felicidades!";
  }
}

// video //

const darkMode = document.querySelector(".tema-oscuro");
const body = document.body;

darkMode.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
});

// cierre video //

function calcularCreditosAprobados() {
  let total = 0;
  for (const id in estado) {
    const ramo = ramos.find(r => r.id === id);
    if (estado[id] && ramo && ramo.creditos) {
      total += ramo.creditos;
    }
  }
  return total;
}

function actualizarContadorCreditos() {
  const total = calcularCreditosAprobados();
  const el = document.getElementById("creditos-aprobados");
  if (el) el.textContent = `Créditos aprobados: ${total}`;
}


function cumpleCreditos(id) {
  const creditosTotales = calcularCreditosAprobados();

  const requisitosCredito = {
    'seminario': 186,
    'pasantia': 110,
    'fdj': 110,
    'etica': 110,
    // agrega más si quieres
  };

  if (requisitosCredito[id]) {
    return creditosTotales >= requisitosCredito[id];
  }
  return true;
}
