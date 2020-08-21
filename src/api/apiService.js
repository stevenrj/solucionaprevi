import axios from 'axios';

const API_URL = 'https://solucionapreviapi.azurewebsites.net/api';

async function insertProblema(problema) {
  const response = await axios.post(`${API_URL}/problemas`, problema);
  return response.data.IdProblema;
}

async function insertIdeia(ideia) {
  const response = await axios.post(`${API_URL}/ideias`, ideia);
  return response.data.IdIdeia;
}

async function insertComentario(comentario) {
  const response = await axios.post(`${API_URL}/comentarios`, comentario);
  return response.data.IdComentario;
}

async function getAllComentarios() {
  const response = await axios.get(`${API_URL}/comentarios`);
  return response.data;
}

async function getAllIdeias() {
  const response = await axios.get(`${API_URL}/ideias`);
  return response.data;
}

async function getIdeia(id) {
  const response = await axios.get(`${API_URL}/ideias/${id}`);
  return response.data;
}

async function getAllProblemas() {
  const response = await axios.get(`${API_URL}/problemas`);
  return response.data;
}

export {
  insertProblema,
  insertIdeia,
  getAllIdeias,
  getAllProblemas,
  getIdeia,
  insertComentario,
  getAllComentarios,
};
