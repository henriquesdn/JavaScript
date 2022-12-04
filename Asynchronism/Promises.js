const userCreateController = new Promise((resolve, reject) => {
    const userName = "Henrique";

    if (typeof userName == "string") {
        resolve(userName);
    } else {
        reject("input inválido");
    }
});

userCreateController
    .then((resolveReturn) => {
        console.log(`Usuário ${resolveReturn} cadastrado com sucesso`);
    })
    .catch((rejectReturn) => {
        console.log(rejectReturn);
    });
