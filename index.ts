#! /usr/bin/env node;

import inquirer from "inquirer";

let todos: string[] = [];

async function createtodo(todos: string[]) {

    do{

  let welcome = console.log("welcome to my todolist app");

  let operation = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "what do you want to do?",
      choices: ["Add", "View", "Update", "Delete"],
    },
  ]);
  if (operation.operator === "Add") {
    let add = await inquirer.prompt([
      {
        type: "input",
        name: "additems",
        message: "plz add any item",
      },
    ]);
    todos.push(add.additems);
    console.log(todos);
  }
  if (operation.operator === "view") {
    console.log(todos);
  }

  if (operation.operator === "Update") {
    let update = await inquirer.prompt(
      {
        type: "list",
        name: "updateitems",
        message: "what do you want to update?",
        choices: todos,
      },
      
    );
    let update2 = await inquirer.prompt({
         type: "input",
         name: "updateitems2",
         message: "update items",
    
})
let newtodos = todos.filter(val=>val != update.updateitems2)
todos=[...newtodos,update2.updateitems2]
   }
    if(operation.operator ==="Delete"){
        let remove = await inquirer.prompt(
            {
              type: "list",
              name: "removeitems",
              message: "select item to delete",
              choices: todos,
            },
            
          );
    }
  }
  while(true)
}

createtodo(todos);
