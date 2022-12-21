/*
you have a browser with one tab 
where you start on the homepage, and
1. you can visit another url.
2, get back in history number of steps 
3. move forward in history a number of steps


dataStructure to use
1. should be ordered
2. keep trqacks of its next value and previous value(forwarding and backwards)
3. easy to append(for visit operations)

[tab, tab, tab]
[start_tab, ----> visit_tab]
[1]
[1, 2]
[1,2, 3(C)]

//back
keep track of current




*/


class BrowserHistory{
    //homepage is the start tab
    constructor(homepage) {
        this.presentHistory = []
        this.futureHistory = []
        this.currentPage = homepage
    }

    //implement the visit method
    //visit a url from the currentpage
    //clears up all the forward history 
    visit(url) {
        this.presentHistory.push(this.currentPage)
        this.currentPage = url
        //clear the future array, reassign it to an empty stack
        this.futureHistory = []
    }

    //implement the back method
    //move steps back in history 
    //return x steps, and steps > x {return the max}
    //return the current url after moving back in history at max steps
    back(steps) {
        while(steps > 0 && !(this.presentHistory.length===0)){
            this.futureHistory.push(this.currentPage) //y, f, g
            this.currentPage = this.presentHistory.pop()
            steps --
        }
        return this.currentPage

    }

    //forward method
    //steps forward in history
    //return the max steps steps>x
    //return thr currentUrl after forwarding history
    forward(steps) {
        while(steps > 0 && !(this.futureHistory.length===0)){
            this.presentHistory.push(this.currentPage)
            this.currentPage = this.futureHistory.pop()
            steps --
        }
        return this.currentPage
    }

}

let browserHistory = new BrowserHistory("Leetcode.com")
browserHistory.visit("google.com")
browserHistory.visit("facebook.com")
browserHistory.visit("youtube.com")
browserHistory.back(1)
browserHistory.back(1)
browserHistory.forward(1)
console.log(browserHistory.forward(1))