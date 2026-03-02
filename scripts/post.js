const getData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => response.json())
    .then((x) => {
      console.log(x);
      return dataLoad(x);
    });
};

const dataLoad = (dataContainer) => {
  const postContainer = document.getElementById("post-container");
  dataContainer.forEach((post) => {
    const { title, body } = post;
    const div = document.createElement("div");
    div.innerHTML = `

<h2 class="font-bold text-xl mb-2">${title}</h2>

<p class="text-[16px] text-gray-600">${body}</p>
`;

    div.setAttribute(
      "class",
      "post-card border p-3 rounded-lg shadow-lg border-gray-200 text-justify",
    );

    postContainer.appendChild(div);
  });
};

getData();
