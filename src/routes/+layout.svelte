<script>
    import { configGlobal } from '$lib/config.svelte.js';
    
    // O layout recebe as páginas filhas via props!
    let { children } = $props();
</script>

<div style="font-family: sans-serif; background-color: {configGlobal.temaEscuro ? '#222' : '#fff'}; color: {configGlobal.temaEscuro ? '#fff' : '#000'}; min-height: 100vh;">
    
    <nav style="padding: 15px; border-bottom: 1px solid gray; display: flex; justify-content: space-between;">
        <div>
            <strong>ye-hub</strong> | 
            <a href="/" style="color: inherit;">Projetos</a> | 
            <a href="/sobre" style="color: inherit;">Sobre Mim</a>
        </div>
        
        <label>
            🌙 Modo Escuro
            <input type="checkbox" bind:checked={configGlobal.temaEscuro} />
        </label>
    </nav>

    <main style="padding: 20px;">
        {@render children()}
    </main>

</div>