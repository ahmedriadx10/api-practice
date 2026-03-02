const quotesLoad = (quotes) => {
  const quotesCardParent = document.getElementById("quotes-container");
  quotes.forEach((x) => {
    const { quote, author } = x;

    const quoteDiv = document.createElement("div");

    quoteDiv.innerHTML = `
<h2>"${quote}"</h2>
<p>${author} ${author.includes('(R.A)') ? '<i class="fa-solid fa-heart text-red-600"></i>' : ''}</p>

`;

    quoteDiv.classList.add("quote-card");
    quotesCardParent.appendChild(quoteDiv);
  });
};

/**
 * {
    "id": 18,
    "quote": "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
    "author": "Nelson Mandela"
}
 */

const getDataUsingApi = () => {
  const url = "https://dummyjson.com/quotes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return quotesLoad(data.quotes);
    });
};

getDataUsingApi();
