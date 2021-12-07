# UFOs

## Overview of Project: 

The purpose of this analysis was to update Dana's webpage to add more filters for viewers to apply to the table filled with UFO Sighting data. 
Now, instead of only being able to filter the UFO sightings by date, filters were added for city, state, country, and UFO shape. 
Multiple filters can be applied at once, as the event listener in the JavaScript app was updated to listen for several input changes. 


## Results: 

![image](https://user-images.githubusercontent.com/90593897/144950539-4410971c-3684-408f-abc2-e51cff00f354.png)

As shown on the website page above, there are now five search filters located on the left-hand side of the page. 
With the updated event listener that was incorporated into the app.js file, the page detects input changes in the search filter bars. 
It then applies several functions that work to save the values input in the search bar, and return a table with UFO sightings that match only the values 
designated in the search filter bars. Below is an example of results returned when the city of Grants Pass is entered into the search bar:
![image](https://user-images.githubusercontent.com/90593897/144950933-e783e0b5-fd84-461c-8d59-8a7c61eafac1.png)

Below is an example of the table returned with 2 search inputs:
![image](https://user-images.githubusercontent.com/90593897/144951065-34d3caaa-d98e-4dfb-b2e3-d83e6e61f5ba.png)


## Summary: 

One drawback to this design is that we are missing a filter for the sixth sighting attribute--duration. We would have to standardize the input value which may take more work as some entries are entered as "15 minutes" while others are a range such as, "4-6 minutes". 

The first recommendation would be to add the sighting duration paramter. A second recommendation would be to give the user the option to see the table data over several pages rather than having one long table span along the bottom of the webpage. 

Overall, the webpage creates an interactive display of UFO sightings for viewers to access search-tailored data without having to sift through a large table, looking for a particular search parameter. 
