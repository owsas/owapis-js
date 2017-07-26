const superagent = require('superagent');
const assert = require('assert');
const is = require('is');

const SERVER_URL = "https://apis.owsas.com"
let API_KEY = "";

/** The main class */
module.exports = class OWApis {

    /**
     * Initializes the API, using the given key
     * @param {string} key 
     */
    static initialize(key) {
        API_KEY = key;
    }

    /**
     * Reverse geocodes any given lat lng using Google
     * @param {number} lat 
     * @param {number} lang
     * @return {Promise<any[]>}
     */
    static reverseGeocode(lat, lng) {
        return OWApis._request('GET', '/geocode/reverse', {
                query: {
                    lat,
                    lng
                }
            })
            .then(obj => {
                return obj.results ||  [];
            });
    }

    /**
     * Geocodes any given string using Google
     * @param {string} string  The string to geocode
     * @return {Promise<any[]>}
     */
    static geocode(string) {
        assert.ok(is.string(string));

        return OWApis._request('GET', '/geocode', {
                query: {
                    q: string
                }
            })
            .then((obj) => {
                obj = obj ||  {};
                return obj.results ||  [];
            });
    }

    /**
     * Gets own ip information using GeoLite2-City
     * @return {Promsie<any>}
     */
    static getOwnIPInfo() {
        return OWApis._request('GET', '/ip');
    }

    /**
     * Gets ip information using GeoLite2-City
     * @param {string} ipAddr The ip address
     * @return {Promsie<any>}
     */
    static getIPInfo(ipAddr) {
        assert.ok(is.string(ipAddr));
        return OWApis._request('GET', '/ip/' + ipAddr);
    }

    /**
     * Gets information about a country with given countryCode
     * @param {string} countryCode 
     * @return {Promsie<any[]>}
     */
    static getCountryInfo(countryCode) {
        assert.ok(is.string(countryCode));
        return OWApis._request('GET', '/atlas/countries/' + countryCode);
    }

    /**
     * Gets information about a country with given countryCode
     * @param {string} countryCode 
     * @return {Promsie<any[]>}
     */
    static getCountryInfoByCCA3(countryCode) {
        assert.ok(is.string(countryCode));
        return OWApis._request('GET', '/atlas/countries/cca3/' + countryCode);
    }

    /**
     * Gets information about a country with given countryCode
     * @param {string} countryCode 
     * @return {Promsie<any[]>}
     */
    static getCountryInfoByCCA2(countryCode) {
        assert.ok(is.string(countryCode));
        return OWApis._request('GET', '/atlas/countries/cca2/' + countryCode);
    }

    /**
     * Gets information about a country with given code
     * @param {string} code 
     * @return {Promsie<any>}
     */
    static getCountriesByCallingCode(code) {
        assert.ok(is.string(code));
        return OWApis._request('GET', '/atlas/countries/callingcode/' + code);
    }

    /**
     * Gets information about a country with given code
     * @param {string} code 
     * @return {Promsie<any[]>}
     */
    static getCountriesByCurrencyCode(code) {
        assert.ok(is.string(code));
        return OWApis._request('GET', '/atlas/countries/currency/' + code);
    }

    /**
     * Gets all the world languages
     * @return {Promsie<any[]>}
     */
    static getWorldLanguages() {
        return OWApis._request('GET', '/atlas/langs');
    }

    /**
     * Gets information about a language with given langCode
     * @param {string} langCode 
     * @return {Promsie<any[]>}
     */
    static getLanguageInfo(langCode)  {
        assert.ok(is.string(langCode));
        return OWApis._request('GET', '/atlas/langs/' + langCode);
    }

    /**
     * Makes a request to the OWSAS Api. Feel free to use it if you 
     * know the urls of the API
     * @param {string} method 
     * @param {string} url 
     * @param {{query:any, body:any}} options 
     * @return {Promise<any>|Promise<any[]>}
     */
    static _request(method, url, options = {})  {
        assert.ok(API_KEY.length > 0);

        // validation
        assert.ok(is.object(options));

        if (options.query) {
            assert.ok(is.object(options.query));
        }

        if (options.body)  {
            assert.ok(is.object(options.body));
        }

        options.query = options.query ||  {};

        const hasSlashAtInit = url.charAt(0) === '/';
        if (!hasSlashAtInit) {
            url = '/' + url;
        }

        // set the api key
        options.query.key = API_KEY;

        let request = superagent(method, `${SERVER_URL}${url}`)
            .query(options.query)
            .send(options.body || {})
            .set('Accept', 'application/json')
            .then(response => {
                return response.body;
            })

        return request;
    }

}