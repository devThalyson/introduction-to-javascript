var divElement = document.querySelector('#app');

var inputElement = document.querySelector('input');

var buttonElement = document.querySelector('button');
buttonElement.onclick = fetchUserRepos;

var listElement = document.querySelector('ul');

var pElement = document.createElement('p');


function getGithubUser(username) {
    renderLoading();
    axios.get('https://api.github.com/users/' + username + '' + '/repos')
        .then(function (response) {
            pElement.innerHTML = '';
            renderRepositorys(response.data);
        })
        .catch(function (error) {
            listElement.innerHTML = '';
            pElement.textContent = 'Erro ao carregar repositórios';
            divElement.appendChild(
                pElement,
            );
        });



}

function fetchUserRepos() {
    var username = inputElement.value;
    getGithubUser(username);

    inputElement.value = '';
}

function renderLoading() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderRepositorys(repositorys) {
    listElement.innerHTML = '';
    for (repository of repositorys) {
        var repositoryElement = document.createElement('li');
        var repositoryText = document.createTextNode(repository.name);

        repositoryElement.appendChild(repositoryText);


        listElement.appendChild(repositoryElement);
    }
}