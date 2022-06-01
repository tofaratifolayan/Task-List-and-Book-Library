//fibonacci

function fibonacci(n){
    var first = 0
    var second = 1
    console.log(first)
    console.log(second)
    for(let i = 0; i < n; i++){
        var next = second + first
        console.log(next)
        first = second
        second = next
    }
}

fibonacci(10)
