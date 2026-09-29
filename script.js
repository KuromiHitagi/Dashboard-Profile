function mudarTela(idTela) {
    // Remove a classe 'ativa' de todas as classes
    document.querySelectorAll('.tela').forEach(t => {t.classList.remove('ativa')})

    // Exibe apenas a classe selecionada
    document.getElementById('tela-' + idTela).classList.add('ativa')
}