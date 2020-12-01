 
   window.addEventListener("load", function() {    

            fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
               response.json().then(function(json){
                  const missionTarget = document.getElementById("missionTarget");
                   for(mission of json){
                     missionTarget.innerHTML = `
                        
                           
                           <h1>Mission Destination</h1>
                           <ol>
                              <li>Name: ${mission.name}</li>
                              <li>Diameter: ${mission.diameter}</li>
                              <li>Star: ${mission.star}</li>
                              <li>Distance from Earth: ${mission.distance}</li>
                              <li>Number of Moons: ${mission.moons}</li>
                           </ol>
                           <img src=${mission.image}>
                        
                     `;
                   }   
                  
               });
            });   
   
         //let  faultyVisible = document.getElementById("faultyItems").style.visibility = "visible"; 
         let form = document.querySelector("form"); 
         let pilotStatus = document.getElementById("pilotStatus")
         let copilotStatus = document.getElementById("copilotStatus")
         let fuelStatus = document.getElementById("fuelStatus")
         let launchStatus = document.getElementById("launchStatus")

         form.addEventListener("submit", function(event) {
            event.preventDefault() 
               let pilotName = document.querySelector("input[name=pilotName]");
               if( (isNaN(pilotName.value))===false || pilotName.value === ""){
                  alert("enter a valid pilot name");
               };
               let copilotName = document.querySelector("input[name=copilotName]");
               if( (isNaN(copilotName.value))===false || copilotName.value === ""){
                  alert("enter a valid copilot name");
               }; 
               let fuelLevel = document.querySelector("input[name=fuelLevel]");
               if( (isNaN(fuelLevel.value))===true || fuelLevel.value === ""){
                  alert("enter a valid number for fuel");
               }; 
               let cargoMass = document.querySelector("input[name=cargoMass]");
               if( (isNaN(cargoMass.value))===true || cargoMass.value === ""){
                  alert("enter a valid number for cargo");
               };   

            let  faultyVisible = document.getElementById("faultyItems").style.visibility = "visible"; 
            pilotStatus.innerHTML = `${pilotName.value} "is ready for launch"`  
            copilotStatus.innerHTML =  `${copilotName.value} "is ready for launch"`
               if (fuelLevel.value <= 10000){
                  fuelStatus.innerHTML = `Fuel level too low for launch`
                  launchStatus.innerHTML = `Shuttle not ready for launch`
                  launchStatus.style.color = "red"
               } else if (fuelLevel.value > 10000){
                  launchStatus.innerHTML = `Shuttle ready for launch`
                  launchStatus.style.color = "green"
               }
               if (cargoMass.value > 10000){
                  cargoStatus.innerHTML = `Cargo mass too high for launch`
                  launchStatus.innerHTML = `Shuttle not ready for launch`
                  launchStatus.style.color = "red"
               } else if (cargoMass <= 10000){
                  launchStatus.innerHTML = `Shuttle ready for launch`
                  launchStatus.style.color = "green"
               }
         
         }) 
         
   });



   
