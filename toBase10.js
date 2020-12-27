function toDecimal(input,initialBase){
    var input_str = ((input).split('.'))[0],beta=0;
    for(i=1;i<=input_str.length;i++)
    {
        beta += parseInt(input_str[i-1],16) * Math.pow(initialBase,input_str.length - i);
    }
    if(input_str =  ((input).split('.'))[1]){
        beta = parseFloat(beta);
        for(i=1;i<=input_str.length;i++)
        {
            beta += parseInt(input_str[i-1],16) *(1 / Math.pow(initialBase,i));
        }
        
    }
    return beta;
}
