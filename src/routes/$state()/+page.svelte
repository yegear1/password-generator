<script>
	let mensagensEnviadas = $state(0);
    let erroCritico = $state(false);

	function dispararMensagem() {
		mensagensEnviadas = mensagensEnviadas + 1;
		console.log("Variável no JS agora é:", mensagensEnviadas);
	}

    function dispararErro() {
        erroCritico = !erroCritico;
    }
</script>

<div style="padding: 20px; font-family: sans-serif;">
	<h2>Painel de Automação Telegram</h2>
	<p>Status: {erroCritico ? "CRITICAL ERROR" : "Ativo"}</p>
	
	<div style="font-size: 24px; font-weight: bold; margin: 10px 0;">
		Mensagens: {mensagensEnviadas}
	</div>

	<button onclick={dispararMensagem}>
		Simular Disparo
	</button>

    <button onclick={dispararErro}>
		Simular Erro
	</button>
</div>