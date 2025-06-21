const API_URL = "http://localhost:8081/fipe";

window.onload = () => {
    carregarMarcas();
};

function carregarMarcas() {
    fetch(`${API_URL}/marcas`)
        .then(res => res.json())
        .then(data => {
            const selectMarca = document.getElementById("marca");
            data.forEach(marca => {
                const option = document.createElement("option");
                option.value = marca.codigo;
                option.text = marca.nome;
                selectMarca.appendChild(option);
            });
        });
}

document.getElementById("marca").addEventListener("change", () => {
    const marca = document.getElementById("marca").value;
    limparSelect("modelo");
    limparSelect("ano");
    document.getElementById("resultado").innerHTML = "";

    if (marca) {
        fetch(`${API_URL}/modelos/${marca}`)
            .then(res => res.json())
            .then(data => {
                const selectModelo = document.getElementById("modelo");
                data.modelos.forEach(modelo => {
                    const option = document.createElement("option");
                    option.value = modelo.codigo;
                    option.text = modelo.nome;
                    selectModelo.appendChild(option);
                });
            });
    }
});

document.getElementById("modelo").addEventListener("change", () => {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    limparSelect("ano");
    document.getElementById("resultado").innerHTML = "";

    if (marca && modelo) {
        fetch(`${API_URL}/anos/${marca}/${modelo}`)
            .then(res => res.json())
            .then(data => {
                const selectAno = document.getElementById("ano");
                data.forEach(ano => {
                    const option = document.createElement("option");
                    option.value = ano.codigo;
                    option.text = ano.nome;
                    selectAno.appendChild(option);
                });
            });
    }
});

function consultarValor() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    if (marca && modelo && ano) {
        fetch(`${API_URL}/valor/${marca}/${modelo}/${ano}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("resultado").innerHTML = `
                    <h3>Resultado da Consulta:</h3>
                    <p><strong>Modelo:</strong> ${data.Modelo}</p>
                    <p><strong>Marca:</strong> ${data.Marca}</p>
                    <p><strong>Ano:</strong> ${data.AnoModelo}</p>
                    <p><strong>Combustível:</strong> ${data.Combustivel}</p>
                    <p><strong>Valor:</strong> ${data.Valor}</p>
                `;
            });
    } else {
        alert("Selecione Marca, Modelo e Ano");
    }
}

function limparSelect(id) {
    const select = document.getElementById(id);
    select.innerHTML = `<option value="">Selecione</option>`;
}
