"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Avro: () => Avro,
  AvroInput: () => AvroInput,
  default: () => index_default,
  parse: () => parse,
  useAvro: () => useAvro
});
module.exports = __toCommonJS(index_exports);

// src/data.ts
var vowel = "aeiou";
var consonant = "bcdfghjklmnpqrstvwxyz";
var casesensitive = "oiudgjnrstyz";
var patterns = [
  {
    "find": "bhl",
    "replace": "\u09AD\u09CD\u09B2"
  },
  {
    "find": "psh",
    "replace": "\u09AA\u09B6"
  },
  {
    "find": "bdh",
    "replace": "\u09AC\u09CD\u09A7"
  },
  {
    "find": "bj",
    "replace": "\u09AC\u09CD\u099C"
  },
  {
    "find": "bd",
    "replace": "\u09AC\u09CD\u09A6"
  },
  {
    "find": "bb",
    "replace": "\u09AC\u09CD\u09AC"
  },
  {
    "find": "bl",
    "replace": "\u09AC\u09CD\u09B2"
  },
  {
    "find": "bh",
    "replace": "\u09AD"
  },
  {
    "find": "vl",
    "replace": "\u09AD\u09CD\u09B2"
  },
  {
    "find": "b",
    "replace": "\u09AC"
  },
  {
    "find": "v",
    "replace": "\u09AD"
  },
  {
    "find": "cNG",
    "replace": "\u099A\u09CD\u099E"
  },
  {
    "find": "cch",
    "replace": "\u099A\u09CD\u099B"
  },
  {
    "find": "cc",
    "replace": "\u099A\u09CD\u099A"
  },
  {
    "find": "ch",
    "replace": "\u099B"
  },
  {
    "find": "c",
    "replace": "\u099A"
  },
  {
    "find": "dhn",
    "replace": "\u09A7\u09CD\u09A8"
  },
  {
    "find": "dhm",
    "replace": "\u09A7\u09CD\u09AE"
  },
  {
    "find": "dgh",
    "replace": "\u09A6\u09CD\u0998"
  },
  {
    "find": "ddh",
    "replace": "\u09A6\u09CD\u09A7"
  },
  {
    "find": "dbh",
    "replace": "\u09A6\u09CD\u09AD"
  },
  {
    "find": "dv",
    "replace": "\u09A6\u09CD\u09AD"
  },
  {
    "find": "dm",
    "replace": "\u09A6\u09CD\u09AE"
  },
  {
    "find": "DD",
    "replace": "\u09A1\u09CD\u09A1"
  },
  {
    "find": "Dh",
    "replace": "\u09A2"
  },
  {
    "find": "dh",
    "replace": "\u09A7"
  },
  {
    "find": "dg",
    "replace": "\u09A6\u09CD\u0997"
  },
  {
    "find": "dd",
    "replace": "\u09A6\u09CD\u09A6"
  },
  {
    "find": "D",
    "replace": "\u09A1"
  },
  {
    "find": "d",
    "replace": "\u09A6"
  },
  {
    "find": "...",
    "replace": "..."
  },
  {
    "find": ".`",
    "replace": "."
  },
  {
    "find": "..",
    "replace": "\u0964\u0964"
  },
  {
    "find": ".",
    "replace": "\u0964"
  },
  {
    "find": "ghn",
    "replace": "\u0998\u09CD\u09A8"
  },
  {
    "find": "Ghn",
    "replace": "\u0998\u09CD\u09A8"
  },
  {
    "find": "gdh",
    "replace": "\u0997\u09CD\u09A7"
  },
  {
    "find": "Gdh",
    "replace": "\u0997\u09CD\u09A7"
  },
  {
    "find": "gN",
    "replace": "\u0997\u09CD\u09A3"
  },
  {
    "find": "GN",
    "replace": "\u0997\u09CD\u09A3"
  },
  {
    "find": "gn",
    "replace": "\u0997\u09CD\u09A8"
  },
  {
    "find": "Gn",
    "replace": "\u0997\u09CD\u09A8"
  },
  {
    "find": "gm",
    "replace": "\u0997\u09CD\u09AE"
  },
  {
    "find": "Gm",
    "replace": "\u0997\u09CD\u09AE"
  },
  {
    "find": "gl",
    "replace": "\u0997\u09CD\u09B2"
  },
  {
    "find": "Gl",
    "replace": "\u0997\u09CD\u09B2"
  },
  {
    "find": "gg",
    "replace": "\u099C\u09CD\u099E"
  },
  {
    "find": "GG",
    "replace": "\u099C\u09CD\u099E"
  },
  {
    "find": "Gg",
    "replace": "\u099C\u09CD\u099E"
  },
  {
    "find": "gG",
    "replace": "\u099C\u09CD\u099E"
  },
  {
    "find": "gh",
    "replace": "\u0998"
  },
  {
    "find": "Gh",
    "replace": "\u0998"
  },
  {
    "find": "g",
    "replace": "\u0997"
  },
  {
    "find": "G",
    "replace": "\u0997"
  },
  {
    "find": "hN",
    "replace": "\u09B9\u09CD\u09A3"
  },
  {
    "find": "hn",
    "replace": "\u09B9\u09CD\u09A8"
  },
  {
    "find": "hm",
    "replace": "\u09B9\u09CD\u09AE"
  },
  {
    "find": "hl",
    "replace": "\u09B9\u09CD\u09B2"
  },
  {
    "find": "h",
    "replace": "\u09B9"
  },
  {
    "find": "jjh",
    "replace": "\u099C\u09CD\u099D"
  },
  {
    "find": "jNG",
    "replace": "\u099C\u09CD\u099E"
  },
  {
    "find": "jh",
    "replace": "\u099D"
  },
  {
    "find": "jj",
    "replace": "\u099C\u09CD\u099C"
  },
  {
    "find": "j",
    "replace": "\u099C"
  },
  {
    "find": "J",
    "replace": "\u099C"
  },
  {
    "find": "kkhN",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09A3"
  },
  {
    "find": "kShN",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09A3"
  },
  {
    "find": "kkhm",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09AE"
  },
  {
    "find": "kShm",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09AE"
  },
  {
    "find": "kxN",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09A3"
  },
  {
    "find": "kxm",
    "replace": "\u0995\u09CD\u09B7\u09CD\u09AE"
  },
  {
    "find": "kkh",
    "replace": "\u0995\u09CD\u09B7"
  },
  {
    "find": "kSh",
    "replace": "\u0995\u09CD\u09B7"
  },
  {
    "find": "ksh",
    "replace": "\u0995\u09B6"
  },
  {
    "find": "kx",
    "replace": "\u0995\u09CD\u09B7"
  },
  {
    "find": "kk",
    "replace": "\u0995\u09CD\u0995"
  },
  {
    "find": "kT",
    "replace": "\u0995\u09CD\u099F"
  },
  {
    "find": "kt",
    "replace": "\u0995\u09CD\u09A4"
  },
  {
    "find": "kl",
    "replace": "\u0995\u09CD\u09B2"
  },
  {
    "find": "ks",
    "replace": "\u0995\u09CD\u09B8"
  },
  {
    "find": "kh",
    "replace": "\u0996"
  },
  {
    "find": "k",
    "replace": "\u0995"
  },
  {
    "find": "lbh",
    "replace": "\u09B2\u09CD\u09AD"
  },
  {
    "find": "ldh",
    "replace": "\u09B2\u09CD\u09A7"
  },
  {
    "find": "lkh",
    "replace": "\u09B2\u0996"
  },
  {
    "find": "lgh",
    "replace": "\u09B2\u0998"
  },
  {
    "find": "lph",
    "replace": "\u09B2\u09AB"
  },
  {
    "find": "lk",
    "replace": "\u09B2\u09CD\u0995"
  },
  {
    "find": "lg",
    "replace": "\u09B2\u09CD\u0997"
  },
  {
    "find": "lT",
    "replace": "\u09B2\u09CD\u099F"
  },
  {
    "find": "lD",
    "replace": "\u09B2\u09CD\u09A1"
  },
  {
    "find": "lp",
    "replace": "\u09B2\u09CD\u09AA"
  },
  {
    "find": "lv",
    "replace": "\u09B2\u09CD\u09AD"
  },
  {
    "find": "lm",
    "replace": "\u09B2\u09CD\u09AE"
  },
  {
    "find": "ll",
    "replace": "\u09B2\u09CD\u09B2"
  },
  {
    "find": "lb",
    "replace": "\u09B2\u09CD\u09AC"
  },
  {
    "find": "l",
    "replace": "\u09B2"
  },
  {
    "find": "mth",
    "replace": "\u09AE\u09CD\u09A5"
  },
  {
    "find": "mph",
    "replace": "\u09AE\u09CD\u09AB"
  },
  {
    "find": "mbh",
    "replace": "\u09AE\u09CD\u09AD"
  },
  {
    "find": "mpl",
    "replace": "\u09AE\u09AA\u09CD\u09B2"
  },
  {
    "find": "mn",
    "replace": "\u09AE\u09CD\u09A8"
  },
  {
    "find": "mp",
    "replace": "\u09AE\u09CD\u09AA"
  },
  {
    "find": "mv",
    "replace": "\u09AE\u09CD\u09AD"
  },
  {
    "find": "mm",
    "replace": "\u09AE\u09CD\u09AE"
  },
  {
    "find": "ml",
    "replace": "\u09AE\u09CD\u09B2"
  },
  {
    "find": "mb",
    "replace": "\u09AE\u09CD\u09AC"
  },
  {
    "find": "mf",
    "replace": "\u09AE\u09CD\u09AB"
  },
  {
    "find": "m",
    "replace": "\u09AE"
  },
  {
    "find": "0",
    "replace": "\u09E6"
  },
  {
    "find": "1",
    "replace": "\u09E7"
  },
  {
    "find": "2",
    "replace": "\u09E8"
  },
  {
    "find": "3",
    "replace": "\u09E9"
  },
  {
    "find": "4",
    "replace": "\u09EA"
  },
  {
    "find": "5",
    "replace": "\u09EB"
  },
  {
    "find": "6",
    "replace": "\u09EC"
  },
  {
    "find": "7",
    "replace": "\u09ED"
  },
  {
    "find": "8",
    "replace": "\u09EE"
  },
  {
    "find": "9",
    "replace": "\u09EF"
  },
  {
    "find": "NgkSh",
    "replace": "\u0999\u09CD\u0995\u09CD\u09B7"
  },
  {
    "find": "Ngkkh",
    "replace": "\u0999\u09CD\u0995\u09CD\u09B7"
  },
  {
    "find": "NGch",
    "replace": "\u099E\u09CD\u099B"
  },
  {
    "find": "Nggh",
    "replace": "\u0999\u09CD\u0998"
  },
  {
    "find": "Ngkh",
    "replace": "\u0999\u09CD\u0996"
  },
  {
    "find": "NGjh",
    "replace": "\u099E\u09CD\u099D"
  },
  {
    "find": "ngOU",
    "replace": "\u0999\u09CD\u0997\u09CC"
  },
  {
    "find": "ngOI",
    "replace": "\u0999\u09CD\u0997\u09C8"
  },
  {
    "find": "Ngkx",
    "replace": "\u0999\u09CD\u0995\u09CD\u09B7"
  },
  {
    "find": "NGc",
    "replace": "\u099E\u09CD\u099A"
  },
  {
    "find": "nch",
    "replace": "\u099E\u09CD\u099B"
  },
  {
    "find": "njh",
    "replace": "\u099E\u09CD\u099D"
  },
  {
    "find": "ngh",
    "replace": "\u0999\u09CD\u0998"
  },
  {
    "find": "Ngk",
    "replace": "\u0999\u09CD\u0995"
  },
  {
    "find": "Ngx",
    "replace": "\u0999\u09CD\u09B7"
  },
  {
    "find": "Ngg",
    "replace": "\u0999\u09CD\u0997"
  },
  {
    "find": "Ngm",
    "replace": "\u0999\u09CD\u09AE"
  },
  {
    "find": "NGj",
    "replace": "\u099E\u09CD\u099C"
  },
  {
    "find": "ndh",
    "replace": "\u09A8\u09CD\u09A7"
  },
  {
    "find": "nTh",
    "replace": "\u09A8\u09CD\u09A0"
  },
  {
    "find": "NTh",
    "replace": "\u09A3\u09CD\u09A0"
  },
  {
    "find": "nth",
    "replace": "\u09A8\u09CD\u09A5"
  },
  {
    "find": "nkh",
    "replace": "\u0999\u09CD\u0996"
  },
  {
    "find": "ngo",
    "replace": "\u0999\u09CD\u0997"
  },
  {
    "find": "nga",
    "replace": "\u0999\u09CD\u0997\u09BE"
  },
  {
    "find": "ngi",
    "replace": "\u0999\u09CD\u0997\u09BF"
  },
  {
    "find": "ngI",
    "replace": "\u0999\u09CD\u0997\u09C0"
  },
  {
    "find": "ngu",
    "replace": "\u0999\u09CD\u0997\u09C1"
  },
  {
    "find": "ngU",
    "replace": "\u0999\u09CD\u0997\u09C2"
  },
  {
    "find": "nge",
    "replace": "\u0999\u09CD\u0997\u09C7"
  },
  {
    "find": "ngO",
    "replace": "\u0999\u09CD\u0997\u09CB"
  },
  {
    "find": "NDh",
    "replace": "\u09A3\u09CD\u09A2"
  },
  {
    "find": "nsh",
    "replace": "\u09A8\u09B6"
  },
  {
    "find": "Ngr",
    "replace": "\u0999\u09B0"
  },
  {
    "find": "NGr",
    "replace": "\u099E\u09B0"
  },
  {
    "find": "ngr",
    "replace": "\u0982\u09B0"
  },
  {
    "find": "nj",
    "replace": "\u099E\u09CD\u099C"
  },
  {
    "find": "Ng",
    "replace": "\u0999"
  },
  {
    "find": "NG",
    "replace": "\u099E"
  },
  {
    "find": "nk",
    "replace": "\u0999\u09CD\u0995"
  },
  {
    "find": "ng",
    "replace": "\u0982"
  },
  {
    "find": "nn",
    "replace": "\u09A8\u09CD\u09A8"
  },
  {
    "find": "NN",
    "replace": "\u09A3\u09CD\u09A3"
  },
  {
    "find": "Nn",
    "replace": "\u09A3\u09CD\u09A8"
  },
  {
    "find": "nm",
    "replace": "\u09A8\u09CD\u09AE"
  },
  {
    "find": "Nm",
    "replace": "\u09A3\u09CD\u09AE"
  },
  {
    "find": "nd",
    "replace": "\u09A8\u09CD\u09A6"
  },
  {
    "find": "nT",
    "replace": "\u09A8\u09CD\u099F"
  },
  {
    "find": "NT",
    "replace": "\u09A3\u09CD\u099F"
  },
  {
    "find": "nD",
    "replace": "\u09A8\u09CD\u09A1"
  },
  {
    "find": "ND",
    "replace": "\u09A3\u09CD\u09A1"
  },
  {
    "find": "nt",
    "replace": "\u09A8\u09CD\u09A4"
  },
  {
    "find": "ns",
    "replace": "\u09A8\u09CD\u09B8"
  },
  {
    "find": "nc",
    "replace": "\u099E\u09CD\u099A"
  },
  {
    "find": "n",
    "replace": "\u09A8"
  },
  {
    "find": "N",
    "replace": "\u09A3"
  },
  {
    "find": "OI`",
    "replace": "\u09C8"
  },
  {
    "find": "OU`",
    "replace": "\u09CC"
  },
  {
    "find": "O`",
    "replace": "\u09CB"
  },
  {
    "find": "OI",
    "replace": "\u09C8",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          }
        ],
        "replace": "\u0990"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u0990"
      }
    ]
  },
  {
    "find": "OU",
    "replace": "\u09CC",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          }
        ],
        "replace": "\u0994"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u0994"
      }
    ]
  },
  {
    "find": "O",
    "replace": "\u09CB",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          }
        ],
        "replace": "\u0993"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u0993"
      }
    ]
  },
  {
    "find": "phl",
    "replace": "\u09AB\u09CD\u09B2"
  },
  {
    "find": "pT",
    "replace": "\u09AA\u09CD\u099F"
  },
  {
    "find": "pt",
    "replace": "\u09AA\u09CD\u09A4"
  },
  {
    "find": "pn",
    "replace": "\u09AA\u09CD\u09A8"
  },
  {
    "find": "pp",
    "replace": "\u09AA\u09CD\u09AA"
  },
  {
    "find": "pl",
    "replace": "\u09AA\u09CD\u09B2"
  },
  {
    "find": "ps",
    "replace": "\u09AA\u09CD\u09B8"
  },
  {
    "find": "ph",
    "replace": "\u09AB"
  },
  {
    "find": "fl",
    "replace": "\u09AB\u09CD\u09B2"
  },
  {
    "find": "f",
    "replace": "\u09AB"
  },
  {
    "find": "p",
    "replace": "\u09AA"
  },
  {
    "find": "rri`",
    "replace": "\u09C3"
  },
  {
    "find": "rri",
    "replace": "\u09C3",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          }
        ],
        "replace": "\u098B"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u098B"
      }
    ]
  },
  {
    "find": "rrZ",
    "replace": "\u09B0\u09B0\u200D\u09CD\u09AF"
  },
  {
    "find": "rry",
    "replace": "\u09B0\u09B0\u200D\u09CD\u09AF"
  },
  {
    "find": "rZ",
    "replace": "\u09B0\u200D\u09CD\u09AF",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "consonant"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "r"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "y"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "w"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "x"
          }
        ],
        "replace": "\u09CD\u09B0\u09CD\u09AF"
      }
    ]
  },
  {
    "find": "ry",
    "replace": "\u09B0\u200D\u09CD\u09AF",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "consonant"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "r"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "y"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "w"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "x"
          }
        ],
        "replace": "\u09CD\u09B0\u09CD\u09AF"
      }
    ]
  },
  {
    "find": "rr",
    "replace": "\u09B0\u09B0",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!vowel"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "r"
          },
          {
            "type": "suffix",
            "scope": "!punctuation"
          }
        ],
        "replace": "\u09B0\u09CD"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "consonant"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "r"
          }
        ],
        "replace": "\u09CD\u09B0\u09B0"
      }
    ]
  },
  {
    "find": "Rg",
    "replace": "\u09DC\u09CD\u0997"
  },
  {
    "find": "Rh",
    "replace": "\u09DD"
  },
  {
    "find": "R",
    "replace": "\u09DC"
  },
  {
    "find": "r",
    "replace": "\u09B0",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "consonant"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "r"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "y"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "w"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "x"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "Z"
          }
        ],
        "replace": "\u09CD\u09B0"
      }
    ]
  },
  {
    "find": "shch",
    "replace": "\u09B6\u09CD\u099B"
  },
  {
    "find": "ShTh",
    "replace": "\u09B7\u09CD\u09A0"
  },
  {
    "find": "Shph",
    "replace": "\u09B7\u09CD\u09AB"
  },
  {
    "find": "Sch",
    "replace": "\u09B6\u09CD\u099B"
  },
  {
    "find": "skl",
    "replace": "\u09B8\u09CD\u0995\u09CD\u09B2"
  },
  {
    "find": "skh",
    "replace": "\u09B8\u09CD\u0996"
  },
  {
    "find": "sth",
    "replace": "\u09B8\u09CD\u09A5"
  },
  {
    "find": "sph",
    "replace": "\u09B8\u09CD\u09AB"
  },
  {
    "find": "shc",
    "replace": "\u09B6\u09CD\u099A"
  },
  {
    "find": "sht",
    "replace": "\u09B6\u09CD\u09A4"
  },
  {
    "find": "shn",
    "replace": "\u09B6\u09CD\u09A8"
  },
  {
    "find": "shm",
    "replace": "\u09B6\u09CD\u09AE"
  },
  {
    "find": "shl",
    "replace": "\u09B6\u09CD\u09B2"
  },
  {
    "find": "Shk",
    "replace": "\u09B7\u09CD\u0995"
  },
  {
    "find": "ShT",
    "replace": "\u09B7\u09CD\u099F"
  },
  {
    "find": "ShN",
    "replace": "\u09B7\u09CD\u09A3"
  },
  {
    "find": "Shp",
    "replace": "\u09B7\u09CD\u09AA"
  },
  {
    "find": "Shf",
    "replace": "\u09B7\u09CD\u09AB"
  },
  {
    "find": "Shm",
    "replace": "\u09B7\u09CD\u09AE"
  },
  {
    "find": "spl",
    "replace": "\u09B8\u09CD\u09AA\u09CD\u09B2"
  },
  {
    "find": "sk",
    "replace": "\u09B8\u09CD\u0995"
  },
  {
    "find": "Sc",
    "replace": "\u09B6\u09CD\u099A"
  },
  {
    "find": "sT",
    "replace": "\u09B8\u09CD\u099F"
  },
  {
    "find": "st",
    "replace": "\u09B8\u09CD\u09A4"
  },
  {
    "find": "sn",
    "replace": "\u09B8\u09CD\u09A8"
  },
  {
    "find": "sp",
    "replace": "\u09B8\u09CD\u09AA"
  },
  {
    "find": "sf",
    "replace": "\u09B8\u09CD\u09AB"
  },
  {
    "find": "sm",
    "replace": "\u09B8\u09CD\u09AE"
  },
  {
    "find": "sl",
    "replace": "\u09B8\u09CD\u09B2"
  },
  {
    "find": "sh",
    "replace": "\u09B6"
  },
  {
    "find": "Sc",
    "replace": "\u09B6\u09CD\u099A"
  },
  {
    "find": "St",
    "replace": "\u09B6\u09CD\u09A4"
  },
  {
    "find": "Sn",
    "replace": "\u09B6\u09CD\u09A8"
  },
  {
    "find": "Sm",
    "replace": "\u09B6\u09CD\u09AE"
  },
  {
    "find": "Sl",
    "replace": "\u09B6\u09CD\u09B2"
  },
  {
    "find": "Sh",
    "replace": "\u09B7"
  },
  {
    "find": "s",
    "replace": "\u09B8"
  },
  {
    "find": "S",
    "replace": "\u09B6"
  },
  {
    "find": "oo`",
    "replace": "\u09C1"
  },
  {
    "find": "oo",
    "replace": "\u09C1",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0989"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0989"
      }
    ]
  },
  {
    "find": "o`",
    "replace": ""
  },
  {
    "find": "oZ",
    "replace": "\u0985\u09CD\u09AF"
  },
  {
    "find": "o",
    "replace": "",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "vowel"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "o"
          }
        ],
        "replace": "\u0993"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "vowel"
          },
          {
            "type": "prefix",
            "scope": "exact",
            "value": "o"
          }
        ],
        "replace": "\u0985"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u0985"
      }
    ]
  },
  {
    "find": "tth",
    "replace": "\u09A4\u09CD\u09A5"
  },
  {
    "find": "t``",
    "replace": "\u09CE"
  },
  {
    "find": "TT",
    "replace": "\u099F\u09CD\u099F"
  },
  {
    "find": "Tm",
    "replace": "\u099F\u09CD\u09AE"
  },
  {
    "find": "Th",
    "replace": "\u09A0"
  },
  {
    "find": "tn",
    "replace": "\u09A4\u09CD\u09A8"
  },
  {
    "find": "tm",
    "replace": "\u09A4\u09CD\u09AE"
  },
  {
    "find": "th",
    "replace": "\u09A5"
  },
  {
    "find": "tt",
    "replace": "\u09A4\u09CD\u09A4"
  },
  {
    "find": "T",
    "replace": "\u099F"
  },
  {
    "find": "t",
    "replace": "\u09A4"
  },
  {
    "find": "aZ",
    "replace": "\u0985\u09CD\u09AF\u09BE"
  },
  {
    "find": "AZ",
    "replace": "\u0985\u09CD\u09AF\u09BE"
  },
  {
    "find": "a`",
    "replace": "\u09BE"
  },
  {
    "find": "A`",
    "replace": "\u09BE"
  },
  {
    "find": "a",
    "replace": "\u09BE",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0986"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "prefix",
            "scope": "!exact",
            "value": "a"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u09DF\u09BE"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "exact",
            "value": "a"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0986"
      }
    ]
  },
  {
    "find": "i`",
    "replace": "\u09BF"
  },
  {
    "find": "i",
    "replace": "\u09BF",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0987"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0987"
      }
    ]
  },
  {
    "find": "I`",
    "replace": "\u09C0"
  },
  {
    "find": "I",
    "replace": "\u09C0",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0988"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0988"
      }
    ]
  },
  {
    "find": "u`",
    "replace": "\u09C1"
  },
  {
    "find": "u",
    "replace": "\u09C1",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0989"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0989"
      }
    ]
  },
  {
    "find": "U`",
    "replace": "\u09C2"
  },
  {
    "find": "U",
    "replace": "\u09C2",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u098A"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u098A"
      }
    ]
  },
  {
    "find": "ee`",
    "replace": "\u09C0"
  },
  {
    "find": "ee",
    "replace": "\u09C0",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0988"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u0988"
      }
    ]
  },
  {
    "find": "e`",
    "replace": "\u09C7"
  },
  {
    "find": "e",
    "replace": "\u09C7",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u098F"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "!exact",
            "value": "`"
          }
        ],
        "replace": "\u098F"
      }
    ]
  },
  {
    "find": "z",
    "replace": "\u09AF"
  },
  {
    "find": "Z",
    "replace": "\u09CD\u09AF"
  },
  {
    "find": "y",
    "replace": "\u09CD\u09AF",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "!consonant"
          },
          {
            "type": "prefix",
            "scope": "!punctuation"
          }
        ],
        "replace": "\u09DF"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u0987\u09DF"
      }
    ]
  },
  {
    "find": "Y",
    "replace": "\u09DF"
  },
  {
    "find": "q",
    "replace": "\u0995"
  },
  {
    "find": "w",
    "replace": "\u0993",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          },
          {
            "type": "suffix",
            "scope": "vowel"
          }
        ],
        "replace": "\u0993\u09DF"
      },
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "consonant"
          }
        ],
        "replace": "\u09CD\u09AC"
      }
    ]
  },
  {
    "find": "x",
    "replace": "\u0995\u09CD\u09B8",
    "rules": [
      {
        "matches": [
          {
            "type": "prefix",
            "scope": "punctuation"
          }
        ],
        "replace": "\u098F\u0995\u09CD\u09B8"
      }
    ]
  },
  {
    "find": ":`",
    "replace": ":"
  },
  {
    "find": ":",
    "replace": "\u0983"
  },
  {
    "find": "^`",
    "replace": "^"
  },
  {
    "find": "^",
    "replace": "\u0981"
  },
  {
    "find": ",,",
    "replace": "\u09CD\u200C"
  },
  {
    "find": ",",
    "replace": ","
  },
  {
    "find": "$",
    "replace": "\u09F3"
  },
  {
    "find": "`",
    "replace": ""
  }
];

// src/avro.ts
var AvroPhonetic = class {
  constructor() {
    this.data = { patterns, vowel, consonant, casesensitive };
  }
  fixString(input) {
    let fixed = "";
    for (let i = 0; i < input.length; ++i) {
      const cChar = input.charAt(i);
      if (this.isCaseSensitive(cChar)) {
        fixed += cChar;
      } else {
        fixed += cChar.toLowerCase();
      }
    }
    return fixed;
  }
  isVowel(c) {
    return this.data.vowel.indexOf(c.toLowerCase()) >= 0;
  }
  isConsonant(c) {
    return this.data.consonant.indexOf(c.toLowerCase()) >= 0;
  }
  isPunctuation(c) {
    return !(this.isVowel(c) || this.isConsonant(c));
  }
  isExact(needle, heystack, start, end, not) {
    const match = start >= 0 && end < heystack.length && heystack.substring(start, end) === needle;
    return match !== !!not;
  }
  isCaseSensitive(c) {
    return this.data.casesensitive.indexOf(c.toLowerCase()) >= 0;
  }
  parse(input) {
    const fixed = this.fixString(input);
    let output = "";
    for (let cur = 0; cur < fixed.length; ++cur) {
      let start = cur;
      let end = cur + 1;
      let prev = start - 1;
      let matched = false;
      for (let i = 0; i < this.data.patterns.length; ++i) {
        const pattern = this.data.patterns[i];
        end = cur + pattern.find.length;
        if (end <= fixed.length && fixed.substring(start, end) === pattern.find) {
          prev = start - 1;
          if (pattern.rules) {
            for (let j = 0; j < pattern.rules.length; ++j) {
              const rule = pattern.rules[j];
              let replace = true;
              let chk = 0;
              for (let k = 0; k < rule.matches.length; ++k) {
                const match = rule.matches[k];
                if (match.type === "suffix") {
                  chk = end;
                } else {
                  chk = prev;
                }
                let negative = match.negative;
                let scope = match.scope;
                if (typeof negative === "undefined") {
                  negative = false;
                  if (scope.charAt(0) === "!") {
                    negative = true;
                    scope = scope.substring(1);
                  }
                }
                if (typeof match.value === "undefined") match.value = "";
                if (scope === "punctuation") {
                  const cond = chk < 0 && match.type === "prefix" || chk >= fixed.length && match.type === "suffix" || this.isPunctuation(fixed.charAt(chk));
                  if (!(cond !== negative)) {
                    replace = false;
                    break;
                  }
                } else if (scope === "vowel") {
                  const cond = (chk >= 0 && match.type === "prefix" || chk < fixed.length && match.type === "suffix") && this.isVowel(fixed.charAt(chk));
                  if (!(cond !== negative)) {
                    replace = false;
                    break;
                  }
                } else if (scope === "consonant") {
                  const cond = (chk >= 0 && match.type === "prefix" || chk < fixed.length && match.type === "suffix") && this.isConsonant(fixed.charAt(chk));
                  if (!(cond !== negative)) {
                    replace = false;
                    break;
                  }
                } else if (scope === "exact") {
                  let s, e;
                  if (match.type === "suffix") {
                    s = end;
                    e = end + (match.value?.length || 0);
                  } else {
                    s = start - (match.value?.length || 0);
                    e = start;
                  }
                  if (!this.isExact(match.value || "", fixed, s, e, negative)) {
                    replace = false;
                    break;
                  }
                }
              }
              if (replace) {
                output += rule.replace;
                cur = end - 1;
                matched = true;
                break;
              }
            }
          }
          if (matched) break;
          output += pattern.replace;
          cur = end - 1;
          matched = true;
          break;
        }
      }
      if (!matched) {
        output += fixed.charAt(cur);
      }
    }
    return output;
  }
};

// src/AvroInput.tsx
var import_react3 = __toESM(require("react"));

// src/components/Avro.tsx
var import_react2 = __toESM(require("react"));

// src/hooks/useAvro.ts
var import_react = require("react");
var import_textarea_caret = __toESM(require("textarea-caret"));

// src/suggestor.ts
var charVariations = {
  "a": ["a", "o", "e", "ya", "a:", "aZ"],
  "o": ["o", "u", "a", "O"],
  "e": ["e", "i", "a", "E"],
  "i": ["i", "e", "ee", "I"],
  "u": ["u", "o", "oo", "U"],
  "s": ["s", "sh", "S"],
  "t": ["t", "T", "th"],
  "d": ["d", "D", "dh"],
  "n": ["n", "N"],
  "r": ["r", "R"],
  "k": ["k", "K", "kh"],
  "g": ["g", "G", "gh"],
  "c": ["c", "ch", "C"],
  "j": ["j", "J", "jh"],
  "p": ["p", "P", "ph"],
  "b": ["b", "B", "bh"],
  "m": ["m", "M"],
  "l": ["l", "L"],
  "v": ["v", "bh"],
  "y": ["y", "j"]
};
function getSuggestions(word, parse2) {
  if (!word) return [];
  const suggestions = /* @__PURE__ */ new Set();
  suggestions.add(parse2(word));
  if (word.toLowerCase() === "a") {
    ["\u0986", "\u0986\u0983", "\u09BE", "\u098F", "\u0985\u09CD\u09AF\u09BE", "\u0985\u09CD\u09AF\u09BE\u0981"].forEach((v) => suggestions.add(v));
  }
  if (word.toLowerCase() === "o") {
    ["\u0993", "\u0985", "\u09CB"].forEach((v) => suggestions.add(v));
  }
  if (word.toLowerCase() === "e") {
    ["\u098F", "\u0987", "\u09C7", "\u09BF"].forEach((v) => suggestions.add(v));
  }
  const chars = word.split("");
  let substitutedCount = 0;
  for (let i = chars.length - 1; i >= 0 && substitutedCount < 2; i--) {
    const c = chars[i].toLowerCase();
    if (charVariations[c]) {
      for (const alt of charVariations[c]) {
        if (alt.toLowerCase() === c) continue;
        const altWord = word.substring(0, i) + alt + word.substring(i + 1);
        suggestions.add(parse2(altWord));
      }
      substitutedCount++;
    }
  }
  suggestions.add(word);
  return Array.from(suggestions);
}

// src/hooks/useAvro.ts
function useAvro(props) {
  const [suggestions, setSuggestions] = (0, import_react.useState)([]);
  const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
  const [isSuggesting, setIsSuggesting] = (0, import_react.useState)(false);
  const [caretCoords, setCaretCoords] = (0, import_react.useState)({ top: 0, left: 0, height: 0 });
  const inputRef = (0, import_react.useRef)(null);
  const activeWordData = (0, import_react.useRef)(null);
  const updateSuggestions = (0, import_react.useCallback)(() => {
    const el = inputRef.current;
    if (!el || typeof el.selectionStart !== "number") return;
    const val = el.value;
    const cur = el.selectionStart;
    let start = cur - 1;
    while (start >= 0 && !/\s/.test(val.charAt(start))) {
      start--;
    }
    start++;
    let end = cur;
    while (end < val.length && !/\s/.test(val.charAt(end))) {
      end++;
    }
    if (start < cur) {
      const word = val.substring(start, cur);
      activeWordData.current = { word, start, end: cur };
      const newSuggestions = getSuggestions(word, parse);
      setSuggestions(newSuggestions);
      setActiveIndex(0);
      setIsSuggesting(true);
      const coords = (0, import_textarea_caret.default)(el, cur);
      setCaretCoords(coords);
    } else {
      setIsSuggesting(false);
      activeWordData.current = null;
    }
  }, []);
  const replaceWord = (0, import_react.useCallback)((suggestion) => {
    const el = inputRef.current;
    if (!el || !activeWordData.current) return;
    const { start, end } = activeWordData.current;
    const val = el.value;
    const prefix = val.substring(0, start);
    const suffix = val.substring(end);
    const newValue = prefix + suggestion + suffix;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
    if (el.tagName === "TEXTAREA" && nativeTextAreaValueSetter) {
      nativeTextAreaValueSetter.call(el, newValue);
    } else if (nativeInputValueSetter) {
      nativeInputValueSetter.call(el, newValue);
    } else {
      el.value = newValue;
    }
    const event = new Event("input", { bubbles: true });
    el.dispatchEvent(event);
    const newCursorPos = start + suggestion.length;
    setTimeout(() => {
      el.selectionStart = newCursorPos;
      el.selectionEnd = newCursorPos;
      setIsSuggesting(false);
      activeWordData.current = null;
    }, 0);
  }, []);
  const handleChange = (0, import_react.useCallback)((e) => {
    if (props?.onChange) props.onChange(e);
    updateSuggestions();
  }, [props, updateSuggestions]);
  const handleKeyDown = (0, import_react.useCallback)((e) => {
    if (isSuggesting && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % suggestions.length);
        return;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      } else if (e.key === "Enter" || e.key === "Tab" || e.key === " ") {
        e.preventDefault();
        const selected = suggestions[activeIndex];
        replaceWord(selected);
        if (e.key === " ") {
          setTimeout(() => {
            const el = inputRef.current;
            if (!el) return;
            const cur = el.selectionStart;
            const nativeSet = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value")?.set;
            if (nativeSet) {
              nativeSet.call(el, el.value.substring(0, cur) + " " + el.value.substring(cur));
              el.dispatchEvent(new Event("input", { bubbles: true }));
              el.selectionStart = cur + 1;
              el.selectionEnd = cur + 1;
            }
          }, 0);
        }
        return;
      } else if (e.key === "Escape") {
        setIsSuggesting(false);
        return;
      }
    }
    if (props?.onKeyDown) props.onKeyDown(e);
    setTimeout(() => {
      updateSuggestions();
    }, 0);
  }, [isSuggesting, suggestions, activeIndex, replaceWord, props, updateSuggestions]);
  const handleBlur = (0, import_react.useCallback)(() => {
    setTimeout(() => {
      setIsSuggesting(false);
    }, 150);
  }, []);
  return {
    inputRef,
    bindings: {
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onBlur: handleBlur
    },
    suggestions,
    activeIndex,
    isSuggesting,
    caretCoords,
    replaceWord,
    setActiveIndex
  };
}

// src/components/Avro.tsx
var defaultDropdownStyle = {
  position: "absolute",
  background: "#2c2c2c",
  border: "1px solid #444",
  borderRadius: "4px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
  zIndex: 9999,
  minWidth: "150px",
  overflow: "hidden",
  fontFamily: "sans-serif"
};
var defaultItemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  color: "#fff",
  fontSize: "16px"
};
var defaultActiveItemStyle = {
  background: "#f99e3a",
  color: "#000"
};
var Avro = ({ children, dropdownStyle, itemStyle, activeItemStyle }) => {
  if (!import_react2.default.isValidElement(children)) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children);
  }
  const childElement = children;
  const childProps = childElement.props;
  const {
    inputRef,
    bindings,
    suggestions,
    activeIndex,
    isSuggesting,
    caretCoords,
    replaceWord,
    setActiveIndex
  } = useAvro({
    onChange: childProps.onChange,
    onKeyDown: childProps.onKeyDown
  });
  const handleRef = (node) => {
    inputRef.current = node;
    const childRef = children.ref;
    if (typeof childRef === "function") {
      childRef(node);
    } else if (childRef) {
      childRef.current = node;
    }
  };
  const clonedChild = import_react2.default.cloneElement(childElement, {
    ref: handleRef,
    onChange: bindings.onChange,
    onKeyDown: bindings.onKeyDown,
    onBlur: (e) => {
      if (childProps.onBlur) childProps.onBlur(e);
      bindings.onBlur();
    }
  });
  return /* @__PURE__ */ import_react2.default.createElement("div", { style: { position: "relative", display: "inline-block", width: "100%" } }, clonedChild, isSuggesting && suggestions.length > 0 && /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        ...defaultDropdownStyle,
        ...dropdownStyle,
        top: caretCoords.top + caretCoords.height + 5,
        left: caretCoords.left
      }
    },
    suggestions.map((s, idx) => /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        key: `${s}-${idx}`,
        style: {
          ...defaultItemStyle,
          ...itemStyle,
          ...idx === activeIndex ? { ...defaultActiveItemStyle, ...activeItemStyle } : {}
        },
        onMouseEnter: () => setActiveIndex(idx),
        onMouseDown: (e) => {
          e.preventDefault();
          replaceWord(s);
        }
      },
      s
    ))
  ));
};

// src/AvroInput.tsx
var defaultStyle = {
  width: "100%",
  padding: "1rem",
  fontSize: "1.25rem",
  borderRadius: "0.75rem",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  outline: "none",
  resize: "none",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(12px)",
  transition: "all 0.2s ease-in-out",
  fontFamily: "inherit"
};
var AvroInput = import_react3.default.forwardRef(
  ({ className, onValueChange, useDefaultStyles = true, style, onChange, ...props }, ref) => {
    const handleChange = (e) => {
      if (onChange) onChange(e);
      if (onValueChange) onValueChange(e.target.value);
    };
    return /* @__PURE__ */ import_react3.default.createElement(Avro, null, /* @__PURE__ */ import_react3.default.createElement(
      "textarea",
      {
        ref,
        style: useDefaultStyles ? { ...defaultStyle, ...style } : style,
        className,
        onChange: handleChange,
        ...props
      }
    ));
  }
);
AvroInput.displayName = "AvroInput";

// src/index.ts
var avro = new AvroPhonetic();
function parse(input) {
  return avro.parse(input);
}
var index_default = avro;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avro,
  AvroInput,
  parse,
  useAvro
});
