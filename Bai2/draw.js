class Draw{
    constructor(){
      
    }
    drawShape(height){
        let mid = Math.floor(height / 2)+1;
        let output = '';
        for (let i = 1; i <= mid; i++)
            {
                for (let j = i; j < mid; j++)
                {
                    output += " ";
                }
           
                output += ("*");
           
                if (i > 1)
                {
                    for (let k = 1; k <= 2 * (i - 1) - 1; k++)
                    {
                        output+= " ";
                    }
                    output+= "*";
                }
           
                output+= "\n";
            }
           
            for (let i = mid - 1; i >= 1; i--)
            {
                for (let j = mid; j > i; j--)
                {
                    output+= " ";
                }
           
                output+= "*";
           
                if (i > 1)
                {
                    for (let k = 1; k <= 2 * (i - 1) - 1; k++)
                    {
                        output+= " ";
                    }
                    output+= "*";
                }
           
                output+= "\n";
            }
        return output;
    }
}

module.exports = Draw;