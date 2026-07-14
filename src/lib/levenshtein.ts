export function levenshtein(e: string, t: string): number {
    let a: number[][] = [];
    let n, r, i;
    if (0 == e.length) return t.length;
    if (0 == t.length) return e.length;
    for (n = 0; n <= e.length; n++) {
        a[n] = [];
        a[n][0] = n;
    }
    for (r = 0; r <= t.length; r++) a[0][r] = r;
    for (n = 1; n <= e.length; n++) {
        for (r = 1; r <= t.length; r++) {
            i = e.charAt(n - 1) == t.charAt(r - 1) ? 0 : 1;
            a[n][r] = Math.min(
                a[n - 1][r] + 1,
                a[n][r - 1] + 1,
                a[n - 1][r - 1] + i
            );
            if (
                n > 1 &&
                r > 1 &&
                e.charAt(n - 1) == t.charAt(r - 2) &&
                e.charAt(n - 2) == t.charAt(r - 1)
            ) {
                a[n][r] = Math.min(a[n][r], a[n - 2][r - 2] + i);
            }
        }
    }
    return a[e.length][t.length];
}
