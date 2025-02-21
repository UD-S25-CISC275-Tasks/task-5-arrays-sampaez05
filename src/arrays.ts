/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newnums: number[] = [];
    if (numbers.length === 0) {
        return newnums;
    } else if (numbers.length === 1) {
        newnums.push(numbers[0]);
        newnums.push(numbers[0]);
        return newnums;
    } else {
        newnums.push(numbers[0]);
        newnums.push(numbers[numbers.length - 1]);
        return newnums;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let ints: number[] = numbers.map((number: string): number =>
        Number.isNaN(parseInt(number)) ? 0 : parseInt(number),
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newamounts: string[] = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.substring(1) : amount,
    );
    let ints: number[] = newamounts.map((amount: string): number =>
        Number.isNaN(parseInt(amount)) ? 0 : parseInt(amount),
    );
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let filterQs: string[] = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    let exclaim: string[] = filterQs.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message,
    );
    return exclaim;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    let nonrgbs: string[] = colors.filter(
        (color: string) =>
            color != "red" && color != "blue" && color != "green",
    );
    if (nonrgbs.length > 0) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let str: string = "";
    let sum: number = addends.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    sum.toString;
    str += sum;
    str += "=";
    str = addends.reduce(
        (str: string, num: number) => str + num.toString() + "+",
        str,
    );
    str = str.slice(0, -1);
    return str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

export function injectPositive(values: number[]): number[] {
    let arr: number[] = [];
    let foundNeg: boolean = false;
    const array: number = values.reduce(
        (accumulator: number, currentValue: number) => {
            if (currentValue >= 0) {
                arr.push(currentValue);
            } else if (currentValue < 0 && !foundNeg) {
                foundNeg = true;
                arr.push(currentValue);
                arr.push(accumulator);
            } else if (currentValue < 0) {
                arr.push(currentValue);
            }
            return currentValue + accumulator;
        },
        0,
    );
    if (!foundNeg) {
        arr.push(array);
    }
    return arr;
}
