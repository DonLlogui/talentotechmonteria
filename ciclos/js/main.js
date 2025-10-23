function generarListas() {
  // Obtener el valor del input
  const numero = parseInt(document.getElementById('numero').value);

  // Validar que sea un número positivo
  if (isNaN(numero) || numero < 1) {
    alert('Por favor, ingresa un número válido mayor o igual a 1.');
    return;
  }

  // Limpiar listas anteriores
  document.getElementById('lista-pares').innerHTML = '';
  document.getElementById('lista-impares').innerHTML = '';

  // --- CICLO FOR: Números pares ---
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      const li = document.createElement('li');
      li.textContent = i;
      document.getElementById('lista-pares').appendChild(li);
    }
  }

  // --- CICLO WHILE: Números impares ---
  let j = 1;
  while (j <= numero) {
    if (j % 2 !== 0) {
      const li = document.createElement('li');
      li.textContent = j;
      document.getElementById('lista-impares').appendChild(li);
    }
    j++;
  }
}