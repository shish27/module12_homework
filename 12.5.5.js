class ElectricalAppliance {
  constructor (power,name) {
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
  }
  setTurnedOn() {
    this.isTurnedOn = true;
  }
  setTurnedOff() {
    this.isTurnedOn = false;
  }
}

class TableLamp extends ElectricalAppliance {
  constructor (name, power, color, brightness) {
    super (power,name);
    this.color = color;
    this.brightness = brightness;
  }
  changeBrightness(newBrightness) {
    this.brightness = newBrightness;
  }
}

class DesktopComputer extends ElectricalAppliance {
  constructor (name, power, memoryCapacity, ram) {
     super (power,name);
    this.memoryCapacity = memoryCapacity;
    this.ram = ram;
  }
  restart () {
    super.setTurnedOff();
    super.setTurnedOn();
    console.log(`${this.name} перезагружен!`);
  }
}
const lamp001 = new TableLamp('Hiper H651', 60, 'black', 'high');
lamp001.setTurnedOn();
lamp001.changeBrightness('midl');
console.log(lamp001);


const Desktop001 = new DesktopComputer('MSI GP75', 19, 1000, 16);
Desktop001.setTurnedOn();
Desktop001.restart();
console.log(Desktop001);