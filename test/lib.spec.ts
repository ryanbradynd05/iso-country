import { Country, isoCountry } from '../src/lib';

describe('isCountry', () => {
  describe('handles alpha-2 codes', () => {
    it('returns United Arab Emirates from AE', () => {
      const country = isoCountry('AE') as Country;
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns United Arab Emirates from ae', () => {
      const country = isoCountry('ae') as Country;
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns null when not found', () => {
      const country = isoCountry('12');
      expect(country).toEqual(null);
    });
  });
  describe('handles alpha-3 codes', () => {
    it('returns United Arab Emirates from ARE', () => {
      const country = isoCountry('ARE') as Country;
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns United Arab Emirates from are', () => {
      const country = isoCountry('are') as Country;
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns null when not found', () => {
      const country = isoCountry('123');
      expect(country).toEqual(null);
    });
  });
});