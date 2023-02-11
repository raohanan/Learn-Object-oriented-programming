class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  private _statePrivacy;
  private _leader;
  public planet = "Earth";
  public religon: string;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    _statePrivacy: string,
    _leader: string,
    religon: string
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
    this._statePrivacy = _statePrivacy;
    this._leader = _leader;
    this.religon = religon;
  }
  public populationGrowth(): number {
    return 1;
  }

  public get privateData(): string {
    return this._statePrivacy;
  }
  public set leader(newLeader: string) {
    this._leader = newLeader;
  }
  public greeting(): string {
    return "Hello";
  }
}

class OICCountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivacy: string,
    leader: string,
    religon = "Islam"
  ) {
    super(
      name,
      language,
      population,
      populationGrowthRate,
      statePrivacy,
      leader,
      religon
    );
  }
  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
  public greeting(): string {
    return "Assalamoalikum";
  }
}

let pakistan = new OICCountry(
  "pakistan",
  "urdu",
  30000000,
  2.5,
  "Pakistan's Private Data",
  "Pakistan's leader"
);

console.info(pakistan);
console.info(pakistan.greeting());

let china = new country(
  "China",
  "Mandrin",
  1500000000,
  0,
  "China's private Data",
  "China's leader",
  "Budaism"
);

console.info(china);
console.info(china.greeting());

export {};
