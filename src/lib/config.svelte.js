// config.svelte.js
// Exportamos um objeto reativo para que qualquer arquivo possa importá-lo
export const configGlobal = $state({
    temaEscuro: false,
    usuarioLogado: "Luis"
});