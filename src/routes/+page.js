// src/routes/+page.js

// O SvelteKit injeta esse 'fetch' especial que é super rápido e funciona no servidor
export async function load({ fetch }) {
    
    // Fazemos a requisição para a nossa própria API
    const resposta = await fetch('/api/projetos');
    
    // Convertemos a resposta de volta para JavaScript
    const projetosDaAPI = await resposta.json();

    return {
        meusProjetos: projetosDaAPI
    };
}