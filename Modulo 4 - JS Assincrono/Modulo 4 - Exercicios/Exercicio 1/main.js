function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                if (idade >= 18) {
                    resolve('Maior de idade');
                } else {
                    reject('Menor de idade');
                }
            }, 4000
        );
    });
}


checaIdade(15)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });



