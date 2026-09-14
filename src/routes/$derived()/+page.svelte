<script>
	let precoMiniPC = $state(1500);
	let quantidade = $state(1);
    let desconto = $state(0);

	// No JS normal, essa linha roda apenas uma vez quando o componente carrega.
	// Ela não vai se atualizar sozinha se o preço ou quantidade mudarem.
	let totalOrcamento = $derived(precoMiniPC * quantidade - desconto);
</script>

<div style="padding: 20px; font-family: sans-serif;">
	<h2>Calculadora de Homelab</h2>
	
	<label>
		Preço do Mini PC (R$):
		<input type="number" bind:value={precoMiniPC} />
	</label>
    <br><br>
    <label>
		Desconto:
		<input type="number" bind:value={desconto} />
	</label>
	<br><br>
	<label>
		Quantidade:
		<input type="number" bind:value={quantidade} />
	</label>

	<div style="margin-top: 20px; padding: 10px; background: #eee;">
		<strong>Total do Orçamento:</strong> R$ {totalOrcamento}
	</div>
</div>