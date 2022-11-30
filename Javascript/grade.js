function grade_desc(){
    let x = Number(document.getElementById("grade").value);
    let remark = "";
    if(x >= 75)
    {
        remark = "Congratulations! You have Passed with First Class Distinction!!";
    }
    else if(x < 75 && x >= 60)
    {
        remark = "Congratulations! You have Passed with First Class";
    }
    else if(x < 60 && x >= 50)
    {
        remark = "You have passed with Higher Second Class. Work Hard!!"
    }
    else if(x < 50 && x >= 40)
    {
        remark = "Passed with Pass Class. Work Hard More!";
    }
    else if(x < 40)
    {
        remark = "You have failed the exam!!";
    }
    document.getElementById("result").innerHTML = remark;
}
