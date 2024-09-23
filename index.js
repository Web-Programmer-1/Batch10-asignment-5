


const navBlance = parseFloat(document.getElementById('nav-balance').innerText);

document.getElementById('btn-donate').addEventListener('click', function() {

    


    const firstInput = parseFloat(document.getElementById('firstInput').value);
    const donate = navBlance - firstInput ;
    

    const mybalanceElement = document.getElementById('balance-zero');
    const currentBalance = parseFloat(mybalanceElement.innerText); 


    const finalMoney = firstInput + currentBalance;
    mybalanceElement.innerText = finalMoney.toFixed(2); 
    document.getElementById('nav-balance').innerText = donate;
});



// const historyTab = document.getElementById('history-tab').addEventListener('click', function(){
    
//     historyTab.classList.add('py-4', 'px-8', 'border-2', ' border-gray-500', 'rounded-lg');
   
// })

const historyTab = document.getElementById('history-tab');
const donationBtn = document.getElementById('donation-btn');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-lime-400' , 'font-bold', 'text-lg');
    historyTab.classList.add('text-white');

  

});

document.getElementById('donation-tab').addEventListener('click', function(){

    classList.remove('bg-white')
})









