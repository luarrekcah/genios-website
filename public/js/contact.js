$(document).ready(function () {
    (function ($) {
        "use strict";
        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "Escreva a resposta correta -_-");
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "vamos lá, você tem um nome, não é?",
                        minlength: "seu nome deve consistir em pelo menos 2 caracteres"
                    },
                    subject: {
                        required: "vamos lá, você tem um assunto, não é?",
                        minlength: "seu assunto deve consistir em pelo menos 4 caracteres"
                    },
                    number: {
                        required: "vamos lá, você tem um número, não é?",
                        minlength: "seu número deve consistir em pelo menos 5 caracteres"
                    },
                    email: {
                        required: "Sem email, sem mensagem"
                    },
                    message: {
                        required: "hum... sim, você tem que escrever algo para enviar este formulário.",
                        minlength: "Isso é tudo? Sério?"
                    }
                },
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "/contato",
                        success: function () {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                                $('.modal').modal('hide');
                                $('#success').modal('show');
                            })
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn()
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)
})