// import data from data.js 
const tableData = data; 

// reference HTML table using d3 
var tbody = d3.select("tbody")

// create function to build a table 
function buildTable(data){
    // clear data/ use empty string when creating table  
    tbody.html(""); 

    // use forEach loop; function that creates each row
    data.forEach((dataRow)=> {
        let row = tbody.append("tr");

        // nested function that creates data 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); 
            cell.text(val);            
        }); 
    });
}

function handleClick(){
    // create date variable to hold date data (filtered or not)
    // d3 is told to look for #datetime ID in HTML tags
    let date = d3.select("#datetime").property("value"); 

    // set default filter to show all data 
    let filteredData = tableData; 

    // check for a date to filter 
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);  
    };

    // rebuild table using filtered data 
    buildTable(filteredData);
}

// action listener --> knows to listen for a click 
d3.selectAll("#filter-btn").on("click", handleClick);

// make sure table loads with page 
buildTable(tableData);


