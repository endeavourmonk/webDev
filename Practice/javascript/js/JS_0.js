// 1. ways to print in javascript
// console.log("Welcome to javascript");
// alert("Welcime to javaScript ");
// document.write("welome to world of javascript");

//2. JavaScript Console API
    // console.log("Welcome to javascript", 4 + 6, "another log");
    // document.write("welome to world of javascript");
    // console.warn("This is a warning");
    // console.error("this is an error");

//3. javaScript variables -- Container to store data values.
    // var num1 = 3;
    // var num2 = 6;
// console.log(num1 + num2);

//4. Data Types in javascript

/*
    There are two types of data in Javascript :
    (i) Primitive Data Types :- undefined , null , boolean , string , number, symbol
    (ii) Reference Data Types :- arrays & objects
*/

// (i) Numbers
    // var num = 9;
    // var num1 = 65.59;

//(ii) String
    // var str = "this is a string";
    // var str1 = 'this is also string';

//(iii) objects
    var marks = {
        harry: 99.32,
        ujjawal: 98,
        ravish: 85.3,
        hari: 58,
        shyam: 81,
    }
    // console.log(marks);

//(iv) Booleans
    // var a = true;
    // var b = false;
    // console.log(a, b);

//(v) undefined
    var und = undefined;
    // console.log(und);
    // console.log(undefined);
    var un
    // console.log(un);

//(vi) null
    var n = null;
    // console.log(n);

//(vii) Array
    var arr = [1, 2, 3, 4, 5, "rama", 6.2];
    // console.log(arr[0]);
    // console.log(arr[5]);
    // console.log(arr[6]);
    // console.log(arr);

//5. Operators in Javascript
    //(i) Arithmetic Operators
            // var a = 1;
            // var b = 2;
            // console.log("The value of a + b is ",a+b);
            // console.log("The value of a - b is ",a-b);
            // console.log("The value of a * b is ",a*b);
            // console.log("The value of a / b is ",a/b);

    //(ii) Assignment Operator
            // var c = b;
            // c += b;
            // console.log(c);

    //(iii) Comparision Operator
            // var x = 80;
            // var y = 60;
            // console.log(x > y);
            // console.log(x >= y);
            // console.log(x < y);
            // console.log(x <= y);
            // console.log(x == y);
    
    //(iv) Logical Operator
            //(a) Logical AND
            // console.log(true && true);
            // console.log(true && false);
            // console.log(false && true);
            // console.log(false && false);

            //(b)Logical OR
            // console.log(true || true);
            // console.log(true || false);
            // console.log(false || true);
            // console.log(false || false);
            
            //(c)Logical NOT
            // console.log(!true);
            // console.log(!false);
    //(6) Functions
            // function average(num1,num2){
            //     var c = (num1 + num2)/2;
            //     return c;
            // }
            // var c1 =average(2,5);
            // console.log(c1);
            // c2 = average(6,16);
            // console.log(c2);
    
    //(7)Conditionals in Javascript
            // var age = 2;
            // if(age < 18)
            //     console.log("You are a kid");
            // else if(age > 50)
            //     console.log("You are senior citizen");
            // else    
            //     console.log("You are not a kid");
    //Arrays
        // var array = [1,2,3,4,5,6];
        // console.log(array);
        // for(var i=0 ; i<array.length ; i++){
        //     if(i==2)
        //         continue;
        //     console.log(array[i]);
        // }

        // array.forEach(function(element){
        //     console.log(element);
        // })

        const vii = 8;
        // let a = 0;
        // while(a < array.length){
        //     console.log(array[a]);
        //     a++;
        // }

        // do{
        //     if(a==2){
        //         // break;
        //     }
        //     console.log(array[a]);
        //     a++;
        // }while(a<array.length);

    //Array Methods
        // let myArr = ["Fan",11.5,null,true,false,55];
        // console.log(myArr.length);
        // myArr.pop();
        // myArr.push("Harry");
        // console.log(myArr);
        // myArr.shift();
        // myArr.unshift("rahul");
        // const newlen = myArr.unshift();
        // console.log(newlen);
        // myArr.toString();
        // let d = [1,3,76,4,3];
        // d.sort();
        // console.log(d);

    //String methods in JavaScript
        let myLovelyString = "Ujjawal is a good boy and is a good student";
        // console.log(myLovelyString.length);
        // console.log(myLovelyString.indexOf("is"));
        // console.log(myLovelyString.lastIndexOf("is"));
        // console.log(myLovelyString.slice(0,4));
        // let d = myLovelyString.replace("Ujjawal" , "Harry");
        // d = d.replace("good" , "bad");
        // console.log(d);

        let myDate = new Date();
        // console.log(myDate);
        // console.log(myDate.getTime());
        // console.log(myDate.getFullYear());
        // console.log(myDate.getDay());
        // console.log(myDate.getMonth());
        // console.log(myDate.getMinutes());
        // console.log(myDate.getHours());

    //DOM Manipulation
        let elem = document.getElementById('click');
        // console.log(elem);

        let elemClass = document.getElementsByClassName('Container');
        // console.log(elemClass);

        // elemClass[0].style.background = "yellow";   
        elemClass[0].classList.add("bgPrimary");
        elemClass[0].classList.add("textSuccess");
        // elemClass[0].classList.remove("textSuccess");
        // console.log(elem.innerHTML);
        // console.log(elem.innerText);
        // console.log(elemClass[0].innerHTML);
        // console.log(elemClass[0].innerText);
        let tn = document.getElementsByTagName("div");
        console.log(tn);
        createdElement = document.createElement('p');
        createdElement.innerText = "This is a created para."
        createdElement2 = document.createElement('b');
        createdElement2.innerText = "This is a created bold."
        // appendChild appends a child element.
        tn[0].appendChild(createdElement);
        tn[0].replaceChild(createdElement2 , createdElement);
        // removeChild(element) --> Removes an element.
        tn[0].removeChild(createdElement2);
