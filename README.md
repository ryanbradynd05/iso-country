# iso-country
Search for Countries By Iso Code

<span class="badge-npmversion"><a href="https://npmjs.org/package/iso-country" title="View this project on NPM"><img src="https://img.shields.io/npm/v/iso-country.svg" alt="NPM version" /></a></span>

## How to Use

Import the function and type into your application.

```typescript
import { Country, isoCountry } from 'iso-country';
```

Pass either an ISO3166 Alpha 2 (e.g. US) or Alpha 3 (e.g. USA) code into the isoCountry function.

```typescript
const unitedStates: Country = isoCountry('us');
console.log(unitedStates);

/*
{
  code: 'us',
  name: 'United States',
  localName: 'United States',
  emoji: '🇺🇸',
  emojiCode: '1F1FA 1F1F8'
}
*/
```

## License
Unless stated otherwise all works are:

 * Copyright &copy; 2019+ Ryan Brady

and licensed under:

 * [MIT License](http://spdx.org/licenses/MIT.html)
