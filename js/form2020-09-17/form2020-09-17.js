const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const submit = document.getElementById('submit');
const privacyBtn = document.getElementById('privacy');

form.addEventListener('input',function(){

    //1, empryチェックを行う
    checkNameValue();
    checkEmailValue();
    checkTextarea();

    //setSuccessFor()によりtrueが返ってくるので変数に定義する
    const checkOutName = checkNameValue();
    const checkOutEmail = checkEmailValue();
    const checkOutTextarea = checkTextarea();
    
    //全てがsuccessした時に初めてプライバシー同意ボタンが押せるようになる
    //一つでもerrorならチェックも外し、disabledする
    if(checkOutName === true && checkOutEmail === true && checkOutTextarea === true) {
        privacyBtn.disabled = false;
    }else {
        privacyBtn.disabled = true;
        privacyBtn.checked = false;
    }

    //privacyBtnにチェックが入ったかどうか
    checkPrivacyBtn();

    //privacyBtnにチェックが入った時初めて、submitが表示され押せるようになる
    const checkOutPrivacyBtn = checkPrivacyBtn();
    if(checkOutPrivacyBtn === true) {
        submit.disabled = false;
        submit.className = 'more-btn enabled';
    }else {
        submit.disabled = true;
        submit.className = 'more-btn disabled';
    }
});


//onsubmitで発火する
function validation() {
    alert('質問を受け付けました。');
}



//empty checker
function checkNameValue() {
    if(name.value.length <=3) {
        setErrorFor(name,'お名前を入力してください');
        return false;
    }else {
        setSuccessFor(name);
        return true;
    }
}
function checkEmailValue() {
    if(email.value.length <=3) {
        setErrorFor(email,'メールアドレスが正しくありません 例)yorcoding@example.com');
        return false;
    }else {
        setSuccessFor(email);
        return true
    }
}

function checkPrivacyBtn() {
    if (privacyBtn.checked) {
        return true;
    }else {
        return false;
    }
}

function checkTextarea() {
    if(textarea.value.length <=10) {
        setErrorFor(textarea,'10文字以上入力してください');
        return false;
    }else {
        setSuccessFor(textarea);
        return true
    }
}


//error時の動作
function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    input.style.border = '2px solid #b93b3b'
    small.innerText = message;
    small.style.display = 'block';
}

//success時の動作
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.style.display = 'none';
    input.style.border = '1px solid #ddd'
}