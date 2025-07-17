const formTypeRadioInput = document.querySelectorAll(
    'input[name="measurement-type"]'
);
const metricForm = document.getElementById("metric-form");
const imperialForm = document.getElementById("imperial-form");
const metricHeightInput = document.getElementById("metric-height");
const metricWeightInput = document.getElementById("metric-weight");

const formResultsDiv = document.getElementById("form-results");

const METRIC_MULTIPLIER = 10000;
const METER_DIVIDER = 100;

let metricInputs = {
    height: 0,
    weight: 0,
};

// 1 st = 6.35029kg
// 1 kg = 2.2lbs
// 1 in = 0.0254m || (0.0254m * 100) for cm
// height(m) = height(cm) / 100;
// ideal weight = bmi * height(m) * height(m)
// ideal body range = plus or minus 15lbs or 7kg

const idealWeight = (bmi, height) => {
    console.log(height);
    const heightInMeters = height / METER_DIVIDER;
    return bmi * heightInMeters * heightInMeters;
};

const bmiInMetric = () => {
    //  BMI = (weight(kg) / height(cm) / height(cm)) * 10,000;
    const { height, weight } = metricInputs;
    const heightNum = Number(height);
    const weightNum = Number(weight);
    return (weightNum / heightNum / heightNum) * METRIC_MULTIPLIER;
};

const bmiInImperial = () => {
    //  BMI = (weight(lbs) / height(in)^2) * 703;
};
const weightStatus = (bmi) => {
    if (bmi <= 18.5) {
        return "underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        return "a healthy weight";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        return "overweight";
    } else {
        return "obese";
    }
};

const showResults = () => {
    const { height, weight } = metricInputs;
    if (!height || !weight) return;
    if (height.length >= 2 && weight.length >= 2) {
        const bmi = bmiInMetric();
        console.log(bmi);
        console.log(weightStatus(bmi));
        console.log(idealWeight(bmi, Number(metricInputs.height)));
    }
};

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

metricHeightInput.addEventListener("input", (evt) => {
    metricInputs.height = evt.target.value;
    showResults();
});

metricWeightInput.addEventListener("input", (evt) => {
    metricInputs.weight = evt.target.value;
    showResults();
});
