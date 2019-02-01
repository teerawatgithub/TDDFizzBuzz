function fizzBuzz(x) {
        if(x%3 === 0 && x%5 === 0 || x%3 === 0 && parseInt(x/10) === 5 || x%5 === 0 && parseInt(x/10) === 3){
            return "FizzBuzz"
        }
        else if(x%3 === 0){
        return "Fizz"
        }
        else if(x%5 === 0){
            return "Buzz"
        }
        else if(parseInt(x/10) === 3){
            return "Fizz"
        }
        else if(parseInt(x/10) === 5){
            return "Buzz"
        }
    return `${x}`
    }

module.exports = fizzBuzz;