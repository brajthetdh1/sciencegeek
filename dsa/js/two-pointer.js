document.getElementById("run").addEventListener("click",()=>{
  const arr=document.getElementById("input").value.split(",").map(x=>parseInt(x.trim())).filter(n=>!isNaN(n));
  drawTwoPointer(arr);
});

function drawTwoPointer(arr){
  const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const n=arr.length,w=canvas.width,h=canvas.height;
  const positions=arr.map((v,i)=>({x:50+i*60,y:h/2,value:v}));
  positions.forEach(p=>{ctx.fillStyle="#007bff";ctx.fillRect(p.x,p.y,50,30);ctx.fillStyle="#fff";ctx.fillText(p.value,p.x+15,p.y+20);});
  let left=0,right=n-1;
  function step(){
    if(left>=right) return;
    ctx.fillStyle="red"; ctx.fillRect(positions[left].x,positions[left].y,50,30);
    ctx.fillRect(positions[right].x,positions[right].y,50,30);
    ctx.fillStyle="#fff"; ctx.fillText(positions[left].value,positions[left].x+15,positions[left].y+20);
    ctx.fillText(positions[right].value,positions[right].x+15,positions[right].y+20);
    left++; right--;
    setTimeout(step,600);
  }
  step();
}