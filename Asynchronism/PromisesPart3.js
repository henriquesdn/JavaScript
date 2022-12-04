const unorderedList = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        return data.map((item) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${item.name} (${item.username})`;
            unorderedList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.log(`ERROR - ${error}`);
    });
