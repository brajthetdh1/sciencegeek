document.getElementById("run").addEventListener("click",()=>{
  const nodes=[{x:100,y:100},{x:300,y:100},{x:200,y:200}];
  const edges=[[0,1],[0,2]];
  drawGraphDFS(nodes,edges);
});

function drawGraphDFS(nodes,edges){
  const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  edges.forEach(e=>{ctx.strokeStyle="#333";ctx.beginPath();ctx.moveTo(nodes[e[0]].x,nodes[e[0]].y);ctx.lineTo(nodes[e[1]].x,nodes[e[1]].y);ctx.stroke();});
  nodes.forEach((n,i)=>{ctx.fillStyle="#007bff";ctx.beginPath();ctx.arc(n.x,n.y,20,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff";ctx.fillText(i+1,n.x-5,n.y+5);});
  let visited=0;
  function step(){
    if(visited>=nodes.length) return;
    ctx.fillStyle="red";
    const n=nodes[visited];
    ctx.beginPath();ctx.arc(n.x,n.y,20,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#fff";ctx.fillText(visited+1,n.x-5,n.y+5);
    visited++;
    setTimeout(step,600);
  }
  step();
}