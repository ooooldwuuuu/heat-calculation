const Molar_Volume = 22.4;
const Molecular_Weight = {
    CO2: 44.01,
    H2O: 18.02,
    N2: 28.02,
    SO2: 64.06,
    HCl: 36.5,
    O2: 32,
};
function calVolume(event, name) {
    const input_w = Number(event.target.value);
    const weight = Molecular_Weight[name];
    const volume = (input_w * Molar_Volume / weight).toFixed(2);
    document.getElementById('result_' + name).innerHTML = volume;
    const gasWeightArr = document.querySelectorAll(".gas_weight");
    const gasVolArr = document.querySelectorAll(".gas_volume");
    let total_weight = 0;
    let total_volume = 0;
    gasWeightArr.forEach((input, idx) => {
        const gas_weight = Number(input.value);
        total_weight += gas_weight;
    });
    gasVolArr.forEach((span, idx) => {
        const gas_vol = Number(span.innerHTML);
        total_volume += gas_vol;
        total_volume = total_volume.toFixed(2);
    });
    gasVolArr.forEach((span, idx) => {
        const gas_vol = Number(span.innerHTML);
        let gas = span.id.split('_')[1];
        let gas_volPercent = (gas_vol / total_volume).toFixed(5);
        document.getElementById('vol_' + gas).innerHTML = gas_volPercent;
    });
    document.getElementById("weight_total").innerHTML = total_weight;
    document.getElementById("volume_total").innerHTML = total_volume;
}
