// Lista de ramos con sus prerrequisitos
const ramos = [
  { id: "EIE142", nombre: "INTRODUCCION A LA INGENIERIA ELECTRICA Y ELECTRONICA", semestre: 1, prerequisitos: [], creditos: 3  },
  { id: "FIN100-11", nombre: "DESARROLLO INTEGRAL Y COMUNICACION PARA INGENIERIA", semestre: 1, prerequisitos: [], creditos: 3 },
  { id: "FIS1121", nombre: "INTRODUCCION A LA FISICA", semestre: 1, prerequisitos: [], creditos: 5  },
  { id: "MAT1001", nombre: "FUNDAMENTOS DE MATEMATICAS PARA INGENIERIA", semestre: 1, prerequisitos: [], creditos: 6 },

  { id: "FIS1001", nombre: "FISICA MECANICA", semestre: 2, prerequisitos: ["MAT1001"], creditos: 5 },
  { id: "MAT1002", nombre: "CALCULO DIFERENCIAL E INTEGRAL", semestre: 2, prerequisitos: ["MAT1001"], creditos: 6 },
  { id: "MAT1004", nombre: "ALGEBRA LINEAL", semestre: 2, prerequisitos: ["MAT1001"], creditos: 4 },
  { id: "QUI1140", nombre: "FUNDAMENTOS DE QUIMICA", semestre: 2, prerequisitos: [""], creditos: 4 },

  { id: "EIE100", nombre: "PROGRAMACION", semestre: 3, prerequisitos: [], creditos: 4 },
  { id: "EIE211", nombre: "ESTADISTICA Y PROBABILIDADES PARA INGENIERIA", semestre: 3, prerequisitos: ["MAT1002"], creditos: 3 },
  { id: "FIS1141", nombre: "FISICA GENERAL: ONDAS Y TERMODINAMICA", semestre: 3, prerequisitos: ["FIS1001"], creditos: 3 },
  { id: "MAT1003", nombre: "CALCULO EN VARIAS VARIABLES", semestre: 3, prerequisitos: ["MAT1002"], creditos: 4 },
  { id: "MAT1005", nombre: "ECUACIONES DIFERENCIALES", semestre: 3, prerequisitos: ["MAT1004"], creditos: 4 },

  { id: "EIE200", nombre: "PROGRAMACION NUMERICA", semestre: 4, prerequisitos: ["EIE100"], creditos: 3 },
  { id: "EIE267", nombre: "ELECTROMAGNETISMO", semestre: 4, prerequisitos: ["MAT1003"], creditos: 4 },
  { id: "EIE274", nombre: "LABORATORIO DE MEDICIONES", semestre: 4, prerequisitos: ["MAT1005"], creditos: 3 },
  { id: "EIE275", nombre: "SEÑALES Y SISTEMAS", semestre: 4, prerequisitos: ["MAT1003"], creditos: 4 },
  { id: "EIE280", nombre: "TEORIA DE CIRCUITOS 1", semestre: 4, prerequisitos: ["MAT1005"], creditos: 4 },

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
