// given two crystal balls that will break if dropped from high enough distance
// determine the exact spot that it will break in the most optimised way

export default function two_crystal_balls(breaks: boolean[]): number {
    const checkIndexJump = Math.floor(Math.sqrt(breaks.length));
    let i = checkIndexJump;

    for (; i < breaks.length; i += checkIndexJump) {
        if (breaks[i]) {
            break;
        }
    }
    i -= checkIndexJump


    for (let j = 0; j <= checkIndexJump && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1
}
