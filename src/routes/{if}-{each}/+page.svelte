<script>
	let nomeUsuario = $state("Luis");
    
    let AlertasAtivos = $state(false)
</script>

<div style="padding: 20px; font-family: sans-serif;">
	<h2>Editando Perfil: {nomeUsuario}</h2>
	
	<label>
		Nome:
		<input type="text" bind:value={nomeUsuario} />
	</label>

    <label>
        Deseja receber notificações do bot do telegram <input type="checkbox" bind:checked={AlertasAtivos}/>
    </label>

	<p style="margin-top: 20px; color: gray;">
		O sistema está lendo internamente: <strong>{nomeUsuario}</strong>
	</p>

    {#if AlertasAtivos}
        <div>🔔 Alertas do Telegram ativados!</div>
    {:else}
        <div>Alertas do telegream desativado</div>
    {/if}
</div>