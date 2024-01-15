const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  const summary = document.querySelector("#summary");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid Height: ${height} `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid Weight: ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi} </span>`;
    if(bmi<18.6){
        summary.innerHTML = `<span> Under Weight 😓 </span>`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        summary.innerHTML = `<span> Normal Weight 😁 </span>`;
    }
    else{
        summary.innerHTML = `<span> Over Weight 😮 </span>`;
    }
  }
});
