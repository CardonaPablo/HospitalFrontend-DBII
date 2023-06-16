// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
	apiKey: "AIzaSyDB7qoDsIoQElNJhfkxvujP4jJHnrbrEF0",
	authDomain: "hospital-api-db2.firebaseapp.com",
	projectId: "hospital-api-db2",
	storageBucket: "hospital-api-db2.appspot.com",
	messagingSenderId: "877191925042",
	appId: "1:877191925042:web:e8caa1e5496e35d177db2b"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function createEntity(name, data) {
	const newDoctor = await addDoc(collection(db, name), data);
}

function setButtonListeners() {
	const doctorButton = document.getElementById('doctor-button');
	const consultaButton = document.getElementById('consulta-button');
	const pacienteButton = document.getElementById('paciente-button');
	const estudiosButton = document.getElementById('estudios-button');

	console.log('Setting listeners');

	doctorButton.addEventListener('click', function(e) {
		e.preventDefault();
		buildDoctor();
	})

	consultaButton.addEventListener('click', function(e) {
		e.preventDefault();
		buildConsulta();
	})

	pacienteButton.addEventListener('click', function(e) {
		e.preventDefault();
		buildPaciente();
	})

	estudiosButton.addEventListener('click', function(e) {
		e.preventDefault();
		buildEstudios();
	})

}

function buildDoctor() {

	const doctorForm = document.getElementById('doctor-form');
	const nombre = doctorForm.elements.name.value;
	const cedula = doctorForm.elements.cedula.value;
	const especialidad = doctorForm.elements.especialidad.value;
	
	createEntity('doctores', {
		nombre: nombre,
		cedula: cedula,
		especialidad: especialidad
	});
}

function buildConsulta() {
	const consultaForm = document.getElementById('consulta-form');
	const paciente = consultaForm.elements.paciente.value;
	const diagnostico = consultaForm.elements.diagnostico.value;
	const fecha = consultaForm.elements.fecha.value;
	const tratamiento = consultaForm.elements.tratamiento.value;

	createEntity('consultas', {
		paciente: paciente,
		diagnostico: diagnostico,
		fecha: fecha,
		tratamiento: tratamiento
	});
}

function buildPaciente() {
	const pacienteForm = document.getElementById('paciente-form');
	const nombre = pacienteForm.elements.name.value;
	const peso = pacienteForm.elements.peso.value;
	const edad = pacienteForm.elements.edad.value;

	createEntity('pacientes', {
		nombre: nombre,
		peso: peso,
		edad: edad
	});
}

function buildEstudios() {
	const estudiosForm = document.getElementById('estudios-form');
	const descripcion = estudiosForm.elements.descripcion.value;
	const fecha = estudiosForm.elements.fecha.value;
	const tipo = estudiosForm.elements.tipo.value;

	createEntity('estudios', {
		descripcion: descripcion,
		fecha: fecha,
		tipo: tipo
	});
}

setButtonListeners();