function lanzarDados() {
  const numLanzamientos = parseInt(document.getElementById('lanzamientos').value);

  // Validación
  if (isNaN(numLanzamientos) || numLanzamientos < 1 || numLanzamientos > 100) {
    alert('Por favor, ingresa un número entre 1 y 100.');
    return;
  }

  const resultados = [];

  // 🔁 CICLO FOR: Simular los lanzamientos
  for (let i = 0; i < numLanzamientos; i++) {
    const tirada = Math.floor(Math.random() * 6) + 1; // Número del 1 al 6
    resultados.push(tirada);
  }

  // Mostrar resultados
  document.getElementById('lista-resultados').textContent = 
    'Resultados: ' + resultados.join(', ');

  // 🔁 CICLO WHILE: Contar cuántas veces salió el 6
  let contadorSeis = 0;
  let indice = 0;

  while (indice < resultados.length) {
    if (resultados[indice] === 6) {
      contadorSeis++;
    }
    indice++;
  }

  // Mostrar total de seises
  document.getElementById('total-seis').textContent = 
    `¡El número 6 salió ${contadorSeis} veces!`;
}