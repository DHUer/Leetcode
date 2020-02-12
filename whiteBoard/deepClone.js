const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [1, 2]
};
function deepClone(target){
    if(typeof target == "object"){
	let deepObject = {};
	for(const key in target){
	    deepObject[key] = deepClone(target[key]);
	}
	return deepObject;
    }else{
	return target;
    }
}

let test = deepClone(target);
console.log(test);
