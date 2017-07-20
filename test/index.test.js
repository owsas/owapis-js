const is = require('is');

const OwApis = require('../');
const APIKEY = process.env.APIKEY || '123';

test('OwApis should exist', () => {
    expect(OwApis).toBeTruthy();
});

test('#initialize', () => {
    expect(() => {
        OwApis.initialize(APIKEY);
    }).not.toThrow();
});

test('#reverseGeocode', () => {
    const LAT = 3.42;
    const LNG = -74.6;

    return OwApis.reverseGeocode(LAT, LNG)
        .then((results) => {
            expect(is.array(results)).toBe(true);
            expect(results).toBeTruthy();
        })
});

test('#geocode', () => {
    const LOCATION = 'cali, colombia';

    return OwApis.geocode(LOCATION)
        .then((results) => {
            expect(is.array(results)).toBe(true);
            expect(results).toBeTruthy();
        })
});

test('#getOwnIPInfo', () => {
    return OwApis.getOwnIPInfo()
        .then((result) => {
            expect(is.object(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getIpInfo', () => {
    return OwApis.getIPInfo('190.146.197.135')
        .then((result) => {
            expect(is.object(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});


test('#getCountryInfo', () => {
    return OwApis.getCountryInfo('CO')
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getCountryInfoByCCA3', () => {
    return OwApis.getCountryInfoByCCA3('COL')
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getCountryInfoCCA2', () => {
    return OwApis.getCountryInfoByCCA2('CO')
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getCountriesByCallingCode', () => {
    return OwApis.getCountriesByCallingCode('57')
        .then((result) => {
            expect(is.object(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getCountriesByCurrencyCode', () => {
    return OwApis.getCountriesByCurrencyCode('COP')
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getWorldLanguages', () => {
    return OwApis.getWorldLanguages()
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});

test('#getLanguageInfo', () => {
    return OwApis.getLanguageInfo('spa')
        .then((result) => {
            expect(is.array(result)).toBe(true);
            expect(result).toBeTruthy();
        })
});