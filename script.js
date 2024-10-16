// script.js
document.addEventListener("DOMContentLoaded", function () {
  const needle = document.getElementById("needle");
  const rpmSlider = document.getElementById("rpmSlider");
  const rpmText = document.getElementById("rpmText");

  // Function to convert RPM value to degrees (for needle rotation)
  function rpmToDegrees(rpm) {
    // 0 RPM maps to -90deg (leftmost), 8000 RPM maps to 90deg (rightmost)
    const minRpm = 0;
    const maxRpm = 8000;
    const minDeg = -90;
    const maxDeg = 90;
    return ((rpm - minRpm) * (maxDeg - minDeg)) / (maxRpm - minRpm) + minDeg;
  }

  // Update the gauge and text when slider value changes
  rpmSlider.addEventListener("input", function () {
    const rpmValue = parseInt(rpmSlider.value, 10);
    const needleDegrees = rpmToDegrees(rpmValue);
    needle.style.transform = `rotate(${needleDegrees}deg)`;
    rpmText.textContent = `${rpmValue} RPM`;
  });
});
