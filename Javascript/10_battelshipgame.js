function game()
{
    const battle=[0,1,1,0,1]

    // 6 1 2 3 3
    let hitcount=0;
    let guesscount=0;

    while(hitcount!=3)
    {
        let input=prompt("Enter position:")
        guesscountnumber++;
        let choice=Number(input);

        if(choice <1 || choice>5)
        {
            alert("Enter valid position");
            continue;

        }
        //1 2 3 4 5
        //0 1 2 3 4
        choice--;

        // if(battle[choice]==1)
        // {
        //     hitcount++;
        //     alert("You have hit the battleship");
        //     battle[choice]++;

        // }
        // else if(battle[choice]==2)
        // {
        //     alert("You have already hit this battleship");
        // }

        // else
        // {
        //     alert("You missed the battleship");
        // }

        switch(battle[choice])
        {
            case 1:
                hitcount++;
                    alert("You have hit the battleship");
                    battle[choice]++;
                    break;
                case 2:
                    alert("You have already hit this battleship");
                    break;
                default:
                    alert("You missed the battleship");
        

        }
    }
    // alert("Total guesses are: "+guesscount);
    //overwrites the document
    // document.write("Total guesses: "+guesscount);
    document.getElementById("result").innerHTML="Total guesses:"+guesscount;
}