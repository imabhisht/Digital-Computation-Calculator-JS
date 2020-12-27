function fromDecimal(input,finalBase,precision=6){
    function ConvertPoint(exp){
        return parseFloat("0."+((exp.toString()).split('.'))[1]);
    }    
    var array_ans=[],array_temp=[];
    var x = Math.floor(input)
    while(true){
        array_ans.push((x%finalBase).toString(16));
        if(Math.floor(x/finalBase)==0){
            break;
        }
        x = Math.floor(x/finalBase);
    }
    if(input%1!=0){
        array_temp.push('.')
        for(var run = 0;run < precision ; run++){
            array_temp.push((Math.floor(ConvertPoint(input)*finalBase)).toString(16))
            input = ConvertPoint(input)*finalBase;
        }
        return ((array_ans.reverse()).join('') + array_temp.join('')).toUpperCase()
    }
    return ((array_ans.reverse()).join('')).toUpperCase()
}
