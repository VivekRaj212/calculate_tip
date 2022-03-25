
function tipCalcy() {

    let amount = document.getElementById('bill_amount').value;  //100
    
    let percent = document.getElementById('service_feedback').value;

    let tip_amount = Math.round(amount)*(percent/100);  //10

    let contribute = document.getElementById('share').value;

    let bill_split = Math.round(amount/contribute); // 10

    let tip_split = Math.round(tip_amount/contribute); // 1

    var pre = document.createElement('pre');

    var text1 = document.createTextNode(`Total billed amount:   rs.${amount}
Bill to be paid(per person):   rs.${bill_split}
Tip to be paid(per person):   rs.${tip_split}
total tip amount:   rs.${tip_amount} `);

     pre.setAttribute('id','payment');

     pre.appendChild(text1);

     document.getElementById('bill_details').appendChild(pre);

    console.log(per_person);

    

  
}

function reset()
{

  document.getElementById('payment').remove();
  
}

