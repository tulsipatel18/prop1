console.log("demo1js file");

//array push method
let buttons = document.getElementById("pushValue");
buttons.addEventListener("click", function (e) {
  // console.log("you have clicked");

  let inputValue = document.getElementById("inputValue").value;

  let myArray = [1, 2, 3];
  myArray.push(inputValue);

  addValue = `[${myArray}]`;

  inputValue.value = "";
   document.getElementById("result").innerHTML = addValue;


});

//array pop
buttons = document.getElementById("popValue");
buttons.addEventListener("click", function (e) {
  // console.log("you have clicked");

  let myArray = [1, 2, 3];
  myArray.pop();

  popValue = `[${myArray}]`;
  document.getElementById("result1").innerHTML = popValue;
});
//array unshift
buttons = document.getElementById("unshiftValue");
buttons.addEventListener("click", function (e) {
  firstAddValue = document.getElementById("firstAddValue").value;

  let myArray = [1, 2, 3];
  myArray.unshift(firstAddValue);

  unshiftValue = `[${myArray}]`;

  firstAddValue.value = "";
  document.getElementById("result2").innerHTML = unshiftValue;
});
//array shift
buttons = document.getElementById("shiftValue");
buttons.addEventListener("click", function (e) {
  let myArray = [1, 2, 3];
  myArray.shift();

  shiftValue = `[${myArray}]`;
  document.getElementById("result3").innerHTML = shiftValue;
});
//array concat
buttons = document.getElementById("concatValue");
buttons.addEventListener("click", function (e) {
  let myArray = [1, 2, 3];
  uname = ["a", "b", "c"];

  concatArray = myArray.concat(uname);
  finalArray = `[${concatArray}]`;

  document.getElementById("result4").innerHTML = finalArray;
});
//array entries
buttons = document.getElementById("entriesValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["a", "b", "c"];
  const iterator1 = myArray.entries();

  entriesValue = `[${iterator1.next().value}]`;

  document.getElementById("result5").innerHTML = entriesValue;
});

//array find
buttons = document.getElementById("fiValue");
buttons.addEventListener("click", function (e) {
  let myArray = [10, 20, 30];

  values = myArray.find(
    (element) => element == document.getElementById("findValue").value
  );

  findValue.value = "";
  document.getElementById("result6").innerHTML = values;
});
//array findindex
buttons = document.getElementById("fiInValue");
buttons.addEventListener("click", function (e) {
  let myArray = [10, 20, 30];
  values = myArray.findIndex(
    (element) => element == document.getElementById("findIndexValue").value
  );

  findIndexValue.value = "";
  document.getElementById("result7").innerHTML = values;
});

//array findLast

buttons = document.getElementById("fiLaValue");
buttons.addEventListener("click", function (e) {
  let myArray = [10, 20, 30, 40, 50];

  fLValue = myArray.findLast((element) => element > 60);

  document.getElementById("result8").innerHTML = fLValue;
});

//array findlastindex

buttons = document.getElementById("fiLaIndexValue");
buttons.addEventListener("click", function (e) {
  let myArray = [10, 20, 30, 40];

  values = myArray.findLastIndex((element) => element > 10);

  document.getElementById("result9").innerHTML = values;
});

//array flat
buttons = document.getElementById("flatValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["a", "b", "c", [1, 2, 3]];
  myArray.flat();

  values = `[${myArray}]`;

  document.getElementById("result10").innerHTML = values;
});

//array include

buttons = document.getElementById("iValue");
buttons.addEventListener("click", function (e) {
  // let includeValue = document.getElementById("includeValue").value;
  // console.log(includeValue);

  let myArray = ['a', 'b', 'c'];

 inValue = myArray.includes(document.getElementById("includeValue").value);
 
  includeValue.value = "";
  document.getElementById("result11").innerHTML = inValue;
  // console.log(includeValue);
});

//array indexof

buttons = document.getElementById("inValue");
buttons.addEventListener("click", function (e) {
  // let indexValue = document.getElementById("indexValue").value;

  let myArray = ['a', 'b', 'c'];

  addIndex = myArray.indexOf(document.getElementById("indexValue").value);

  indexValue.value = "";
  document.getElementById("result12").innerHTML = addIndex;
});

//array join

buttons = document.getElementById("joinValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["at", "kt"];

  let jValue = myArray.join("");

  document.getElementById("result13").innerHTML = jValue;
});

//array keys

buttons = document.getElementById("keysValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["a", "b", "c"];

  kValue = Object.keys(myArray);

  document.getElementById("result14").innerHTML = kValue;
});

//array lastindexof

buttons = document.getElementById("laInValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["a", "b", "c", "a"];

  let lastIndexOfValue = document.getElementById("lastIndexOfValue").value;

  laInOfValue = myArray.lastIndexOf(lastIndexOfValue);

  lastIndexOfValue.value = "";
  document.getElementById("result15").innerHTML = laInOfValue;
});

//array foreach

buttons = document.getElementById("forEachValue");
buttons.addEventListener("click", function (e) {
  let myArray = [1, 2, 3];

  myArray.forEach(
    () => (document.getElementById("result16").innerHTML = myArray)
  );
});

//array array.of

buttons = document.getElementById("aOfValue");
buttons.addEventListener("click", function (e) {
  let arrOfValue = document.getElementById("arrOfValue").value;

  AValue = Array.of(arrOfValue);
  // console.log(AValue);

  arrOfValue.value = "";
  document.getElementById("result17").innerHTML = AValue;
});

//array reduce

buttons = document.getElementById("reduceValue");
buttons.addEventListener("click", function (e) {
  let myArray = [1, 2, 3, 4, 5];

  redValue = myArray.reduce((preValue, CurrValue) => preValue + CurrValue,0);

  document.getElementById("result18").innerHTML = redValue;
});

//array reverse

buttons = document.getElementById("reverseValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["a", "b", "c"];
  myArray.reverse();

  document.getElementById("result19").innerHTML = myArray;
});

//array slice

buttons = document.getElementById("sliValue");
buttons.addEventListener("click", function (e) {
  let sliceValue = document.getElementById("sliceValue").value;

  let myArray = ["at", "kt", "mt", "st"];

  slValue = myArray.slice(sliceValue);

  sliceValue.value = "";
  document.getElementById("result20").innerHTML = slValue;
});

//array sort

buttons = document.getElementById("sortValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["March", "Jan", "Feb", "Dec"];
  myArray.sort();

  sValue = `[${myArray}]`;

  document.getElementById("result21").innerHTML = sValue;
});

//array splice

buttons = document.getElementById("spliValue");
buttons.addEventListener("click", function (e) {
  let myArray = ["ab", "bc", "cd"];
  myArray.splice(1, 1, "de");

  document.getElementById("result22").innerHTML = myArray;
});

//array tostring

buttons = document.getElementById("toStringValue");
buttons.addEventListener("click", function (e) {
  let myArray = [1, 2, 'a', 'b'];

  myArray.toString();
  // console.log(myArray.toString());

  document.getElementById("result23").innerHTML = myArray;
});
