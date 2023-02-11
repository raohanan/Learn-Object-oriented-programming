abstract class country {
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
  public abstract populationGrowth(): number;

  public get privateData(): string {
    return this._statePrivacy;
  }
  public set leader(newLeader: string) {
    this._leader = newLeader;
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
}

let pakistan = new OICCountry(
  "pakistan",
  "urdu",
  30000000,
  2.5,
  "Pakistan Private Data",
  "Pakistan's leader"
);

console.info(pakistan);

export {};
