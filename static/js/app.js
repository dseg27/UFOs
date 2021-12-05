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
};