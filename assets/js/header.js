// Função para carregar HTML externo
async function loadHTML(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Erro: Não foi possível carregar ${url}. Status: ${response.status} ${response.statusText}`);
            return false; // Retorna false em caso de erro HTTP
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        console.log(`${url} carregado com sucesso.`);
        return true; // Retorna true em caso de sucesso
    } catch (error) {
        console.error(`Erro de rede ou outra falha ao carregar ${url}:`, error);
        return false; // Retorna false em caso de erro
    }
}

// Função para inicializar scripts que podem depender do footer
function initializeFooterDependentScripts() {
    console.log('Scripts dependentes do footer inicializados.');
}

// Inicialização principal da página
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Content Loaded. Iniciando carregamento do header...');
    const headerLoaded = await loadHTML('components/header.html', 'header');

    if (headerLoaded) {
        initializeHeaderDependentScripts();
    } else {
        console.error('Falha ao carregar Header. Scripts dependentes não serão inicializados.');
    }
});