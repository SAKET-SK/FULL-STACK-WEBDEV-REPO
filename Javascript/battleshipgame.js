function game() {
    const battleship_location = [0,1,1,0,1];

    let hit_count = 0;
    let guess_count = 0;
    
    while(hit_count!=3)
    {
        let input = prompt("Enter any Position from 1 to 5 :- ");
        guess_count++;
        let choice = number(input); // Typecasting String to number
        if(choice < 1 || choice > 5)
        {
            alert("Enter valid position");
            continue;  //Need to input again, so line 8 will be executed
        }
        // User enters :- 1 2 3 4 5
        // Array Index :- 0 1 2 3 4 means we need to subtract and match with array index
        choice--;
    
        if(battleship_location[choice]==1)
        {
            hit_count++;
            alert("You have hit the battleship");
            battleship_location[choice]++;    //If a battle ship is hit once, no need to hit it again, thus it becomes 2
        }
        else if(battleship_location[choice]==2)
        {
            alert("You have already hit this battleship");
        }
        else
        {
            alert("You missed the battleship");
        }
    }
    //alert("Total Guesses:- "+guess_count);
    //document.write("Total guesses :- " + guess_count);  overwrites the document, button will disappear
    document.getElementById("result").innerHTML="Total Guesses :- " + guess_count;
}
