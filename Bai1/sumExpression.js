class sumExpression{
    constructor(x,n){
        this.x =x;
        this.n = n;
    }
    caculator(){
        let sum =0;
        for(let i=0; i<= this.n; i++){
            sum+= Math.pow(this.x,i);
        }
        return sum;
    }
}
module.exports = sumExpression;