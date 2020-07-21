var number=parseInt(prompt("enter the number"))
console.log(typeof number)
let arr=[];
for(let i=0;i<=number;i++)
{
    arr[i]=i;
   
}
console.log(arr)
let odd = arr.filter(el=>el%2!=0).map(el=>el**3)

console.log(odd)