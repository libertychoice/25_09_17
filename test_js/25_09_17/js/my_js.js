'use strict';
//line comment

/*
block comment

*/

//call
//apply
class Red {
    constructor(a,v){
        this.test = a
        this.fire = v
    }

    getTest(){
        return this.test
    }

    getFire(){
        return this.fire
    }
    get Field(){
        return "Text Field"
    }
}




function red(a,v){
    this.test = a
    this.fire = v
}

red.prototype={
    getTest:function(){
        return this.test
    },

    getFire:function(){
        return this.fire
    },
    Field:"Test Field"
}

red()

r = new red();

let obj2 = {
    red:"green",
}


let obj = {
    red:"color",
    getRed: function(a,s){
        return this.red;
    },
    getRed2:()=>{
        return this.red;
    }
    
    
}

function test(){
    for(let cnt=0;cnt<=1000;cnt++){
        cnt%21===0 ? console.log(cnt) : undefined;
    }

}

function test1(){
    let s = "fafaoofa"
    let i=0;
    let y=0;
    for (let k=0;k<=s.length;k++){
        if(s[k]==="a")
        {
            i++
        }
        else if(s[k]==="o"){
            y++
        }
    }
    console.log(i)
    console.log(y)
}

function testIF(a){
    if ((a>5)&&(a<9)){
        console.log(">5");
    }else if(true){
        console.log("other");
    }
}


function testSW(a){
    let res;
    switch(a){
        case 3:
        case 4:
            res=true
            break;
        case 5:
            res=true
            break;
        default:
            res=false
    }
    return res
}


function loops(){
  /*  let x=0
    while(x<9){
        console.log(x)
        x++;
    }


    do{

    }while(cond)
*/
    let obj={
        test:"we",
        red:23
    }
    let arr = [1,2,3,,,5,43,];
    arr.length=20;

    for(let cnt=0;cnt<=arr.length;cnt+=2){
        console.log(arr[cnt])
    }
    console.log("testtest")

    for(let k in arr){
        console.log(arr[k]);
    }

    for (let k of obj){
        console.log(k)
    }
}




console.log("test");
let d = 5;

{
    let d = 7;
    console.log(d);
}
console.log(d);

var x; //function
let y; //2015  block
const z=3; //2015 if simple  const else variable block