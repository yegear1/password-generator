<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { configGlobal } from '../lib/config.svelte.js'; // Ajuste o caminho conforme sua pasta

    // As props 'data' recebem dados da função load()
    // As props 'form' recebem as respostas das Form Actions (depois do submit)
    let { data, form } = $props();
    let projetos = data.meusProjetos;

</script>


<div style="border-bottom: 1px solid gray; padding-bottom: 10px; margin-bottom: 20px;">
    <p>Logado como: <strong>{configGlobal.usuarioLogado}</strong></p>
</div>

<h1>Meu Portfólio (ye-hub)</h1>

<div style="background: #f0f0f0; padding: 20px; border-radius: 8px; margin-bottom: 20px; color: black;">
    <h3>Adicionar Novo Projeto</h3>
    
    {#if form?.sucesso}
        <p style="color: green; font-weight: bold;">{form.mensagem}</p>
    {/if}

    <form method="POST">
        <label>
            Nome:
            <input type="text" name="nomeDoProjeto" required />
        </label>
        
        <label style="margin-left: 10px;">
            Stack:
            <input type="text" name="tecnologias" required />
        </label>

        <button type="submit" style="margin-left: 10px;">Salvar no Banco</button>
    </form>
</div>

{#each projetos as projeto (projeto.id)}
    <ProjectCard 
        titulo={projeto.titulo} 
        stack={projeto.stack} 
        status={projeto.status} 
    />
{/each}

