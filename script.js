// Lista de ramos con sus prerrequisitos
const ramos = [
  { id: "EIE142", nombre: "INTRODUCCION A LA INGENIERIA ELECTRICA Y ELECTRONICA", semestre: 1, prerequisitos: [], creditos: 3  },
  { id: "FIN100-11", nombre: "DESARROLLO INTEGRAL Y COMUNICACION PARA INGENIERIA", semestre: 1, prerequisitos: [], creditos: 3 },
  { id: "FIS1121", nombre: "INTRODUCCION A LA FISICA", semestre: 1, prerequisitos: [], creditos: 5  },
  { id: "MAT1001", nombre: "FUNDAMENTOS DE MATEMATICAS PARA INGENIERIA", semestre: 1, prerequisitos: [], creditos: 6 },
  { id: "ICR010", nombre: "ANTROPOLOGIA CRISTIANA", semestre: 1, prerequisitos: [], creditos: 2 },

  { id: "FIS1001", nombre: "FISICA MECANICA", semestre: 2, prerequisitos: ["MAT1001"], creditos: 5 },
  { id: "MAT1002", nombre: "CALCULO DIFERENCIAL E INTEGRAL", semestre: 2, prerequisitos: ["MAT1001"], creditos: 6 },
  { id: "MAT1004", nombre: "ALGEBRA LINEAL", semestre: 2, prerequisitos: ["MAT1001"], creditos: 4 },
  { id: "QUI1140", nombre: "FUNDAMENTOS DE QUIMICA", semestre: 2, prerequisitos: [], creditos: 4 },

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

  { id: "EIE310", nombre: "ANALISIS Y PROCESAMIENTO DE SEÑALES", semestre: 5, prerequisitos: ["EIE275"], creditos: 4 },
  { id: "EIE326", nombre: "TEORIA DE CIRCUITOS 2", semestre: 5, prerequisitos: ["EIE274","EIE280"], creditos: 4 },
  { id: "EIE348", nombre: "SISTEMAS DIGITALES", semestre: 5, prerequisitos: ["MAT1004"], creditos: 4},
  { id: "EIE375", nombre: "MODELADO Y SIMULACION DE SISTEMAS DINAMICOS", semestre: 5, prerequisitos: ["EIE275"], creditos: 4 },
  { id: "ING9001", nombre: "INGLES 1", semestre: 5, prerequisitos: [], creditos: 2 },

  { id: "EIE315", nombre: "CONTROL AUTOMATICO", semestre: 6, prerequisitos: ["EIE275"], creditos: 4 },
  { id: "EIE316", nombre: "FUNDAMENTOS DE MAQUINAS ELECTRICAS", semestre: 6, prerequisitos: ["EIE267"], creditos: 4 },
  { id: "EIE374", nombre: "CIRCUITOS ELECTRONICOS", semestre: 6, prerequisitos: ["EIE280"], creditos: 4 },
  { id: "EIE439", nombre: "ESTRUCTURA DE COMPUTADORES", semestre: 6, prerequisitos: ["EIE348"], creditos: 4 },
  { id: "ING9002", nombre: "INGLES 2", semestre: 6, prerequisitos: ["ING9001"], creditos: 2 },

  { id: "EIE341", nombre: "LABORATORIO DE CONTROL", semestre: 7, prerequisitos: ["EIE315"], creditos: 4 },
  { id: "EIE376", nombre: "CIRCUITOS ELECTRONICOS 2", semestre: 7, prerequisitos: ["EIE374"], creditos: 4 },
  { id: "EIE430", nombre: "ELECTRONICA DE POTENCIA", semestre: 7, prerequisitos: ["EIE374"], creditos: 4 },
  { id: "EIE434", nombre: "PROGRAMACION 2", semestre: 7, prerequisitos: ["EIE439"], creditos: 4 },
  { id: "ING9003", nombre: "INGLES 3", semestre: 7, prerequisitos: ["ING9002"], creditos: 2 },

  { id: "EIE317", nombre: "AUTOMATIZACION INDUSTRIAL", semestre: 8, prerequisitos: ["EIE315"], creditos: 4 },
  { id: "EIE420", nombre: "TELECOMUNICACIONES Y PROTOCOLOS", semestre: 8, prerequisitos: ["EIE310"], creditos: 4 },
  { id: "EIE437", nombre: "LABORATORIO DE SISTEMAS ELECTRONICOS", semestre: 8, prerequisitos: ["EIE376"], creditos: 4 },
  { id: "EIE438", nombre: "APLICACIONES DE CONVERSION ELECTRONICA", semestre: 8, prerequisitos: ["EIE430"], creditos: 4 },
  { id: "EIE453", nombre: "INNOVACION Y EMPRENDIMIENTO", semestre: 8, prerequisitos: ["EIE275", "EIE274", "EIE267", "EIE280", "EIE200"], creditos: 2 },
  { id: "ING9004", nombre: "INGLES 4", semestre: 8, prerequisitos: ["ING9003"], creditos: 2 },

  { id: "EIE303", nombre: "REDES DE COMPUTADORES", semestre: 9, prerequisitos: ["EIE439"], creditos: 4 },
  { id: "EIE400", nombre: "INGENIERIA ECONOMICA Y FORMULACION DE PROYECTOS", semestre: 9, prerequisitos: ["EIE275", "EIE274", "EIE267", "EIE280", "EIE200"], creditos: 4 },
  { id: "EII509", nombre: "GESTION Y ADMINISTRACION", semestre: 9, prerequisitos: ["EIE315", "EIE439", "EIE374", "EIE316", "ING9002"], creditos: 4 },

  { id: "DER1170", nombre: "LEGISLACION, NORMATIVA SOCIAL, LABORAL Y AMBIENTAL", semestre: 10, prerequisitos: ["EIE315", "EIE439", "EIE374", "EIE316", "ING9002"], creditos: 4 },
  { id: "EIE620", nombre: "SEMINARIO DE PROYECTOS: requiere practica realizada", semestre: 10, prerequisitos: ["EIE317", "EIE420", "EIE437", "EIE438", "ING9004"], creditos: 8 },

  { id: "EIE626", nombre: "PROYECTO DE TITULACION", semestre: 11, prerequisitos: ["EIE620"], creditos: 16 }
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
  for (let s = 1; s <= 11; s++) {
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
