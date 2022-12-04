function userCreateController(userName) {
    return new Promise((resolve, reject) => {
        if (typeof userName == "string") {
            resolve({
                message: `Usuário ${userName} cadastrado com sucesso!`,
                statusCode: 200,
            });
        } else {
            reject({
                message: "Nome de usuário inválido",
                statusCode: 400,
            });
        }
    });
}

function getResponseStatusDescription(statusCode) {
    return new Promise((resolve, reject) => {
        switch (statusCode) {
            case 200:
                resolve("200: OK");
            case 400:
                resolve("400: Bad Request");
            default:
                reject("Invalid Code");
        }
    });
}

// userCreateController("Henrique")
//     .then((res) => {
//         console.log(res.message);
//         return getResponseStatusDescription(res.statusCode);
//     })
//     .then((res) => console.log(res))
//     .catch((err) => {
//         console.log(err.message);
//     });

async function myAsyncFunction() {
    try {
        const controllerResponse = await userCreateController("Henrique");
        console.log(controllerResponse.message);

        const responseDesc = await getResponseStatusDescription(controllerResponse.statusCode);
        console.log(responseDesc);
    } catch (err) {
        console.log(err.message);
    }
}

myAsyncFunction();
