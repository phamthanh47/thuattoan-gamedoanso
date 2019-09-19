function linearsearch(arr,index) {
    let right=arr.length-1;
    let left=0;
    for(let i =0;i<arr.length;i++){
        if(index==arr[i]){
            alert("vi tri cua index la: "+i);
            break;
        }
        if(i==arr.length-1){
            alert("khong tim thay index ");
        }
    }
}