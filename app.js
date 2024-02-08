'use strict';
{
    const palindromeItem = {
        headerTitle: 'palindrome',
        alertMessage:[
         ['It is not a palindrome'],
         ['it is not entered'],
         ['Please enter three or more characters'],
        ],
        message: 'It is a palindrome',
        render: function() {
            const h3 = document.querySelector('header h3');
            h3.textContent = this.headerTitle;
        }
    }
   
    palindromeItem.render();
    const checkBtn = document.querySelector('#check-button');
    checkBtn.addEventListener('click', function() {
        let text = document.querySelector('#text');
        const subText = document.querySelector('#sub-reverse-text');
        const p = document.querySelector('.alert-message');
        const h1 = document.querySelector('h1');
        
        if ( text.value === '' ) {
            p.textContent = palindromeItem.alertMessage[1];
            return;
        }
        if ( text.value.length <= 3 ) {
            p.textContent = palindromeItem.alertMessage[2];
            text.value = '';
            return;
        }
        
        if ( text.value !== '' ) {
            let fixedText = text.value.trim();
            let reverseText = fixedText.split('').reverse().join('');
            if ( fixedText === reverseText ) {
                p.textContent = palindromeItem.message;
                subText.textContent = reverseText;
            } else {
                p.textContent = palindromeItem.alertMessage[0];
                subText.textContent = reverseText;
            }
            h1.textContent = fixedText;
            text.value  = '';
        }
    },false);

    function showDescription() {
        let ol = document.createElement('ol');
        let div = document.querySelector('.description-area');
        const h3 = document.createElement('h3');
        const description = [
            'test-text',
            'test-text',
            'test-text',
        ]
        h3.textContent = 'Description';
        div.appendChild(h3);
        for( let i = 0; i < description.length; i++ ) {
            let li = document.createElement('li');
            li.textContent = `${i}: ${description[i]}`;
            div.appendChild(ol);
            ol.appendChild(li);
        }
        
    }
    showDescription();
    let isSwitch = true;
    document.querySelector('.description-button').addEventListener('click', function() {
        let div = document.querySelector('.description-area');
        if ( isSwitch ) {
            div.classList.add('show-content');
        } else {
            div.classList.remove('show-content');
        }
        isSwitch = !isSwitch;
    },false);
} 