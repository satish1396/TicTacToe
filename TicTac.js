let count = 1;
function put(control)
{
  //document.getElementById("winner").innerHTML="";
  if(count<=9)
  {
         console.log(count);
      if(document.getElementById(control.id).innerHTML != ""){         // not to increase the count after clicking on the same div
        count = count;
      }
      else
      {
          if(count%2 != 0)
          {
            if(document.getElementById(control.id).innerHTML == "")
              {
                document.getElementById(control.id).innerHTML="X";

                if(checkWinner())
                {
                  if(count%2!=0)
                  {
                    document.getElementById("winner").innerHTML = " X WINNER";
                    setTimeout(() => { if(document.getElementById("winner") != ""){reset()}},2000);
                    // nothingToHappen();
                  }
                else{
                    document.getElementById("winner").innerHTML = " O WINNER";
                    setTimeout(() => { if(document.getElementById("winner") != ""){reset()}},2000);

                  }
                }
                document.getElementById("player").innerHTML = "O";
                count++;              
                console.log("after increment count "+count);
              }
          }
          else
            {
                if(  document.getElementById(control.id).innerHTML == "")
              {
                    document.getElementById(control.id).innerHTML="O";
                    console.log("count after click  "+ count)

                     if(checkWinner())
                     {
                      if(count%2!=0)
                      {
                        document.getElementById("winner").innerHTML = " X WINNER";
                        setTimeout(() => { if(document.getElementById("winner") != ""){reset()}},2000);

                      }
                       else{
                        document.getElementById("winner").innerHTML = " O WINNER";
                        setTimeout(() => { if(document.getElementById("winner") != ""){reset()}},2000);

                        }
                      }
                        document.getElementById("player").innerHTML = "X";
                        count++;


                    console.log("after increment count "+count);
                    }

             }

           }


      }

    else{
        document.getElementById("winner").innerHTML = "MATCH DRAW";
            reset();
          }



}


//RESET FUNCTION

function reset()
{
 // document.getElementById("winner") == "MATCH DRAW";
  setTimeout( () => { if(document.getElementById("winner") != ""){ newStart()}},500);
}


//GETDATA FUNCTION----FETCHING DIV


function getData(div)
{
  return document.getElementById(div).innerHTML;
}

//CHECKING WINNER


function checkWinner(){
   if(checkWinCond("div1" ,"div2", "div3") || checkWinCond("div1" ,"div5", "div9") || checkWinCond("div1" ,"div4", "div7") ||
      checkWinCond("div4" ,"div5", "div6") || checkWinCond("div7" ,"div8", "div9") || checkWinCond("div2" ,"div5", "div8") ||
      checkWinCond("div3" ,"div6", "div9") || checkWinCond("div3" ,"div5", "div7") )
      {
        return true;
      }


}

// ANOTHER CHECKING CONDITION

function checkWinCond(div1, div2, div3)
{
  if( getData(div1) != "" && getData(div2) !="" && getData(div3) != "" && getData(div1) ==  getData(div2) && getData(div2) == getData(div3))
  return true;
}


function newStart(){

    for(var i=1;i<=9;i++)
    {
     document.getElementById('div'+ i).innerHTML = "";
    }
 document.getElementById("player").innerHTML = "X";
 document.getElementById("winner").innerHTML="";
 count=1;

}