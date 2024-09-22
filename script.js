function calculate() 
{
  
  const price1 = parseFloat(document.getElementById('price1').value);
  const quantity1 = parseFloat(document.getElementById('quantity1').value);
  const price2 = parseFloat(document.getElementById('price2').value);
  const quantity2 = parseFloat(document.getElementById('quantity2').value);
  const price3 = parseFloat(document.getElementById('price3').value);
  const quantity3 = parseFloat(document.getElementById('quantity3').value);
  const price4 = parseFloat(document.getElementById('price4').value);
  const quantity4 = parseFloat(document.getElementById('quantity4').value);
  const price5 = parseFloat(document.getElementById('price5').value);
  const quantity5 = parseFloat(document.getElementById('quantity5').value);

  const total1 = price1 * quantity1;
  const total2 = price2 * quantity2;
  const total3 = price3 * quantity3;
  const total4 = price4 * quantity4;
  const total5 = price5 * quantity5;

  const totalValue = total1 + total2 + total3 + total4 + total5;
  const totalUnits = quantity1 + quantity2 + quantity3 + quantity4 + quantity5;
  const avgCost = totalValue / totalUnits;

  document.getElementById('total1').value = total1;
  document.getElementById('total2').value = total2;
  document.getElementById('total3').value = total3;
  document.getElementById('total4').value = total4;
  document.getElementById('total5').value = total5;
  document.getElementById('totalValue').value = totalValue;
  document.getElementById('totalUnits').value = totalUnits;
  document.getElementById('avgCost').value = avgCost.toFixed(2);

}

function reset() 
{
  document.getElementById('price1').value = '';
  document.getElementById('quantity1').value = '';
  document.getElementById('price2').value = '';
  document.getElementById('quantity2').value = '';
  document.getElementById('price3').value = '';
  document.getElementById('quantity3').value = '';
  document.getElementById('price4').value = '';
  document.getElementById('quantity4').value = '';
  document.getElementById('price5').value = '';
  document.getElementById('quantity5').value = '';
  document.getElementById('total1').value = '';
  document.getElementById('total2').value = '';
  document.getElementById('total3').value = '';
  document.getElementById('total4').value = '';
  document.getElementById('total5').value = '';
  document.getElementById('totalValue').value = '';
  document.getElementById('totalUnits').value = '';
  document.getElementById('avgCost').value = '';
}
