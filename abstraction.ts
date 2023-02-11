abstract class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
  }
  public abstract populationGrowth(): number;
}

class OICCountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    super(name, language, population, populationGrowthRate);
  }
  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
}

let pakistan = new OICCountry("pakistan", "urdu", 30000000, 2.5);

pakistan.populationGrowth();
console.log(pakistan);
