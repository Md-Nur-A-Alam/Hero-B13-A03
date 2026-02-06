function newPrice(currentPrice , discount ) { 
    if (currentPrice === "number" && discount === "number") {
        let price = currentPrice-currentPrice*discount/100;
        return price.toFixed(3);
    }
    else
    {
        return "Invalid"
    }
} 
 