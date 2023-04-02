// Set the default semester start and end dates
const semesterStartDate = new Date("2023-01-18");
const semesterEndDate = new Date("2023-05-14");

function getBatteryColor(percentage) {
    if (percentage >= 90) return "#43aa8b"; // zomp
    if (percentage >= 80) return "#6ab47c"; // mint-green
    if (percentage >= 70) return "#90be6d"; // pistachio
    if (percentage >= 60) return "#abc166"; // olivine
    if (percentage >= 60) return "c5c35e"; // cintron
    if (percentage >= 40) return "#f9c74f"; // saffron
    if (percentage >= 30) return "#f9844a"; // coral
    if (percentage >= 20) return "#f8961e"; // carrot-orange
    if (percentage >= 10) return "#f3722c"; // orange-crayola
    return "#f94144"; // imperial-red
}

function updateCountdown() {
    const today = new Date();
    const totalTime = semesterEndDate - semesterStartDate;
    const timePassed = today - semesterStartDate;
    const timeLeft = semesterEndDate - today;

    // Calculate months, weeks, and days left
    // Calculate months, weeks, and days left
    const monthsLeft = (timeLeft / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
    const weeksLeft = (timeLeft / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    // Display the correct pluralization for months, weeks, days, and working days

    // Calculate working days left (excluding weekends)
    let workingDaysLeft = 0;
    for (
        let day = today;
        day <= semesterEndDate;
        day.setDate(day.getDate() + 1)
    ) {
        if (day.getDay() !== 0 && day.getDay() !== 6) {
            workingDaysLeft++;
        }
    }

    const monthText = monthsLeft == 1 ? "month" : "months";
    const weekText = weeksLeft == 1 ? "week" : "weeks";
    const dayText = daysLeft == 1 ? "day" : "days";
    const workingDayText =
        workingDaysLeft == 1 ? "working day" : "working days";

    document.getElementById(
        "months-left"
    ).textContent = `${monthsLeft} ${monthText} left`;
    document.getElementById(
        "weeks-left"
    ).textContent = `${weeksLeft} ${weekText} left`;
    document.getElementById(
        "days-left"
    ).textContent = `${daysLeft} ${dayText} left`;
    document.getElementById(
        "working-days-left"
    ).textContent = `${workingDaysLeft} ${workingDayText} left`;

    // Update the battery bar and text elements
    const batteryBar = document.getElementById("battery-bar");
    const percentagePassed = (timePassed / totalTime) * 100;
    const percentageLeft = 100 - percentagePassed;
    // Clear the current subdivisions
    batteryBar.innerHTML = "";

    // Create new subdivisions
    const passedDiv = document.createElement("div");
    passedDiv.className = "subdivision passed"; // Add the 'passed' class
    passedDiv.style.width = `0%`; // Initialize the width to 0
    passedDiv.style.animationIterationCount = "1"; // Set the animation iteration count to 1
    batteryBar.appendChild(passedDiv);

    const leftDiv = document.createElement("div");
    leftDiv.className = "subdivision left"; // Add the 'left' class
    leftDiv.style.width = `100%`; // Initialize the width to 100%
    leftDiv.style.animationIterationCount = "1"; // Set the animation iteration count to 1
    leftDiv.style.backgroundColor = "#ddd";
    batteryBar.appendChild(leftDiv);

    // Update the text elements
    document.getElementById(
        "months-left"
    ).textContent = `${monthsLeft} months left`;
    document.getElementById(
        "weeks-left"
    ).textContent = `${weeksLeft} weeks left`;
    document.getElementById("days-left").textContent = `${daysLeft} days left`;
    document.getElementById(
        "working-days-left"
    ).textContent = `${workingDaysLeft} working days left`;

    setTimeout(() => {
        passedDiv.style.width = `${percentagePassed}%`;
        passedDiv.style.backgroundColor = getBatteryColor(percentagePassed); // Update the color
        leftDiv.style.width = `${percentageLeft}%`;
    }, 100);
}

// Call updateCountdown() initially and set an interval to update it every day
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

//This JavaScript code will update the battery bar and text elements with the remaining time until the end of the semester. The `updateCountdown()` function is called initially and then every day using `setInterval()`.
// With this basic setup, you have created a simple website that shows the remaining time in the current semester. You can further enhance the website by adding user input for customizing semester dates, improving the design, and making it responsive for different screen sizes.
