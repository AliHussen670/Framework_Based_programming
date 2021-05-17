class Holiday{
	constructor(destination, days){
		this.days=days;
		this.destination=destination;
	}
	info(){
		alert(`${this.destination} will take ${this.days} days.`);
	}
}
//sub class
class Eexpedition extends Holiday{
	constructor(destination, days, gear){
		super(destination, days);
		this.gear=gear;
	}
	info(){
		super.info();
		alert(`Bring your ${this.gear.join(' and your ')}`);
	}
}
const tripWithGear = new Eexpedition('Semeru', 10, ['Sunglasses', 'Flags', 'camera']);
tripWithGear.info();