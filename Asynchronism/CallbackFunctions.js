function getAll(table) {
    console.log(`Retornando todos os ${table}...`);
}

function getById(table, id) {
    console.log(`Retornando o ${table} de id ${id}...`);
}

function requestOnApi(method, table, id) {
    method(table, id);

    if (method && table) {
        console.log("Requisição bem sucedida");
    } else {
        console.log("Erro interno do servidor");
    }
}

requestOnApi(getAll, "usuários");
