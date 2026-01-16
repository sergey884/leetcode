/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = (weights, days) => {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, num) => acc + num, 0);

    const canShip = (capacity) => {
        let totalDays = 0;
        let totalCapacity = 0;

        for (const weight of weights) {
            totalCapacity += weight;
            if (totalCapacity > capacity) {
                totalDays++;
                totalCapacity = weight;
            }
        }

        return totalDays < days;
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canShip(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};


const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;
console.log(shipWithinDays(weights, days)); // 15
