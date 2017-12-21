## usage 

### CLI

To run, use `npm run watch`

To test, install Dev dependencies and use `npm test`

## Component Tree

Main
  App
    Category
      Category Form
      Category List
         Category Item
            Category Form


### Category  
  Connect to store - handles state
  Shows add category form and Lists the categories
  Manages add, update, delete methods

### Category Form
  Form to add a new category
  When called from Category Item component, is a form to add cards

### Category List
  Lists the categories

### Category Item
  Handles delete button of category