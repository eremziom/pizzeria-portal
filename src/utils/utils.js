export const utils = {};

utils.numberToHour = function(number){
  return (Math.floor(number) % 24) + ':' + (number % 1 * 60 + '').padStart(2, '0');
};

utils.hourToNumber = function(hour){
  const parts = hour.split(':');

  return parseInt(parts[0]) + parseInt(parts[1])/60;
};
