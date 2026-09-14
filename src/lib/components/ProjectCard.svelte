<script>
	import { configGlobal } from "$lib/config.svelte";

	let { titulo, stack, status } = $props();

	let emoji = $derived(status === "Finalizado" ? "✅" : "⏳");
</script>

<div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 8px; {configGlobal.temaEscuro ? 'cor_escura' : 'cor_clara'}">
	<h2>{titulo}</h2>
	<p><strong>Stack:</strong> {stack}</p>

	<p><strong>Status:</strong> {emoji} {status}</p>
</div>