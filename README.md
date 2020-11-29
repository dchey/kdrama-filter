## Organization of Components

App.js: React app starts from App class (App.js). The app class returns and displays the title and the FilteredList class that holds the productList. 

FilteredList: FilteredList class contains selector and filtered/sorted list. It deals with sorting and filtering functionalities and returns the navigation button that deals with filtering/sorting, displays each item in the productList, and holds Cart class that deals with aggregator and add to cart and remove from cart functionalities.

## How data is passed down
The app uses children call back functions and props to pass down data.

## How user triggers state changes
When user clicks add/remove cart button, onclick function is called. Then the function passed in onclick is passed to the child components in the props and changes the state correctly.

Similarly, when the user clicks filtering/sorting functions, onselect function in Nav is called. Then the function passed in onselect is passed to the child components in the props and changes the state correctly.