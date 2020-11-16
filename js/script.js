let num = +prompt("enter number")



let factorial =(num) => {
    return (num != 1) ? num * factorial(num - 1) : 1;
}

confirm("factorial : "+ factorial(num) )









