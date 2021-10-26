import { Country, isoCountry } from '../src/lib';

describe('isCountry', () => {
  describe('handles alpha-2 codes', () => {
    it('returns United Arab Emirates from AE', () => {
      const country = isoCountry('AE');
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns United Arab Emirates from ae', () => {
      const country = isoCountry('ae');
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns iso2 and iso3 codes', () => {
      const country = isoCountry('ae');
      expect(country.iso2).toEqual('AE');
      expect(country.iso3).toEqual('ARE');
    });
    it('returns null when not found', () => {
      const country = isoCountry('12');
      expect(country).toEqual(null);
    });
  });
  describe('handles alpha-3 codes', () => {
    it('returns United Arab Emirates from ARE', () => {
      const country = isoCountry('ARE');
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns United Arab Emirates from are', () => {
      const country = isoCountry('are');
      expect(country.name).toEqual('United Arab Emirates');
    });
    it('returns iso2 and iso3 codes', () => {
      const country = isoCountry('are');
      expect(country.iso2).toEqual('AE');
      expect(country.iso3).toEqual('ARE');
    });
    it('returns null when not found', () => {
      const country = isoCountry('123');
      expect(country).toEqual(null);
    });
  });
});