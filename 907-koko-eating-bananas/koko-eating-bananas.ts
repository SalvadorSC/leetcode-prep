function findMinEatingSpeed(
    piles: number[], target: number, start: number, end: number
): number {
    // If we've reached a point where we can't keep searching, as we've cut from both sides, 
    // either by start getting bigger or end getting smaller, we return the start. 
    if (start > end) {
        return start;
    }

    const middle = Math.floor((start + end) / 2);

    // Calculate total piles divided between current speed of eating (middle) and ceil it. 
    const hoursWithKSpeed = piles.reduce((sum, pile) => sum + Math.ceil(pile / middle), 0)

    // Recursion
    // Check if the hours taken to eat at k speed are bigger than our target hours. 
    if (hoursWithKSpeed > target) {
        // If they are, we search the second half.
        return findMinEatingSpeed(piles, target, middle + 1, end);
    } else {
        // Else, we search the first half.
        return findMinEatingSpeed(piles, target, start, middle - 1);
    }
}


function minEatingSpeed(piles: number[], h: number): number {
    const biggestPile = Math.max(...piles);

    return findMinEatingSpeed(piles, h, 1, biggestPile);
};