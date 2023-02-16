
const totalCount = document.getElementById("total-count");
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const favoris = document.getElementById("favoris")


var count = 0;
var count_favoris = 0;

totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;

};



// Function to decrement count
const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
};


// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
favoris.addEventListener("click", handleIncrement);