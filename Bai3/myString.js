class MyString{
    constructor(inputString){
        this.inputString = inputString;
    }
    SumASCII(){
        let total = 0;
        for(let char of this.inputString){
            total += char.charCodeAt(0);
        }
        return total;
    }
    SumASCIIPrime(){
        let total = 0;
        for(let char of this.inputString){
            if(char >= 'A' && char <= 'Z'){
                total += char.charCodeAt(0);
            }
        }
        return total;
    }
    ListCharacterCount(n){
        const dict= {};
        for(let char of this.inputString){
            if(char != ' '){
                if(dict[char]){
                    dict[char]++;
                }
                else{
                    dict[char] = 1;
                }
            }
        }
        const groupedCharacters = Object.entries(dict)
        .filter(([_, count]) => count >= n)
        .reduce((acc, [char, count]) => {
            if (!acc[count]) acc[count] = [];
            acc[count].push(char);
            return acc;
        }, {});

        return groupedCharacters;
    }
    longestCommonSubstring(s1, s2) {
        const lsc = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));
        let maxLength = 0;
        let endIndex = 0;

        for (let i = 1; i <= s1.length; i++) {
            for (let j = 1; j <= s2.length; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    lsc[i][j] = lsc[i - 1][j - 1] + 1;

                    if (lsc[i][j] > maxLength) {
                        maxLength = lsc[i][j];
                        endIndex = i - 1;
                    }
                } else {
                    lsc[i][j] = 0;
                }
            }
        }

        if (maxLength === 0) {
            return " "; 
        }
        return s1.substring(endIndex - maxLength + 1, endIndex + 1);
    }
}
module.exports = MyString;