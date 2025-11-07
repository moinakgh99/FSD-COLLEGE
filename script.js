function addRow() {
  const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerHTML = "3";
  cell2.innerHTML = "Kabir";
  cell3.innerHTML = "Physics";
}
 
