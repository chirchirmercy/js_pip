//Given an array num of numbers with length of q,find the target 70 in the array.
//return the index if the target is found else null

function binary(num,target){
    let left=0;
    let right=num.length-1;
    
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }else if(num[middle]>target){
            right=middle-1
        }else{
            left=middle+1
        }

}
return null
}
let num=[10,20,24,56,70,90,46,29]

let target=70

console.log(binary(num,target))

//Given an unsorted array of numbers return the sorted array 
let num2=[20,10,24,82,16,2,1,8]
function divideArray(arr){
    if(arr.length<=1){
        return arr 

    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    console.log({left})
    console.log({right})

    return sortedArray(divideArray(left),divideArray(right))

}

function sortedArray(left,right){
    let emptyArray=[];
while(left.length && right.length){
    if(left[0]< right[0]){
        emptyArray.push(left.shift())
    }else{
        emptyArray.push(right.shift())
    }
}
return[...emptyArray,...left,...right];
}
console.log(divideArray(num2))



