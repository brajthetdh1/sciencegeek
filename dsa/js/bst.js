document.getElementById("run").addEventListener("click",()=>{
  const val=parseInt(document.getElementById("input").value);
  drawBST(val);
});

function drawBST(val){
  const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Simple static example: draw root and insert val as left/right child
  ctx.fillStyle="#007bff"; ctx.fillRect(275,50,50,30); ctx.fillStyle="#fff"; ctx.fillText(4, 295,70);
  ctx.strokeStyle="#333"; ctx.beginPath(); ctx.moveTo(300,80);
  if(val<4){ctx.lineTo(200,150);} else {ctx.lineTo(400,150);} ctx.stroke();
  ctx.fillStyle="#007bff"; ctx.fillRect(val<4?200:400,150,50,30);
  ctx.fillStyle="#fff"; ctx.fillText(val,val<4?220:420,170);
}