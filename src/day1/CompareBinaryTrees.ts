export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    //base case

    // 1. if a and be are both null
    if (a === null && b === null) {
        return true
    }
    // 2. if a is null or b is null
    if (a === null || b === null) {
        return false
    }
    // 3. if a does not equal to b
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right)
}