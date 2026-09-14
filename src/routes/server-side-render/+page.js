// src/routes/+page.js

export function load() {
    // Aqui você faria o seu fetch() para a API do Notion no futuro.
    // O que quer que você retorne aqui, será injetado na página!
    
    const projetosDoBanco = [
        { id: 1, titulo: "Sinergia (Análise de Exercício)", stack: "Python", status: "Em Desenvolvimento" },
        { id: 2, titulo: "Gerador de Senhas", stack: "JS", status: "Finalizado" },
        { id: 3, titulo: "Automação Telegram", stack: "Python", status: "Finalizado" }
    ];

    // Precisamos retornar um objeto. Vamos retornar os projetos.
    return {
        meusProjetos: projetosDoBanco
    };
}