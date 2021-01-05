let urlParams = new URLSearchParams(window.location.search);
let page = urlParams.get('page')
console.log(page); // "abc"


switch(page){
    case '1':
        console.log("海邊沙灘");
        document.querySelector(".page1").style.display = "block";
        break;
    case '2':
        console.log("觀光漁市");
        document.querySelector(".page2").style.display = "block";

        break;
    case '3':
        console.log("通安宮");
        document.querySelector(".page3").style.display = "block";
        break;
    case '4':
        console.log("觀光夜市");
        document.querySelector(".page4").style.display = "block";
        break;
    default:
        console.log("load flase")
}
