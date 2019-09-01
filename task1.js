var _ = require('lodash')
var bill = [{
 foodchoice: "vegfriedrice",
 names: ['bob', 'charlie'],
 cost: 120
}, {
 foodchoice: 'ice Cream',
 names: ['charlie'],
 cost: 30
}, {
 foodchoice: 'dosa',
 names: ['bob'],
 cost: 80
}, {
 foodchoice: 'Pizza',
 names: ['charlie', 'john'],
 cost: 200
}]
var data = [
 {
 platformId: 1,
 payout: 15,
 numOfPeople: 4
 },
 {
 platformId: 1,
 payout: 12,
 numOfPeople: 3
  },
 {
 platformId: 2,
 payout: 6,
 numOfPeople: 5
 },
 {
 platformId: 2,
 payout: 10,
 numOfPeople: 1
 },
]
/*console.log(_.chain(data)
 .groupBy("platformId")
 .map(function(value, key) {
 return [key, _.reduce(value, function(result, currentObject) {
 return {
 payout: result.payout + currentObject.payout,
 numOfPeople: result.numOfPeople + currentObject.numOfPeople
 }
 }, {
 payout: 0,
 numOfPeople: 0
 })];
 })
 .object()
 .value());*/
var friends = bill[0].names.length
var cost = bill[0].cost
var actual_cost = cost/friends
//console.log(friends, cost)
//console.log(actual_cost)
var calc = function(bill) {
	var v1 = 0; 
	var v2 = 0; 
	var v3 = 0; 
	var tc = 0;
 result=[];


 for (var i = 0; i < bill.length; i++){
 var obj = bill[i];
 // console.log(obj ,'bj')
	 for (var key in obj){

	 var attrName = key;
	 var attrValue = obj[key];
	 var n1 = _.includes(attrValue,"charlie");
	 var n2 = _.includes(attrValue,"bob");
	 var n3 = _.includes(attrValue,"john");

	var friends = bill[i].names.length
	var cost = bill[i].cost
	var actual_cost = cost/friends

	if(n1){
	 	v1 = v1 + actual_cost;
	}
	if(n2){
	 	v2 = v2 + actual_cost;
	}
	if(n3){
	 	v3 = v3 + actual_cost;
	}

	}
	 tc = tc + cost;
 }
 result.push({"total":tc,"charlie":v1,"bob":v2,"john":v3});
 return result;
}
console.log("----------------------")
output = calc(bill);
console.log(output);
console.log("-----------------------")
/*
output expected
result = {
 totalbill: 430,
 charlie: 190,
 bob: 140,
 john: 100,
}
*/
