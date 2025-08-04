// Função para carregar HTML externo
async function loadHTML(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // console.error(`Erro: Não foi possível carregar ${url}. Status: ${response.status} ${response.statusText}`);
            return false;
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        // console.log(`${url} carregado com sucesso.`);
        return true;
    } catch (error) {
        // console.error(`Erro de rede ou outra falha ao carregar ${url}:`, error);
        return false;
    }
}

// Função para inicializar scripts que podem depender do footer
// function initializeFooterDependentScripts() {
//     console.log('Scripts dependentes do footer inicializados.');
// }

// Inicialização principal da página
document.addEventListener('DOMContentLoaded', async () => {
    // console.log('DOM Content Loaded. Iniciando carregamento do footer...');
    const footerLoaded = await loadHTML('components/footer.html', 'footer-placeholder');
    document.getElementById('currentYear').textContent = new Date().getFullYear();


    // if (footerLoaded) {
    //     initializeFooterDependentScripts();
    // } else {
    //     console.error('Falha ao carregar Footer. Scripts dependentes não serão inicializados.');
    // }
});