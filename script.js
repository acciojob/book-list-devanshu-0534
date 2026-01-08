//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  if (title === "" || author === "" || isbn === "") {
	alert("Please fill all fields");
	return;
  }

  const row = document.createElement("tr");

  row.innerHTML = `
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete">X</button></td>
  `;

  bookList.appendChild(row);

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
	e.target.parentElement.parentElement.remove();
  }
});