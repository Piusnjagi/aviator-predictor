// Demo history (can be replaced later with backend)
const multipliers = [1.2, 2.3, 1.1, 5.0, 1.4, 3.5, 2.2, 1.3, 4.8, 1.1];

function generatePrediction() {
  const lastFive = multipliers.slice(-5);
  const lowCount = lastFive.filter(x => x < 1.5).length;
  const highCount = lastFive.filter(x => x > 3).length;

  let prediction = "Stable";
  let confidence = "Medium";

  if (lowCount >= 3) {
    prediction = "Next round may rise above 2.5x";
    confidence = "High";
  } else if (highCount >= 3) {
    prediction = "Crash likely under 1.5x";
    confidence = "High";
  }

  document.getElementById("prediction").innerText = prediction;
  document.getElementById("confidence").innerText = confidence;

  updateHistory();
}

function updateHistory() {
  const ul = document.getElementById("multiplier-history");
  ul.innerHTML = "";
  multipliers.slice(-10).reverse().forEach(x => {
    const li = document.createElement("li");
    li.innerText = `${x}x`;
    ul.appendChild(li);
  });
}

window.onload = updateHistory;
