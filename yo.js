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
    
    console.log("Ooops, I looks like we do not have enough inventory for your order.");
    start();
}