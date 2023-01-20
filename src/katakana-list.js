const hiraganaList = [
  {
    symbol: "ア",
    transcript: "a",
    index: 0,
  },
  {
    symbol: "イ",
    transcript: "i",
    index: 1,
  },
  {
    symbol: "ウ",
    transcript: "u",
    index: 2,
  },
  {
    symbol: "エ",
    transcript: "e",
    index: 3,
  },
  {
    symbol: "オ",
    transcript: "o",
    index: 4,
  },
  {
    symbol: "カ",
    transcript: "ka",
    index: 5,
  },
  {
    symbol: "キ",
    transcript: "ki",
    index: 6,
  },
  {
    symbol: "ク",
    transcript: "ku",
    index: 7,
  },
  {
    symbol: "ケ",
    transcript: "ke",
    index: 8,
  },
  {
    symbol: "コ",
    transcript: "ko",
    index: 9,
  },
  {
    symbol: "サ",
    transcript: "sa",
    index: 10,
  },
  {
    symbol: "シ",
    transcript: "shi",
    index: 11,
  },
  {
    symbol: "ス",
    transcript: "su",
    index: 12,
  },
  {
    symbol: "セ",
    transcript: "se",
    index: 13,
  },
  {
    symbol: "ソ",
    transcript: "so",
    index: 14,
  },
  {
    symbol: "タ",
    transcript: "ta",
    index: 15,
  },
  {
    symbol: "チ",
    transcript: "chi",
    index: 16,
  },
  {
    symbol: "ツ",
    transcript: "tsu",
    index: 17,
  },
  {
    symbol: "テ",
    transcript: "te",
    index: 18,
  },
  {
    symbol: "ト",
    transcript: "to",
    index: 19,
  },
  {
    symbol: "ナ",
    transcript: "na",
    index: 20,
  },
  {
    symbol: "ニ",
    transcript: "ni",
    index: 21,
  },
  {
    symbol: "ヌ",
    transcript: "nu",
    index: 22,
  },
  {
    symbol: "ネ",
    transcript: "ne",
    index: 23,
  },
  {
    symbol: "ノ",
    transcript: "no",
    index: 24,
  },
  {
    symbol: "ハ",
    transcript: "ha",
    index: 25,
  },
  {
    symbol: "ヒ",
    transcript: "hi",
    index: 26,
  },
  {
    symbol: "フ",
    transcript: "fu",
    index: 27,
  },
  {
    symbol: "ヘ",
    transcript: "he",
    index: 28,
  },
  {
    symbol: "ホ",
    transcript: "ho",
    index: 29,
  },
  {
    symbol: "マ",
    transcript: "ma",
    index: 30,
  },
  {
    symbol: "ミ",
    transcript: "mi",
    index: 31,
  },
  {
    symbol: "ム",
    transcript: "mu",
    index: 32,
  },
  {
    symbol: "メ",
    transcript: "me",
    index: 33,
  },
  {
    symbol: "モ",
    transcript: "mo",
    index: 34,
  },
  {
    symbol: "ヤ",
    transcript: "ya",
    index: 35,
  },
  {
    symbol: "ユ",
    transcript: "yu",
    index: 36,
  },
  {
    symbol: "ヨ",
    transcript: "yo",
    index: 37,
  },
  {
    symbol: "ラ",
    transcript: "ra",
    index: 38,
  },
  {
    symbol: "リ",
    transcript: "ri",
    index: 39,
  },
  {
    symbol: "ル",
    transcript: "ru",
    index: 40,
  },
  {
    symbol: "レ",
    transcript: "re",
    index: 41,
  },
  {
    symbol: "ロ",
    transcript: "ro",
    index: 42,
  },
  {
    symbol: "ワ",
    transcript: "wa",
    index: 43,
  },
  {
    symbol: "ヲ",
    transcript: "wo",
    index: 44,
  },
  {
    symbol: "ン",
    transcript: "n",
    index: 45,
  },
  {
    symbol: "ガ",
    transcript: "ga",
    index: 46,
  },
  {
    symbol: "ギ",
    transcript: "gi",
    index: 47,
  },
  {
    symbol: "グ",
    transcript: "gu",
    index: 48,
  },
  {
    symbol: "ゲ",
    transcript: "ge",
    index: 49,
  },
  {
    symbol: "ゴ",
    transcript: "go",
    index: 50,
  },
  {
    symbol: "ザ",
    transcript: "za",
    index: 51,
  },
  {
    symbol: "ジ",
    transcript: "ji",
    index: 52,
  },
  {
    symbol: "ズ",
    transcript: "zu",
    index: 53,
  },
  {
    symbol: "ゼ",
    transcript: "ze",
    index: 54,
  },
  {
    symbol: "ゾ",
    transcript: "zo",
    index: 55,
  },
  {
    symbol: "ダ",
    transcript: "da",
    index: 56,
  },
  {
    symbol: "ヂ",
    transcript: "ji",
    index: 57,
  },
  {
    symbol: "ヅ",
    transcript: "zu",
    index: 58,
  },
  {
    symbol: "デ",
    transcript: "de",
    index: 59,
  },
  {
    symbol: "ド",
    transcript: "do",
    index: 60,
  },
  {
    symbol: "バ",
    transcript: "ba",
    index: 61,
  },
  {
    symbol: "ビ",
    transcript: "bi",
    index: 62,
  },
  {
    symbol: "ブ",
    transcript: "bu",
    index: 63,
  },
  {
    symbol: "ベ",
    transcript: "be",
    index: 64,
  },
  {
    symbol: "ボ",
    transcript: "bo",
    index: 65,
  },
  {
    symbol: "パ",
    transcript: "pa",
    index: 66,
  },
  {
    symbol: "ピ",
    transcript: "pi",
    index: 67,
  },
  {
    symbol: "プ",
    transcript: "pu",
    index: 68,
  },
  {
    symbol: "ペ",
    transcript: "pe",
    index: 69,
  },
  {
    symbol: "ポ",
    transcript: "po",
    index: 70,
  },
];

export default hiraganaList;
