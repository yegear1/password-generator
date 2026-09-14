<script>
    import { onMount } from 'svelte';
    import ProjectCard from '../lib/components/ProjectCard.svelte';
    import { configGlobal } from '../lib/config.svelte.js'; // Ajuste o caminho conforme sua pasta

    let projetos = $state([]);
    let carregando = $state(true);

    onMount(() => {
    // Simulando um atraso de internet de 2 segundos
    setTimeout(() => {
        projetos = [
            { id: 1, titulo: "Sinergia", stack: "Python", status: "Em Desenvolvimento" },
            { id: 2, titulo: "Gerador de Senhas", stack: "JS", status: "Finalizado" }
        ];
        carregando = false; // Os dados chegaram, não estamos mais carregando
    }, 2000);
});

</script>

<div style="padding: 20px; font-family: sans-serif; background-color: {configGlobal.temaEscuro ? '#222' : '#fff'}; color: {configGlobal.temaEscuro ? '#fff' : '#000'}; min-height: 100vh;">
    
    <div style="border-bottom: 1px solid gray; padding-bottom: 10px; margin-bottom: 20px;">
        <p>Logado como: <strong>{configGlobal.usuarioLogado}</strong></p>
        <label>
            🌙 Modo Escuro
            <input type="checkbox" bind:checked={configGlobal.temaEscuro} />
        </label>
    </div>

    <h1>Meu Portfólio (ye-hub)</h1>

    {#if carregando}
        <p>Buscando projetos no banco de dados...</p>

        {:else}
            {#each projetos as projeto (projeto.id)}
            <ProjectCard 
                titulo={projeto.titulo} 
                stack={projeto.stack} 
                status={projeto.status} 
            />
            {/each}
    {/if}
</div>