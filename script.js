function calculateFuel() {
    let distance = document.getElementById("distance").value;
    let fuelRate = document.getElementById("fuelRate").value;

    if (distance > 0 && fuelRate > 0) {
        let fuelUsed = (distance / 100) * fuelRate;
        document.getElementById("result").innerText = fuelUsed.toFixed(2);
    } else {
        alert("يرجى إدخال قيم صحيحة!");
    }
}