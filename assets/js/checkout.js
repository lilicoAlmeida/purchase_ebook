document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulate processing the payment
    setTimeout(function() {
        document.getElementById("checkout-form").style.display = "none";
        document.getElementById("confirmation-message").style.display = "block";
    }, 1000);
});