function calculateGrade(score)
{
    if (typeof score != "number" || score < 0 || score > 100)
        return ("Invalid Input");

    if (score >= 85 || score <= 100)
        return ("A");
     if (score >= 75 || score <= 84)
        return ("B"); 
    if (score >= 65 || score <= 74)
        return ("C"); 
    if (score > 50 || score <= 64)
        return ("D"); 
    if (score < 50)
        return ("F");
}

checkAccess(age, hasTicket)
{
    if (typeof age != "number" || age < 0 || age > 200)
        hasTicket = false;
    if (age < 18)
        hasTicket = false;
    else
        hasTicket = true;
    return (hasTicket);
}