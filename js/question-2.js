const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c3a78d5ab696462eb8c76373bd15ece2";

const resultsContainer = document.querySelector(".results");

async function callGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.results;


        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">
            <h4>Name: ${facts[i].name}</h3>
            <p>Rating: ${facts[i].rating}</p>
            <p>Tags: ${facts[i].tags.length}</p>
            </div>`;
        }
    }

    catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }

};

callGames(); 