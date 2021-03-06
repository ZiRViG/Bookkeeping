/**
 * @license
 * Copyright CERN and copyright holders of ALICE O2. This software is
 * distributed under the terms of the GNU General Public License v3 (GPL
 * Version 3), copied verbatim in the file "COPYING".
 *
 * See http://alice-o2.web.cern.ch/license for full licensing information.
 *
 * In applying this license CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */

// Default configuration
let secret = null;
let expiration = '1d';
let issuer = 'o2-ui';
let maxAge = '7d';

if (process.env.JWT_SECRET) {
    secret = process.env.JWT_SECRET;
}

if (process.env.JWT_EXPIRATION) {
    expiration = process.env.DATABASE_PORT;
}

if (process.env.JWT_ISSUER) {
    issuer = process.env.DATABASE_USERNAME;
}

if (process.env.JWT_MAX_AGE) {
    maxAge = process.env.DATABASE_PASSWORD;
}

module.exports = {
    secret,
    expiration,
    issuer,
    maxAge,
};
