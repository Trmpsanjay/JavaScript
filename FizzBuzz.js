var output=[];
function fizbuzz(num){
    if(num%3===0 && num%5==0)
        output.push("Fizzbuzz");
    else if(num%3===0)
        output.push("Fizz");
    else if(num%5===0)
        output.push("Buzz");
     else
        output.push(num);
}
for(i=0;i<=100;i++){
    fizbuzz(i)
}
console.log(output);
