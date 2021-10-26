export interface Country extends CountryData {
  code: string;
}

interface CountryData {
  iso2: string;
  iso3: string;
  name: string;
  localName: string;
  emoji: string;
  emojiCode: string;
}

const countries: CountryData[] = [
  {
    iso2: 'AB',
    iso3: 'SCT',
    name: 'Scotland',
    localName: 'Alba',
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    emojiCode: '1F3F4 E0067 E0062 E0073 E0063 E0074 E007F'
  },
  {
    iso2: 'WL',
    iso3: 'WLS',
    name: 'Wales',
    localName: 'Cymru',
    emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    emojiCode: '1F3F4 E0067 E0062 E0077 E006C E0073 E007F'
  },
  {
    iso2: 'AF',
    iso3: 'AFG',
    name: 'Afghanistan',
    localName: 'افغانستان',
    emoji: '🇦🇫',
    emojiCode: '1F1E6 1F1EB'
  },
  {
    iso2: 'AX',
    iso3: 'ALA',
    name: 'Åland Islands',
    localName: 'Åland',
    emoji: '🇦🇽',
    emojiCode: '1F1E6 1F1FD'
  },
  {
    iso2: 'AL',
    iso3: 'ALB',
    name: 'Albania',
    localName: 'Shqipëria',
    emoji: '🇦🇱',
    emojiCode: '1F1E6 1F1F1'
  },
  {
    iso2: 'DZ',
    iso3: 'DZA',
    name: 'Algeria',
    localName: 'الجزائر',
    emoji: '🇩🇿',
    emojiCode: '1F1E9 1F1FF'
  },
  {
    iso2: 'AS',
    iso3: 'ASM',
    name: 'American Samoa',
    localName: 'American Samoa',
    emoji: '🇦🇸',
    emojiCode: '1F1E6 1F1F8'
  },
  {
    iso2: 'AD',
    iso3: 'AND',
    name: 'Andorra',
    localName: 'Andorra',
    emoji: '🇦🇩',
    emojiCode: '1F1E6 1F1E9'
  },
  {
    iso2: 'AO',
    iso3: 'AGO',
    name: 'Angola',
    localName: 'Angola',
    emoji: '🇦🇴',
    emojiCode: '1F1E6 1F1F4'
  },
  {
    iso2: 'AI',
    iso3: 'AIA',
    name: 'Anguilla',
    localName: 'Anguilla',
    emoji: '🇦🇮',
    emojiCode: '1F1E6 1F1EE'
  },
  {
    iso2: 'AQ',
    iso3: 'ATA',
    name: 'Antarctica',
    localName: 'Antarctica',
    emoji: '🇦🇶',
    emojiCode: '1F1E6 1F1F6'
  },
  {
    iso2: 'AG',
    iso3: 'ATG',
    name: 'Antigua and Barbuda',
    localName: 'Antigua and Barbuda',
    emoji: '🇦🇬',
    emojiCode: '1F1E6 1F1EC'
  },
  {
    iso2: 'AR',
    iso3: 'ARG',
    name: 'Argentina',
    localName: 'Argentina',
    emoji: '🇦🇷',
    emojiCode: '1F1E6 1F1F7'
  },
  {
    iso2: 'AM',
    iso3: 'ARM',
    name: 'Armenia',
    localName: 'Հայաստան',
    emoji: '🇦🇲',
    emojiCode: '1F1E6 1F1F2'
  },
  {
    iso2: 'AW',
    iso3: 'ABW',
    name: 'Aruba',
    localName: 'Aruba',
    emoji: '🇦🇼',
    emojiCode: '1F1E6 1F1FC'
  },
  {
    iso2: 'AU',
    iso3: 'AUS',
    name: 'Australia',
    localName: 'Australia',
    emoji: '🇦🇺',
    emojiCode: '1F1E6 1F1FA'
  },
  {
    iso2: 'AT',
    iso3: 'AUT',
    name: 'Austria',
    localName: 'Österreich',
    emoji: '🇦🇹',
    emojiCode: '1F1E6 1F1F9'
  },
  {
    iso2: 'AZ',
    iso3: 'AZE',
    name: 'Azerbaijan',
    localName: 'Azərbaycan',
    emoji: '🇦🇿',
    emojiCode: '1F1E6 1F1FF'
  },
  {
    iso2: 'BS',
    iso3: 'BHS',
    name: 'Bahamas',
    localName: 'Bahamas',
    emoji: '🇧🇸',
    emojiCode: '1F1E7 1F1F8'
  },
  {
    iso2: 'BH',
    iso3: 'BHR',
    name: 'Bahrain',
    localName: '‏البحرين',
    emoji: '🇧🇭',
    emojiCode: '1F1E7 1F1ED'
  },
  {
    iso2: 'BD',
    iso3: 'BGD',
    name: 'Bangladesh',
    localName: 'Bangladesh',
    emoji: '🇧🇩',
    emojiCode: '1F1E7 1F1E9'
  },
  {
    iso2: 'BB',
    iso3: 'BRB',
    name: 'Barbados',
    localName: 'Barbados',
    emoji: '🇧🇧',
    emojiCode: '1F1E7 1F1E7'
  },
  {
    iso2: 'BY',
    iso3: 'BLR',
    name: 'Belarus',
    localName: 'Белару́сь',
    emoji: '🇧🇾',
    emojiCode: '1F1E7 1F1FE'
  },
  {
    iso2: 'BE',
    iso3: 'BEL',
    name: 'Belgium',
    localName: 'België',
    emoji: '🇧🇪',
    emojiCode: '1F1E7 1F1EA'
  },
  {
    iso2: 'BZ',
    iso3: 'BLZ',
    name: 'Belize',
    localName: 'Belize',
    emoji: '🇧🇿',
    emojiCode: '1F1E7 1F1FF'
  },
  {
    iso2: 'BJ',
    iso3: 'BEN',
    name: 'Benin',
    localName: 'Bénin',
    emoji: '🇧🇯',
    emojiCode: '1F1E7 1F1EF'
  },
  {
    iso2: 'BM',
    iso3: 'BMU',
    name: 'Bermuda',
    localName: 'Bermuda',
    emoji: '🇧🇲',
    emojiCode: '1F1E7 1F1F2'
  },
  {
    iso2: 'BT',
    iso3: 'BTN',
    name: 'Bhutan',
    localName: 'ʼbrug-yul',
    emoji: '🇧🇹',
    emojiCode: '1F1E7 1F1F9'
  },
  {
    iso2: 'BO',
    iso3: 'BOL',
    name: 'Bolivia',
    localName: 'Bolivia',
    emoji: '🇧🇴',
    emojiCode: '1F1E7 1F1F4'
  },
  {
    iso2: 'BQ',
    iso3: 'BES',
    name: 'Bonaire, Sint Eustatius and Saba',
    localName: 'Bonaire',
    emoji: '🇧🇶',
    emojiCode: '1F1E7 1F1F6'
  },
  {
    iso2: 'BA',
    iso3: 'BIH',
    name: 'Bosnia and Herzegovina',
    localName: 'Bosna i Hercegovina',
    emoji: '🇧🇦',
    emojiCode: '1F1E7 1F1E6'
  },
  {
    iso2: 'BW',
    iso3: 'BWA',
    name: 'Botswana',
    localName: 'Botswana',
    emoji: '🇧🇼',
    emojiCode: '1F1E7 1F1FC'
  },
  {
    iso2: 'BV',
    iso3: 'BVT',
    name: 'Bouvet Island',
    localName: 'Bouvetøya',
    emoji: '🇧🇻',
    emojiCode: '1F1E7 1F1FB'
  },
  {
    iso2: 'BR',
    iso3: 'BRA',
    name: 'Brazil',
    localName: 'Brasil',
    emoji: '🇧🇷',
    emojiCode: '1F1E7 1F1F7'
  },
  {
    iso2: 'IO',
    iso3: 'IOT',
    name: 'British Indian Ocean Territory',
    localName: 'British Indian Ocean Territory',
    emoji: '🇮🇴',
    emojiCode: '1F1EE 1F1F4'
  },
  {
    iso2: 'UM',
    iso3: 'UMI',
    name: 'United States Minor Outlying Islands',
    localName: 'United States Minor Outlying Islands',
    emoji: '🇺🇲',
    emojiCode: '1F1FA 1F1F2'
  },
  {
    iso2: 'VG',
    iso3: 'VGB',
    name: 'British Virgin',
    localName: 'British Virgin Islands',
    emoji: '🇻🇬',
    emojiCode: '1F1FB 1F1EC'
  },
  {
    iso2: 'VI',
    iso3: 'VIR',
    name: 'US Virgin Islands',
    localName: 'Virgin Islands of the United States',
    emoji: '🇻🇮',
    emojiCode: '1F1FB 1F1EE'
  },
  {
    iso2: 'BN',
    iso3: 'BRN',
    name: 'Brunei Darussalam',
    localName: 'Negara Brunei Darussalam',
    emoji: '🇧🇳',
    emojiCode: '1F1E7 1F1F3'
  },
  {
    iso2: 'BG',
    iso3: 'BGR',
    name: 'Bulgaria',
    localName: 'България',
    emoji: '🇧🇬',
    emojiCode: '1F1E7 1F1EC'
  },
  {
    iso2: 'BF',
    iso3: 'BFA',
    name: 'Burkina Faso',
    localName: 'Burkina Faso',
    emoji: '🇧🇫',
    emojiCode: '1F1E7 1F1EB'
  },
  {
    iso2: 'BI',
    iso3: 'BDI',
    name: 'Burundi',
    localName: 'Burundi',
    emoji: '🇧🇮',
    emojiCode: '1F1E7 1F1EE'
  },
  {
    iso2: 'KH',
    iso3: 'KHM',
    name: 'Cambodia',
    localName: 'Kâmpŭchéa',
    emoji: '🇰🇭',
    emojiCode: '1F1F0 1F1ED'
  },
  {
    iso2: 'CM',
    iso3: 'CMR',
    name: 'Cameroon',
    localName: 'Cameroon',
    emoji: '🇨🇲',
    emojiCode: '1F1E8 1F1F2'
  },
  {
    iso2: 'CA',
    iso3: 'CAN',
    name: 'Canada',
    localName: 'Canada',
    emoji: '🇨🇦',
    emojiCode: '1F1E8 1F1E6'
  },
  {
    iso2: 'CV',
    iso3: 'CPV',
    name: 'Cabo Verde',
    localName: 'Cabo Verde',
    emoji: '🇨🇻',
    emojiCode: '1F1E8 1F1FB'
  },
  {
    iso2: 'KY',
    iso3: 'CYM',
    name: 'Cayman Islands',
    localName: 'Cayman Islands',
    emoji: '🇰🇾',
    emojiCode: '1F1F0 1F1FE'
  },
  {
    iso2: 'CF',
    iso3: 'CAF',
    name: 'Central African Republic',
    localName: 'Ködörösêse tî Bêafrîka',
    emoji: '🇨🇫',
    emojiCode: '1F1E8 1F1EB'
  },
  {
    iso2: 'TD',
    iso3: 'TCD',
    name: 'Chad',
    localName: 'Tchad',
    emoji: '🇹🇩',
    emojiCode: '1F1F9 1F1E9'
  },
  {
    iso2: 'CL',
    iso3: 'CHL',
    name: 'Chile',
    localName: 'Chile',
    emoji: '🇨🇱',
    emojiCode: '1F1E8 1F1F1'
  },
  {
    iso2: 'CN',
    iso3: 'CHN',
    name: 'China',
    localName: '中国',
    emoji: '🇨🇳',
    emojiCode: '1F1E8 1F1F3'
  },
  {
    iso2: 'CX',
    iso3: 'CXR',
    name: 'Christmas Island',
    localName: 'Christmas Island',
    emoji: '🇨🇽',
    emojiCode: '1F1E8 1F1FD'
  },
  {
    iso2: 'CC',
    iso3: 'CCK',
    name: 'Cocos (Keeling) Islands',
    localName: 'Cocos (Keeling) Islands',
    emoji: '🇨🇨',
    emojiCode: '1F1E8 1F1E8'
  },
  {
    iso2: 'CO',
    iso3: 'COL',
    name: 'Colombia',
    localName: 'Colombia',
    emoji: '🇨🇴',
    emojiCode: '1F1E8 1F1F4'
  },
  {
    iso2: 'KM',
    iso3: 'COM',
    name: 'Comoros',
    localName: 'Komori',
    emoji: '🇰🇲',
    emojiCode: '1F1F0 1F1F2'
  },
  {
    iso2: 'CG',
    iso3: 'COG',
    name: 'Congo',
    localName: 'République du Congo',
    emoji: '🇨🇬',
    emojiCode: '1F1E8 1F1EC'
  },
  {
    iso2: 'CD',
    iso3: 'COD',
    name: 'Democratic Republic of the Congo',
    localName: 'République démocratique du Congo',
    emoji: '🇨🇩',
    emojiCode: '1F1E8 1F1E9'
  },
  {
    iso2: 'CI',
    iso3: 'CIV',
    name: 'Côte d\'Ivoire',
    localName: 'Côte d\'Ivoire',
    emoji: '🇨🇮',
    emojiCode: '1F1E8 1F1EE'
  },
  {
    iso2: 'CK',
    iso3: 'COK',
    name: 'Cook Islands',
    localName: 'Cook Islands',
    emoji: '🇨🇰',
    emojiCode: '1F1E8 1F1F0'
  },
  {
    iso2: 'CR',
    iso3: 'CRI',
    name: 'Costa Rica',
    localName: 'Costa Rica',
    emoji: '🇨🇷',
    emojiCode: '1F1E8 1F1F7'
  },
  {
    iso2: 'HR',
    iso3: 'HRV',
    name: 'Croatia',
    localName: 'Hrvatska',
    emoji: '🇭🇷',
    emojiCode: '1F1ED 1F1F7'
  },
  {
    iso2: 'CU',
    iso3: 'CUB',
    name: 'Cuba',
    localName: 'Cuba',
    emoji: '🇨🇺',
    emojiCode: '1F1E8 1F1FA'
  },
  {
    iso2: 'CW',
    iso3: 'CUW',
    name: 'Curaçao',
    localName: 'Curaçao',
    emoji: '🇨🇼',
    emojiCode: '1F1E8 1F1FC'
  },
  {
    iso2: 'CY',
    iso3: 'CYP',
    name: 'Cyprus',
    localName: 'Κύπρος',
    emoji: '🇨🇾',
    emojiCode: '1F1E8 1F1FE'
  },
  {
    iso2: 'CZ',
    iso3: 'CZE',
    name: 'Czech Republic',
    localName: 'Česká republika',
    emoji: '🇨🇿',
    emojiCode: '1F1E8 1F1FF'
  },
  {
    iso2: 'DK',
    iso3: 'DNK',
    name: 'Denmark',
    localName: 'Danmark',
    emoji: '🇩🇰',
    emojiCode: '1F1E9 1F1F0'
  },
  {
    iso2: 'DJ',
    iso3: 'DJI',
    name: 'Djibouti',
    localName: 'Djibouti',
    emoji: '🇩🇯',
    emojiCode: '1F1E9 1F1EF'
  },
  {
    iso2: 'DM',
    iso3: 'DMA',
    name: 'Dominica',
    localName: 'Dominica',
    emoji: '🇩🇲',
    emojiCode: '1F1E9 1F1F2'
  },
  {
    iso2: 'DO',
    iso3: 'DOM',
    name: 'Dominican Republic',
    localName: 'República Dominicana',
    emoji: '🇩🇴',
    emojiCode: '1F1E9 1F1F4'
  },
  {
    iso2: 'EC',
    iso3: 'ECU',
    name: 'Ecuador',
    localName: 'Ecuador',
    emoji: '🇪🇨',
    emojiCode: '1F1EA 1F1E8'
  },
  {
    iso2: 'EG',
    iso3: 'EGY',
    name: 'Egypt',
    localName: 'مصر‎',
    emoji: '🇪🇬',
    emojiCode: '1F1EA 1F1EC'
  },
  {
    iso2: 'SV',
    iso3: 'SLV',
    name: 'El Salvador',
    localName: 'El Salvador',
    emoji: '🇸🇻',
    emojiCode: '1F1F8 1F1FB'
  },
  {
    iso2: 'GQ',
    iso3: 'GNQ',
    name: 'Equatorial Guinea',
    localName: 'Guinea Ecuatorial',
    emoji: '🇬🇶',
    emojiCode: '1F1EC 1F1F6'
  },
  {
    iso2: 'ER',
    iso3: 'ERI',
    name: 'Eritrea',
    localName: 'ኤርትራ',
    emoji: '🇪🇷',
    emojiCode: '1F1EA 1F1F7'
  },
  {
    iso2: 'EE',
    iso3: 'EST',
    name: 'Estonia',
    localName: 'Eesti',
    emoji: '🇪🇪',
    emojiCode: '1F1EA 1F1EA'
  },
  {
    iso2: 'ET',
    iso3: 'ETH',
    name: 'Ethiopia',
    localName: 'ኢትዮጵያ',
    emoji: '🇪🇹',
    emojiCode: '1F1EA 1F1F9'
  },
  {
    iso2: 'FK',
    iso3: 'FLK',
    name: 'Falkland Islands',
    localName: 'Falkland Islands',
    emoji: '🇫🇰',
    emojiCode: '1F1EB 1F1F0'
  },
  {
    iso2: 'FO',
    iso3: 'FRO',
    name: 'Faroe Islands',
    localName: 'Føroyar',
    emoji: '🇫🇴',
    emojiCode: '1F1EB 1F1F4'
  },
  {
    iso2: 'FJ',
    iso3: 'FJI',
    name: 'Fiji',
    localName: 'Fiji',
    emoji: '🇫🇯',
    emojiCode: '1F1EB 1F1EF'
  },
  {
    iso2: 'FI',
    iso3: 'FIN',
    name: 'Finland',
    localName: 'Suomi',
    emoji: '🇫🇮',
    emojiCode: '1F1EB 1F1EE'
  },
  {
    iso2: 'FR',
    iso3: 'FRA',
    name: 'France',
    localName: 'France',
    emoji: '🇫🇷',
    emojiCode: '1F1EB 1F1F7'
  },
  {
    iso2: 'GF',
    iso3: 'GUF',
    name: 'French Guiana',
    localName: 'Guyane française',
    emoji: '🇬🇫',
    emojiCode: '1F1EC 1F1EB'
  },
  {
    iso2: 'PF',
    iso3: 'PYF',
    name: 'French Polynesia',
    localName: 'Polynésie française',
    emoji: '🇵🇫',
    emojiCode: '1F1F5 1F1EB'
  },
  {
    iso2: 'TF',
    iso3: 'ATF',
    name: 'French Southern Territories',
    localName: 'Territoire des Terres australes et antarctiques françaises',
    emoji: '🇹🇫',
    emojiCode: '1F1F9 1F1EB'
  },
  {
    iso2: 'GA',
    iso3: 'GAB',
    name: 'Gabon',
    localName: 'Gabon',
    emoji: '🇬🇦',
    emojiCode: '1F1EC 1F1E6'
  },
  {
    iso2: 'GM',
    iso3: 'GMB',
    name: 'Gambia',
    localName: 'Gambia',
    emoji: '🇬🇲',
    emojiCode: '1F1EC 1F1F2'
  },
  {
    iso2: 'GE',
    iso3: 'GEO',
    name: 'Georgia',
    localName: 'საქართველო',
    emoji: '🇬🇪',
    emojiCode: '1F1EC 1F1EA'
  },
  {
    iso2: 'DE',
    iso3: 'DEU',
    name: 'Germany',
    localName: 'Deutschland',
    emoji: '🇩🇪',
    emojiCode: '1F1E9 1F1EA'
  },
  {
    iso2: 'GH',
    iso3: 'GHA',
    name: 'Ghana',
    localName: 'Ghana',
    emoji: '🇬🇭',
    emojiCode: '1F1EC 1F1ED'
  },
  {
    iso2: 'GI',
    iso3: 'GIB',
    name: 'Gibraltar',
    localName: 'Gibraltar',
    emoji: '🇬🇮',
    emojiCode: '1F1EC 1F1EE'
  },
  {
    iso2: 'GR',
    iso3: 'GRC',
    name: 'Greece',
    localName: 'Ελλάδα',
    emoji: '🇬🇷',
    emojiCode: '1F1EC 1F1F7'
  },
  {
    iso2: 'GL',
    iso3: 'GRL',
    name: 'Greenland',
    localName: 'Kalaallit Nunaat',
    emoji: '🇬🇱',
    emojiCode: '1F1EC 1F1F1'
  },
  {
    iso2: 'GD',
    iso3: 'GRD',
    name: 'Grenada',
    localName: 'Grenada',
    emoji: '🇬🇩',
    emojiCode: '1F1EC 1F1E9'
  },
  {
    iso2: 'GP',
    iso3: 'GLP',
    name: 'Guadeloupe',
    localName: 'Guadeloupe',
    emoji: '🇬🇵',
    emojiCode: '1F1EC 1F1F5'
  },
  {
    iso2: 'GU',
    iso3: 'GUM',
    name: 'Guam',
    localName: 'Guam',
    emoji: '🇬🇺',
    emojiCode: '1F1EC 1F1FA'
  },
  {
    iso2: 'GT',
    iso3: 'GTM',
    name: 'Guatemala',
    localName: 'Guatemala',
    emoji: '🇬🇹',
    emojiCode: '1F1EC 1F1F9'
  },
  {
    iso2: 'GG',
    iso3: 'GGY',
    name: 'Guernsey',
    localName: 'Guernsey',
    emoji: '🇬🇬',
    emojiCode: '1F1EC 1F1EC'
  },
  {
    iso2: 'GN',
    iso3: 'GIN',
    name: 'Guinea',
    localName: 'Guinée',
    emoji: '🇬🇳',
    emojiCode: '1F1EC 1F1F3'
  },
  {
    iso2: 'GW',
    iso3: 'GNB',
    name: 'Guinea-Bissau',
    localName: 'Guiné-Bissau',
    emoji: '🇬🇼',
    emojiCode: '1F1EC 1F1FC'
  },
  {
    iso2: 'GY',
    iso3: 'GUY',
    name: 'Guyana',
    localName: 'Guyana',
    emoji: '🇬🇾',
    emojiCode: '1F1EC 1F1FE'
  },
  {
    iso2: 'HT',
    iso3: 'HTI',
    name: 'Haiti',
    localName: 'Haïti',
    emoji: '🇭🇹',
    emojiCode: '1F1ED 1F1F9'
  },
  {
    iso2: 'HM',
    iso3: 'HMD',
    name: 'Heard Island and McDonald Islands',
    localName: 'Heard Island and McDonald Islands',
    emoji: '🇭🇲',
    emojiCode: '1F1ED 1F1F2'
  },
  {
    iso2: 'VA',
    iso3: 'VAT',
    name: 'Holy See',
    localName: 'Sancta Sedes',
    emoji: '🇻🇦',
    emojiCode: '1F1FB 1F1E6'
  },
  {
    iso2: 'HN',
    iso3: 'HND',
    name: 'Honduras',
    localName: 'Honduras',
    emoji: '🇭🇳',
    emojiCode: '1F1ED 1F1F3'
  },
  {
    iso2: 'HK',
    iso3: 'HKG',
    name: 'Hong Kong',
    localName: '香港',
    emoji: '🇭🇰',
    emojiCode: '1F1ED 1F1F0'
  },
  {
    iso2: 'HU',
    iso3: 'HUN',
    name: 'Hungary',
    localName: 'Magyarország',
    emoji: '🇭🇺',
    emojiCode: '1F1ED 1F1FA'
  },
  {
    iso2: 'IS',
    iso3: 'ISL',
    name: 'Iceland',
    localName: 'Ísland',
    emoji: '🇮🇸',
    emojiCode: '1F1EE 1F1F8'
  },
  {
    iso2: 'IN',
    iso3: 'IND',
    name: 'India',
    localName: 'भारत',
    emoji: '🇮🇳',
    emojiCode: '1F1EE 1F1F3'
  },
  {
    iso2: 'ID',
    iso3: 'IDN',
    name: 'Indonesia',
    localName: 'Indonesia',
    emoji: '🇮🇩',
    emojiCode: '1F1EE 1F1E9'
  },
  {
    iso2: 'IR',
    iso3: 'IRN',
    name: 'Iran',
    localName: 'ایران',
    emoji: '🇮🇷',
    emojiCode: '1F1EE 1F1F7'
  },
  {
    iso2: 'IQ',
    iso3: 'IRQ',
    name: 'Iraq',
    localName: 'العراق',
    emoji: '🇮🇶',
    emojiCode: '1F1EE 1F1F6'
  },
  {
    iso2: 'IE',
    iso3: 'IRL',
    name: 'Ireland',
    localName: 'Éire',
    emoji: '🇮🇪',
    emojiCode: '1F1EE 1F1EA'
  },
  {
    iso2: 'IM',
    iso3: 'IMN',
    name: 'Isle of Man',
    localName: 'Isle of Man',
    emoji: '🇮🇲',
    emojiCode: '1F1EE 1F1F2'
  },
  {
    iso2: 'IL',
    iso3: 'ISR',
    name: 'Israel',
    localName: 'יִשְׂרָאֵל',
    emoji: '🇮🇱',
    emojiCode: '1F1EE 1F1F1'
  },
  {
    iso2: 'IT',
    iso3: 'ITA',
    name: 'Italy',
    localName: 'Italia',
    emoji: '🇮🇹',
    emojiCode: '1F1EE 1F1F9'
  },
  {
    iso2: 'JM',
    iso3: 'JAM',
    name: 'Jamaica',
    localName: 'Jamaica',
    emoji: '🇯🇲',
    emojiCode: '1F1EF 1F1F2'
  },
  {
    iso2: 'JP',
    iso3: 'JPN',
    name: 'Japan',
    localName: '日本',
    emoji: '🇯🇵',
    emojiCode: '1F1EF 1F1F5'
  },
  {
    iso2: 'JE',
    iso3: 'JEY',
    name: 'Jersey',
    localName: 'Jersey',
    emoji: '🇯🇪',
    emojiCode: '1F1EF 1F1EA'
  },
  {
    iso2: 'JO',
    iso3: 'JOR',
    name: 'Jordan',
    localName: 'الأردن',
    emoji: '🇯🇴',
    emojiCode: '1F1EF 1F1F4'
  },
  {
    iso2: 'KZ',
    iso3: 'KAZ',
    name: 'Kazakhstan',
    localName: 'Қазақстан',
    emoji: '🇰🇿',
    emojiCode: '1F1F0 1F1FF'
  },
  {
    iso2: 'KE',
    iso3: 'KEN',
    name: 'Kenya',
    localName: 'Kenya',
    emoji: '🇰🇪',
    emojiCode: '1F1F0 1F1EA'
  },
  {
    iso2: 'KI',
    iso3: 'KIR',
    name: 'Kiribati',
    localName: 'Kiribati',
    emoji: '🇰🇮',
    emojiCode: '1F1F0 1F1EE'
  },
  {
    iso2: 'KW',
    iso3: 'KWT',
    name: 'Kuwait',
    localName: 'الكويت',
    emoji: '🇰🇼',
    emojiCode: '1F1F0 1F1FC'
  },
  {
    iso2: 'KG',
    iso3: 'KGZ',
    name: 'Kyrgyzstan',
    localName: 'Кыргызстан',
    emoji: '🇰🇬',
    emojiCode: '1F1F0 1F1EC'
  },
  {
    iso2: 'LA',
    iso3: 'LAO',
    name: 'Laos',
    localName: 'ສປປລາວ',
    emoji: '🇱🇦',
    emojiCode: '1F1F1 1F1E6'
  },
  {
    iso2: 'LV',
    iso3: 'LVA',
    name: 'Latvia',
    localName: 'Latvija',
    emoji: '🇱🇻',
    emojiCode: '1F1F1 1F1FB'
  },
  {
    iso2: 'LB',
    iso3: 'LBN',
    name: 'Lebanon',
    localName: 'لبنان',
    emoji: '🇱🇧',
    emojiCode: '1F1F1 1F1E7'
  },
  {
    iso2: 'LS',
    iso3: 'LSO',
    name: 'Lesotho',
    localName: 'Lesotho',
    emoji: '🇱🇸',
    emojiCode: '1F1F1 1F1F8'
  },
  {
    iso2: 'LR',
    iso3: 'LBR',
    name: 'Liberia',
    localName: 'Liberia',
    emoji: '🇱🇷',
    emojiCode: '1F1F1 1F1F7'
  },
  {
    iso2: 'LY',
    iso3: 'LBY',
    name: 'Libya',
    localName: '‏ليبيا',
    emoji: '🇱🇾',
    emojiCode: '1F1F1 1F1FE'
  },
  {
    iso2: 'LI',
    iso3: 'LIE',
    name: 'Liechtenstein',
    localName: 'Liechtenstein',
    emoji: '🇱🇮',
    emojiCode: '1F1F1 1F1EE'
  },
  {
    iso2: 'LT',
    iso3: 'LTU',
    name: 'Lithuania',
    localName: 'Lietuva',
    emoji: '🇱🇹',
    emojiCode: '1F1F1 1F1F9'
  },
  {
    iso2: 'LU',
    iso3: 'LUX',
    name: 'Luxembourg',
    localName: 'Luxembourg',
    emoji: '🇱🇺',
    emojiCode: '1F1F1 1F1FA'
  },
  {
    iso2: 'MO',
    iso3: 'MAC',
    name: 'Macao',
    localName: '澳門',
    emoji: '🇲🇴',
    emojiCode: '1F1F2 1F1F4'
  },
  {
    iso2: 'MK',
    iso3: 'MKD',
    name: 'North Macedonia',
    localName: 'Македонија',
    emoji: '🇲🇰',
    emojiCode: '1F1F2 1F1F0'
  },
  {
    iso2: 'MG',
    iso3: 'MDG',
    name: 'Madagascar',
    localName: 'Madagasikara',
    emoji: '🇲🇬',
    emojiCode: '1F1F2 1F1EC'
  },
  {
    iso2: 'MW',
    iso3: 'MWI',
    name: 'Malawi',
    localName: 'Malawi',
    emoji: '🇲🇼',
    emojiCode: '1F1F2 1F1FC'
  },
  {
    iso2: 'MY',
    iso3: 'MYS',
    name: 'Malaysia',
    localName: 'Malaysia',
    emoji: '🇲🇾',
    emojiCode: '1F1F2 1F1FE'
  },
  {
    iso2: 'MV',
    iso3: 'MDV',
    name: 'Maldives',
    localName: 'Maldives',
    emoji: '🇲🇻',
    emojiCode: '1F1F2 1F1FB'
  },
  {
    iso2: 'ML',
    iso3: 'MLI',
    name: 'Mali',
    localName: 'Mali',
    emoji: '🇲🇱',
    emojiCode: '1F1F2 1F1F1'
  },
  {
    iso2: 'MT',
    iso3: 'MLT',
    name: 'Malta',
    localName: 'Malta',
    emoji: '🇲🇹',
    emojiCode: '1F1F2 1F1F9'
  },
  {
    iso2: 'MH',
    iso3: 'MHL',
    name: 'Marshall Islands',
    localName: 'M̧ajeļ',
    emoji: '🇲🇭',
    emojiCode: '1F1F2 1F1ED'
  },
  {
    iso2: 'MQ',
    iso3: 'MTQ',
    name: 'Martinique',
    localName: 'Martinique',
    emoji: '🇲🇶',
    emojiCode: '1F1F2 1F1F6'
  },
  {
    iso2: 'MR',
    iso3: 'MRT',
    name: 'Mauritania',
    localName: 'موريتانيا',
    emoji: '🇲🇷',
    emojiCode: '1F1F2 1F1F7'
  },
  {
    iso2: 'MU',
    iso3: 'MUS',
    name: 'Mauritius',
    localName: 'Maurice',
    emoji: '🇲🇺',
    emojiCode: '1F1F2 1F1FA'
  },
  {
    iso2: 'YT',
    iso3: 'MYT',
    name: 'Mayotte',
    localName: 'Mayotte',
    emoji: '🇾🇹',
    emojiCode: '1F1FE 1F1F9'
  },
  {
    iso2: 'MX',
    iso3: 'MEX',
    name: 'Mexico',
    localName: 'México',
    emoji: '🇲🇽',
    emojiCode: '1F1F2 1F1FD'
  },
  {
    iso2: 'FM',
    iso3: 'FSM',
    name: 'Micronesia (Federated States of)',
    localName: 'Micronesia',
    emoji: '🇫🇲',
    emojiCode: '1F1EB 1F1F2'
  },
  {
    iso2: 'MD',
    iso3: 'MDA',
    name: 'Moldova',
    localName: 'Moldova',
    emoji: '🇲🇩',
    emojiCode: '1F1F2 1F1E9'
  },
  {
    iso2: 'MC',
    iso3: 'MCO',
    name: 'Monaco',
    localName: 'Monaco',
    emoji: '🇲🇨',
    emojiCode: '1F1F2 1F1E8'
  },
  {
    iso2: 'MN',
    iso3: 'MNG',
    name: 'Mongolia',
    localName: 'Монгол улс',
    emoji: '🇲🇳',
    emojiCode: '1F1F2 1F1F3'
  },
  {
    iso2: 'ME',
    iso3: 'MNE',
    name: 'Montenegro',
    localName: 'Црна Гора',
    emoji: '🇲🇪',
    emojiCode: '1F1F2 1F1EA'
  },
  {
    iso2: 'MS',
    iso3: 'MSR',
    name: 'Montserrat',
    localName: 'Montserrat',
    emoji: '🇲🇸',
    emojiCode: '1F1F2 1F1F8'
  },
  {
    iso2: 'MA',
    iso3: 'MAR',
    name: 'Morocco',
    localName: 'المغرب',
    emoji: '🇲🇦',
    emojiCode: '1F1F2 1F1E6'
  },
  {
    iso2: 'MZ',
    iso3: 'MOZ',
    name: 'Mozambique',
    localName: 'Moçambique',
    emoji: '🇲🇿',
    emojiCode: '1F1F2 1F1FF'
  },
  {
    iso2: 'MM',
    iso3: 'MMR',
    name: 'Myanmar',
    localName: 'Myanma',
    emoji: '🇲🇲',
    emojiCode: '1F1F2 1F1F2'
  },
  {
    iso2: 'NA',
    iso3: 'NAM',
    name: 'Namibia',
    localName: 'Namibia',
    emoji: '🇳🇦',
    emojiCode: '1F1F3 1F1E6'
  },
  {
    iso2: 'NR',
    iso3: 'NRU',
    name: 'Nauru',
    localName: 'Nauru',
    emoji: '🇳🇷',
    emojiCode: '1F1F3 1F1F7'
  },
  {
    iso2: 'NP',
    iso3: 'NPL',
    name: 'Nepal',
    localName: 'नेपाल',
    emoji: '🇳🇵',
    emojiCode: '1F1F3 1F1F5'
  },
  {
    iso2: 'NL',
    iso3: 'NLD',
    name: 'Netherlands',
    localName: 'Nederland',
    emoji: '🇳🇱',
    emojiCode: '1F1F3 1F1F1'
  },
  {
    iso2: 'NC',
    iso3: 'NCL',
    name: 'New Caledonia',
    localName: 'Nouvelle-Calédonie',
    emoji: '🇳🇨',
    emojiCode: '1F1F3 1F1E8'
  },
  {
    iso2: 'NZ',
    iso3: 'NZL',
    name: 'New Zealand',
    localName: 'New Zealand',
    emoji: '🇳🇿',
    emojiCode: '1F1F3 1F1FF'
  },
  {
    iso2: 'NI',
    iso3: 'NIC',
    name: 'Nicaragua',
    localName: 'Nicaragua',
    emoji: '🇳🇮',
    emojiCode: '1F1F3 1F1EE'
  },
  {
    iso2: 'NE',
    iso3: 'NER',
    name: 'Niger',
    localName: 'Niger',
    emoji: '🇳🇪',
    emojiCode: '1F1F3 1F1EA'
  },
  {
    iso2: 'NG',
    iso3: 'NGA',
    name: 'Nigeria',
    localName: 'Nigeria',
    emoji: '🇳🇬',
    emojiCode: '1F1F3 1F1EC'
  },
  {
    iso2: 'NU',
    iso3: 'NIU',
    name: 'Niue',
    localName: 'Niuē',
    emoji: '🇳🇺',
    emojiCode: '1F1F3 1F1FA'
  },
  {
    iso2: 'NF',
    iso3: 'NFK',
    name: 'Norfolk Island',
    localName: 'Norfolk Island',
    emoji: '🇳🇫',
    emojiCode: '1F1F3 1F1EB'
  },
  {
    iso2: 'KP',
    iso3: 'PRK',
    name: 'North Korea',
    localName: '북한',
    emoji: '🇰🇵',
    emojiCode: '1F1F0 1F1F5'
  },
  {
    iso2: 'MP',
    iso3: 'MNP',
    name: 'Northern Mariana Islands',
    localName: 'Northern Mariana Islands',
    emoji: '🇲🇵',
    emojiCode: '1F1F2 1F1F5'
  },
  {
    iso2: 'NO',
    iso3: 'NOR',
    name: 'Norway',
    localName: 'Norge',
    emoji: '🇳🇴',
    emojiCode: '1F1F3 1F1F4'
  },
  {
    iso2: 'OM',
    iso3: 'OMN',
    name: 'Oman',
    localName: 'عمان',
    emoji: '🇴🇲',
    emojiCode: '1F1F4 1F1F2'
  },
  {
    iso2: 'PK',
    iso3: 'PAK',
    name: 'Pakistan',
    localName: 'Pakistan',
    emoji: '🇵🇰',
    emojiCode: '1F1F5 1F1F0'
  },
  {
    iso2: 'PW',
    iso3: 'PLW',
    name: 'Palau',
    localName: 'Palau',
    emoji: '🇵🇼',
    emojiCode: '1F1F5 1F1FC'
  },
  {
    iso2: 'PS',
    iso3: 'PSE',
    name: 'Palestine',
    localName: 'فلسطين',
    emoji: '🇵🇸',
    emojiCode: '1F1F5 1F1F8'
  },
  {
    iso2: 'PA',
    iso3: 'PAN',
    name: 'Panama',
    localName: 'Panamá',
    emoji: '🇵🇦',
    emojiCode: '1F1F5 1F1E6'
  },
  {
    iso2: 'PG',
    iso3: 'PNG',
    name: 'Papua New Guinea',
    localName: 'Papua Niugini',
    emoji: '🇵🇬',
    emojiCode: '1F1F5 1F1EC'
  },
  {
    iso2: 'PY',
    iso3: 'PRY',
    name: 'Paraguay',
    localName: 'Paraguay',
    emoji: '🇵🇾',
    emojiCode: '1F1F5 1F1FE'
  },
  {
    iso2: 'PE',
    iso3: 'PER',
    name: 'Peru',
    localName: 'Perú',
    emoji: '🇵🇪',
    emojiCode: '1F1F5 1F1EA'
  },
  {
    iso2: 'PH',
    iso3: 'PHL',
    name: 'Philippines',
    localName: 'Pilipinas',
    emoji: '🇵🇭',
    emojiCode: '1F1F5 1F1ED'
  },
  {
    iso2: 'PN',
    iso3: 'PCN',
    name: 'Pitcairn',
    localName: 'Pitcairn Islands',
    emoji: '🇵🇳',
    emojiCode: '1F1F5 1F1F3'
  },
  {
    iso2: 'PL',
    iso3: 'POL',
    name: 'Poland',
    localName: 'Polska',
    emoji: '🇵🇱',
    emojiCode: '1F1F5 1F1F1'
  },
  {
    iso2: 'PT',
    iso3: 'PRT',
    name: 'Portugal',
    localName: 'Portugal',
    emoji: '🇵🇹',
    emojiCode: '1F1F5 1F1F9'
  },
  {
    iso2: 'PR',
    iso3: 'PRI',
    name: 'Puerto Rico',
    localName: 'Puerto Rico',
    emoji: '🇵🇷',
    emojiCode: '1F1F5 1F1F7'
  },
  {
    iso2: 'QA',
    iso3: 'QAT',
    name: 'Qatar',
    localName: 'قطر',
    emoji: '🇶🇦',
    emojiCode: '1F1F6 1F1E6'
  },
  {
    iso2: 'XK',
    iso3: 'XKX',
    name: 'Kosovo',
    localName: 'Republika e Kosovës',
    emoji: '🇽🇰',
    emojiCode: '1F1FD 1F1F0'
  },
  {
    iso2: 'RE',
    iso3: 'REU',
    name: 'Réunion',
    localName: 'La Réunion',
    emoji: '🇷🇪',
    emojiCode: '1F1F7 1F1EA'
  },
  {
    iso2: 'RO',
    iso3: 'ROU',
    name: 'Romania',
    localName: 'România',
    emoji: '🇷🇴',
    emojiCode: '1F1F7 1F1F4'
  },
  {
    iso2: 'RU',
    iso3: 'RUS',
    name: 'Russia',
    localName: 'Россия',
    emoji: '🇷🇺',
    emojiCode: '1F1F7 1F1FA'
  },
  {
    iso2: 'RW',
    iso3: 'RWA',
    name: 'Rwanda',
    localName: 'Rwanda',
    emoji: '🇷🇼',
    emojiCode: '1F1F7 1F1FC'
  },
  {
    iso2: 'BL',
    iso3: 'BLM',
    name: 'Saint Barthélemy',
    localName: 'Saint-Barthélemy',
    emoji: '🇧🇱',
    emojiCode: '1F1E7 1F1F1'
  },
  {
    iso2: 'SH',
    iso3: 'SHN',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    localName: 'Saint Helena',
    emoji: '🇸🇭',
    emojiCode: '1F1F8 1F1ED'
  },
  {
    iso2: 'KN',
    iso3: 'KNA',
    name: 'Saint Kitts and Nevis',
    localName: 'Saint Kitts and Nevis',
    emoji: '🇰🇳',
    emojiCode: '1F1F0 1F1F3'
  },
  {
    iso2: 'LC',
    iso3: 'LCA',
    name: 'Saint Lucia',
    localName: 'Saint Lucia',
    emoji: '🇱🇨',
    emojiCode: '1F1F1 1F1E8'
  },
  {
    iso2: 'MF',
    iso3: 'MAF',
    name: 'Saint Martin',
    localName: 'Saint-Martin',
    emoji: '🇲🇫',
    emojiCode: '1F1F2 1F1EB'
  },
  {
    iso2: 'PM',
    iso3: 'SPM',
    name: 'Saint Pierre and Miquelon',
    localName: 'Saint-Pierre-et-Miquelon',
    emoji: '🇵🇲',
    emojiCode: '1F1F5 1F1F2'
  },
  {
    iso2: 'VC',
    iso3: 'VCT',
    name: 'Saint Vincent and the Grenadines',
    localName: 'Saint Vincent and the Grenadines',
    emoji: '🇻🇨',
    emojiCode: '1F1FB 1F1E8'
  },
  {
    iso2: 'WS',
    iso3: 'WSM',
    name: 'Samoa',
    localName: 'Samoa',
    emoji: '🇼🇸',
    emojiCode: '1F1FC 1F1F8'
  },
  {
    iso2: 'SM',
    iso3: 'SMR',
    name: 'San Marino',
    localName: 'San Marino',
    emoji: '🇸🇲',
    emojiCode: '1F1F8 1F1F2'
  },
  {
    iso2: 'ST',
    iso3: 'STP',
    name: 'Sao Tome and Principe',
    localName: 'São Tomé e Príncipe',
    emoji: '🇸🇹',
    emojiCode: '1F1F8 1F1F9'
  },
  {
    iso2: 'SA',
    iso3: 'SAU',
    name: 'Saudi Arabia',
    localName: 'العربية السعودية',
    emoji: '🇸🇦',
    emojiCode: '1F1F8 1F1E6'
  },
  {
    iso2: 'SN',
    iso3: 'SEN',
    name: 'Senegal',
    localName: 'Sénégal',
    emoji: '🇸🇳',
    emojiCode: '1F1F8 1F1F3'
  },
  {
    iso2: 'RS',
    iso3: 'SRB',
    name: 'Serbia',
    localName: 'Србија',
    emoji: '🇷🇸',
    emojiCode: '1F1F7 1F1F8'
  },
  {
    iso2: 'SC',
    iso3: 'SYC',
    name: 'Seychelles',
    localName: 'Seychelles',
    emoji: '🇸🇨',
    emojiCode: '1F1F8 1F1E8'
  },
  {
    iso2: 'SL',
    iso3: 'SLE',
    name: 'Sierra Leone',
    localName: 'Sierra Leone',
    emoji: '🇸🇱',
    emojiCode: '1F1F8 1F1F1'
  },
  {
    iso2: 'SG',
    iso3: 'SGP',
    name: 'Singapore',
    localName: 'Singapore',
    emoji: '🇸🇬',
    emojiCode: '1F1F8 1F1EC'
  },
  {
    iso2: 'SX',
    iso3: 'SXM',
    name: 'Sint Maarten',
    localName: 'Sint Maarten',
    emoji: '🇸🇽',
    emojiCode: '1F1F8 1F1FD'
  },
  {
    iso2: 'SK',
    iso3: 'SVK',
    name: 'Slovakia',
    localName: 'Slovensko',
    emoji: '🇸🇰',
    emojiCode: '1F1F8 1F1F0'
  },
  {
    iso2: 'SI',
    iso3: 'SVN',
    name: 'Slovenia',
    localName: 'Slovenija',
    emoji: '🇸🇮',
    emojiCode: '1F1F8 1F1EE'
  },
  {
    iso2: 'SB',
    iso3: 'SLB',
    name: 'Solomon Islands',
    localName: 'Solomon Islands',
    emoji: '🇸🇧',
    emojiCode: '1F1F8 1F1E7'
  },
  {
    iso2: 'SO',
    iso3: 'SOM',
    name: 'Somalia',
    localName: 'Soomaaliya',
    emoji: '🇸🇴',
    emojiCode: '1F1F8 1F1F4'
  },
  {
    iso2: 'ZA',
    iso3: 'ZAF',
    name: 'South Africa',
    localName: 'South Africa',
    emoji: '🇿🇦',
    emojiCode: '1F1FF 1F1E6'
  },
  {
    iso2: 'GS',
    iso3: 'SGS',
    name: 'South Georgia and the South Sandwich Islands',
    localName: 'South Georgia',
    emoji: '🇬🇸',
    emojiCode: '1F1EC 1F1F8'
  },
  {
    iso2: 'KR',
    iso3: 'KOR',
    name: 'South Korea',
    localName: '대한민국',
    emoji: '🇰🇷',
    emojiCode: '1F1F0 1F1F7'
  },
  {
    iso2: 'SS',
    iso3: 'SSD',
    name: 'South Sudan',
    localName: 'South Sudan',
    emoji: '🇸🇸',
    emojiCode: '1F1F8 1F1F8'
  },
  {
    iso2: 'ES',
    iso3: 'ESP',
    name: 'Spain',
    localName: 'España',
    emoji: '🇪🇸',
    emojiCode: '1F1EA 1F1F8'
  },
  {
    iso2: 'LK',
    iso3: 'LKA',
    name: 'Sri Lanka',
    localName: 'śrī laṃkāva',
    emoji: '🇱🇰',
    emojiCode: '1F1F1 1F1F0'
  },
  {
    iso2: 'SD',
    iso3: 'SDN',
    name: 'Sudan',
    localName: 'السودان',
    emoji: '🇸🇩',
    emojiCode: '1F1F8 1F1E9'
  },
  {
    iso2: 'SR',
    iso3: 'SUR',
    name: 'Suriname',
    localName: 'Suriname',
    emoji: '🇸🇷',
    emojiCode: '1F1F8 1F1F7'
  },
  {
    iso2: 'SJ',
    iso3: 'SJM',
    name: 'Svalbard and Jan Mayen',
    localName: 'Svalbard og Jan Mayen',
    emoji: '🇸🇯',
    emojiCode: '1F1F8 1F1EF'
  },
  {
    iso2: 'SZ',
    iso3: 'SWZ',
    name: 'Swaziland',
    localName: 'Swaziland',
    emoji: '🇸🇿',
    emojiCode: '1F1F8 1F1FF'
  },
  {
    iso2: 'SE',
    iso3: 'SWE',
    name: 'Sweden',
    localName: 'Sverige',
    emoji: '🇸🇪',
    emojiCode: '1F1F8 1F1EA'
  },
  {
    iso2: 'CH',
    iso3: 'CHE',
    name: 'Switzerland',
    localName: 'Schweiz',
    emoji: '🇨🇭',
    emojiCode: '1F1E8 1F1ED'
  },
  {
    iso2: 'SY',
    iso3: 'SYR',
    name: 'Syria',
    localName: 'سوريا',
    emoji: '🇸🇾',
    emojiCode: '1F1F8 1F1FE'
  },
  {
    iso2: 'TW',
    iso3: 'TWN',
    name: 'Taiwan',
    localName: '臺灣',
    emoji: '🇹🇼',
    emojiCode: '1F1F9 1F1FC'
  },
  {
    iso2: 'TJ',
    iso3: 'TJK',
    name: 'Tajikistan',
    localName: 'Тоҷикистон',
    emoji: '🇹🇯',
    emojiCode: '1F1F9 1F1EF'
  },
  {
    iso2: 'TZ',
    iso3: 'TZA',
    name: 'Tanzania',
    localName: 'Tanzania',
    emoji: '🇹🇿',
    emojiCode: '1F1F9 1F1FF'
  },
  {
    iso2: 'TH',
    iso3: 'THA',
    name: 'Thailand',
    localName: 'ประเทศไทย',
    emoji: '🇹🇭',
    emojiCode: '1F1F9 1F1ED'
  },
  {
    iso2: 'TL',
    iso3: 'TLS',
    name: 'Timor-Leste',
    localName: 'Timor-Leste',
    emoji: '🇹🇱',
    emojiCode: '1F1F9 1F1F1'
  },
  {
    iso2: 'TG',
    iso3: 'TGO',
    name: 'Togo',
    localName: 'Togo',
    emoji: '🇹🇬',
    emojiCode: '1F1F9 1F1EC'
  },
  {
    iso2: 'TK',
    iso3: 'TKL',
    name: 'Tokelau',
    localName: 'Tokelau',
    emoji: '🇹🇰',
    emojiCode: '1F1F9 1F1F0'
  },
  {
    iso2: 'TO',
    iso3: 'TON',
    name: 'Tonga',
    localName: 'Tonga',
    emoji: '🇹🇴',
    emojiCode: '1F1F9 1F1F4'
  },
  {
    iso2: 'TT',
    iso3: 'TTO',
    name: 'Trinidad and Tobago',
    localName: 'Trinidad and Tobago',
    emoji: '🇹🇹',
    emojiCode: '1F1F9 1F1F9'
  },
  {
    iso2: 'TN',
    iso3: 'TUN',
    name: 'Tunisia',
    localName: 'تونس',
    emoji: '🇹🇳',
    emojiCode: '1F1F9 1F1F3'
  },
  {
    iso2: 'TR',
    iso3: 'TUR',
    name: 'Turkey',
    localName: 'Türkiye',
    emoji: '🇹🇷',
    emojiCode: '1F1F9 1F1F7'
  },
  {
    iso2: 'TM',
    iso3: 'TKM',
    name: 'Turkmenistan',
    localName: 'Türkmenistan',
    emoji: '🇹🇲',
    emojiCode: '1F1F9 1F1F2'
  },
  {
    iso2: 'TC',
    iso3: 'TCA',
    name: 'Turks and Caicos Islands',
    localName: 'Turks and Caicos Islands',
    emoji: '🇹🇨',
    emojiCode: '1F1F9 1F1E8'
  },
  {
    iso2: 'TV',
    iso3: 'TUV',
    name: 'Tuvalu',
    localName: 'Tuvalu',
    emoji: '🇹🇻',
    emojiCode: '1F1F9 1F1FB'
  },
  {
    iso2: 'UG',
    iso3: 'UGA',
    name: 'Uganda',
    localName: 'Uganda',
    emoji: '🇺🇬',
    emojiCode: '1F1FA 1F1EC'
  },
  {
    iso2: 'UA',
    iso3: 'UKR',
    name: 'Ukraine',
    localName: 'Україна',
    emoji: '🇺🇦',
    emojiCode: '1F1FA 1F1E6'
  },
  {
    iso2: 'AE',
    iso3: 'ARE',
    name: 'United Arab Emirates',
    localName: 'دولة الإمارات العربية المتحدة',
    emoji: '🇦🇪',
    emojiCode: '1F1E6 1F1EA'
  },
  {
    iso2: 'GB',
    iso3: 'GBR',
    name: 'United Kingdom',
    localName: 'United Kingdom',
    emoji: '🇬🇧',
    emojiCode: '1F1EC 1F1E7'
  },
  {
    iso2: 'US',
    iso3: 'USA',
    name: 'United States',
    localName: 'United States',
    emoji: '🇺🇸',
    emojiCode: '1F1FA 1F1F8'
  },
  {
    iso2: 'UY',
    iso3: 'URY',
    name: 'Uruguay',
    localName: 'Uruguay',
    emoji: '🇺🇾',
    emojiCode: '1F1FA 1F1FE'
  },
  {
    iso2: 'UZ',
    iso3: 'UZB',
    name: 'Uzbekistan',
    localName: 'O‘zbekiston',
    emoji: '🇺🇿',
    emojiCode: '1F1FA 1F1FF'
  },
  {
    iso2: 'VU',
    iso3: 'VUT',
    name: 'Vanuatu',
    localName: 'Vanuatu',
    emoji: '🇻🇺',
    emojiCode: '1F1FB 1F1FA'
  },
  {
    iso2: 'VE',
    iso3: 'VEN',
    name: 'Venezuela',
    localName: 'Venezuela',
    emoji: '🇻🇪',
    emojiCode: '1F1FB 1F1EA'
  },
  {
    iso2: 'VN',
    iso3: 'VNM',
    name: 'Vietnam',
    localName: 'Việt Nam',
    emoji: '🇻🇳',
    emojiCode: '1F1FB 1F1F3'
  },
  {
    iso2: 'WF',
    iso3: 'WLF',
    name: 'Wallis and Futuna',
    localName: 'Wallis et Futuna',
    emoji: '🇼🇫',
    emojiCode: '1F1FC 1F1EB'
  },
  {
    iso2: 'EH',
    iso3: 'ESH',
    name: 'Western Sahara',
    localName: 'الصحراء الغربية',
    emoji: '🇪🇭',
    emojiCode: '1F1EA 1F1ED'
  },
  {
    iso2: 'YE',
    iso3: 'YEM',
    name: 'Yemen',
    localName: 'اليَمَن',
    emoji: '🇾🇪',
    emojiCode: '1F1FE 1F1EA'
  },
  {
    iso2: 'ZM',
    iso3: 'ZMB',
    name: 'Zambia',
    localName: 'Zambia',
    emoji: '🇿🇲',
    emojiCode: '1F1FF 1F1F2'
  },
  {
    iso2: 'ZW',
    iso3: 'ZWE',
    name: 'Zimbabwe',
    localName: 'Zimbabwe',
    emoji: '🇿🇼',
    emojiCode: '1F1FF 1F1FC'
  }
];

export const isoCountry: (code: string) => Country | null = (code: string) => {
  const upCode = code.toUpperCase();
  const found = countries.find((country: CountryData) => {
    return country.iso2 === upCode || country.iso3 === upCode;
  });
  return found ? {
    code: found.iso2,
    ...found
  } as Country : null;
}
