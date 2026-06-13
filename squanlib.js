// =============================================================================
// Unified Squan toolkit
// =============================================================================

export default class SquanLib {

    // =========================================================================
    // SECTION 1 — DATA TABLES
    // =========================================================================

    // -------------------------------------------------------------------------
    // karnToWCA
    // Keys are padded with spaces on both sides so a simple global replace on a
    // space-delimited string cannot match partial tokens.
    // -------------------------------------------------------------------------
    static karnToWCA = {
        "U4": "U U' U U'", "U4'": "U' U U' U",
        "D4": "D D' D D'", "D4'": "D' D D' D",
        "u4": "u u' u u'", "u4'": "u' u u' u",
        "d4": "d d' d d'", "d4'": "d' d d' d",

        "U3": "U U' U", "U3'": "U' U U'",
        "D3": "D D' D", "D3'": "D' D D'",
        "u3": "u u' u", "u3'": "u' u u'",
        "d3": "d d' d", "d3'": "d' d d'",
        "F3": "F F' F", "F3'": "F' F F'",
        "f3": "f f' f", "f3'": "f' f f'",

        "W": "U U'", "W'": "U' U",
        "B": "D D'", "B'": "D' D",
        "w": "u u'", "w'": "u' u",
        "b": "d d'", "b'": "d' d",
        "F2": "F F'", "F2'": "F' F",
        "f2": "f f'", "f2'": "f' f",
        "UU": "U U", "UU'": "U' U'",
        "DD": "D D", "DD'": "D' D'",
        "T2": "T T'", "T2'": "T' T",
        "t2": "t t'", "t2'": "t' t",
        "E2": "E E'", "E2'": "E' E",
        "ɇ": "U D", "ɇ'": "U' D'",
        "Ɇ": "U D'", "Ɇ'": "U' D",

        "U2": "6,0", "U2'": "6,0",
        "D2": "0,6",
        "U2D": "6,3", "U2D'": "6,-3",
        "U2'D": "6,3", "U2'D'": "6,-3",
        "U2D2": "6,6",
        "UD2": "3,6", "U'D2": "-3,6",

        "U": "3,0", "U'": "-3,0",
        "D": "0,3", "D'": "0,-3",
        "E": "3,-3", "E'": "-3,3",
        "e": "3,3", "e'": "-3,-3",
        "u": "2,-1", "u'": "-2,1",
        "d": "-1,2", "d'": "1,-2",
        "F": "4,1", "F'": "-4,-1",
        "f": "1,4", "f'": "-1,-4",
        "T": "2,-4", "T'": "-2,4",
        "t": "4,-2", "t'": "-4,2",
        "m": "2,2", "m'": "-2,-2",
        "M": "1,1", "M'": "-1,-1",
        "u2": "5,-1", "u2'": "-5,1",
        "d2": "-1,5", "d2'": "1,-5",
        "K": "5,2", "K'": "-5,-2",
        "k": "2,5", "k'": "-2,-5",
        "A": "1,0", "A'": "-1,0",
        "G": "5,-4", "G'": "-5,4",
        "g": "4,-5", "g'": "-4,5",
    };

    // -------------------------------------------------------------------------
    // shorthandToKarn
    // "move10" means top misalign, "move1-1" means double misalign, etc.
    // Some shorthands are alignment-independent (bjj, fjj, nn, …).
    // -------------------------------------------------------------------------
    static shorthandToKarn = {
        // ── alignment-independent ─────────────────────────────────────────────
        "bjj": "U' e D'", "fjj": "U e' D",
        "e2bjj": "U' e' U'", "e2fjj": "U e U",
        "nn": "E E'",
        "jn": "D4'", "nj": "U4",
        "jj": "U e' D", "bjj+e2": "U' e' U'",
        "-nn": "E' E",
        "-jn": "D4", "-nj": "D4'",
        // ── alignment-dependent ───────────────────────────────────────────────
        "bpj10": "d m' U", "bpj0-1": "u' m D'",
        "fpj10": "u m' D", "fpj0-1": "d' m U'",
        "aa10": "u m' u T'", "aa0-1": "U m' U t'",
        "fadj10": "D M' d'", "dadj10": "D M' d'",
        "fadj0-1": "U' M u", "u'adj0-1": "U' M u",
        "badj10": "U M' u'", "uadj10": "U M' u'",
        "badj0-1": "D' M d", "d'adj0-1": "D' M d",
        "bb10": "T u' e U'", "bb0-1": "t d e' D",
        "fdd10": "D e' d t", "fdd0-1": "U' e u' T",
        "bdd10": "U e' u T'", "bdd0-1": "D' e d' t'",
        "ff10": "d m' d M E", "ff0-1": "u' m U' M T",
        "fv10": "d4", "fv0-1": "d4'",
        "vf10": "u4", "vf0-1": "u4'",
        "y2fv10": "u d' u -5,4",
        "jf10": "w D' u T'", "jf0-1": "w' D u' T",
        "fj10": "b U' d t", "fj0-1": "b' U d' t'",
        "jr00": "e' w e", "jr10": "e' b e",
        "jr0-1": "e' w' e", "jr1-1": "e' b' e",
        "rj00": "e b' e'", "rj10": "e w e'",
        "rj0-1": "e b' e'", "rj1-1": "e w e'",
        "jv10": "b D d d2'", "jv0-1": "b' D' d' d2",
        "vj10": "w U u u2'", "vj0-1": "w' U' u' u2",
        "kk10": "u m' U E'", "kk0-1": "U m' u E'",
        "opp10": "u2 u2'", "opp0-1": "u2' u2",
        "pn10": "T T'", "pn0-1": "t t'",
        "px10": "f' d3' f'", "px0-1": "f d3 f",
        "xp10": "F' u3' F'", "xp0-1": "F u3 F",
        "tt10": "d m' F' u2'",
        "fss10": "u M D' E'", "fss0-1": "D' M u E'",
        "bss10": "D M' u' E", "bss0-1": "U' M d E",
        "vv10": "u M u m' E'",
        "zz10": "u M t' M D'", "zz0-1": "D' M t' M u",
        // random things
        "30adj10": "U M' u'", "-30adj0-1": "U' M u",
        "03adj10": "D M' d'",
        "obopp00": "1,0/M' F M' F M'/0,1",
        "oaopp1-1": "0,1/M' u' M' u' M'/0,1",
        "but00": "", "also00": "", "done!00": "0,0",
    };

    static alignmentIndependent = new Set([
        'bjj', 'fjj', 'nn', 'jn', 'nj', 'e2bjj', 'e2fjj',
        'jj', 'bjj+e2', '-nn', '-jn', '-nj',
    ]);

    // -------------------------------------------------------------------------
    // wcaToBaseKarn — maps single WCA move → base karn.
    // -------------------------------------------------------------------------
    static wcaToBaseKarn = {
        // ── compound numeric → single karn ────────────────────────────────────
        "6,0": "U2",
        "6,3": "U2D", "6,-3": "U2D'", "6,6": "U2D2",
        "0,6": "D2",
        "3,6": "UD2", "-3,6": "U'D2",
        // ── single numeric → single karn ──────────────────────────────────────
        "3,0": "U", "-3,0": "U'",
        "0,3": "D", "0,-3": "D'",
        "3,-3": "E", "-3,3": "E'",
        "3,3": "e", "-3,-3": "e'",
        "2,-1": "u", "-2,1": "u'",
        "-1,2": "d", "1,-2": "d'",
        "4,1": "F", "-4,-1": "F'",
        "1,4": "f", "-1,-4": "f'",
        "2,-4": "T", "-2,4": "T'",
        "4,-2": "t", "-4,2": "t'",
        "2,2": "m", "-2,-2": "m'",
        "1,1": "M", "-1,-1": "M'",
        "5,-1": "u2", "-5,1": "u2'",
        "-1,5": "d2", "1,-5": "d2'",
        "5,2": "K", "-5,-2": "K'",
        "2,5": "k", "-2,-5": "k'",
    };

    // -------------------------------------------------------------------------
    // baseKarnToHighKarn — longest first, base karn → high karn
    // -------------------------------------------------------------------------
    static baseKarnToHighKarn = {
        "U U' U U'": "U4", "U' U U' U": "U4'",
        "D D' D D'": "D4", "D' D D' D": "D4'",
        "u u' u u'": "u4", "u' u u' u": "u4'",
        "d d' d d'": "d4", "d' d d' d": "d4'",

        "U U' U": "U3", "U' U U'": "U3'",
        "D D' D": "D3", "D' D D'": "D3'",
        "u u' u": "u3", "u' u u'": "u3'",
        "d d' d": "d3", "d' d d'": "d3'",
        "F F' F": "F3", "F' F F'": "F3'",
        "f f' f": "f3", "f' f f'": "f3'",

        "U U'": "W", "U' U": "W'",
        "D D'": "B", "D' D": "B'",
        "u u'": "w", "u' u": "w'",
        "d d'": "b", "d' d": "b'",
        "F F'": "F2", "F' F": "F2'",
        "f f'": "f2", "f' f": "f2'",
        "U U": "UU", "U' U'": "UU'",
        "D D": "DD", "D' D'": "DD'",
    };

    /**
     * A_MOVES — legal moves available for top misalign
     * a_MOVES — legal moves available for bottom misalign
     */
    static A_MOVES = [
        [3, 0], [-3, 0], [0, 3], [0, -3], [3, 3],
        [2, -1], [-1, 2], [-4, -1], [-1, -4], [2, -4], [2, 2], [-1, -1], [5, -1],
    ];
    static a_MOVES = [
        [3, 0], [-3, 0], [0, 3], [0, -3], [3, 3],
        [-2, 1], [1, -2], [4, 1], [1, 4], [-2, 4], [-2, -2], [1, 1], [-5, 1],
    ];

    /**
     * OPTIM — table for optimizable moves
     */
    static OPTIM = {
        // special case
        "/0,0/": "",
        "/3,3/3,3/": "-3,-3/-3,-3",
        "/-3,-3/-3,-3/": "3,3/3,3",
        "/2,2/-2,-2/": "2,2/-2,-2",
        "/-2,-2/2,2/": "-2,-2/2,2",
        "/1,1/-1,-1/": "1,1/-1,-1",
        "/-1,-1/1,1/": "-1,-1/1,1",
        "/2,-4/-2,4/2,-4/": "2,-4/-2,4/2,-4",
        "/-2,4/2,-4/-2,4/": "-2,4/2,-4/-2,4",
        "/5,-1/-5,1/5,-1/": "5,-1/-5,1/5,-1",
        "/-5,1/5,-1/-5,1/": "-5,1/5,-1/-5,1",
    };

    /**
     * CLOSEST_MAP — maps a -5~6 turn to the its closest 3n move
     */
    static CLOSEST_MAP = new Map([
        [-5, -6], [-4, -3], [-3, -3], [-2, -3], [-1, 0], [0, 0],
        [1, 0], [2, 3], [3, 3], [4, 3], [5, 6], [6, 6],
    ]);

    /**
     * MOVE_VALUES — lookup table for the ergonomic rating of each individual move.
     *   A = 10, a = 0-1
     *   / = upslice, \ = downslice
     */
    static MOVE_VALUES = new Map([
        // aligned top, upslice
        ['A/0,3', 16], ['A/0,6', 1], ['A/0,-3', 18],
        ['A/3,0', 16], ['A/3,3', 12], ['A/3,6', 0], ['A/3,-3', 13],
        ['A/6,0', 12], ['A/6,3', 11], ['A/6,6', 2], ['A/6,-3', 12],
        ['A/-3,0', 9], ['A/-3,3', 13], ['A/-3,6', 4], ['A/-3,-3', 12],
        // aligned top, downslice
        ['A\\0,3', 17], ['A\\0,6', 1], ['A\\0,-3', 8],
        ['A\\3,0', 6], ['A\\3,3', 14], ['A\\3,6', 1], ['A\\3,-3', 12],
        ['A\\6,0', 14], ['A\\6,3', 11], ['A\\6,6', 5], ['A\\6,-3', 8],
        ['A\\-3,0', 11], ['A\\-3,3', 14], ['A\\-3,6', 6], ['A\\-3,-3', 9],
        // unaligned top, upslice
        ['a/0,3', 5], ['a/0,6', 5], ['a/0,-3', 12],
        ['a/3,0', 17], ['a/3,3', 10], ['a/3,6', 5], ['a/3,-3', 7],
        ['a/6,0', 4], ['a/6,3', 2], ['a/6,6', 0], ['a/6,-3', 3],
        ['a/-3,0', 18], ['a/-3,3', 12], ['a/-3,6', 7], ['a/-3,-3', 11],
        // unaligned top, downslice
        ['a\\0,3', 5], ['a\\0,6', 5], ['a\\0,-3', 5],
        ['a\\3,0', 16], ['a\\3,3', 11], ['a\\3,6', 4], ['a\\3,-3', 6],
        ['a\\6,0', 4], ['a\\6,3', 2], ['a\\6,6', 0], ['a\\6,-3', 1],
        ['a\\-3,0', 15], ['a\\-3,3', 10], ['a\\-3,6', 2], ['a\\-3,-3', 5],
        // fractional (non-multiple-of-3) moves — alignment prefix omitted
        ['/1,-2', 4], ['\\1,-2', 17], ['/-1,2', 15], ['\\-1,2', 14],
        ['/1,-5', 3], ['\\1,-5', 1], ['/-1,5', 8], ['\\-1,5', 3],
        ['/1,4', 7], ['\\1,4', 14], ['/-1,-4', 12], ['\\-1,-4', 9],
        ['/1,1', 11], ['\\1,1', 20], ['/-1,-1', 20], ['\\-1,-1', 10],
        ['/2,-1', 20], ['\\2,-1', 12], ['/-2,1', 14], ['\\-2,1', 18],
        ['/2,2', 12], ['\\2,2', 13], ['/-2,-2', 14], ['\\-2,-2', 8],
        ['/2,5', 5], ['\\2,5', 3], ['/-2,-5', 4], ['\\-2,-5', 3],
        ['/2,-4', 14], ['\\2,-4', 6], ['/-2,4', 13], ['\\-2,4', 13],
        ['/4,4', 5], ['\\4,4', 12], ['/-4,-4', 12], ['\\-4,-4', 4],
        ['/4,1', 6], ['\\4,1', 13], ['/-4,-1', 16], ['\\-4,-1', 6],
        ['/4,-2', 12], ['\\4,-2', 9], ['/-4,2', 16], ['\\-4,2', 13],
        ['/4,-5', 2], ['\\4,-5', 5], ['/-4,5', 13], ['\\-4,5', 3],
        ['/5,5', 1], ['\\5,5', 4], ['/-5,-5', 2], ['\\-5,-5', 0],
        ['/5,2', 6], ['\\5,2', 10], ['/-5,-2', 12], ['\\-5,-2', 13],
        ['/5,-1', 11], ['\\5,-1', 7], ['/-5,1', 14], ['\\-5,1', 15],
        ['/5,-4', 2], ['\\5,-4', 2], ['/-5,4', 12], ['\\-5,4', 14],
    ]);

    /**
     * @param {object} [tempReplacements] — initial manual unkarnifications.
     */
    constructor(tempReplacements = { "meow :3": "meow :3" }) {
        // place to put manual unkarnifications
        this.tempReplacements = { ...tempReplacements };
    }

    /**
     * setTempReplacements — replace the entire tempReplacements map.
     *
     * @param {Object<string,string>} replacements — the new key→value pairs
     * @returns {this}
     */
    setTempReplacements(replacements) {
        this.tempReplacements = { ...replacements };
        return this;
    }

    /**
     * addTempReplacements — merge key→value pairs into tempReplacements.
     *
     * @param {Object<string,string>} replacements — pairs to add (overwrites collisions)
     * @returns {this}
     */
    addTempReplacements(replacements) {
        Object.assign(this.tempReplacements, replacements);
        return this;
    }


    // =========================================================================
    // SECTION 2 — CORE UTILITIES
    // =========================================================================

    /**
     * dictReplace — repeatedly applies every key→value substitution in `dict`
     * to `str` until the string stabilizes.
     *
     * @param {string} str — the string to be replaced
     * @param {object} dict — the dictionary
     * @returns {string} — the fully replaced string
     */
    dictReplace(str, dict) {
        const pattern = new RegExp(
            Object.keys(dict).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
            'g'
        );
        let prev;
        do { prev = str; str = str.replace(pattern, m => dict[m]); } while (str !== prev);
        return str;
    }

    /**
     * addCommas — e.g. "2-1" → "2,-1"
     *
     * length 1 → "N,0"
     * length 2 → starts with '-'? "-N,0" : "A,B"
     * length 3 → starts with '-'? "-A,B" : "A,BC"    (where BC is the second part)
     * length 4 → "AB,CD"
     * anything else that is not all-digits/minus → pass through unchanged
     *
     * @param {string} alg — the scramble, single space separated. can have commas already.
     * @returns {string} — the scramble, with commas added
     */
    addCommas(alg) {
        return alg.split(' ').map(move => {
            if (!move || isNaN(Number(move.replaceAll('-', ''))) || move.includes(","))
                return move;
            switch (move.length) {
                case 1: return move + ',0';
                case 2: return move.charAt(0) === '-' ? move + ',0'
                    : move[0] + ',' + move[1];
                case 3: return move.charAt(0) === '-' ? move.slice(0, 2) + ',' + move[2]
                    : move[0] + ',' + move.slice(1);
                case 4: return move.slice(0, 2) + ',' + move.slice(2);
                default: throw new Error(`"${move}" is not a valid karn numeric move`);
            }
        }).join(' ');
    }

    /**
     * isKarn — returns true if the string uses any letters
     *
     * @param {string} str — the alg
     * @returns {boolean} — whether the alg contains letters
     */
    isKarn(str) {
        return /[a-zA-Z]/.test(str);
    }

    /**
     * getAlignment — turns topA and bottomA into a starting move
     *
     * @param {boolean} topA — top misalign?
     * @param {boolean} bottomA — bottom misalign?
     * @returns {string} — e.g. "10", "1-1"
     */
    getAlignment(topA, bottomA) {
        return (topA ? '1' : '0') + (bottomA ? '-1' : '0');
    }


    // =========================================================================
    // SECTION 3 — UNKARNIFY PIPELINE
    // =========================================================================

    /**
     * unkarnifyHelp — does the actual unkarnifying
     *
     * @param {string} alg — the alg
     * @returns {string} — surface-level unkarnified alg
     */
    unkarnifyHelp(alg) {
        // trim and replace random ass characters
        alg = alg.trim().replaceAll(/[()]/g, "");
        // " / " → "/"
        alg = alg.replaceAll(/ ([\/\\\|]) /g, "$1")
        if (/[\/\\\|]{2,}/.test(alg)) throw new Error("unkarnifyHelp: Two slices in a row.");

        if (!this.isKarn(alg)) return alg; // not karn at all

        // these can be "", if the alg starts/ends with a slice
        let firstMove, lastMove;
        if (!/[/\\| ]/.test(alg)) firstMove = lastMove = alg; // only one move
        else {
            firstMove = alg.match(/^([^/\\| ]*)[/\\| ]/)?.[1];
            lastMove = alg.match(/[/\\| ]([^/\\| ]*)$/)?.[1];
        }

        // only tests if it literally starts with a slice
        let startsSlice = ["/", "\\", "|"].includes(alg.charAt(0));
        // grab the literal starting slice, or just use a /
        let startingSlice = startsSlice ? alg.charAt(0) :
            firstMove in SquanLib.karnToWCA ? "/" : "";
        // same
        let endingSlice = "/" === alg.at(-1) ? "/" :
            lastMove in SquanLib.karnToWCA ? "/" : "";

        // replace all possible slices with spaces now that we have slice start
        alg = alg.replaceAll(/[/\\| ]+/g, ' ');
        alg = this.addCommas(alg);
        // now go through scramble move by move
        let s = alg.split(" ").filter(Boolean);
        for (let i = 0; i < s.length; i++)
            if (s[i] in SquanLib.karnToWCA) s[i] = SquanLib.karnToWCA[s[i]].split(" ");

        // high karns gone. now flatten
        s = s.flat();
        for (let i = 0; i < s.length; i++)
            if (s[i] in SquanLib.karnToWCA) s[i] = SquanLib.karnToWCA[s[i]];

        alg = startingSlice + s.join("/") + endingSlice;
        // sanity replacements
        alg = alg.replaceAll(/ +/g, "")
        if (/[\/\\\|]{2,}/.test(alg)) throw new Error("unkarnifyHelp: Two slices in a row post-replacements.");

        return alg;
    }

    /**
     * unkarnify — master karn → WCA
     * basically unkarnifyHelp + replaceShorthand with bling blings
     *
     * @param {string} alg — the alg to be unkarnified
     * @returns {string} — unkarnified alg, duh
     */
    unkarnify(alg) {
        // overrides
        if (alg in this.tempReplacements) return this.tempReplacements[alg];

        // p scrambles
        let isPScramble = /^p[ /\\|]/.test(alg);
        let startingSlice;
        if (isPScramble) {
            startingSlice = alg.charAt(1) === " " ? "/" : alg.charAt(1);
            alg = alg.slice(2, -3);
        }

        // legacy character substitutions
        alg = alg
            .replaceAll('&', '-1')
            .replaceAll('^', '-2')
            .replaceAll('9', '-3')
            .replaceAll('8', '-4')
            .replaceAll('7', '-5');

        // expand move groups, e.g. "(U U')3" → "U U' U U' U U'"
        for (const group of alg.matchAll(/(\(.*?\))(\d+)/g)) {
            const inner = group[1].replaceAll(/[()]/g, '');
            const count = parseInt(group[2], 10);
            alg = alg.replace(group[0], Array(count).fill(inner).join(' '));
        }

        // the core defer
        let final = this.replaceShorthands(this.unkarnifyHelp(alg));

        // handle p scramble
        if (isPScramble) {
            if (["/", "\\", "|"].includes(final.charAt(0))) final = final.slice(1);
            final = 'p' + startingSlice + final + "/p'";
        }
        final = final.replaceAll(/\/+/g, '/');

        return final;
    }

    /**
     * replaceShorthands — replace shorthands (bjj, fv, kk, …) in an alg,
     * tracking alignment state to choose the correct shorthand.
     *
     * @param {string} alg — the alg
     * @returns {string} — the alg with shorthands replaced... guys jsdoc is sometimes dumb
     */
    replaceShorthands(alg) {
        const moves = alg.split(/[\/\\\|]/);

        // early out: no shorthands
        const allKnown = moves.every(m =>
            !m || !this.isKarn(m) || (' ' + m + ' ' in SquanLib.karnToWCA)
        );
        if (allKnown) return this.unkarnifyHelp(alg);

        let topA = false, bottomA = false;

        for (const move of moves) {
            if (!move) continue;

            if (move.includes(',')) {
                // Numeric turn — update alignment tracker.
                const [u, d] = move.split(',');
                if (parseInt(u, 10) % 3 !== 0) topA = !topA;
                if (parseInt(d, 10) % 3 !== 0) bottomA = !bottomA;
            } else {
                // shorthand
                const key = SquanLib.alignmentIndependent.has(move.toLowerCase())
                    ? move.toLowerCase()
                    : move.toLowerCase() + this.getAlignment(topA, bottomA);

                const replacement = SquanLib.shorthandToKarn[key];
                if (replacement === undefined)
                    throw new Error(`replaceShorthands: "${move}" with alignment ${this.getAlignment(topA, bottomA)} is not defined.`);

                alg = alg.replace(move, replacement);

                // Update alignment based on what the replacement expands to.
                for (const sub of this.unkarnifyHelp(replacement).split('/')) {
                    if (!sub) continue;
                    const [u, d] = sub.split(',');
                    if (parseInt(u, 10) % 3 !== 0) topA = !topA;
                    if (parseInt(d, 10) % 3 !== 0) bottomA = !bottomA;
                }
            }
        }

        // unkarnify the shorthands that were replaced into the alg
        return this.unkarnifyHelp(alg);
    }


    // =========================================================================
    // SECTION 4 — SCRAMBLE / ALG UTILITIES
    // =========================================================================

    /**
     * parseScramble — tokenizes a WCA squan scramble
     *
     * @param {string} alg the alg
     * @returns {{ type: string, top?: number, bottom?: number }[]} after parsing
     */
    parseScramble(alg) {
        const moves = [];
        const parts = alg.replace(/[\/\\\|]/g, ' / ').trim().split(/\s+/).filter(Boolean);
        for (let part of parts) {
            if (part.startsWith("p"))
                moves.push({ type: 'turn', top: 0, bottom: 0 });
            else if (part === '/') {
                moves.push({ type: 'twist' });
            } else {
                part = this.addCommas(part.replace(/[()]/g, ''));
                if (!part.includes(",")) throw new Error(`parseScramble: move: ${part} is weird.`)
                const [top, bottom] = part.split(',').map(n => parseInt(n.trim(), 10));
                if (!isNaN(top) && !isNaN(bottom))
                    moves.push({ type: 'turn', top, bottom });
            }
        }
        return moves;
    }

    /**
     * twist — does a slice on a hex string
     *
     * @param {string} tlHex top layer hex, from UFL clockwise
     * @param {string} blHex bottom layer hex, from DF clockwise
     */
    twist(tlHex, blHex) {
        return {
            tlHex: tlHex.slice(0, 6) + blHex.slice(0, 6),
            blHex: tlHex.slice(6) + blHex.slice(6),
        };
    }

    /**
     * cycleLeft — rotate a hex string left by `places` positions (mod 12).
     *
     * @param {string} hex 12-char hex
     * @param {number} places how much to shift left by
     * @returns {string} the shifted string
     */
    cycleLeft(hex, places) {
        const n = ((places % 12) + 12) % 12;
        return hex.slice(n) + hex.slice(0, n);
    }

    /**
     * algToHex — get the hex state that the alg generates
     *
     * @param {string} alg an alg. karn is accepted.
     * @returns {tlHex: string, blHex: string} the hex
     */
    algToHex(alg) {
        let tlHex = '011233455677';
        let blHex = '998bbaddcffe';
        for (const move of this.parseScramble(this.unkarnify(alg))) {
            if (move.type === 'twist') {
                ({ tlHex, blHex } = this.twist(tlHex, blHex));
            } else {
                tlHex = this.cycleLeft(tlHex, move.top);
                blHex = this.cycleLeft(blHex, move.bottom);
            }
        }
        return { tlHex, blHex };
    }

    /**
     * invertScramble — reverses a scramble
     *
     * @param {string} alg the alg. karn is accepted.
     * @returns {string} the reversed alg
     */
    invertScramble(alg) {
        if (!alg) return alg;
        return this.unkarnify(alg).trim().split('/').reverse().map(part => {
            part = part.trim();
            const src = part.includes('(')
                ? part.match(/\(([^)]+)\)/)?.[1]
                : part.includes(',') ? part : null;
            if (!src) return part;
            const inverted = src.split(',').map(v => {
                const n = parseInt(v.trim(), 10);
                return isNaN(n) ? v.trim() : String(-n);
            }).join(',');
            return part.includes('(') ? `(${inverted})` : inverted;
        }).join('/');
    }

    /**
     * isPBL — check if a hex is PBL
     *
     * @param {string} hex
     * @returns {boolean} whether it's a PBL
     */
    isPBL(hex) {
        let { tlHex, blHex } = hex;
        let tA = [...tlHex]; let bA = [...blHex];
        if (tA[1] !== tA[2] ||
            tA[4] !== tA[5] ||
            tA[7] !== tA[8] ||
            tA[10] !== tA[11]
        ) return false;
        if (parseInt(tA[0], 10) % 2 !== 0 ||
            parseInt(tA[1], 10) % 2 !== 1 ||
            parseInt(tA[3], 10) % 2 !== 0 ||
            parseInt(tA[4], 10) % 2 !== 1 ||
            parseInt(tA[6], 10) % 2 !== 0 ||
            parseInt(tA[7], 10) % 2 !== 1 ||
            parseInt(tA[9], 10) % 2 !== 0 ||
            parseInt(tA[10], 10) % 2 !== 1
        ) return false;
        if (!tA.includes('0') ||
            !tA.includes('1') ||
            !tA.includes('2') ||
            !tA.includes('3') ||
            !tA.includes('4') ||
            !tA.includes('5') ||
            !tA.includes('6') ||
            !tA.includes('7')
        ) return false;
        if (bA[0] !== bA[1] ||
            bA[3] !== bA[4] ||
            bA[6] !== bA[7] ||
            bA[9] !== bA[10]
        ) return false;
        if (parseInt(bA[0], 16) % 2 !== 1 ||
            parseInt(bA[2], 16) % 2 !== 0 ||
            parseInt(bA[3], 16) % 2 !== 1 ||
            parseInt(bA[5], 16) % 2 !== 0 ||
            parseInt(bA[6], 16) % 2 !== 1 ||
            parseInt(bA[8], 16) % 2 !== 0 ||
            parseInt(bA[9], 16) % 2 !== 1 ||
            parseInt(bA[11], 16) % 2 !== 0
        ) return false;
        if (!bA.includes('8') ||
            !bA.includes('9') ||
            !bA.includes('a') ||
            !bA.includes('b') ||
            !bA.includes('c') ||
            !bA.includes('d') ||
            !bA.includes('e') ||
            !bA.includes('f')
        ) return false;
        return true;
    }


    // =========================================================================
    // SECTION 5 — KARNIFY  (WCA → karn)
    // =========================================================================

    /**
     * karnify — converts WCA to karn.
     *
     * 1. assert that no two slices are next to each other and it's fully numeric
     * 2. compute any startingSlice and endingSlice
     * 3. normalize slice symbols
     * 4. go through move by move for base karns and only karnify first/last non-zero move
     *    if they have slices around.
     * 5. join back into an alg while reattaching leading/trailing slices,
     *    and dictReplace for high karns
     *
     * @param {string} alg  — WCA format
     * @returns {string}         — karn
     */
    karnify(alg) {
        alg = alg.trim();
        if (/[\/\\\|]{2,}/.test(alg)) throw new Error("karnify: Two slices in a row.");
        if (this.isKarn(alg)) throw new Error("karnify: Alg has letters. Try unkarnifying first.")
        let startsSlice = ["/", "\\", "|"].includes(alg.charAt(0));
        let startingSlice = startsSlice ? alg.charAt(0) : "";
        let endsSlice = "/" === alg.at(-1);
        let endingSlice = endsSlice ? "/" : "";

        // replace all possible slices with spaces
        alg = alg.replaceAll(/[/\\| ]+/g, ' ');

        // now go through scramble move by move to apply base karn
        let s = alg.split(" ").filter(Boolean);
        for (let i = 0; i < s.length; i++) {
            if (i === 0 && !startsSlice) continue;
            if (i === s.length - 1 && !endsSlice) break;
            // good to replace
            s[i] = SquanLib.wcaToBaseKarn[s[i]] ? SquanLib.wcaToBaseKarn[s[i]] : s[i].replace(",", "");
        }

        alg = startingSlice + s.join(" ") + endingSlice;
        alg = this.dictReplace(alg, SquanLib.baseKarnToHighKarn);
        return alg;
    }


    // =========================================================================
    // SECTION 6 — MOVE MATH & SEQUENCE OPTIMIZER
    // =========================================================================

    /**
     * legalMove — normalizes a raw turn value into the canonical squan range [−5, 6].
     *
     * @param {number} m  — raw turn value, e.g. −7 or 9
     * @returns {number}   — normalized value in [−5, 6]
     */
    legalMove(m) {
        m = m % 12; // get a range from -11 to 11
        if (m < -5) return m + 12; // send -11 to -6 up
        if (m > 6) return m - 12; // send 7 to 11 down
        return m;
    }

    /**
     * addMoves — adds two move strings component-wise and legalizes each result.
     *
     * Tolerates "A"/"a" alignment markers. When one operand is an alignment
     * marker and the other is a move, the marker is flipped iff the top
     * component of the numeric move changes alignment (not a multiple of 3).
     * The above assumes that the move is in-CS.
     * Both operands cannot simultaneously be alignment markers.
     *
     * @param {string} move1  — "top,bot" string, OR "A"/"a" alignment marker
     * @param {string} move2  — "top,bot" string, OR "A"/"a" alignment marker
     * @returns {string}
     *
     * @example
     * addMoves("3,0",  "-3,0") // → "0,0"
     * addMoves("2,-1", "1,-2") // → "3,-3"
     * addMoves("5,-1", "3,0")  // → "-4,-1"
     * addMoves("A",    "2,-1") // → "a"       (2 % 3 !== 0 → flip)
     * addMoves("A",    "3,0")  // → "A"       (3 % 3 === 0 → no flip)
     */
    addMoves(move1, move2) {
        if (!move1 && !move2) throw new Error("addMoves: both moves are empty.");
        else if (!move1) return move2;
        else if (!move2) return move1;
        const flip = { A: 'a', a: 'A' };
        if (move1 in flip && move2 in flip)
            throw new Error("addMoves: both moves cannot be alignment markers.");
        if (move1 in flip) {
            const top = parseInt(move2.split(',')[0], 10);
            return this.changesAlignment(top) ? flip[move1] : move1;
        } else if (move2 in flip) {
            const top = parseInt(move1.split(',')[0], 10);
            return this.changesAlignment(top) ? flip[move2] : move2;
        }
        const [u1, d1] = move1.split(',').map(Number);
        const [u2, d2] = move2.split(',').map(Number);
        return `${this.legalMove(u1 + u2)},${this.legalMove(d1 + d2)}`;
    }

    /**
     * changesAlignment — check if performing this turn value changes the
     * alignment state (i.e. the turn is not a multiple of 3). Assumes everything
     * is in CS.
     *
     * @param {number} m  — top-layer turn value,
     * @returns {boolean}
     */
    changesAlignment(m) {
        return m % 3 !== 0;
    }

    /**
     * optimize — replaces known optimizable moves (the OPTIM table) in a WCA alg
     *
     * 1. if no more optimization can be done, exit.
     * 2. split on "/" into an array
     * 3. walk to the next slice
     * 4. at each slice, check if any OPTIM key match the alg starting at that position
     * 5. if match:
     *    - "/0,0/": merge the two surrounding moves
     *    - generally: merge the first replacement move into the preceding move, merge
     *      the last into the succeeding move, and replace the inners
     * 6. restart the outer loop after any change
     *
     * @param {string} alg  — slash-separated WCA alg, e.g. "A/-3,0/3,3/3,3/a"
     * @returns {string}    — optimized alg
     */
    optimize(alg) {
        const optimKeys = Object.keys(SquanLib.OPTIM);
        while (this.dictReplace(alg, SquanLib.OPTIM) !== alg) {
            const moves = alg.split('/').map(m => m.trim());
            let atSlice = 0;
            let cycleCompleted = false;
            for (let i = 0; i < alg.length; i++) {
                if (cycleCompleted) break;
                if (alg[i] !== '/') continue;
                // only stop when scramble[i] is a slice
                atSlice++;
                for (const optimable of optimKeys) {
                    // if the OPTIM key is longer than what's left of scramble
                    if (alg.length - 1 - i < optimable.length) continue;
                    // if it doesn't match
                    if (alg.slice(i, i + optimable.length) !== optimable) continue;

                    // match!!
                    if (optimable === '/0,0/') {
                        // special case: merge surrounding moves
                        moves[atSlice - 1] = this.addMoves(moves[atSlice - 1], moves[atSlice + 1]);
                        moves.splice(atSlice, 2);
                    } else {
                        const optimableLen = optimable.split('/').length;
                        const optimTo = SquanLib.OPTIM[optimable].split('/');
                        // 2 represents the leading and trailing slash of optimable (forced)
                        const delSliceNum = optimableLen - 2;
                        // merge moves, even when empty (handled by addMoves)
                        moves[atSlice - 1] = this.addMoves(moves[atSlice - 1], optimTo.shift());
                        moves[atSlice + optimableLen - 2] = this.addMoves(
                            moves[atSlice + optimableLen - 2],
                            optimTo.pop()
                        );
                        moves.splice(atSlice, delSliceNum, ...optimTo);
                    }
                    alg = moves.join('/');
                    cycleCompleted = true;
                    break;
                }
            }
        }
        return alg;
    }


    // =========================================================================
    // SECTION 7 — ERGONOMICS RATING
    // =========================================================================

    /**
     * getMoveValue — look up the ergonomic cost of a single move.
     * @param {boolean} startA   — is it top misalign right now?
     * @param {boolean} upslice  — is this an upslice?
     * @param {string}  move     — e.g. "3,0"
     * @returns {number}
     */
    getMoveValue(startA, upslice, move) {
        let comma = move.indexOf(',');
        if (comma === -1) {
            comma = this.addCommas(move).indexOf(',');
            if (comma === -1) throw new Error(`getMoveValue: move: ${move} is weird`);
        }
        const topMove = parseInt(move.slice(0, comma), 10);
        const slashCh = upslice ? '/' : '\\';
        let key;
        if (topMove % 3 === 0) {
            key = (startA ? 'A' : 'a') + slashCh + move;
        } else {
            key = slashCh + move;
        }
        return SquanLib.MOVE_VALUES.get(key) ?? 5; // if unknown, just say 5
    }

    /**
     * getOverwork — calculates how much overwork is present in an alg, along with bonus.
     * @param {string[]} moves  — array of "top,bot" strings (interior moves only)
     * @returns {{ movement: number, bonus: number }}
     */
    getOverwork(moves) {
        const tops = [], bots = [];
        for (const m of moves) {
            let c = m.indexOf(',');
            if (c === -1) {
                const m2 = this.addCommas(m);
                c = m2.indexOf(",");
                if (c === -1) throw new Error(`getOverwork: in moves, m: ${m} is weird.`);
            }
            tops.push(parseInt(m.slice(0, c), 10) || 0);
            bots.push(parseInt(m.slice(c + 1), 10) || 0);
        }

        let movement = 0, bonus = 0;

        // penalize streaks of lefty turns for both layers
        // U layer
        let streak = 0, closestMov = 0, buffer = 0;
        for (const t of tops) {
            const isLeft = (t === 6 || t < 0);
            if (isLeft) {
                streak++;
                closestMov += Math.abs(SquanLib.CLOSEST_MAP.get(t) ?? 0);
                buffer += Math.abs(t);
                // has streak and nontrivial move → penalize
                if (streak > 1 && closestMov > 3) { movement += buffer; buffer = 0; }
            } else { streak = 0; closestMov = 0; buffer = 0; } // reset streak
        }

        // D layer
        streak = 0; closestMov = 0; buffer = 0;
        for (const b of bots) {
            const isLeft = b > 0;
            if (isLeft) {
                streak++;
                closestMov += Math.abs(SquanLib.CLOSEST_MAP.get(b) ?? 0);
                buffer += Math.abs(b);
                if (streak > 1 && closestMov > 3) { movement += buffer; buffer = 0; }
            } else { streak = 0; closestMov = 0; buffer = 0; }
        }

        // Bonus: count consecutive pairs that cancel.
        for (let i = 0; i + 1 < tops.length; i++) {
            if (tops[i] + tops[i + 1] === 0) bonus++;
            if (bots[i] + bots[i + 1] === 0) bonus++;
        }

        return { movement, bonus };
    }

    /**
     * rateAlg — ergonomic rating for a single in CS squan alg
     *
     * @param {string}  algRaw         — raw alg (karn or WCA)
     * @param {boolean} initialTopA    — if the alg starts top misalign
     * @param {object}  [weights]      — override default weight constants
     * @returns {{ score: number, sliceStart: string }}
     *   sliceStart: '/' (prefer upslice), '\' (prefer downslice), or ' ' (no preference)
     */
    rateAlg(algRaw, initialTopA = false, weights = {}) {
        const W1 = weights.W1 ?? 34;   // per-move ergonomic rating
        const W2 = weights.W2 ?? 100;  // slice-count penalty
        const W3 = weights.W3 ?? 38;   // overwork penalty
        const W4 = weights.W4 ?? 500;  // constant term
        const W5 = weights.W5 ?? 10;   // bonus

        // strip brackets e.g. "[7|14]"
        let a = algRaw.replace(/\[.*$/, '').trim();

        // unkarnify if needed
        const numeric = this.isKarn(a) ? this.unkarnify(a) : a.replaceAll(' ', '');

        const rawParts = numeric.split('/');
        // keep leading slice for up/downslice, drop trailing slice
        const r = rawParts.filter((pt, i) => i === 0 || pt.trim() !== '').map(p => p.trim());
        const sliceCount = r.length - 1;
        if (sliceCount <= 0) return { score: W4, sliceStart: ' ' };

        let ergoUp = 0, ergoDown = 0;
        let isTopA = false, oddSlice = true;

        for (let i = 0; i < r.length - 1; i++) {
            let c = r[i].indexOf(',');
            if (c === -1) {
                const m = this.addCommas(r[i]);
                c = m.indexOf(',');
                if (c === -1)
                    throw new Error(`rateAlg:\nalg: ${algRaw}\nmove: ${r[i]}\nis weird.`)
            }
            const t = parseInt(r[i].slice(0, c), 10);
            if (isNaN(t)) throw new Error(`rateAlg:\nalg: ${algRaw}\nmove: ${r[i]}\nis weird.`)

            if (i === 0) {
                // 1st move: use to determine initial alignment
                isTopA = initialTopA !== (t % 3 !== 0);
                oddSlice = true;
                continue;
            }

            ergoUp += this.getMoveValue(isTopA, oddSlice, r[i]);
            ergoDown += this.getMoveValue(isTopA, !oddSlice, r[i]);
            isTopA = isTopA !== (t % 3 !== 0);
            oddSlice = !oddSlice;
        }

        const phase1 = W1 * Math.max(ergoUp, ergoDown) / sliceCount; // average move rating

        let sliceStart = '|';
        if (Math.abs(ergoUp - ergoDown) / sliceCount > 5)
            sliceStart = ergoUp > ergoDown ? '/' : '\\';

        const phase2 = W2 * sliceCount;
        const interior = r.slice(1, -1);
        const { movement, bonus } = this.getOverwork(interior);
        const phase3 = W3 * movement / sliceCount;
        const phase4 = bonus * W5 / sliceCount;

        return { score: phase1 - phase2 - phase3 + phase4 + W4, sliceStart };
    }

    /**
     * rateAndSort — rate a list of algs and return them sorted by ergonomics high to low
     *
     * @param {string[]} algLines     — raw alg strings
     * @param {string}   [posHex=''] — position hex (used to determine initialTopA)
     * @returns {{ alg: string, score: number }[]}
     */
    rateAndSort(algLines, posHex = '') {
        // Determine initial top-layer alignment from position hex.
        let initialTopA = false;
        if (posHex) {
            const ch = posHex[0];
            initialTopA = /[A-HU-W]/i.test(ch);
        }

        return algLines.map(line => {
            const bracketPos = line.indexOf('[');
            const algOnly = bracketPos > 0 ? line.slice(0, bracketPos).trim() : line.trim();
            let result = { alg: line, score: 500 };
            let rated = false;
            let sliceStart = ' ';

            // Pre-unkarnify so rateAlg always receives a numeric string.
            const numericAlg = this.isKarn(algOnly) ? this.unkarnify(algOnly) : algOnly;
            ({ score: result.score, sliceStart } = this.rateAlg(numericAlg, initialTopA));
            rated = true;

            if (rated && ["/", "\\", "|"].includes(sliceStart)) {
                // Replace the first '/' in the alg-only portion of the display line.
                const slashPos = line.indexOf('/');
                if (slashPos >= 0)
                    result.alg = line.slice(0, slashPos) + sliceStart + line.slice(slashPos + 1);
            }

            return result;
        }).sort((a, b) => b.score - a.score);
    }
}
