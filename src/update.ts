function getEmoji(code: string) {
	return code.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
}

function getUnicode(str: any) {
	if (str.length < 4) {
    return str.codePointAt(0).toString(16);
  }
  return str.codePointAt(0).toString(16) + ' ' + str.codePointAt(2).toString(16);
}

fetch('https://restcountries.eu/rest/v2/all')
	.then(result => result.json())
	.then(countries => {
		const output = countries.map((country: any) => {
    	const emoji = getEmoji(country.alpha2Code);
    	return {
      	iso2: country.alpha2Code,
        iso3: country.alpha3Code,
        name: country.name,
        localName: country.nativeName,
        emoji,
        emojiCode: getUnicode(emoji).toUpperCase()
      }
    });
    console.log(JSON.stringify(output));
  });