function insertion(){
    arr= [2,4,1,6,0];

    for (i = 0 ; i <arr.length ; i++){ //i=2
        for(j = i+1 ; j> 0; j-- ){ 
            if (arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1]= temp;
            }
        }
    }return arr;
}

insertion();