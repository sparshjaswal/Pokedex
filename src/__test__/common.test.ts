import {
  getPokemonData,
  getSpeciesDataById,
  getPokemonTypesById,
  getPokemonTypes,
  getPokemonGenders,
  getPokemonDataById,
  getPokemonDataByURL,
  numberFormation,
  getAllParallelCall,
  removeDuplicateBy,
} from '../services/common.service'; // Adjust the import path accordingly

// Mock the fetch API
global.fetch = jest.fn();

describe('API Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getPokemonData should fetch and return pokemon data', async () => {
    const mockData = { results: [{ name: 'Pikachu' }] };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonData();
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=12'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });
  

  test('getSpeciesDataById should fetch and return species data by ID', async () => {
    const mockData = { name: 'Pikachu' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    })

    const data = await getSpeciesDataById(1);
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/1/'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });

  test('getPokemonTypesById should fetch and return types data by ID', async () => {
    const mockData = { name: 'Electric' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonTypesById(1);
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type/1/'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });

  test('getPokemonTypes should fetch and return all types', async () => {
    const mockData = [{ name: 'Fire' }, { name: 'Water' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonTypes();
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });

  test('getPokemonGenders should fetch and return all genders', async () => {
    const mockData = [{ name: 'Male' }, { name: 'Female' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonGenders();
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/gender'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });

  test('getPokemonDataById should fetch and return pokemon data by ID', async () => {
    const mockData = { name: 'Pikachu' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonDataById(1);
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/'); // Adjust baseURL
    expect(data).toEqual(mockData);
  });

  test('getPokemonDataByURL should fetch and return data from a given URL', async () => {
    const mockData = { name: 'Pikachu' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getPokemonDataByURL('https://pokeapi.co/api/v2/pokemon/1/');
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
    expect(data).toEqual(mockData);
  });

  test('numberFormation should format numbers correctly', () => {
    expect(numberFormation(5)).toBe('005');
    expect(numberFormation(50)).toBe('050');
    expect(numberFormation(500)).toBe('500');
  });

  test('getAllParallelCall should fetch data from multiple URLs', async () => {
    const mockData1 = { name: 'Pikachu' };
    const mockData2 = { name: 'Charmander' };
    (fetch as jest.Mock)
      .mockResolvedValueOnce({ json: jest.fn().mockResolvedValueOnce(mockData1) })
      .mockResolvedValueOnce({ json: jest.fn().mockResolvedValueOnce(mockData2) });

    const data = await getAllParallelCall(['https://pokeapi.co/api/v2/pokemon/1/', 'https://pokeapi.co/api/v2/pokemon/2/']);
    expect(data).toEqual([mockData1, mockData2]);
  });

  test('removeDuplicateBy should remove duplicates from an array', () => {
    const input = [
      { id: 1, name: 'Pikachu' },
      { id: 2, name: 'Charmander' },
      { id: 1, name: 'Pikachu' },
    ];
    const result = removeDuplicateBy(input, 'id');
    expect(result).toEqual([
      { id: 1, name: 'Pikachu' },
      { id: 2, name: 'Charmander' },
    ]);
  });
});