class SpaceAge {
  public seconds: number;
  public year: number = 60 * 60 * 24 * 365.25;
  public earth: number;
  public mercury: number = 0.2408467;
  public venus: number = 0.61519726;
  public mars: number = 1.8808158;
  public jupiter: number = 11.862615;
  public saturn: number = 29.447498;
  public uranus: number = 84.016846;
  public neptune: number = 164.79132;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.earth = this.onEarth();
  }

  onEarth(): number {
    return Number((this.seconds / this.year).toFixed(2));
  }

  round(value: number): number {
    return Number(value.toFixed(2));
  }

  onMercury(): number {
    return this.round(this.earth / this.mercury);
  }
  onVenus() {
    return this.round(this.earth / this.venus);
  }
  onMars() {
    return this.round(this.earth / this.mars);
  }
  onJupiter() {
    return this.round(this.earth / this.jupiter);
  }
  onSaturn() {
    return this.round(this.earth / this.saturn);
  }
  onUranus() {
    return this.round(this.earth / this.uranus);
  }
  onNeptune() {
    return this.round(this.earth / this.neptune);
  }
}

export default SpaceAge;
