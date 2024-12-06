document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('Email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email) {
            alert('Por favor, insira um e-mail.');
            return;
        }

        if (!password) {
            alert('Por favor, insira uma senha.');
            return;
        }

        // Exibir mensagem de login concluído
        alert('Login concluído com sucesso!');
        
        // Redirecionar para a página de início
        window.location.href = 'index.html';
    });
});
