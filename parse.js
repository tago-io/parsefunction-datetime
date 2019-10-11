/**
  This code checks when given variable is being insert in the device.
  if it's between 7 am and 9 am it will ignore the data.

  To test this code, use the device emulator to post a "humidity" variable
**/

// First, we find the humidity variable inside the payload(array)
const humidityItem = payload.find(item => item.variable === 'humidity');

// If we have found temperature variable.
if (humidityItem) {
  const humidityTime = moment(humidityItem.time);

  const humidityHour = humidityTime.hour();
  
   // we can print to Live Inspector for debugging.
  // console.log(`Humidty variable current hour is: ${humidityHour}`);

  if (hour >= 7 && hour <= 9) {
    payload = []; // empty the payload and ignores all variables from this packet.
  }
}
