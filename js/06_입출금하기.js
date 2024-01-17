// /* prompt 사용 연습 */

// function test(){

//     const password = prompt("비밀번호를 입력하세요");

//     // 확인 -> 입력한 문자열
//     // 취소 -> null

//     if(password == null){
//         alert("취소");
//     } else{   //확인

//         // 입력한 비밀번호가 '1234'가 맞는지 확인
//         if(password == 1234){
//             alert("비밀번호가 일치");

//         } else {
//           alert("비밀번호가 일치하지 않습니다");  
//         }

//     }

// }
// let total=0;
// const balance=document.getElementById("balance");

// const won = document.getElementById("won");


// function plus(){
//     const value = Number(won.value);
//     total += value;
//     balance.innerText = total;
// }


// //차감
// function minus(){
//     const value = Number(won.value);
//     total -= value;
//     balance.innerText = total;
// }




const amountInput = document.getElementById('won');
let balance = 10000;
const password = '1234';

function deposit() {
    const depositAmount = parseInt(amountInput.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("올바른 금액을 입력하세요.");
        return;
    }

    balance += depositAmount;
    updateBalance();
    alert(`${depositAmount}원이 입금 되었습니다. 현재 잔액: ${balance}원`);
}

function withdrawal() {
    const Password = prompt("비밀번호를 입력하세요");

    if (Password === password) {
        const withdrawAmount = parseInt(amountInput.value);

        if (isNaN(withdrawAmount) || withdrawAmount <= $) {
            alert("올바른 금액을 입력하세요.");
            return;
            
        }

        if (withdrawAmount > balance) {
            alert("출금 금액이 잔액보다 클 수 없습니다.");
        } else {
            balance -= withdrawAmount;
            updateBalance();
            alert(`${withdrawAmount}원이 출금 되었습니다. 현재 잔액: ${balance}원`);
        }
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
}

function updateBalance() {
    document.getElementById('balance').value = balance;
}

