export type Hero = {
    id: number;
    name: string;
    slug: string;
    maestry: Maestry;
    statsSum: number;
    powerstats: {
      intelligence: 38;
      strength: 100;
      speed: 17;
      durability: 80;
      power: 24;
      combat: 64;
    };
    appearance: {
      gender: "Male" | "Woman";
      race: string;
      height: string[];
      weight: string[];
      eyeColor:string;
      hairColor: string;
    };
    biography: {
      fullName: string;
      alterEgos: string;
      aliases: string[];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
    };
    work: {
      occupation: string;
      base:string;
    };
    connections: {
      groupAffiliation: string
      relatives: string
    };
    images: {
      xs: string
      sm: string
      md: string
      lg: string
    };
  };

 export  type Maestry = "Bronze" | "Silver" | "Gold";