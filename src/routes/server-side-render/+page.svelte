<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { configGlobal } from '$lib/config.svelte.js'; // Ajuste o caminho conforme sua pasta

    let { data } = $props();
    let projetos = data.meusProjetos;

</script>


<div style="border-bottom: 1px solid gray; padding-bottom: 10px; margin-bottom: 20px;">
    <p>Logado como: <strong>{configGlobal.usuarioLogado}</strong></p>
</div>

<h1>Meu Portfólio (ye-hub)</h1>

{#each projetos as projeto (projeto.id)}
    <ProjectCard 
        titulo={projeto.titulo} 
        stack={projeto.stack} 
        status={projeto.status} 
    />
{/each}

