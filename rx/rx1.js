// var Rx = require( 'rxjs/Rx')
var map = require( 'rxjs/operator/map').map
var of = require( 'rxjs/observable/of').of

// Rx.Observable.of(1,2,3).map(x=>x+'!!!').forEach((val)=>console.log(val))

map.call(of(1,2,3),(x)=>{
	return x + '!!!'
}).forEach((val)=>{
	console.log(val)
})
