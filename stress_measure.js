function calculateStress() {
    const form = document.getElementById("stressForm");
    let total = 0;

    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type === "select-one") {
            total += parseInt(form.elements[i].value);
        }
    }

    const stressLevel = (total / 80) * 100; // Assuming 10 questions, each max value is 40
    document.getElementById("stressResult").textContent = `Your stress level is ${stressLevel.toFixed(1)} out of 100.`;
}
