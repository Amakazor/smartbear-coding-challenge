//disabled due to external code using a lot of magic numbers
/* eslint-disable no-magic-numbers */

// cyrb53 (c) 2018 bryc (github.com/bryc)
const cyrb53 = (str: string, seed = 0) => {
    let h1 = 0xDE_AD_BE_EF ^ seed, h2 = 0x41_C6_CE_57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2_654_435_761);
        h2 = Math.imul(h2 ^ ch, 1_597_334_677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2_246_822_507) ^ Math.imul(h2 ^ (h2>>>13), 3_266_489_909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2_246_822_507) ^ Math.imul(h1 ^ (h1>>>13), 3_266_489_909);
    return 4_294_967_296 * (2_097_151 & h2) + (h1>>>0);
};

export class TextHelper {
    public static capitalizeFirstLetter = (string:string) => string[0].toUpperCase() + string.slice(1);
    public static hash = (string:string) => cyrb53(string);
    public static clean = (string:string) => string.replace(/[^\dA-Za-z]/g, "_");
}
