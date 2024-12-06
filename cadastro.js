document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const newUsername = document.getElementById('newUsername');
    const newPassword = document.getElementById('newPassword');
    const newConfirmPassword = document.getElementById('newConfirmPassword');
    const newEmail = document.getElementById('newEmail');
    const errorMessage = document.getElementById('errorMessage');
    const registerMessage = document.getElementById('registerMessage');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = newUsername.value.trim();
        const password = newPassword.value.trim();
        const confirmPassword = newConfirmPassword.value.trim();
        const email = newEmail.value.trim();

        if (!username || !password || !confirmPassword || !email) {
            errorMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'As senhas não coincidem.';
            return;
        }

        // Limpar mensagens de erro
        errorMessage.textContent = '';

        // Exibir mensagem de sucesso
        registerMessage.textContent = 'Cadastro realizado com sucesso!';
        
        // Redirecionar para a página de início
        window.location.href = 'index.html';
    });
});
  