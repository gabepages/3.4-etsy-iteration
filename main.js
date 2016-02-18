
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

//*
//QUESTION 3
//*

var gbpItem = items.filter(function(element, index, array){
  if (element.currency_code == "GBP"){
    return true;
  }else {
    return false;
  }
}, 0);

console.log(gbpItem[0].title + " cost £" + gbpItem[0].price);


//*
//QUESTION 4
//*

var madeOfWood = items.filter(function(element, index, array){
    if (element.materials.indexOf('wood') >= 0){
      return true;
    }else {
      return false;
    }
})
madeOfWood.forEach(function(value, index, array){
  console.log(value.title + ' is made of wood.')
})

//*
//QUESTION 5
//*

var nineMaterials = items.filter(function(element){
  if (element.materials.length >= 8){
    return true;
  }else {
    return false;
  }
});

console.log(nineMaterials);
nineMaterials.forEach(function(value){
  console.log(value.title + ' has ' + value.materials.length + " materials: " + value.materials);
});

//*
//QUESTION 6
//*

var whoMade = items.filter(function(element){
  if (element.who_made == "i_did"){
    return true;
  }else{
    return false
  }
});

console.log(whoMade.length +' were made by their sellers')
