
let income = 0, expense = 0;

document.getElementById("transaction-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const desc = document.getElementById("desc").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!date || !desc || !category || isNaN(amount)) {
    alert("Please fill all fields correctly");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${date} - ${desc} (${category})</span>
    <span style="color:${type==='income'?'green':'red'}">${amount} ₹</span>
  `;
  document.getElementById("list").appendChild(li);

  if (type === "income") {
    income += amount;
  } else {
    expense += amount;
  }

  document.getElementById("income").innerText = income;
  document.getElementById("expense").innerText = expense;
  document.getElementById("balance").innerText = income - expense;

  // Reset
  document.getElementById("transaction-form").reset();
});
