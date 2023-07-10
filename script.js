function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteCharacter() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  
  function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
      var result = eval(displayValue);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
