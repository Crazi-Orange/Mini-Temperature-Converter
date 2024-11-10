const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log('***Mini Temperature Converter***');
  rl.question('Enter the temperature in Celsius: ', (input) => {
    const celsius = parseFloat(input);
    //Converting kelvin to celsius
    const kelvin = celsius + 273;
    console.log(`Temperature in Kelvin: ${kelvin} degrees`);
    //Converting to Fahrenheit
    Fahrenheit = celsius * (9/5) + 32;
    const fahrenheit = Math.floor(Fahrenheit);
    console.log(`Temperature in Fahrenheit: ${fahrenheit} degrees`);
    rl.close();
  });