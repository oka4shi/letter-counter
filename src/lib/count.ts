import type { LetterCounts } from "$lib/types" 

const count_num = (text: string): number => [...text].length;

const delete_spaces = (text: string): string => {
    const reg =
        /[\u0009-\u000d\u001c-\u0020\u11a3-\u11a7\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\u3164\ufeff\u034f\u2028\u2029\u202a-\u202e\u2061-\u2063\ufeff]/gi;
    return text.replace(reg, "");
};

const count_words = (text: string): number => {
    const blanks =
        /[\u0009-\u000d\u001c-\u0020\u11a3-\u11a7\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\u3164\ufeff\u034f\u2028\u2029\u202a-\u202e\u2061-\u2063\ufeff]/gi;

    const normalized_blanks = text.replace(blanks, " ");
    const excluded_duplicates = normalized_blanks.replace(/ {2,}/g, " ");

    return excluded_duplicates.split(" ").filter((v) => v).length;
};

export const count = (text: string): LetterCounts => {
    const letter_count = count_num(text);
    const without_spaces = count_num(delete_spaces(text))
    const word_count = count_words(text)

    return {
        letterCount: letter_count,
        withoutSpacesCount:without_spaces,
        wordCount:word_count
    };
};
