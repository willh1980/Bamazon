var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "biggunz0",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//The first should ask them the ID of the product they would like to buy.
    //The second message should ask how many units of the product they would like to buy.


// function which prompts the user for what action they should take
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer
          .prompt([
            {
            name: "whatToBuy",
            type: "rawlist",
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].product_name);
                }
                return choiceArray;
            },
              message: "What product would you like to purchase?"
            },
            {
              name: "howMany",
              type: "input",
              message: "How many of this item would you like to purchase?",
              validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
            }
          ])
          .then(function(answer) {
            // get the information of the chosen item
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
              if (results[i].product_name === answer.whatToBuy) {
                chosenItem = results[i];
              }
            }
    
            if (parseInt(chosenItem.stock_quantity) >= parseInt(answer.howMany)) {
              var quantityUpdate = parseInt(chosenItem.stock_quantity) - parseInt(answer.howMany);
              
              connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: quantityUpdate
                  },
                  {
                    item_id: chosenItem.item_id
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("Congradulations, your purchase has been processed!!!!");
                  connection.end();
                }
              );
            }
            else {
                
                console.log("Ooops, it looks like we do not have enough inventory for your order. We only have " + chosenItem.stock_quantity + " left in stock. Try another Order!");
                start();
            }
            
          });
      });
  
  
  
    
}


