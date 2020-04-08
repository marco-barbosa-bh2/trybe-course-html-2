const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (temperature, delay) => {
    setTimeout(() => console.log(temperature), delay);
};

sendMarsTemperature(getMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
