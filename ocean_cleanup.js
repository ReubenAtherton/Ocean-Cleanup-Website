function display() {

    // array of waste per category
    var array = [];

    // array for the tip advice string
    var tipArray = [];

    // array for the source of most waste
    var sourceArray = [];

    // values per week
    array[0] = document.getElementById("plasticBottles").value * 52 * 0.730;
    array[1] = document.getElementById("Plastic_bags").value * 52 * 0.417;
    array[2] = document.getElementById("Food_wrapping").value * 52 * 0.583;
    array[3] = document.getElementById("Yogurt_cream_etc_containers").value * 52 * 0.383;

    // values per month
    array[4] = document.getElementById("Take-away_plastic_boxes").value * 12  * 0.383;
    array[5] = document.getElementById("Take-away_cups").value * 12 * 0.240;
    array[6] = document.getElementById("Plastic-wrapped_packages").value * 12 * 0.834;

    // values per year
    array[7] = document.getElementById("Detergent_cleaning_product").value * 0.120;
    array[8] = document.getElementById("Shampoo_conditioner_toiletries").value * 0.080;
    array[9] = document.getElementById("Plastic_toothbrushes").value * 0.020;
    array[10] = document.getElementById("Toothpaste").value  * 0.015;

    // tip per waste category
    tipArray[0] = "Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for water and hot beverages when you are out and about.";
    tipArray[1] = "Bring reusable fabric totes for shopping and refuse plastic bags when offered.";
    tipArray[2] = "Consider to buy more unpackaged food at local markets.";
    tipArray[3] = "Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt.";
    tipArray[4] = "Cut down on take-out packaging by preparing more meals at home.";
    tipArray[5] = "Bring your own tumbler when ordering hot beverages to go.";
    tipArray[6] = "Try to purchase more products in shops rather than online.";
    tipArray[7] = "Explore refill stations in your neighborhood to cut down on bottles from detergents and cleaning products.";
    tipArray[8] = "Explore refill stations in your neighborhood to cut down on plastic waste from toiletries.";
    tipArray[9] = "Seriously? How often do you brush your teeth? Anyway, Did you know there are toothbrushes made from wood?";
    tipArray[10] = "Seriously? How much toothpaste do you use? Did you know there are plastic-free alternatives available?";

    // category of waste
    sourceArray[0] = "plastic bottles.";
    sourceArray[1] = "plastic bags.";
    sourceArray[2] = "food wrapping.";
    sourceArray[3] = "yogurt, cream, etc. containers.";
    sourceArray[4] = "take-away plastic boxes.";
    sourceArray[5] = "take-away cups.";
    sourceArray[6] = "plastic-wrapped packages.";
    sourceArray[7] = "detergent & cleaning product bottles.";
    sourceArray[8] = "shampoo, conditioner & toiletries.";
    sourceArray[9] = "plastic toothbrushes.";
    sourceArray[10] = "toothpaste.";

    // returns max value in the array
    var sum = getMax(array);

    // sets the number of people sharing the house
    var houseMates = document.getElementById("houseMates").value;

    //calculates total plastic footprint per person
    var finalValue = sum/parseInt(houseMates);

    // initialises var to correct html element
    var displaySum = document.querySelector("#sum");
    var tip = document.querySelector("#tip_para");
    var source = document.querySelector("#source");

    // prints total footprint to page
    displaySum.innerHTML = finalValue.toFixed(2);

    // returns index of max value
    var index = getIndexOfMax(array);

    // finds index of max value and prints category name and tip    
    for(let i = 0; i < tipArray.length; i++){
        if(index == i){
            if(sum!=0){
                tip.innerHTML = tipArray[i];
                source.innerHTML = sourceArray[i];
            }
        }
    }
}

// resets everything
function resetCalc() {
    
    var displaySum = document.querySelector("#sum");
    var tip = document.querySelector("#tip_para");
    var source = document.querySelector("#source");

    displaySum.innerHTML = 0;
    tip.innerHTML = "";
    source.innerHTML = "unknown sources.";

}

// returns max value in array
function getMax(array) {

    var sum = array.reduce((accumulator, value) => 
    {
      return accumulator + value;
    }, 0);
    
    return sum;
}

// returns index of highest value
function getIndexOfMax(array) {

    const max = Math.max(...array);

    return array.indexOf(max);
}