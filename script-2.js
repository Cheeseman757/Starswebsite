// Ask the user if they like stars
var userResponse = prompt("Do you like stars? Answer Yes or No");

// Keep asking if the response is "no"
while(userResponse.toLowerCase() === "no") {
    console.log("No, I like stars");
    userResponse = prompt("Do you like stars? Please answer Yes or No");
}

// Check for "yes" response
if(userResponse.toLowerCase() === "yes") {
    console.log("Yes, I like stars");
} else {
    console.log("Invalid response");
}