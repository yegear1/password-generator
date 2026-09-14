// src/routes/api/projetos/+server.js
import { json } from '@sveltejs/kit';

export function GET() {
    // Aqui no futuro é onde você usaria sua Chave Secreta do Notion de forma segura.
    console.log("Isso só aparece no terminal do seu PC/Servidor, nunca no navegador!");

    const projetosDoBanco = [
        { id: 1, titulo: "Sinergia", stack: "Python", status: "Em Desenvolvimento" },
        { id: 2, titulo: "Gerador de Senhas", stack: "JS", status: "Finalizado" },
        { id: 3, titulo: "Automação Telegram", stack: "Python", status: "Finalizado" },
        { id: 4, titulo: "Novo Projeto Secreto", stack: "SvelteKit", status: "Em Desenvolvimento" } // Adicionamos um novo!
    ];

    const todasRotas = [
        { id: 1, titulo: "Sinergia", stack: "Python", status: "Em Desenvolvimento" },
        { id: 2, titulo: "Gerador de Senhas", stack: "JS", status: "Finalizado" },
        { id: 3, titulo: "Automação Telegram", stack: "Python", status: "Finalizado" },
        { id: 4, titulo: "Novo Projeto Secreto", stack: "SvelteKit", status: "Em Desenvolvimento" } // Adicionamos um novo!
    ];

    // O helper 'json()' converte nossa lista em uma resposta HTTP profissional
    return json(projetosDoBanco);
}