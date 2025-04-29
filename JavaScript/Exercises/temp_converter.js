function celsius_fahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function fahrenheit_celsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function main(temperature, conversion_type) {
  switch (conversion_type) {
    case "celsius":
      console.log(
        `${temperature} celsius ${celsius_fahrenheit(temperature)} fahrenheit`
      );
      break;
    case "fahrenheit":
      console.log(
        `${temperature} fahrenheit ${fahrenheit_celsius(temperature)} celsius`
      );
      break;
    default:
      console.log("invalid option");
  }
}

main(150, "celsius");
main(302, "fahrenheit")
