/*
implement a class StockSpanner 
and a method next(price)
that return the span(the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.)

stack = [[100, 1],]

1. stack is empty and nothing to the left is less than aa 100 

[100,80,70,60,75,85]
stack.pop
count+= 1
100 ==> 1

stack.push([price, 1])

*/

class StockSpanner{
    constructor() {
        this.stack = []
    }

    next(price) {

        let count = 1
        let lastElement = this.stack[this.stack.length -1]
        while(this.stack.length > 0 && lastElement[0] <= price) {
           count += this.stack.pop()[1]
        }

        //is the price is greate we push it
        this.stack.push([price, count])
        return count
    }


}

let stockSpanner = new StockSpanner()
stockSpanner.stack[100,80,60,70,60,75,85]
console.log(stockSpanner.next(85))
