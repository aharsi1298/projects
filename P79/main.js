var imgtags = "<img src=\"images/pizzaImg.png\" width=\"50px\" height=\"50px\" />"
var menu_list_array = ["Veg Margherita Pizza",//add more items
                    "Chicken Tandoori Pizza",
                   "Deluxe Veggie Pizza",
                   "Paneer Tikka Pizza",
                   "Veg Extravaganza Pizza",
                   "Veg Margherita Pizza",
                   "Veg Supreme Pizza"];

function getmenu(){
var htmldata = "";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}