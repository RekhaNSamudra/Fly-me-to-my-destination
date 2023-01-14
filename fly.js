
//Function to return minimum planes required to reach Nth airport from arr[0]
function minPlanes(arr, totalAirports) {

    if (totalAirports <= 1)   //no plane is needed to reach if first airport itself is the final destination
        return 0;
    
    if (arr[0] == 0)   //can't move forward if fuel is 0 or empty
        return -1;
    
    let maxReachableAirport = arr[0];  //this variable represents the destination airport which is reachable with the fuel available at the current airport

    let fuel = arr[0]; //updates the remaining fuel after each plane

    let planes = 1; //number of planes required to reach the final or Nth airport from the current airport

    for (let airportNumber = 1; airportNumber < totalAirports; airportNumber++) {
      
        if (airportNumber == totalAirports - 1) 
            return planes;   //returning the planes if we reached the final or Nth airport
      
        maxReachableAirport = Math.max(maxReachableAirport, airportNumber + arr[airportNumber]);
        fuel--; //fuel decrease with each move
        
        if (fuel == 0) {  //if no fuel left
            planes += 1; //we must have changed the plane

        if (airportNumber >= maxReachableAirport) //checking if we have come till the corresponding maxReachableAirport from the previous       current airport
            return -1;

        fuel = maxReachableAirport - airportNumber;  // calculating the available fuel to reach the maxReachableAirport from current airport Number.
      }
    }
 return -1;
}


var arr = [3, 0,0,1,3,4,2,1];
 
let airports = arr.length;

console.log("Minimum number of planess required to change to reach the final Airport is "+ minPlanes(arr, airports));
 