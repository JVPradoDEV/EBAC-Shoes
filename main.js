$(document).ready(function(){
    $("#tel").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo."
        },
        submitHandler: function(form) {
            refresh
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos!`)
            }
        }
    })
})