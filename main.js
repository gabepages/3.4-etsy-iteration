
//*
//QUESTION 1
//*

var totalPrice = items.reduce(function(previousValue,currentValue, currentIndex, array){
  return previousValue + currentValue.price;
},0);
var length = items.length;
var average = totalPrice / length;
var round = Math.round(average * 100) /100;
console.log('average price:', round);

//*
//QUESTION 2
//*

var priceRange = items.filter(function(element, index, array){
  if (element.price > 14 && element.price <= 18 && element.currency_code == "USD"){
    return true;
  }else{
    return false;
  }
},0);
console.log('items between $14.00 & $18.00:', priceRange);
