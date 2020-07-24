function convertDollarToCents() {
    const Dollar = document.getElementById("dollarInput").value;
    let Amount, Cents, Penny, Quarter, Nickel, Dime;

    Cents = (Dollar * 100).toFixed(0);

    Quarter = Math.floor(Cents / 25); // The Quarter is equal to $25
    Amount = Cents % 25;

    Nickel = Math.floor(Amount / 5); // The Nickel is equal to $5
    Amount = Cents % 5;
    
    Penny = Math.floor(Amount / 1); // The Pennies is equal to $1
    Amount = Cents % 1;

    Dime = Math.floor(Amount / 10); // The Dime is equal to $10
    Amount = Cents % 10;


    document.getElementById("Cents").innerHTML = `Cents = ${Cents}`; 
    document.getElementById("Quarter").innerHTML = `Quarter = ${Quarter}`;
    document.getElementById("Nickel").innerHTML = `Nickel = ${Nickel}`;
    document.getElementById("Dime").innerHTML = `Dime = ${Dime}`;
    document.getElementById("Pennies").innerHTML = `Pennies = ${Penny}`;
}