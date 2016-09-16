'use strict';

var R = require('ramda'); // utility library

/**
 * Given array of region codes whose metadata is desired
 * Return libphonenumber metadata for those regions, including the necessary metadata for the main countries for each country calling code
 * E.g. if the array includes CA (country calling code 1), then the metadata must also include the US, which is the main country for calling code 1
 */
module.exports = function loadMeta(regionCodeArray) {
    var metadata = {
        regionCodes: [], // full list of region codes
        countryCodeToRegionCodeMap: {},
        countryToMetadata: {}
    },
        allRegionCodes = [],
        allCountryCodes = [],
        dependencyMap = require('./metadata/dependencyMap');

    // populate full list of region codes to add (regions and their main country dependencies)
    // and populate full list of country calling codes
    regionCodeArray.forEach(function (regionCode) {
        allRegionCodes.push(regionCode);

        var countryCodes = dependencyMap.regionCodeToCountryCodeMap[regionCode];
        allCountryCodes = allCountryCodes.concat(countryCodes);

        // one-liner, but hard to read:
        // allRegionCodes.concat(countryCodes.map(countryCode => dependencyMap.countryCodeToRegionCodeMap[countryCode][0]));

        // loop over country calling codes associated with this region code to get main region
        countryCodes.forEach(function (countryCode) {
            // main country is first in countryCodeToRegionCodeMap array for this country calling code
            var mainCountryforCode = dependencyMap.countryCodeToRegionCodeMap[countryCode][0];

            // add the dependent region code to allRegionCodes (will dedupe array later)
            allRegionCodes.push(mainCountryforCode);
        });
    });

    allRegionCodes = R.uniq(allRegionCodes); // dedupe arrays
    allCountryCodes = R.uniq(allCountryCodes);

    // now prepare metadata object

    metadata.regionCodes = allRegionCodes;

    // populate countryToMetadata for each region code
    allRegionCodes.forEach(function (regionCode) {
        var regionalMeta = require(`./metadata/metadata_${regionCode}.json`);
        // for countryToMetadata, just add keys
        Object.assign(metadata.countryToMetadata, regionalMeta.countryToMetadata);
    });

    // construct countryCodeToRegionCodeMap based on included regions
    // make sure main country is first in array for each country calling code
    allCountryCodes.forEach(countryCode => {
        // pull countryCodeToRegionCodeMap from master map (in dependencyMap), filtering out regions not present
        metadata.countryCodeToRegionCodeMap[countryCode] = dependencyMap
            .countryCodeToRegionCodeMap[countryCode]
            .filter(regionCode => allRegionCodes.indexOf(regionCode) !== -1);
    });

    return metadata;
};