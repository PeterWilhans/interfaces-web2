document.getElementById("calcular-button").addEventListener("click", function() {
    const valorDoEmprestimo = parseFloat(document.getElementById("valorDoEmprestimo").value);
    const taxaDeJurosAnual = parseFloat(document.getElementById("taxaDeJurosAnual").value);
    const prazoDoEmprestimo = parseInt(document.getElementById("prazoDoEmprestimo").value);

    if (isNaN(valorDoEmprestimo) || isNaN(taxaDeJurosAnual) || isNaN(prazoDoEmprestimo)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const jurosMensais = (taxaDeJurosAnual / 100) / 12;
    const totalDeParcelas = prazoDoEmprestimo * 12;
    
    const parcelaMensal = (valorDoEmprestimo * jurosMensais) / (1 - Math.pow(1 + jurosMensais, -totalDeParcelas));
    
    document.getElementById("resultado").innerHTML = `Sua parcela mensal será de: R$ ${parcelaMensal.toFixed(2)}`;
});
