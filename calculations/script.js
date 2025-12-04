function CalorieCalculation() {
            // Clear previous results
            document.getElementById("output").innerHTML = "";

            // Get values
            const weight = Number(document.getElementById('weight').value);
            const height = Number(document.getElementById('height').value);

            // Validation
            if (!weight || !height || weight <= 0 || height <= 0) {
                alert("Please enter valid weight and height values.");
                return;
            }

            // BMI Calculation
            var bmi = weight / (height * height);
            bmi = bmi.toFixed(2); // Round to 2 decimal places

            // Determine BMI Category
            let bmiCategory, bmiClass;
            if (bmi < 18.5) {
                bmiCategory = "Underweight";
                bmiClass = "bmi-underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                bmiCategory = "Normal Weight";
                bmiClass = "bmi-normal";
            } else if (bmi >= 25 && bmi < 30) {
                bmiCategory = "Overweight";
                bmiClass = "bmi-overweight";
            } else {
                bmiCategory = "Obese";
                bmiClass = "bmi-obese";
            }

            // IBW Calculation
            const selectedgender = document.querySelector('input[name="gender"]:checked');

            if (!selectedgender) {
                alert("Please select a gender.");
                return;
            }

            let genderdenominator;
            let genderText;
            if (selectedgender.value === "male") {
                genderdenominator = 4;
                genderText = "Male";
            } else if (selectedgender.value === "female") {
                genderdenominator = 2;
                genderText = "Female";
            }

            var heightcenti = height * 100;
            var ibw = heightcenti - 100 - ((heightcenti - 150) / genderdenominator);
            ibw = ibw.toFixed(1);

            // Calorie Calculations
            const selectedactivity = document.querySelector('select[name="activity"]').value;

            if (!selectedactivity) {
                alert("Please select an activity level.");
                return;
            }

            let activityrate;
            let activityText;
            if (selectedactivity === "low") {
                activityrate = 25;
                activityText = "Low Activity";
            } else if (selectedactivity === "moderate") {
                activityrate = 30;
                activityText = "Moderate Activity";
            } else if (selectedactivity === "high") {
                activityrate = 35;
                activityText = "High Activity";
            }

            var calories = Math.round(ibw * activityrate);

            // Display Results
            let output = `
                <div class="result-card">
                    <h3>Body Mass Index (BMI)</h3>
                    <div class="value">${bmi}</div>
                    <div class="bmi-category ${bmiClass}">${bmiCategory}</div>
                </div>

                <div class="result-card">
                    <h3>Ideal Body Weight (IBW)</h3>
                    <div class="value">${ibw} kg</div>
                    <div class="description">Based on your height and gender (${genderText})</div>
                </div>

                <div class="result-card">
                    <h3>Daily Calorie Requirement</h3>
                    <div class="value">${calories} kcal</div>
                    <div class="description">Based on ${activityText} level</div>
                </div>
            `;

            document.getElementById("output").innerHTML = output;

            // Show results container
            const resultsContainer = document.getElementById("resultsContainer");
            resultsContainer.classList.add("show");

            // Auto-scroll to results
            setTimeout(() => {
                resultsContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }


























// function CalorieCalculation() {

// // BMI Calculation

//     const weight = Number(document.getElementById('weight').value);
//     const height = Number(document.getElementById('height').value);
//     var bmi = weight / (height*height);
//     document.getElementById("output").innerHTML = "Your BMI is = " + bmi;

//     // IBW Calculation

//     const selectedgender = document.querySelector('input[name="gender"]:checked');

//     if (!selectedgender) {
//         document.getElementById("output").innerHTML += "<br>Please select a gender.";
//         return;
//     }
//     if (selectedgender.value === "male") {
//         document.getElementById("output").innerHTML += "<br>Gender is male inshallah";
//         genderdenominator = 4;
//     } else if (selectedgender.value === "female") {
//         document.getElementById("output").innerHTML += "<br>Gender is female inshallah";
//         genderdenominator = 2;
//     }

//     var heightcenti = height*100
//     var ibw = heightcenti - 100 - ((heightcenti - 150) / genderdenominator)
//     document.getElementById("output").innerHTML += ("<br> ibw = " + ibw + " kgs" )

//     // Calorie Calculations

//     const selectedactivity = document.querySelector('select[name="activity"]').value
    
//     if (!selectedactivity) {
//         document.getElementById("output").innerHTML += "<br>Please select an activity.";
//         return;
//     }
//     if (selectedactivity === "low") {
//         activityrate = 25;
//         document.getElementById("output").innerHTML += "<br>since activity rate is low";
//     } else if (selectedactivity === "moderate") {
//         activityrate = 30;
//         document.getElementById("output").innerHTML += "<br>since activity rate is moderate";
//     } else if (selectedactivity === "high") {
//         activityrate = 35;
//         document.getElementById("output").innerHTML += "<br>since activity rate is high";
//     }
    
//     var calories = ibw * activityrate
    
//     document.getElementById("output").innerHTML += ("<br> the required calories for this individual is " + calories + " kgs")
// }  


    // const gender = 
    // console.log(bmi)
    // document.getElementById("output").innerHTML = "Your BMI is = " + bmi;





// CalorieCalculation(60, 10)




// low = 25
// moderate = 30 
// high = 35

// ibw = height (cm) - 100 - (height (cm) - 150 / male = 4 female = 2)

// calorie (kg) = ibw * physical activity

////////////////////////////////////////////////////////////////////////////////////

// bmi approximate to the nearest 2 decimal points
// tell him he is fat
