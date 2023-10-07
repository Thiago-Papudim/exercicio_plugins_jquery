$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#cep').mask('00000-000', {
        placeholder: '58000-00'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: '<br>Por favor, insira o seu nome',
            email: '<br>Por favor, insira seu e-mail',
            telefone: '<br>Por favor, insira seu telefone',
            cpf: '<br>Por favor, insira seu CPF',
            endereco: '<br>Por favor, insira seu endereço',
            cep: '<br>Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})