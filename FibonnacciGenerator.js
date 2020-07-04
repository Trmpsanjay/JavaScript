function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var output =[];
    if(n===1){
        output=[0];
    }
    //Write your code here:
    else if(n===2){
        output =[0,1];
    }
    else{
        output =[0,1];
    }
    var i=2;
    while(i<n){
        output.push(output[i-2]+output[i-1]);
        i++;
    }
    
    
    return output;
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

