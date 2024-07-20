function updateEncargadoText() {
    var select = document.getElementById("id_encargado");
    var text = select.options[select.selectedIndex].text;
    document.getElementById("id_encargado_text").textContent = text;
    document.getElementById("firma_encargado_text").textContent = text;
}

function updateReportadoText() {
    var input = document.getElementById("reportado");
    document.getElementById("reportado_text").textContent = input.value;
}

function updateObservacionesText() {
    var input = document.getElementById("observaciones");
    document.getElementById("observaciones_text").textContent = input.value;
}

window.onload = function() {
    updateEncargadoText();
    updateReportadoText();
    updateObservacionesText();
}