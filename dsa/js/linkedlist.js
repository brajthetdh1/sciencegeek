document.getElementById("run").addEventListener("click",()=>{
  const vals=document.getElementById("input").value.split(",").map(x=>parseInt(x.trim())).filter(n=>!isNaN(n));
  drawLinkedList(vals);
});

function drawLinkedList(arr){
  const canvas=document.getElementById("canvas");
  const ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const w=canvas.width,h=canvas.height,n=arr.length;
  const nodeWidth=50,nodeHeight=30;

  let positions=arr.map((v,i)=>({x:20+i*70,y:h/2,value:v}));

  function drawNodes(){
    ctx.clearRect(0,0,w,h);
    positions.forEach((p,i)=>{
      ctx.fillStyle="#007bff"; ctx.fillRect(p.x,p.y,nodeWidth,nodeHeight);
      ctx.fillStyle="#fff"; ctx.fillText(p.value,p.x+15,p.y+20);
      if(i<n-1){
        ctx.strokeStyle="#333";
        ctx.beginPath();
        ctx.moveTo(p.x+nodeWidth,p.y+nodeHeight/2);
        ctx.lineTo(positions[i+1].x,positions[i+1].y+nodeHeight/2);
        ctx.stroke();
      }
    });
  }

  let step=0;
  function animate(){
    if(step>=n/2) return;
    const temp=positions[step].value;
    positions[step].value=positions[n-1-step].value;
    positions[n-1-step].value=temp;
    drawNodes();
    step++;
    setTimeout(animate,600);
  }
  drawNodes();
  animate();
}