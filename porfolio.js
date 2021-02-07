
const popup = document.querySelector('#popup');
const chatBtn = document.querySelector('#chatBtn');
const closeChat = document.querySelector('#close-chat');

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('hidden');
    chatBtn.classList.toggle('animate-bounce')
});

closeChat.addEventListener('click', ()=>{
    popup.classList.add('hidden');
});
