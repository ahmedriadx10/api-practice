const dataLoad = (dataContainer) => {
  const todosContainer = document.getElementById("todos-container");
  todosContainer.innerHTML = "";

  dataContainer.forEach((d) => {
    const { title, completed } = d;
    console.log(d);

    const todo = document.createElement("div");

    todo.innerHTML = `

<span>${completed ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle-check"></i>'}</span>
<p class="">${title}</p>
`;

    todo.setAttribute(
      "class",
      "flex gap-5 items-center p-4 rounded-lg shadow-lg border border-gray-300 text-justify",
    );

    todosContainer.appendChild(todo);
  });
};

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => dataLoad(data))
    .catch((error) => console.log(error));
};

getData();
