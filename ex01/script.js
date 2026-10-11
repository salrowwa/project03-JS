function calculateGrade(score)
{
    if (typeof score != "number" || score < 0 || score > 100)
        return "Invalid Input";

    if (score >= 85)
        return ("A");
     if (score >= 75)
        return ("B"); 
    if (score >= 65)
        return ("C"); 
    if (score >= 50)
        return ("D"); 
    else
        return "F";
}

function checkAccess(age, hasTicket)
{
    if (typeof age != "number" || (age < 0 && age > 200))
        return false;
    if (typeof hasTicket !== "boolean") 
    return false;
    if (age >= 18 && hasTicket === true)
        return true;
    return false;
}

//console.log("undefined ->", calculateGrade());
//console.log("18, ticket    ->", checkAccess(18, true);