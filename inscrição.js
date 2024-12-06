document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const dataNascimento = document.getElementById('dataNascimento').value.trim();
        const genero = document.querySelector('input[name="genero"]:checked')?.value;
        const endereco = document.getElementById('endereco').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const email = document.getElementById('email').value.trim();
        const modalidade = document.getElementById('modalidade').value;
        const experiencia = document.getElementById('experiencia').value;
        const condicaoSaude = document.querySelector('input[name="condicaoSaude"]:checked')?.value;
        const aptidao = document.querySelector('input[name="aptidao"]:checked')?.value;
        const autorizacao = document.getElementById('autorizacao').value.trim();

        if (!nome || !dataNascimento || !genero || !endereco || !telefone || !email || !modalidade || !experiencia || !condicaoSaude || !aptidao) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        alert('Inscrição enviada com sucesso!');
        window.location.href = 'index.html';
    });
});

