// Set the default semester start and end dates
const semesterStartDate = new Date("2023-01-01");
const semesterEndDate = new Date("2023-06-01");

function updateCountdown() {
    const today = new Date();
    const totalTime = semesterEndDate - semesterStartDate;
    const timePassed = today - semesterStartDate;
    const timeLeft = semesterEndDate - today;

    // Calculate months, weeks, and days left
    const monthsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const weeksLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

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

    // Update the battery bar and text elements
    const batteryBar = document.getElementById("battery-bar");
    const percentagePassed = (timePassed / totalTime) * 100;
    const percentageLeft = 100 - percentagePassed;
    // Clear the current subdivisions
    batteryBar.innerHTML = "";

    // Create new subdivisions
    const passedDiv = document.createElement("div");
    passedDiv.className = "subdivision";
    passedDiv.style.width = `${percentagePassed}%`;
    batteryBar.appendChild(passedDiv);

    const leftDiv = document.createElement("div");
    leftDiv.className = "subdivision";
    leftDiv.style.width = `${percentageLeft}%`;
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
}

// Call updateCountdown() initially and set an interval to update it every day
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

//This JavaScript code will update the battery bar and text elements with the remaining time until the end of the semester. The `updateCountdown()` function is called initially and then every day using `setInterval()`.
// With this basic setup, you have created a simple website that shows the remaining time in the current semester. You can further enhance the website by adding user input for customizing semester dates, improving the design, and making it responsive for different screen sizes.
