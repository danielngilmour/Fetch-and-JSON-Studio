// TODO: add code here

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function(response) {
            response.json().then(function(json) {
                console.log(response);
                let destination = document.getElementById("container");
                for (person of json) {
                    destination.innerHTML = destination.innerHTML += `
                    <div class="astronaut">
                        <div>
                            <h3> ${person.firstName}</h3>
                                <ul>
                                    <li>Hours in space: ${person.hoursInSpace}</li>
                                    <li>Active: ${person.active}</li>
                                    <li>Skills: ${person.skills}</li>
                                </ul>
                        </div>
                        <img class= "avatar" src="${person.picture}">
                    </div>`
                }
            })
        })
}
)