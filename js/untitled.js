	let button = document.querySelector("button")
    let search = document.querySelector("input")

    button.addEventListener("click", function(event) {
    	let sValue = search.value
    	event. preventDefault()
    	fetch("https://omdb-api.now.sh/?s=" + sValue)
    	.then((response) => response.json())
    	.then((response) => {
    		// console.log(response)
    	if (search.value == ""){
    		alert("Please enter a movie title.")
    	} else if (search.value.indexOf(" ") !== -1){
    		sValue = sValue.replace(" ", "%20")
    	}
      })
    })