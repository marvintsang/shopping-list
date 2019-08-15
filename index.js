$(function(){
    //This function deletes the shopping item
    $('ul').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    })
    //This function listens to the check button and toggles our strikethrough
    $('ul').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('.shopping-item-controls').prev().toggleClass('shopping-item__checked');
    })
    //this function will add an item when we input it.
    $('#js-shopping-list-form').submit(event => {
        //preventing the submit button from doing default action
        event.preventDefault();
        //taking what is being submitted
        let input = $('#shopping-list-entry');
        if (input.val()==''){
            alert('Please enter a shopping item');
            return;
        }
        //if they enter more than one item, split the item into an array by empty space
        let values = input.val().split(' ');
        //define all items as an empty string
        let allitems = '';
        for (let i = 0; i < values.length; i++) {
            //iterate through the array and generate a HTML string for each array element
            const element = values[i];
            allitems = allitems+generateItem(element);
            console.log(allitems);
        }
        let shoppingItem = input.val();
        //adds the full string to the DOM
        $('ul').append(allitems);
        //resets the input value back to empty
        input.val('');
    })
})

function generateItem(item) {
    //this creates the shopping item elements necessary in the string
    return `<li>
    <span class="shopping-item">
    ${item}
    </span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>` 
}