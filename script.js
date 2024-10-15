// script.js

const data = {
    "uttar_pradesh": {
    "lucknow": { total_crime: "15-16%", rape: "6-7%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "3-4%" },
    "kanpur": { total_crime: "13-14%", rape: "5-6%", domestic_violence: "7-8%", assault: "6-7%", harassment: "5-6%", stalking: "3-4%" },
    "ghaziabad": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "5-6%", stalking: "4-5%" },
    "varanasi": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "agra": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "2-3%" },
    "prayagraj": { total_crime: "10-11%", rape: "5-6%", domestic_violence: "7-8%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "noida": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "4-5%", assault: "4-5%", harassment: "4-5%", stalking: "3-4%" },
    "meerut": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "bareilly": { total_crime: "6-7%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "aligarh": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "jhansi": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "moradabad": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "saharanpur": { total_crime: "3-4%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "rampur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "sitapur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bijnor": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "budaun": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "hardoi": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "kasganj": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "deoria": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "firozabad": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "sultanpur": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bahraich": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "mau": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "azamgarh": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "gonda": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
  },
  "madhya_pradesh": {
    "bhopal": { total_crime: "12-14%", rape: "5-6%", violence: "8-9%", assault: "6-8%", misbehavior: "5-6%", stalking: "4-5%" },
    "indore": { total_crime: "15-17%", rape: "7-8%", violence: "9-10%", assault: "8-9%", misbehavior: "6-7%", stalking: "5-6%" },
    "gwalior": { total_crime: "8-10%", rape: "4-5%", violence: "5-6%", assault: "4-5%", misbehavior: "3-4%", stalking: "3-4%" },
    "jabalpur": { total_crime: "9-11%", rape: "5-6%", violence: "6-7%", assault: "4-5%", misbehavior: "4-5%", stalking: "3-4%" },
    "ujjain": { total_crime: "6-8%", rape: "2-3%", violence: "4-5%", assault: "3-4%", misbehavior: "3-4%", stalking: "2-3%" },
    "ratlam": { total_crime: "5-6%", rape: "2-3%", violence: "4-5%", assault: "2-3%", misbehavior: "2-3%", stalking: "2-3%" },
    "rewa": { total_crime: "4-5%", rape: "2-3%", violence: "3-4%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" },
    "morena": { total_crime: "3-4%", rape: "2-3%", violence: "3-4%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" },
    "sagar": { total_crime: "4-5%", rape: "2-3%", violence: "3-4%", assault: "3-4%", misbehavior: "2-3%", stalking: "2-3%" },
    "satna": { total_crime: "3-4%", rape: "1-2%", violence: "2-3%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" }
  }
};
  
// Ensure button click works
document.getElementById("checkButton").addEventListener("click", getCrimeData);

// Function to fetch and display crime data
function getCrimeData() {
    const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();
    let cityData = null;

    const upCities = data["uttar_pradesh"];
    const mpCities = data["madhya_pradesh"];

    if (upCities[cityInput]) {
        cityData = upCities[cityInput];
    } else if (mpCities[cityInput]) {
        cityData = mpCities[cityInput];
    }

    if (cityData) {
        displayData(cityData);
    } else {
        alert("City not found. Please try another city.");
    }
}

// Function to display crime data in the table
function displayData(cityData) {
    const tableBody = document.querySelector("#crimeTable tbody");
    tableBody.innerHTML = "";

    for (const [category, percentage] of Object.entries(cityData)) {
        // Remove the % symbol and extract the first value to determine the risk level
        const numericalValue = parseFloat(percentage.split("-")[0]);

        const status = numericalValue > 8 ? "High Risk" :
                       numericalValue > 5 ? "Moderate Risk" : "Low Risk";

        const row = `<tr>
                       <td>${category}</td>
                       <td>${percentage}</td>
                       <td>${status}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    }

    document.getElementById("result").style.display = "block";
}