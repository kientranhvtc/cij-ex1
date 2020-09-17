
let input = prompt("Nhập mảng các phần tử cách nhau 1 dấu phẩy");
let arr = input.split(',');

//Do mình chưa hiểu rõ ý của đề lắm nên mình làm theo 2 cách

//Xoá các phần tử trùng nhau (giữ lại 1 phần tử)
let newArr = [...new Set(arr)];
console.log(newArr);

//Xoá sạch các phần tử mà có bị trùng nhau

arr.sort();
let i = arr.length;
while (i>=0){
    let tmp = arr.indexOf(arr[i]);
    if (tmp < i && tmp >=0){
        arr.splice(tmp, (i-tmp+1));
        i = tmp-1;
    }
    else i--;
}
console.log(...arr);