async function getFibonacciNumber() {
    let response = await fetch('http://localhost:8000/get_fibonacci_number');
    let data = await response.json()
    let number = data.number
    document.getElementById('result').value = number
}

document.getElementById('next_fibonacci').onclick = getFibonacciNumber
