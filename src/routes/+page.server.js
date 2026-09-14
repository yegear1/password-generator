// src/routes/+page.server.js

// Aqui é onde os dados chegam! Seguro e blindado no servidor.
export const actions = {
    // 'default' é a ação padrão que roda quando o formulário é enviado
    default: async ({ request }) => {
        
        // 1. Pegamos os dados do formulário que vieram do HTML
        const dadosDoFormulario = await request.formData();
        
        // 2. Extraímos os campos pelos atributos "name" do HTML
        const titulo = dadosDoFormulario.get('nomeDoProjeto');
        const stack = dadosDoFormulario.get('tecnologias');

        // 3. Aqui você faria o INSERT no seu Banco de Dados SQL!
        console.log(`NOVO PROJETO RECEBIDO NO SERVIDOR: ${titulo} com ${stack}`);

        // 4. Podemos retornar uma mensagem de sucesso para a interface
        return { sucesso: true, mensagem: `Projeto "${titulo}" salvo com sucesso!` };
    }
};