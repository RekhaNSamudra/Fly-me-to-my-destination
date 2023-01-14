# Fly-me-to-my-destination
 
Example: 

Array = [1,6,3,4,5,0,0,0,6]

In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6

Algorithm:

 Understand the Problem statement.
 Give it some thought to come up with the approach.
 
Step 1: Initialize the variables required

* totalAirports -> represents the size of the array
* maxReachableAirport -> represents the maximum possible destination airport which is reachable with the fuel available at the current airport
    maxReachableAirport = arr[0];
* fuel -> represents the amount of fuel available to make the moves(change the planes)
    fuel = arr[0]; //updates the remaining fuel after each plane
* planes -> number of planes required to reach the final or Nth airport from the current airport
            eg: if you are at index 0 (meaning at 1st airport) then the mininmum move/plane required to reach the Nth airport is 1, unless there is only one element/airport in the array where the minimum required planes becomes 0 because you don't need to move at all since both the current airport and destination airport will be same. 
            Hence, planes = 1; intialized with 1
            
Step 2: Iterating the array and updating the above variables accordingly

 maxReachableAirport = Math.max(maxReachableAirport, airportNumber + arr[airportNumber]); 
 
 This updates the index/airportNumber of maxReachableAirport from the current airport.
 And "airportNumber + arr[airportNumber]" in the above line represents the index or aiportNumber till which we can reach
 
 
        fuel--; //fuel decrease with each move
        
        If fuel becomes 0, that means we must have taken a plane. Therefore increase planes variable. Since we know that it is possible somehow to reach maxReachableAirport, we again initialize the fuel to the amount of fuel available to reach maxReachableAirport from current airport. But before re-initializing fuel, we also check whether a fuel is becoming zero or negative. In that case, It is not possible to reach further without the fuel. 
        
        
        if (fuel == 0) {  //if no fuel left
            planes += 1; //we must have changed the plane

        if (airportNumber >= maxReachableAirport) //checking if we have come till the corresponding maxReachableAirport from the previous current airport
            return -1;

        fuel = maxReachableAirport - airportNumber;  // calculating the available fuel to reach the maxReachableAirport from current airport Number.

Step 3: Return the number of planes required to reach the Nth airport if we have reached the end of array

if (airportNumber == totalAirports - 1) 
            return planes;   //returning the planes if we reached the final or Nth airport
        
        
        
        
