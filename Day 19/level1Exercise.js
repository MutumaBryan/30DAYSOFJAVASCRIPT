// Create a closure which has one inner function
function outerFunc() {
    let x 
    function innerFunc() {
        x= x*x;
        return x
    }
    return innerFunc
}