/**
 * Part I
 *
 * You arrive at the airport only to realize that you grabbed your
 * North Pole Credentials instead of your passport. While these documents
 * are extremely similar, North Pole Credentials aren't issued by a country
 * and therefore aren't actually valid documentation for travel in
 * most of the world.
 *
 * It seems like you're not the only one having problems, though;
 * a very long line has formed for the automatic passport scanners,
 * and the delay could upset your travel itinerary.
 *
 * Due to some questionable network security, you realize you might be
 * able to solve both of these problems at the same time.
 *
 * The automatic passport scanners are slow because they're having
 * trouble detecting which passports have all required fields.
 * The expected fields are as follows:
 *
 * byr (Birth Year)
 * iyr (Issue Year)
 * eyr (Expiration Year)
 * hgt (Height)
 * hcl (Hair Color)
 * ecl (Eye Color)
 * pid (Passport ID)
 * cid (Country ID)
 *
 * Passport data is validated in batch files (your puzzle input).
 * Each passport is represented as a sequence of key:value pairs separated by
 * spaces or newlines. Passports are separated by blank lines.
 *
 * Here is an example batch file containing four passports:
 *
 * ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
 * byr:1937 iyr:2017 cid:147 hgt:183cm
 *
 * iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
 * hcl:#cfa07d byr:1929
 *
 * hcl:#ae17e1 iyr:2013
 * eyr:2024
 * ecl:brn pid:760753108 byr:1931
 * hgt:179cm
 *
 * hcl:#cfa07d eyr:2025 pid:166559648
 * iyr:2011 ecl:brn hgt:59in
 *
 * The first passport is valid - all eight fields are present.
 * The second passport is invalid - it is missing hgt (the Height field).
 *
 * The third passport is interesting; the only missing field is cid,
 * so it looks like data from North Pole Credentials, not a passport at all!
 * Surely, nobody would mind if you made the system temporarily ignore
 * missing cid fields. Treat this "passport" as valid.
 *
 * The fourth passport is missing two fields, cid and byr. Missing cid is fine,
 * but missing any other field is not, so this passport is invalid.
 *
 * According to the above rules, your improved system would report 2 valid
 * passports.
 *
 * Count the number of valid passports - those that have all required fields.
 * Treat cid as optional. In your batch file, how many passports are valid?
 */
// Time:
// Space:
// Helper functions:
const fs = require('fs');
const input = fs.readFileSync('./day4Input.txt', 'utf-8');
const passports = input.split('\n');

const convertInputToPassports = () => {
  const result = [];
  let temp = {};

  for (let i = 0; i < passports.length; i++) {
    if (passports[i]) {
      temp = { ...temp, ...arrayToObject(passports[i].split(' ')) };
      if (i === passports.length - 1) {
        result.push(temp);
      }
    } else {
      result.push(temp);
      temp = {};
    }
  }

  return result;
};

const arrayToObject = (arr) => {
  return arr.reduce((acc, details) => {
    let [key, value] = details.split(':');

    acc[key] = value;
    return acc;
  }, {});
};

const parsedPasses = convertInputToPassports();
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

// Time: O(n);
// Space: O(1);
const countValidPassportsOne = () => {
  let count = 0;
  for (let i = 0; i < parsedPasses.length; i++) {
    let passport = parsedPasses[i];
    let isValid = requiredFields.every((field) => {
      return field in passport;
    });

    isValid ? (count += 1) : (count += 0);
  }

  return count;
};

countValidPassportsOne();

/**
 * Part II
 *
 * The line is moving more quickly now, but you overhear airport security
 * talking about how passports with invalid data are getting through.
 * Better add some data validation, quick!
 *
 * You can continue to ignore the cid field, but each other field has strict
 * rules about what values are valid for automatic validation:
 *
 * byr (Birth Year) - four digits; at least 1920 and at most 2002.
 * iyr (Issue Year) - four digits; at least 2010 and at most 2020.
 * eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
 * hgt (Height) - a number followed by either cm or in:
 * If cm, the number must be at least 150 and at most 193.
 * If in, the number must be at least 59 and at most 76.
 * hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
 * ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
 * pid (Passport ID) - a nine-digit number, including leading zeroes.
 * cid (Country ID) - ignored, missing or not.
 *
 * Your job is to count the passports where all required fields are both
 * present and valid according to the above rules. Here are some example values:
 *
 * byr valid:   2002
 * byr invalid: 2003
 *
 * hgt valid:   60in
 * hgt valid:   190cm
 * hgt invalid: 190in
 * hgt invalid: 190
 *
 * hcl valid:   #123abc
 * hcl invalid: #123abz
 * hcl invalid: 123abc
 *
 * ecl valid:   brn
 * ecl invalid: wat
 *
 * pid valid:   000000001
 * pid invalid: 0123456789
 *
 * Here are some invalid passports:
 * eyr:1972 cid:100
 * hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926
 *
 * iyr:2019
 * hcl:#602927 eyr:1967 hgt:170cm
 * ecl:grn pid:012533040 byr:1946
 *
 * hcl:dab227 iyr:2012
 * ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277
 *
 * hgt:59cm ecl:zzz
 * eyr:2038 hcl:74454a iyr:2023
 * pid:3556412378 byr:2007
 *
 * Here are some valid passports:
 * pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
 * hcl:#623a2f
 *
 * eyr:2029 ecl:blu cid:129 byr:1989
 * iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm
 *
 * hcl:#888785
 * hgt:164cm byr:2001 iyr:2015 cid:88
 * pid:545766238 ecl:hzl
 * eyr:2022
 *
 * iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
 *
 * Count the number of valid passports - those that have all required fields
 * and valid values. Continue to treat cid as optional.
 * In your batch file, how many passports are valid?
 */
// Time: O(n);
// Space: O(1);

const constraints = {
  byr: [1920, 2002],
  iyr: [2010, 2020],
  eyr: [2020, 2030],
  hgt: { cm: [150, 193], in: [59, 76] },
};

const getRange = (key, value) => {
  const isInRange = (num, lo, hi) => num >= lo && num <= hi;

  if (key !== 'hgt') {
    let num = Number(value);
    return isInRange(num, constraints[key][0], constraints[key][1]);
  } else {
    const hgtConst = constraints.hgt;

    if (value.includes('cm')) {
      return isInRange(
        Number(value.split('cm')[0]),
        hgtConst.cm[0],
        hgtConst.cm[1]
      );
    } else if (value.includes('in')) {
      return isInRange(
        Number(value.split('in')[0]),
        hgtConst.in[0],
        hgtConst.in[1]
      );
    } else {
      return false;
    }
  }
};

const getHairColor = (value) => {
  if (value[0] !== '#' || value.length < 7) {
    return false;
  } else {
    return /^#[0-9a-f]{6}/i.test(value);
  }
};

const getEyeColor = (value) => {
  const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return validColors.includes(value);
};

const checkFieldConstraint = (key, arr) => {
  const val = arr[key];

  if (key in constraints) {
    return getRange(key, val);
  } else if (key === 'hcl') {
    return getHairColor(val);
  } else if (key === 'ecl') {
    return getEyeColor(val);
  } else if (key === 'pid') {
    return val.length === 9;
  }
};

const countValidPassportsTwo = () => {
  let count = 0;
  for (let i = 0; i < parsedPasses.length; i++) {
    let passport = parsedPasses[i];
    let isValid = requiredFields.every((field) =>
      passport[field] ? checkFieldConstraint(field, passport) : false
    );

    isValid ? (count += 1) : (count += 0);
  }

  return count;
};

console.log(countValidPassportsTwo());
