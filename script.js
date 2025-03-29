function calculate() {
    let nitrateCount = document.getElementById("nitrateCount").value;
    let healthFactor = document.getElementById("healthFactor").value;
    
    if (nitrateCount === "" || healthFactor === "") {
        document.getElementById("result").innerText = "يرجى إدخال جميع البيانات!";
        return;
    }
    
    nitrateCount = parseInt(nitrateCount);
    healthFactor = parseInt(healthFactor);
    
    let recommended = Math.max(1, Math.round(nitrateCount / healthFactor));
    
    document.getElementById("result").innerText = "الكمية الصحية اليومية: " + recommended + " نترات";
}