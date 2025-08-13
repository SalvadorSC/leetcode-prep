function findMinEatingSpeed(
    piles: number[], target: number, start: number, end: number
): number {
    if (start > end) {
        return start;
    }

    const middle = Math.floor((start + end) / 2);
    const hoursWithKSpeed = piles.reduce((sum, pile) => sum + Math.ceil(pile / middle), 0)

    if (hoursWithKSpeed > target) {
        return findMinEatingSpeed(piles, target, middle + 1, end);
    } else {
        return findMinEatingSpeed(piles, target, start, middle - 1);
    }
}


function minEatingSpeed(piles: number[], h: number): number {
    const biggestPile = Math.max(...piles);

    return findMinEatingSpeed(piles, h, 1, biggestPile);
};
// console.log(minEatingSpeed([3, 6, 7, 11], 8));
// console.log(minEatingSpeed([312884470], 312884469));
// console.log(minEatingSpeed([332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184], 823855818));

// var minEatingSpeed = function(piles, h) {
//     let start = 1;
//     let end = Math.max(...piles);
//     
//     while (start < end) {
//         const mid = left + Math.floor((end - left) / 2);
//         
//         if (canEatAll(piles, h, mid)) {
//             end = mid;
//         } else {
//             start = mid + 1;
//         }
//     }
//     
//     return left;
// };
// 
// function canEatAll(piles, h, k) {
//     let hours = 0;
//     for (const pile of piles) {
//         hours += Math.ceil(pile / k);
//         if (hours > h) return false;
//     }
//     return true;
// }