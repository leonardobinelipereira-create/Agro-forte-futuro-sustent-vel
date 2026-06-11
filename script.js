document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', (event) => {
        // Impede a página de recarregar
        event.preventDefault();

        // Pega os dados digitados (pode ser usado para enviar para uma API no futuro)
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Log apenas para testar no console do navegador
        console.log(`Mensagem recebida de: ${nome} (${email})`);

        // Limpa o formulário
        form.reset();

        // Mostra a mensagem de sucesso
        mensagemSucesso.classList.remove('escondido');

        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            mensagemSucesso.classList.add('escondido');
        }, 5000);
    });
});
