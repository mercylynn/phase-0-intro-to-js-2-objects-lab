// Write your solution in this file!
let employee={
    name:"Mercy",
    streetAddress:"Nairobi"
    
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        
        ...employee,
        name:"Sam",
        streetAddress:"11 Broadway"
        
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee[key] = value;
    return employee;

}
function deleteFromEmployeeByKey(employee,key){
    
    
        
        delete employee[key];
        return{
            ...employee,
        }
       
    

    
    
   

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}




