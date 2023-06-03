window.onload = function() {
    let arr = [10, 20, 30, 40, 50, 60];

    console.log("concat method:");
    console.log("(6) " + arr.concat());
    console.log("copyWithin method:");
    console.log("(6) " + arr.copyWithin(3));

    console.log("map method:");
    arr.map((element) => console.log(element));

    console.log("every method:");
    console.log(arr.every((element) => element > 5)); 

    console.log("some method:");
    console.log(arr.some((element) => element === 20)); 

    console.log("filter method:");
    console.log("(4) " + arr.filter((element) => element >= 20)); 

    console.log("find method:");
    console.log(arr.find((element) => element === 10)); 

    console.log("findIndex method:");
    console.log(arr.findIndex((element) => element === 20)); 

    console.log("indexOf method:");
    console.log(arr.indexOf(20)); 

    console.log("lastIndexOf method:");
    console.log(arr.lastIndexOf(50)); 

    console.log("push method:");
    arr.push(100);
    console.log("(7) " + arr); 

    console.log("pop method:");
    console.log(arr.pop()); 

    console.log("shift method:");
    console.log("(6) " + arr.shift()); 

    console.log("shift method:");
    console.log("(5) " + arr); 
  };