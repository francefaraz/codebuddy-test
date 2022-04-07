// level {1/2/3}
//level 2

var n=7
var a=0,b=1,nxt
var sum=0;
for(let i=1;i<=n;i++){
    console.log(b)
    nxt=a+b;
    a=b
    b=nxt
    sum+=a
}

console.log("sum:",sum)