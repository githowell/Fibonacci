


function generateFibonacci() {
    const numTerms = parseInt(document.getElementById("numTerms").value);
    if (isNaN(numTerms) || numTerms <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid number of terms.";
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        const nextTerm = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextTerm);
    }

    document.getElementById("result").innerHTML = "Fibonacci Sequence: " + fibonacci.join(", ");
}
