<script>
    // 1. A MÁGICA DO VITE: Pede para o Vite achar todos os arquivos de página
    const arquivos = import.meta.glob('/src/routes/**/+page.svelte');

    // 2. Transforma o caminho do arquivo em uma URL limpa para o navegador
    let rotasNavegaveis = Object.keys(arquivos).map(caminho => {
        let url = caminho
            .replace('/src/routes', '')    // Remove a pasta raiz das rotas
            .replace('/+page.svelte', '')  // Remove o nome do arquivo
            .replace(/\/\([^)]+\)/g, '');  // Remove pastas de grupo do SvelteKit, ex: /(app)

        return url === '' ? '/' : url;     // Se a string ficou vazia, significa que é a página inicial (/)
    });

    // 3. (IMPORTANTE) Remove rotas dinâmicas que exigem parâmetros
    // Ex: /projetos/[id] não pode ser um botão clicável genérico
    rotasNavegaveis = rotasNavegaveis.filter(rota => !rota.includes('['));
</script>

<div style="background: #1e1e1e; padding: 20px; border-radius: 8px;">
    <h3 style="color: white; margin-top: 0;">Menu Dinâmico</h3>
    
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        {#each rotasNavegaveis as rota}
            <a 
                href={rota} 
                style="padding: 10px 15px; background: #ff3e00; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;"
            >
                {rota === '/' ? '🏠 Home' : rota}
            </a>
        {/each}
    </div>
</div>