const checkRequirements = () => {
  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (isNaN(age) || isNaN(height)) {
    showResult('Por favor, introduce valores válidos', 'error');
    return;
  }
  
  const ageValid = age >= 16 && age <= 60;
  const heightValid = height >= 1.40 && height <= 1.90;
  
  if (ageValid && heightValid) {
    showResult('✅ Puedes subir a la atracción', 'success');
  } else {
    showResult('❌ No cumples los requisitos', 'error');
  }
};

const showResult = (message, type) => {
  const result = document.getElementById('result');
  result.textContent = message;
  result.className = `result-message ${type}`;
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('check-btn').addEventListener('click', checkRequirements);
});