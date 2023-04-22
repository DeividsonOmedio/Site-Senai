var cursosPassado = ""
var cursosPassados = localStorage.getItem("passarCursos")
if (cursosPassados != null) {
    cursosPassado = cursosPassados.split(',')
    adcionarSelecionados(cursosPassado)
}
console.log(cursosPassado)

function adcionarSelecionados(sele) {
    var listaCursosSelecionados = document.getElementById("cursosSelecionados")

    var newList = sele.forEach(function (e) {
        listaCursosSelecionados.innerHTML += `
           <li>${e}</li>   
           `

    })
}

//Validação do formulário

var form = document.querySelector("#form")
var nameInput = document.getElementById("validationCustom01")
var surnameInput = document.getElementById("validationCustom02")
var emailInput = document.getElementById("validationCustomUsername")
var addressInput = document.getElementById("validationCustom03")
var cityInput = document.getElementById("validationCustom035")
var countryInput = document.getElementById("validationCustom04")
var stateInput = document.getElementById("validationCustom05")
var zipInput = document.getElementById("validationCustom06")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (nameInput.value === "Nome" || nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return
    }
    if (surnameInput.value === "Sobrenome" || surnameInput.value === "") {
        alert("Por favor, preencha o seu sobrenome")
        return
    }
    
    if ( emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha cum um email valido")
        

        return
    }
    if (addressInput.value === "") {
        alert("Por favor, preencha seu endereço")
        return
    }
    if (countryInput.value === "") {
        alert("Por favor, insira sua cidade")
        return
    }
    if (cityInput.value === "") {
        alert("Por favor, insira sua cidade")
        return
    }
    if (stateInput.value === "") {
        alert("Por favor, insira seu estado")
        return
    }
    if (zipInput.value === "") {
        alert("Por favor, preencha seu CEP")
        return
    }

    form.submit()
    console.log(form)
    
    
})




    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        
        document.getElementById('validationCustom035').value=("");
        document.getElementById('validationCustom05').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        
        document.getElementById('validationCustom035').value=(conteudo.localidade);
        document.getElementById('validationCustom05').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');



    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            
            document.getElementById('validationCustom035').value="...";
            document.getElementById('validationCustom05').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


// se todos os campos estiverem preenchidos


//form.submit();;

// função que válida email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false
}

// função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    }
    return false
}