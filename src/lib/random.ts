const words = [
  "swear",
  "union",
  "dry",
  "oven",
  "main",
  "glass",
  "ready",
  "state",
  "horn",
  "plan",
  "jump",
  "home",
  "hard",
  "we",
  "fairy",
  "lump",
  "halt",
  "fear",
  "brush",
  "spray",
  "owner",
  "habit",
  "treat",
  "meet",
  "orbit",
  "tired",
  "dome",
  "tape",
  "baby",
  "shed",
  "fat",
  "chop",
  "lay",
  "check",
  "shoot",
  "bride",
  "van",
  "pin",
  "field",
  "sail",
  "charm",
  "herb",
  "just",
  "mask",
  "fibre",
  "stay",
  "air",
  "fun",
  "love",
  "no",
  "monk",
  "strip",
  "spit",
  "opera",
  "fare",
  "heir",
  "exact",
  "trust",
  "rest",
  "egg",
  "means",
  "count",
  "ex",
  "wing",
  "wheat",
  "flat",
  "sharp",
  "bowel",
  "theft",
  "past",
  "plug",
  "camp",
  "print",
  "death",
  "buy",
  "bird",
  "choke",
  "money",
  "miss",
  "greet",
  "plane",
  "fee",
  "sofa",
  "peace",
  "man",
  "dozen",
  "width",
  "blast",
  "gift",
  "low",
  "quit",
  "of",
  "pair",
  "place",
  "to",
  "curl",
  "south",
  "good",
  "radio",
  "can",
  "basin",
  "troop",
  "add",
  "draft",
  "news",
  "novel",
  "inn",
  "chief",
  "trace",
  "house",
  "meal",
  "ask",
  "ear",
  "great",
  "meat",
  "roof",
  "court",
  "tribe",
  "time",
  "move",
  "gold",
  "graze",
  "brag",
  "quest",
  "grave",
  "feed",
  "play",
  "false",
  "bolt",
  "clerk",
  "rob",
  "tip",
  "smell",
  "sting",
  "terms",
  "doll",
  "snack",
  "key",
  "budge",
  "allow",
  "deer",
  "truck",
  "pity",
  "blind",
  "brave",
  "goat",
  "sex",
  "poor",
  "cafe",
  "stem",
  "sign",
  "due",
  "ranch",
  "flush",
  "enemy",
  "boot",
  "side",
  "deck",
  "land",
  "cane",
  "am",
  "cover",
  "shake",
  "anger",
  "worth",
  "lick",
  "heavy",
  "snarl",
  "boy",
  "power",
  "slice",
  "rifle",
  "wreck",
  "safe",
  "term",
  "get",
  "ash",
  "ally",
  "trunk",
  "rice",
  "rent",
  "food",
  "straw",
  "kid",
  "war",
  "worm",
  "coma",
  "live",
  "load",
  "month",
  "drum",
  "hole",
  "swipe",
  "upset",
  "warm",
  "if",
  "speed",
  "lazy",
  "mouse",
  "relax",
  "chaos",
  "rugby",
  "swell",
  "duke",
  "year",
  "smoke",
  "ride",
  "drive",
  "shift",
  "oak",
  "myth",
  "cast",
  "soul",
  "bold",
  "crown",
  "wrap",
  "pay",
  "pig",
  "soak",
  "chalk",
  "float",
  "hear",
  "glory",
  "ruin",
  "color",
  "leaf",
  "poll",
  "at",
  "feast",
  "sand",
  "aunt",
  "soil",
  "trap",
  "arrow",
  "mess",
  "easy",
  "ball",
  "ice",
  "order",
  "coat",
  "cook",
  "march",
  "cope",
  "care",
  "sea",
  "city",
  "help",
  "trait",
  "curve",
  "eject",
  "bay",
  "sit",
  "patch",
  "dump",
  "glide",
  "prey",
  "reach",
  "brake",
  "shame",
  "tiger",
  "shy",
  "stick",
  "water",
  "seem",
  "vague",
  "cater",
  "path",
  "last",
  "fur",
  "screw",
  "or",
  "flour",
  "panic",
  "virus",
  "idea",
  "ankle",
  "put",
  "wife",
  "groan",
  "plead",
  "bank",
  "heel",
  "spot",
  "vein",
  "quote",
  "salad",
  "tempt",
  "bad",
  "rain",
  "owl",
  "faith",
  "agree",
  "coin",
  "aloof",
  "pipe",
  "staff",
  "user",
  "clue",
  "menu",
  "bend",
  "soap",
  "album",
  "haunt",
  "short",
  "dead",
  "stun",
  "an",
  "minor",
  "tap",
  "dress",
  "snub",
  "drain",
  "raw",
  "skin",
  "late",
  "keep",
  "fight",
  "crash",
  "bread",
  "sound",
  "climb",
  "fine",
  "slide",
  "jam",
  "shave",
  "bang",
  "tax",
  "brain",
  "dull",
  "price",
  "abuse",
  "case",
  "clean",
  "he",
  "steak",
  "sport",
  "firm",
  "bind",
  "twin",
  "muggy",
  "beat",
  "mile",
  "hero",
  "dine",
  "index",
  "shot",
  "huge",
  "riot",
  "sweet",
  "wine",
  "flesh",
  "norm",
  "door",
  "cower",
  "hold",
  "tent",
  "vain",
  "wave",
  "laser",
  "vote",
  "in",
  "lunch",
  "punch",
  "word",
  "slime",
  "block",
  "fork",
  "favor",
  "fraud",
  "grind",
  "slow",
  "tract",
  "crude",
  "cycle",
  "hang",
  "quiet",
  "pile",
  "build",
  "grip",
  "shape",
  "wire",
  "dog",
  "solid",
  "mass",
  "slip",
  "slot",
  "outer",
  "dream",
  "truth",
  "x-ray",
  "lip",
  "ton",
  "seat",
  "taste",
  "sell",
  "suit",
  "nest",
  "bury",
  "bald",
  "cash",
  "wall",
  "bless",
  "witch",
  "chest",
  "warn",
  "burst",
  "press",
  "lease",
  "chip",
  "total",
  "lock",
  "seek",
  "image",
  "wrist",
  "east",
  "fault",
  "head",
  "knit",
  "item",
  "cute",
  "toll",
  "ample",
  "paint",
  "twist",
  "cage",
  "sun",
  "lead",
  "eat",
  "army",
  "hope",
  "date",
  "scale",
  "smile",
  "debt",
  "horse",
  "fly",
  "valid",
  "oil",
  "proud",
  "chase",
  "beach",
  "fate",
  "first",
  "scrap",
  "maid",
  "half",
  "form",
  "adopt",
  "rally",
  "frame",
  "nut",
  "cell",
  "learn",
  "wind",
  "turn",
  "page",
  "faint",
  "bacon",
  "stand",
  "funny",
  "round",
  "feel",
  "mole",
  "leave",
  "pain",
  "lid",
  "neck",
  "drown",
  "belt",
  "lean",
  "bar",
  "jet",
  "pat",
  "roar",
  "night",
  "tail",
  "owe",
  "high",
  "seed",
  "right",
  "lend",
  "edge",
  "lot",
  "pole",
  "frog",
  "cheat",
  "party",
  "deal",
  "tree",
  "guard",
  "run",
  "swop",
  "like",
  "range",
  "want",
  "decay",
  "enfix",
  "tell",
  "suite",
  "siege",
  "rape",
  "donor",
  "fool",
  "refer",
  "motif",
  "me",
  "chart",
  "flow",
  "hut",
  "guess",
  "pause",
  "pray",
  "rib",
  "bible",
  "trip",
  "part",
  "noble",
  "fish",
  "thaw",
  "soft",
  "chew",
  "dash",
  "body",
  "asset",
  "koran",
  "is",
  "guilt",
  "coast",
  "begin",
  "nail",
  "heal",
  "joy",
  "bag",
  "beg",
  "rush",
  "sink",
  "sheet",
  "stool",
  "call",
  "forge",
  "wood",
  "equip",
  "smash",
  "track",
  "seize",
  "wound",
  "true",
  "tin",
  "boat",
  "red",
  "card",
  "skip",
  "diet",
  "shell",
  "dark",
  "voter",
  "era",
  "beer",
  "rank",
  "wild",
  "us",
  "draw",
  "shine",
  "new",
  "deny",
  "mold",
  "step",
  "duty",
  "golf",
  "cheap",
  "walk",
  "study",
  "scene",
  "merit",
  "fever",
  "sigh",
  "shelf",
  "role",
  "movie",
  "write",
  "tie",
  "chain",
  "point",
  "stir",
  "steel",
  "burn",
  "tread",
  "law",
  "far",
  "evoke",
  "map",
  "thick",
  "knee",
  "loud",
  "fire",
  "pupil",
  "mist",
  "arise",
  "sour",
  "entry",
  "sow",
  "cake",
  "shock",
  "spin",
  "bus",
  "fleet",
  "apple",
  "spill",
  "beard",
  "fuel",
  "prize",
  "gaffe",
  "wrong",
  "cold",
  "judge",
  "see",
  "drug",
  "forum",
  "wait",
  "show",
  "slam",
  "rage",
  "style",
  "cream",
  "pier",
  "ridge",
  "knife",
  "bed",
  "bush",
  "fair",
  "rear",
  "gear",
  "woman",
  "teach",
  "fold",
  "king",
  "cheek",
  "echo",
  "salon",
  "skate",
  "pure",
  "trick",
  "swing",
  "rack",
  "queen",
  "jaw",
  "dirty",
  "dorm",
  "humor",
  "pace",
  "other",
  "star",
  "well",
  "hook",
  "cabin",
  "hay",
  "spare",
  "roll",
  "toast",
  "duck",
  "risk",
  "beef",
  "raise",
  "pan",
  "text",
  "exile",
  "wheel",
  "slab",
  "pass",
  "gasp",
  "team",
  "unity",
  "waist",
  "bleed",
  "age",
  "stock",
  "shark",
  "nap",
  "car",
  "set",
  "tire",
  "pull",
  "bat",
  "steam",
  "bite",
  "knot",
  "talk",
  "weak",
  "piece",
  "room",
  "whip",
  "rung",
  "reign",
  "swim",
  "train",
  "win",
  "navy",
  "stage",
  "white",
  "park",
  "slave",
  "slap",
  "brink",
  "fan",
  "lodge",
  "band",
  "calm",
  "trade",
  "tower",
  "loose",
  "beam",
  "lose",
  "read",
  "flock",
  "net",
  "dawn",
  "awful",
  "major",
  "layer",
  "cry",
  "race",
  "vat",
  "old",
  "gown",
  "onion",
  "guide",
  "brand",
  "herd",
  "shaft",
  "axis",
  "use",
  "way",
  "size",
  "cable",
  "even",
  "need",
  "mill",
  "ant",
  "spy",
  "hurl",
  "lung",
  "think",
  "venus",
  "heart",
  "rebel",
  "unit",
  "fit",
  "thigh",
  "queue",
  "wagon",
  "area",
  "sweep",
  "corn",
  "taxi",
  "look",
  "admit",
  "have",
  "clock",
  "berry",
  "pool",
  "save",
  "hurt",
  "spite",
  "enjoy",
  "iron",
  "god",
  "mars",
  "offer",
  "spine",
  "waste",
  "top",
  "loop",
  "cruel",
  "base",
  "veil",
  "stake",
  "marsh",
  "creed",
  "cool",
  "calf",
  "throw",
  "flag",
  "rise",
  "sweat",
  "mayor",
  "bow",
  "cut",
  "clay",
  "elbow",
  "glow",
  "tile",
  "basic",
  "bait",
  "sense",
  "able",
  "west",
  "fence",
  "leak",
  "braid",
  "swarm",
  "angle",
  "pen",
  "glue",
  "dip",
  "strap",
  "moon",
  "catch",
  "equal",
  "deter",
  "trail",
  "ego",
  "snail",
  "ferry",
  "bean",
  "fix",
  "frank",
  "game",
  "copy",
  "close",
  "stop",
  "node",
  "tick",
  "salt",
  "poem",
  "noise",
  "fill",
  "class",
  "break",
  "grain",
  "fail",
  "fog",
  "proof",
  "clear",
  "exit",
  "girl",
  "hour",
  "gene",
  "mail",
  "bring",
  "hall",
  "solve",
  "aid",
  "match",
  "abbey",
  "disco",
  "heat",
  "aware",
  "rub",
  "joint",
  "mouth",
  "bulb",
  "plain",
  "bake",
  "obese",
  "widen",
  "agile",
  "snake",
  "chin",
  "uncle",
  "bitch",
  "tidy",
  "ideal",
  "open",
  "hen",
  "lace",
  "serve",
  "harsh",
  "hip",
  "raid",
  "stall",
  "mild",
  "score",
  "grief",
  "wage",
  "creep",
  "level",
  "elect",
  "brick",
  "pitch",
  "line",
  "tune",
  "go",
  "penny",
  "boom",
  "hot",
  "lake",
  "acid",
  "mud",
  "cart",
  "die",
  "palm",
  "cow",
  "code",
  "try",
  "bill",
  "video",
  "linen",
  "nerve",
  "cup",
  "black",
  "smart",
  "table",
  "tense",
  "pony",
  "few",
  "urine",
  "slump",
  "gain",
  "tough",
  "loot",
  "give",
  "hand",
  "soup",
  "row",
  "wolf",
  "ban",
  "store",
  "organ",
  "find",
  "toss",
  "spend",
  "eaux",
  "coup",
  "snow",
  "tooth",
  "sick",
  "slant",
  "dairy",
  "gap",
  "pound",
  "blow",
  "pit",
  "be",
  "bet",
  "left",
  "peel",
  "mood",
  "board",
  "rumor",
  "robot",
  "coal",
  "brown",
  "stain",
  "lamb",
  "hill",
  "job",
  "eagle",
  "breed",
  "snap",
  "force",
  "long",
  "drop",
  "log",
  "name",
  "on",
  "sniff",
  "fist",
  "kill",
  "fade",
  "day",
  "mercy",
  "ditch",
  "hit",
  "doubt",
  "joke",
  "push",
  "my",
  "host",
  "post",
  "fresh",
  "hide",
  "eye",
  "jury",
  "cap",
  "touch",
  "claim",
  "dance",
  "jest",
  "loss",
  "rule",
  "grace",
  "real",
  "fax",
  "paper",
  "irony",
  "youth",
  "blank",
  "tasty",
  "wake",
  "make",
  "inch",
  "elite",
  "silk",
  "wash",
  "test",
  "blue",
  "lack",
  "bell",
  "wear",
  "pluck",
  "take",
  "soar",
  "urge",
  "grow",
  "whole",
  "grand",
  "shop",
  "moral",
  "piano",
  "grass",
  "arch",
  "gate",
  "yearn",
  "lily",
  "essay",
  "chord",
  "ward",
  "share",
  "pilot",
  "oh",
  "tear",
  "shout",
  "by",
  "bland",
  "dive",
  "story",
  "tray",
  "spell",
  "blade",
  "amuse",
  "goal",
  "adult",
  "crew",
  "fruit",
  "nose",
  "pawn",
  "colon",
  "agony",
  "rider",
  "tease",
  "self",
  "craft",
  "full",
  "pop",
  "acute",
  "fling",
  "floor",
  "yard",
  "debut",
  "view",
  "sword",
  "pill",
  "note",
  "limit",
  "fuss",
  "mine",
  "dough",
  "rare",
  "kick",
  "plant",
  "bomb",
  "cause",
  "drill",
  "feign",
  "flash",
  "back",
  "list",
  "space",
  "weave",
  "front",
  "award",
  "do",
  "lemon",
  "lost",
  "zone",
  "quota",
  "pick",
  "stamp",
  "agent",
  "say",
  "orgy",
  "panel",
  "link",
  "crop",
  "lane",
  "world",
  "harm",
  "hike",
  "hate",
  "folk",
  "hover",
  "hell",
  "crime",
  "plot",
  "lie",
  "rock",
  "issue",
  "belly",
  "visit",
  "honor",
  "torch",
  "bin",
  "drama",
  "basis",
  "sugar",
  "tight",
  "fund",
  "title",
  "bear",
  "hair",
  "weigh",
  "will",
  "bench",
  "club",
  "pack",
  "thank",
  "grant",
  "large",
  "rough",
  "pot",
  "sleep",
  "cross",
  "enter",
  "sheep",
  "glare",
  "mix",
  "deep",
  "thin",
  "miner",
  "dose",
  "know",
  "route",
  "crack",
  "ghost",
  "coach",
  "embox",
  "gloom",
  "solo",
  "ratio",
  "storm",
  "lift",
  "giant",
  "ivory",
  "nun",
  "disk",
  "glove",
  "as",
  "scan",
  "lover",
  "lamp",
  "kit",
  "amber",
  "stuff",
  "mean",
  "final",
  "alarm",
  "light",
  "kneel",
  "bare",
  "jail",
  "mug",
  "tube",
  "loan",
  "cave",
  "lobby",
  "worry",
  "young",
  "watch",
  "gun",
  "spoil",
  "rich",
  "sum",
  "drag",
  "rate",
  "sin",
  "dish",
  "pest",
  "leash",
  "leg",
  "pump",
  "delay",
  "aids",
  "ring",
  "liver",
  "model",
  "sock",
  "road",
  "flood",
  "gem",
  "angel",
  "attic",
  "green",
  "trend",
  "small",
  "sale",
  "guest",
  "cat",
  "bond",
  "start",
  "damn",
  "up",
  "carry",
  "tank",
  "root",
  "steep",
  "hobby",
  "value",
  "arm",
  "tool",
  "theme",
  "gas",
  "fast",
  "mind",
  "arena",
  "end",
  "face",
  "free",
  "weed",
  "sip",
  "stab",
  "aisle",
  "petty",
  "core",
  "peak",
  "river",
  "jelly",
  "book",
  "alive",
  "handy",
  "voice",
  "utter",
  "act",
  "bike",
  "dare",
  "work",
  "pour",
  "maze",
  "tone",
  "split",
  "mark",
  "fox",
  "drink",
  "foot",
  "sight",
  "knock",
  "site",
  "clash",
  "medal",
  "zero",
  "film",
  "bee",
  "oral",
  "prove",
  "error",
  "flu",
  "child",
  "desk",
  "flex",
  "crowd",
  "so",
  "week",
  "chair",
  "seal",
  "trial",
  "file",
  "frown",
  "bark",
  "art",
  "lion",
  "still",
  "carve",
  "fall",
  "north",
  "thumb",
  "drift",
  "fame",
  "blame",
  "pride",
  "metal",
  "pie",
  "jewel",
  "cord"
];

export function randomMail() {
  let name = "";

  for (let i = 0; i < 2; i++) {
    name += `${words[Math.floor(Math.random() * words.length)]}-`;
  }

  return name.slice(0, -1);
}
