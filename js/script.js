let apiUrl =
  "http://api.ipapi.com/api/check?access_key=61de5d9ab4bb4c20e9dd646bc034c5ca";

async function getLocation() {
  const response = await fetch(`${apiUrl}`);
  const jsonData = await response.json();
  console.log(jsonData.country_name);
  let countryString = jsonData.country_name;
  let country = JSON.stringify(countryString).replaceAll('"', "");
  sessionStorage.setItem("country", country);
  return (document.querySelector("h1").textContent = "You are in " + country);
}
getLocation();
