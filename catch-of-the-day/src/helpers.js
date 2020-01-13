export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
    return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
    const adverbs = [
        "existentially",
        "diabolically",
        "beautifully",
        "disgustingly",
        "moronically",
        "amazingly",
        "exasperatingly",
        "handsomely",
        "boringly",
        "magnificently",
        "dreadfully",
        "painstakingly",
        "uneasily",
        "sparklingly",
        "loudly",
        "unsightly",
        "angrily",
        "terribly",
        "clumsily",
        "defeatedly",
        "dangerously",
        "absolutely",
        "dashingly",
        "helplessly",
        "badly",
        "obnoxiously",
        "tentatively",
        "mysteriously",
        "nervously",
        "obnoxiously",
        "fecetiously",
        "morosely",
        "scarily",
        "thoughtlessly",
        "uptightly",
        "worriedly"
    ];
    const adjectives = [
        "adorable",
        "beautiful",
        "clean",
        "perturbed",
        "elegant",
        "fancy",
        "glamorous",
        "handsome",
        "long",
        "magnificent",
        "old-fashioned",
        "lit",
        "quaint",
        "sparkling",
        "ugly",
        "unsightly",
        "angry",
        "bewildered",
        "clumsy",
        "defeated",
        "embarrassed",
        "fierce",
        "obligatory",
        "helpless",
        "itchy",
        "jealous",
        "lazy",
        "mysterious",
        "nervous",
        "obnoxious",
        "panicky",
        "repulsive",
        "scary",
        "thoughtless",
        "uptight",
        "worried"
    ];

    const nouns = [
        "women",
        "men",
        "children",
        "teeth",
        "feet",
        "people",
        "leaves",
        "mice",
        "geese",
        "spoons",
        "knives",
        "wives",
        "sporks",
        "elves",
        "loaves",
        "potatoes",
        "tomatoes",
        "cacti",
        "scientists",
        "fungi",
        "biscuits",
        "tourists",
        "visions",
        "diagnoses",
        "gnomes",
        "leprechauns",
        "cashews",
        "punishments",
        "criteria",
        "data"
    ];

    return `${rando(adverbs)}-${rando(adjectives)}-${rando(nouns)}`;
}
