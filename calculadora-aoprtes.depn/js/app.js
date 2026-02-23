const SALARIO_MINIMO_2026 = 1300000;

// El salario ingresado corresponde al IBC
// Todos los aportes se calculan sobre este valor
const salario = Number(document.getElementById("salario").value);

const btn = document.getElementById("btnCalcular");

btn.addEventListener("click", () => {

    const salario = Number(document.getElementById("salario").value);
    const arl = Number(document.getElementById("arl").value);
    const error = document.getElementById("error");

    // 🔴 VALIDACIÓN SALARIO MÍNIMO
    if (!salario || salario < SALARIO_MINIMO_2026) {
        error.textContent = `El salario debe ser mayor o igual al salario mínimo legal vigente ($${SALARIO_MINIMO_2026.toLocaleString()})`;

        // Limpiar resultados
        document.getElementById("salud").textContent = "$0";
        document.getElementById("pension").textContent = "$0";
        document.getElementById("valorArl").textContent = "$0";
        document.getElementById("caja").textContent = "$0";
        document.getElementById("total").textContent = "$0";
        return;
    }

    // Si pasa la validación
    error.textContent = "";

    // Cálculos (REDONDEADOS)
    const salud = Math.round(salario * 0.04);
    const pension = Math.round(salario * 0.16);
    const arlValor = Math.round(salario * arl);
    const caja = Math.round(salario * 0.04);

    const total = salud + pension + arlValor + caja;

    document.getElementById("salud").textContent = formato(salud);
    document.getElementById("pension").textContent = formato(pension);
    document.getElementById("valorArl").textContent = formato(arlValor);
    document.getElementById("caja").textContent = formato(caja);
    document.getElementById("total").textContent = formato(total);
});

function formato(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    });
}
