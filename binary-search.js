function binarysearch(arr,index) {
    let right=arr.length-1;
    let left=0;
    let mid;
    while(right >= left){
        mid = Math.floor((left+(right-left)/2));
        if(arr[mid]==index){
            return mid;
        }
        else if(arr[mid]<index){
            left = mid + 1;
        }
        else
            right=mid-1;
    }
    return -1;
}