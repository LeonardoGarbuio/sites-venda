document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const successMessage = document.getElementById('successMessage'); // Recupera a mensagem de sucesso

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        // Limpa mensagens de erro anteriores
        clearErrorMessages();

        // Variável de controle para verificar se todos os campos estão válidos
        let isValid = true;

        // Validação do campo de email
        if (!email) {
            showErrorMessage('emailError', 'O campo de email é obrigatório.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showErrorMessage('emailError', 'Por favor, insira um email válido.');
            isValid = false;
        }

        // Validação do campo de senha
        if (!senha) {
            showErrorMessage('senhaError', 'O campo de senha é obrigatório.');
            isValid = false;
        } else if (senha.length < 6) {
            showErrorMessage('senhaError', 'A senha deve ter pelo menos 6 caracteres.');
            isValid = false;
        }

        // Validação do campo de confirmação de senha
        if (!confirmarSenha) {
            showErrorMessage('confirmarSenhaError', 'Por favor, confirme sua senha.');
            isValid = false;
        } else if (senha !== confirmarSenha) {
            showErrorMessage('confirmarSenhaError', 'As senhas não coincidem.');
            isValid = false;
        }

        // Se todas as validações passarem
        if (isValid) {
            // Mostra a mensagem de sucesso
            successMessage.textContent = 'Formulário enviado com sucesso!';
            successMessage.style.display = 'block';

            // Reseta o formulário
            emailForm.reset();

            // Oculta a mensagem de sucesso após 3 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });

    // Função para validar o formato do email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Função para exibir mensagens de erro
    function showErrorMessage(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Função para limpar mensagens de erro
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.style.display = 'none';
            element.textContent = ''; // Garante que o texto do erro seja limpo
        });
    }
});















