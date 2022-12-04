// Transformar o retorno de requestApi em function é necessário porque as funções setTimeout e setInterval esperam uma função como parâmetro e não um undefined.
function requestOnApi(method) {
    return function () {
        console.log(`${method} no banco de dados realizado com sucesso!`);
    };
}

setTimeout(requestOnApi("Update"), 5000);

setInterval(requestOnApi("Get"), 2000);

setInterval(() => {
    console.log("Backup diário concluído");
}, 10000);
