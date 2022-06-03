import countCharacter from '../charactercounter.js';

describe('Count character', () => {
  it('should return 8 ', () => {
    const characters = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
      { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
      { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    ];
    expect(countCharacter(characters)).toBe(8);
  });

  it('should return 0 ', () => {
    const characters = [];
    expect(countCharacter(characters)).toBe(0);
  });

  it('should return 2 ', () => {
    const characters = [
      { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
      { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
    ];
    expect(countCharacter(characters)).toBe(2);
  });
});
