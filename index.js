function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        submitText();
        return false;
    }
    return true;
}

function submitText() {
    var inputValue = document.getElementById("textInput").value.trim();
    var dropdownCard = document.getElementById("dropdown-card");

    if (inputValue !== "") {
        var isPalindrome = isItAPalindrome(inputValue);
        var message = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";

        dropdownCard.innerHTML = "<p>" + message + "</p>";
        dropdownCard.classList.remove("hidden");
        dropdownCard.classList.add("show");
    }
}

function isItAPalindrome(input) {
    if (typeof input !== 'string') {
        return false;
    }
    input = input.toLowerCase();
    var reversedInput = input.split('').reverse().join('');
    return reversedInput === input;
}