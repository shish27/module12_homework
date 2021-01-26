// общие параметры
function ElectricalAppliance(power,name){
  this.name = name,
  this.power = power,
  this.isTurnedOn = false
} 

// Включить прибор
ElectricalAppliance.prototype.setTurnedOn = function() {
  this.isTurnedOn = true
}

// Выключить прибор
ElectricalAppliance.prototype.setTurnedOff = function() {
  this.isTurnedOn = false
}

// новый прибор настольная лампа
function TableLamp(name, power, color, brightness) {
  this.name = name,
  this.power = power,
  this.color = color,
  this.brightness = brightness
}

TableLamp.prototype = new ElectricalAppliance()

//изменить яркость
TableLamp.prototype.changeBrightness = function(newBrightness) {
  this.brightness = newBrightness
}

function DesktopComputer(name, power, memoryCapacity, ram) {
  this.name = name,
  this.power = power,
  this.memoryCapacity = memoryCapacity,
  this.ram = ram
}

DesktopComputer.prototype = new ElectricalAppliance()

// Перезагрузка
DesktopComputer.prototype.restart = function() {
  this.setTurnedOff(),
  this.setTurnedOn(),
  console.log(`${this.name} перезагружен!`)
}

const lamp001 = new TableLamp('Hiper H651', 60, 'black', 'high');
lamp001.setTurnedOn();
lamp001.changeBrightness('midl');
console.log(lamp001);


const Desktop001 = new DesktopComputer('MSI GP75', 19, 1000, 16);
Desktop001.setTurnedOn();
Desktop001.restart();
console.log(Desktop001);