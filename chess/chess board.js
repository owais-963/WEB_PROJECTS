document.getElementById('click').onclick('create_baord()')

function create_baord(){

    table = document.createElement("table")

    for (let i=0;i<8;i++){
        
        row = table.insertRow(0)

        for(let j=0;j<8;j++){

            col = row.insertCell(0)

            col.innerHTML="i,j"
        
        }
    
    }


}