const myList = [
    'water',
    'chicken',
    'banana',
    'apple',
    'orange',
    'carrot',
    'tomato',
    'potato',
]

const newArray = _.chunk(myList,3)
console.log(newArray);

const newArray2 = _.difference(myList,['water', 'chicken', 'banana', 'apple'])
console.log(newArray2);

const newArray3 = _.join(myList,' with ')
console.log(newArray3);

const newArray4 = _.concat(myList,[1,2,3,4])
console.log(newArray4);

const newArray5 = _.dropRight(newArray4,4)
console.log(newArray5);

const newArray6 = _.pull(newArray4, 'chicken', 'potato')
console.log(newArray6);