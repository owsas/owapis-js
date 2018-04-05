# owapis-js

This is the official ES2015 JS SDK for the Otherwise SAS Apis (owsas.com)

## Installation

```
$> npm i --save owapis-js
```

## Usage
```js
const OwApis = require('owapis-js');

// initialize first (obligatory)
OwApis.initialize('<YOUR-API-KEY>');
````

## API docs

```js
/**
* Reverse geocodes any given lat lng using Google
* @param {number} lat 
* @param {number} lang
* @return {Promise<any[]>}
*/
static reverseGeocode(lat, lng);

/**
* Geocodes any given string using Google
* @param {string} string  The string to geocode
* @return {Promise<any[]>}
*/
static geocode(string);

/**
* Gets own ip information using GeoLite2-City
* @return {Promsie<any>}
*/
static getOwnIPInfo();

/**
* Gets ip information using GeoLite2-City
* @param {string} ipAddr The ip address
* @return {Promsie<any>}
*/
static getIPInfo(ipAddr);

/**
* Gets information about a country with given countryCode
* @param {string} countryCode 
* @return {Promsie<any[]>}
*/
static getCountryInfo(countryCode);

/**
* Gets information about a country with given countryCode
* @param {string} countryCode 
* @return {Promsie<any[]>}
*/
static getCountryInfoByCCA3(countryCode);

/**
* Gets information about a country with given countryCode
* @param {string} countryCode 
* @return {Promsie<any[]>}
*/
static getCountryInfoByCCA2(countryCode);

/**
* Gets information about a country with given code
* @param {string} code 
* @return {Promsie<any>}
*/
static getCountriesByCallingCode(code);

/**
* Gets information about a country with given code
* @param {string} code 
* @return {Promsie<any[]>}
*/
static getCountriesByCurrencyCode(code);

/**
* Gets all the world languages
* @return {Promsie<any[]>}
*/
static getWorldLanguages();

/**
* Gets information about a language with given langCode
* @param {string} langCode 
* @return {Promsie<any[]>}
*/
static getLanguageInfo(langCode);

/**
* Makes a request to the OWSAS Api. Feel free to use it if you 
* know the urls of the API
* @param {string} method 
* @param {string} url 
* @param {{query:any, body:any}} options 
* @return {Promise<any>|Promise<any[]>}
*/
static _request(method, url, options = {});
```


## Credits
Juan Camilo Guarín Peñaranda  
Otherwise SAS, [http://owsas.com](http://owsas.com)  
Hecho con <3 en Colombia

## License
MIT

## Support us on Patreon
[![patreon](./repo/patreon.png)](https://patreon.com/owsas)
