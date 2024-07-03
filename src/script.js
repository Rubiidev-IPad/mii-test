const canvas = document.getElementById('avatarCanvas');
const ctx = canvas.getContext('2d');

// Draw face
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle = '#fddbb8';
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.closePath();

// Draw eyes
ctx.beginPath();
ctx.arc(160, 180, 10, 0, Math.PI * 2, true);  // Left eye
ctx.arc(240, 180, 10, 0, Math.PI * 2, true);  // Right eye
ctx.fillStyle = '#000';
ctx.fill();
ctx.closePath();

// Draw mouth
ctx.beginPath();
ctx.arc(200, 230, 50, 0, Math.PI, false);  // Mouth (clockwise)
ctx.stroke();
ctx.closePath();

// Draw hair
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(300, 150);
ctx.lineTo(250, 50);
ctx.lineTo(150, 50);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

// Draw nose
ctx.beginPath();
ctx.moveTo(200, 180);
ctx.lineTo(190, 210);
ctx.lineTo(210, 210);
ctx.closePath();
ctx.stroke();


document.getElementById("nicknameInput").addEventListener("keyup",(e)=>{
    console.log(e)
    document.getElementById("nickname").innerText = e.target.value
})