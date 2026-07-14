                this._regex = new d.AvroRegex();
            },
        }),
            c({ DBSearch: a }),
            (s = "suggestionbuilder"));
        var f = l.dbsearch,
            m = l.autocorrect.db,
            g = l.avrolib.OmicronLab.Avro.Phonetic,
            k = l.levenshtein,
            y = l.suffixdict.db;
        ((o.prototype = {
            _init: function () {
                ((this._dbSearch = new f.DBSearch()),
                    (this._candidateSelections = this._loadCandidateSelectionsFromFile()),
                    (this._phoneticCache = {}),
                    (this._tempCache = {}),
                    (this._pref = this._defaultPref()));
            },
            _defaultPref: function () {
                return { dictEnable: !0 };
            },
            _getDictionarySuggestion: function (e) {
                var t = [];
                return (
                    (e = e.middle.toLowerCase()),
                    (t = this._phoneticCache[e]
                        ? this._phoneticCache[e].slice(0)
                        : this._dbSearch.search(e))
                );
            },
            _getClassicPhonetic: function (e) {
                return p.utf8Decode(g.parse(e));
            },
            _correctCase: function (e) {
                return g.fixString(e);
            },
            _getAutocorrect: function (e, t) {
                var n = {};
                if (m[e])
                    m[e] == e
                        ? ((n.corrected = e), (n.exact = !0))
                        : ((n.corrected = this._getClassicPhonetic(m[e])), (n.exact = !1));
                else {
                    var r = this._correctCase(t.middle);
                    m[r] &&
                        ((n.corrected = this._getClassicPhonetic(m[r])), (n.exact = !1));
                }
                return n;
            },
            _separatePadding: function (e) {
                e = e.match(
                    /(^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*?(?=(?:,{2,}))|^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*)(.*?(?:,,)*)((?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*$)/,
                );
                var t = {};
                return ((t.begin = e[1]), (t.middle = e[2]), (t.end = e[3]), t);
            },
            _sortByPhoneticRelevance: function (e, t) {
                var n = t.slice(0);
                return (
                    n.sort(function (t, n) {
                        var r = k.levenshtein(e, t),
                            i = k.levenshtein(e, n);
                        return i > r ? -1 : r > i ? 1 : 0;
                    }),
                    n
                );
            },
            _addToArray: function (e, t) {
                -1 == e.indexOf(t) && e.push(t);
            },
            _convertToUnicodeValue: function (e) {
                for (var t = "", n = 0; n < e.length; n++)
                    var r = e.charCodeAt(n),
                        t = r >= 255 ? t + ("\\u0" + r.toString(16)) : t + e.charAt(n);
                return t;
            },
            _isKar: function (e) {
                return 1 > e.length
                    ? !1
                    : ((e = e.charAt(0)),
                        /^[\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc\u09c4]$/.test(
                            e,
                        ));
            },
            _isVowel: function (e) {
                return 1 > e.length
                    ? !1
                    : ((e = e.charAt(0)),
                        /^[\u0985\u0986\u0987\u0988\u0989\u098a\u098b\u098f\u0990\u0993\u0994\u098c\u09e1\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc]$/.test(
                            e,
                        ));
            },
            _addToTempCache: function (e, t, n) {
                this._tempCache[e] ||
                    ((this._tempCache[e] = {}),
                        (this._tempCache[e].base = t),
                        (this._tempCache[e].eng = n));
            },
            _addSuffix: function (e) {
                var t = [],
                    n = "";
                e = e.middle.toLowerCase();
                var r = e.length,
                    a = [];
                if (
                    (this._phoneticCache[e] && (a = this._phoneticCache[e].slice(0)),
                        (this._tempCache = {}),
                        r >= 2)
                )
                    for (var o = 1; r >= o; o++) {
                        var s = e.substr(o, r),
                            l = y[s];
                        if (
                            l &&
                            ((s = e.substr(0, e.length - s.length)), this._phoneticCache[s])
                        ) {
                            for (var c = 0; c < this._phoneticCache[s].length; c++) {
                                var u = this._phoneticCache[s][c],
                                    n = u.substr(-1),
                                    p = l.substr(0, 1);
                                this._isVowel(n) && this._isKar(p)
                                    ? ((n = u + "à§Ÿ" + l),
                                        t.push(n),
                                        this._addToTempCache(n, u, s))
                                    : "à§Ž" == n
                                        ? ((n = u.substr(0, u.length - 1) + "à¦¤" + l),
                                            t.push(n),
                                            this._addToTempCache(n, u, s))
                                        : "à¦‚" == n
                                            ? ((n = u.substr(0, u.length - 1) + "à¦™" + l), t.push(n))
                                            : ((n = u + l), t.push(n), this._addToTempCache(n, u, s));
                            }
                            for (i in t) a.push(t[i]);
                        }
                    }
                return a;
            },
            _joinSuggestion: function (e, t, n, r) {
                var a = [];
                if (this._pref.dictEnable) {
                    (e.corrected && (a.push(e.corrected), e.exact || t.push(e.corrected)),
                        this._phoneticCache[r.middle.toLowerCase()] ||
                        (0 < t.length &&
                            (this._phoneticCache[r.middle.toLowerCase()] = t.slice(0))),
                        (t = this._addSuffix(r)),
                        (t = this._sortByPhoneticRelevance(n, t)));
                    for (i in t) this._addToArray(a, t[i]);
                    (this._addToArray(a, n),
                        (n = {}),
                        (n.prevSelection = this._getPreviousSelection(r, a)));
                    for (i in a)
                        e.exact
                            ? e.corrected != a[i] && (a[i] = r.begin + a[i] + r.end)
                            : (a[i] = r.begin + a[i] + r.end);
                    n.words = a;
                } else
                    (a.push(n),
                        (a[0] = r.begin + a[0] + r.end),
                        (n = {}),
                        (n.words = a),
                        (n.prevSelection = 0));
                return n;
            },
            _getPreviousSelection: function (e, t) {
                var n = e.middle,
                    r = n.length,
                    i = "";
                if (this._candidateSelections[n]) i = this._candidateSelections[n];
                else if (r >= 2)
                    for (var a = 1; r > a; a++) {
                        var o = n.substr(-a).toLowerCase(),
                            s = y[o];
                        if (
                            s &&
                            ((o = n.substr(0, n.length - o.length)),
                                this._candidateSelections[o])
                        ) {
                            ((r = this._candidateSelections[o]),
                                (i = r.substr(-1)),
                                (a = s.substr(0, 1)),
                                (i =
                                    this._isVowel(i) && this._isKar(a)
                                        ? r + "à§Ÿ" + s
                                        : "à§Ž" == i
                                            ? r.substr(0, r.length - 1) + "à¦¤" + s
                                            : "à¦‚" == i
                                                ? r.substr(0, r.length - 1) + "à¦™" + s
                                                : r + s),
                                this._updateCandidateSelection(n, i));
                            break;
                        }
                    }
                return ((n = t.indexOf(i)), 0 > n ? 0 : n);
            },
            _loadCandidateSelectionsFromFile: function () {
                return {};
            },
            _saveCandidateSelectionsToFile: function () { },
            _updateCandidateSelection: function (e, t) {
                this._candidateSelections[e] = t;
            },
            _logger: function (e, t) {
                var n = (t || "Log") + ": " + JSON.stringify(e, null, "	");
                console.log(n);
            },
            getPref: function () {
                return this._pref;
            },
            setPref: function (e) {
                this._pref = e;
            },
            stringCommitted: function (e, t) {
                if (this._pref.dictEnable) {
                    if (this._tempCache[t]) {
                        var n = this._tempCache[t].base,
                            r = this._tempCache[t].eng;
                        this._candidateSelections[r] ||
                            ((this._candidateSelections[r] = n),
                                this._saveCandidateSelectionsToFile(this._candidateSelections));
                    }
                    this._saveCandidateSelectionsToFile(this._candidateSelections);
                }
            },
            updateCandidateSelection: function (e, t) {
                if (this._pref.dictEnable) {
                    var n = this._separatePadding(e);
                    this._updateCandidateSelection(n.middle, t);
                }
            },
            suggest: function (e) {
                var t = this._separatePadding(e);
                ((t.begin = this._getClassicPhonetic(t.begin)),
                    (t.end = this._getClassicPhonetic(t.end)));
                var n = this._getClassicPhonetic(t.middle);
                if (this._pref.dictEnable)
                    var r = this._getDictionarySuggestion(t),
                        i = this._getAutocorrect(e, t);
                return this._joinSuggestion(i, r, n, t);
            },
        }),
