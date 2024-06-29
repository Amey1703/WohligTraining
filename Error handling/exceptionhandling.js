function getRectangleArea(height, width) {
    if(isNaN(height) || isNaN(width)){
        throw new Error('Parameter is not a number!')
    }

}


try {
        getRectangleArea(3, 'A')
} catch (error) {
    console.log(error.stack);
    
}finally{
    console.log('This block will always be executed!');
}
