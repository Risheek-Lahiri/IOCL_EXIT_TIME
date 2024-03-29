function addTime() {
    var inputTime = document.getElementById("inputTime").value;
    var timeParts = inputTime.split(":");
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);

    // Convert input time to minutes
    var inputTotalMinutes = hours * 60 + minutes;

    // Add 7 hours and 45 minutes
    var totalTimeMinutes = inputTotalMinutes + 7 * 60 + 45;

    // Calculate hours and minutes for the total time
    var totalHours = Math.floor(totalTimeMinutes / 60) % 24;
    var totalMinutes = totalTimeMinutes % 60;

    // Format output
    var outputHours = String(totalHours).padStart(2, '0');
    var outputMinutes = String(totalMinutes).padStart(2, '0');
    var outputTime = outputHours + ":" + outputMinutes;

    // Display output
    document.getElementById("outputTime").innerText = "OUT TIME: " + outputTime;
}
