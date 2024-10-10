class ManagerInt {
    constructor() {
        this.uniqueSubArrays = new Set();
    }

    sumK(m, n) {
        const currentSubArray = [];
        this.findAllArrSum(m, n, 0, currentSubArray);
    }

    findAllArrSum(m, target, index, currentSubArray) {
        if (target === 0) {
            const subArrayString = currentSubArray.join(",");
            if (!this.uniqueSubArrays.has(subArrayString)) {
                this.uniqueSubArrays.add(subArrayString);
                console.log(subArrayString);
            }
            return;
        }
        for (let i = index; i < m.length; i++) {
            if (m[i] <= target) {
                currentSubArray.push(m[i]);
                this.findAllArrSum(m, target - m[i], i + 1, currentSubArray);
                currentSubArray.pop(); 
            }
        }
    }
}

const manager = new ManagerInt();
const arr = [1, 4, 6, 3, 2, 2, 8];
const targetSum = 10;

console.log("Các mảng con có tổng bằng " + targetSum + ":");
manager.sumK(arr, targetSum);
