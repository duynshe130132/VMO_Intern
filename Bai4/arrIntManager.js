class ArrIntManager{
    constructor(arrInt){
        this.arrInt = arrInt;
    }
    sumArr(){
        return this.arrInt.reduce((sum, num) => sum + num, 0);
    }
    sumPrime(){
        return this.arrInt.filter(num => this.checkPrimeN(num)).reduce((sum, num) => sum + num, 0);
    }
    checkPrimeN(num){
        if(num === 1) return false;
        if(num ===2) return true;
        for(let i=2; i<= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    printfBoBa(){
        const result = [];
        for(let i=0; i<this.arrInt.length-2; i++) {
            if(this.arrInt[i] + this.arrInt[i+1] === this.arrInt[i+2]) {
                result.push(`${this.arrInt[i]}, ${this.arrInt[i + 1]}, ${this.arrInt[i + 2]}`);
            }
        }
        return result.length > 0 ? result: 'No matching';
    }
    printLongest(s) {
        let maxLength = 0;
        let longestSubArray = null;

        for (let start = 0; start < this.arrInt.length; start++) {
            let sum = 0;
            const currentSubArray = [];

            for (let end = start; end < this.arrInt.length; end++) {
                sum += this.arrInt[end];
                currentSubArray.push(this.arrInt[end]);

                if (sum === s && currentSubArray.length > maxLength) {
                    maxLength = currentSubArray.length;
                    longestSubArray = [...currentSubArray];
                }
            }
        }
        return longestSubArray ? `Longest subarray with sum = ${s}: ${longestSubArray.join(", ")}` : `No subarray found with sum = ${s}`;
    }

    findLongestBitonicSubarray() {
        const n = this.arrInt.length;
        if (n === 0) return [];

        let longestBitonic = [];

        for (let i = 0; i < n; i++) {
            let j = i;
            while (j < n - 1 && this.arrInt[j] < this.arrInt[j + 1]) {
                j++;
            }
            if (j === i) continue;

            let k = j;
            while (k < n - 1 && this.arrInt[k] > this.arrInt[k + 1]) {
                k++;
            }

            if (j < k) {
                const bitonic = [
                    ...this.arrInt.slice(i, j + 1),
                    ...this.arrInt.slice(j + 1, k + 1)
                ];
                if (bitonic.length > longestBitonic.length) {
                    longestBitonic = bitonic;
                }
            }
            i = k;
        }

        return longestBitonic.length > 0 ? longestBitonic.join(', ') : 'No bitonic subarray found';;
    }
}
module.exports = ArrIntManager;