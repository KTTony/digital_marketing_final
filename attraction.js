let urlParams = new URLSearchParams(window.location.search);
let page = urlParams.get('page')
console.log(page); // "abc"


switch(page){
    case 1:
        console.log("海邊沙灘");
        break;
    case 2:
        console.log("觀光漁市");
        break;
    case 3:
        console.log("通安宮");
        break;
    case 3:
        console.log("觀光夜市");
        break;
}
