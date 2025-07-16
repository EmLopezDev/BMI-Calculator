const formTypeRadioInput = document.querySelectorAll(
    'input[name="measurement-type"]'
);

const metricForm = document.getElementById("metric-form");
const imperialForm = document.getElementById("imperial-form");

const changeForm = (evt) => {
    const value = evt.target.value;
    if (value === "metric") {
        metricForm.classList.remove("hidden");
        imperialForm.classList.add("hidden");
    } else {
        metricForm.classList.add("hidden");
        imperialForm.classList.remove("hidden");
    }
};

formTypeRadioInput.forEach((radio) =>
    radio.addEventListener("click", changeForm)
);
