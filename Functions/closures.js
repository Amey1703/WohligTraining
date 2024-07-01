
function outerFunction() {
    var message = 'howdy'
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
    
}
const outerGreet = outerFunction()
outerGreet()
    