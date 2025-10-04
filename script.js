// Hearts Animation
function createHearts(count = 30) {
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';
    for(let i=0;i<count;i++){
        let heart=document.createElement('div');
        heart.className='animated-heart';
        heart.innerHTML = Math.random()>.4 ? '💗' : '💖';
        heart.style.left=(Math.random()*100)+'vw';
        heart.style.animationDuration=(2.5+Math.random()*4)+'s';
        heart.style.opacity=0.75+Math.random()*0.25;
        heart.style.fontSize=(1.15+Math.random()*1.7)+'rem';
        container.appendChild(heart);
    }
}
// Party Popper Animation
function createPoppers(count=20){
    const poppers=document.getElementById('poppersContainer');
    poppers.innerHTML='';
    const emojis=['🎉','🎊','✨','🥳'];
    for(let i=0;i<count;i++){
        let popper=document.createElement('div');
        popper.className='animated-popper';
        popper.style.left=(Math.random()*100)+'vw';
        popper.style.top=(Math.random()*60+18)+'vh';
        popper.style.animationDuration=(1.6+Math.random()*1.5)+'s';
        popper.style.fontSize=(1.2+Math.random()*2)+'rem';
        popper.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
        popper.style.opacity = 0.4+Math.random()*0.55;
        poppers.appendChild(popper);
    }
}
// Confetti Animation
function createConfetti(count=36){
    const confetti=document.getElementById('confettiContainer');
    confetti.innerHTML='';
    const emojis=['✨','💫','🌸','⭐','🦋'];
    for(let i=0;i<count;i++){
        let piece=document.createElement('div');
        piece.className='animated-confetti';
        piece.style.left=(Math.random()*100)+'vw';
        piece.style.animationDuration=(1.2+Math.random()*2.2)+'s';
        piece.style.fontSize=(1+Math.random()*1.5)+'rem';
        piece.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
        piece.style.opacity = 0.43+Math.random()*0.52;
        confetti.appendChild(piece);
    }
}
// Reveal Button Logic
window.onload = () => {
    createHearts(24);
    setInterval(() => createHearts(26), 5000);
};
const btn=document.getElementById('revealBtn');
if(btn){
    btn.onclick=function(){
        // Animate & reveal celebration
        createHearts(36);
        createPoppers(36);
        createConfetti(38);
        document.getElementById('revealSection').style.display='none';
        const content=document.getElementById('birthdayContent');
        content.style.display='flex';
        setTimeout(()=>{content.style.opacity='1';},120);
        setInterval(()=>createPoppers(26),1800);
        setInterval(()=>createConfetti(27),1600);
    };
}