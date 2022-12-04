function userCreateController(userName) {
    return new Promise((resolve, reject) => {
        if (typeof userName == "string") {
            resolve(userName);
        } else {
            reject("Nome de usuário inválido");
        }
    });
}

userCreateController("Henrique")
    .then((resolve) => {
        console.log(`Cadastrando ${resolve} no banco de dados...`);
        return { name: resolve };
    })
    .then((resolve) => {
        console.log("Cadastrado com sucesso!");
        console.log(resolve);
    })
    .catch((reject) => console.log(reject));
