document.getElementById("run").addEventListener("click", () => {
  const arr = document.getElementById("input").value.split(",").map(n => parseInt(n.trim())).filter(x => !isNaN(x));
  drawLIS(arr);
});

function drawLIS(arr){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const w = canvas.width, h = canvas.height, n = arr.length;
  const max = Math.max(...arr), min = Math.min(...arr);

  for(let i=0;i<n;i++){
    const x = (i+0.5)/n*w;
    const y = h - ((arr[i]-min)/(max-min||1))*(h-40)-20;
    ctx.beginPath(); ctx.arc(x,y,8,0,Math.PI*2); ctx.fillStyle="#333"; ctx.fill();
    ctx.fillText(arr[i], x-6, y-12);
  }

  let tails=[];
  function step(i){
    if(i>=arr.length) return;
    const v=arr[i];
    let pos=tails.findIndex(t=>t>=v);
    if(pos===-1) tails.push(v); else tails[pos]=v;

    ctx.fillStyle="#007bff";
    for(let j=0;j<tails.length;j++){
      ctx.fillRect(10+j*60, h-30,50,20);
      ctx.fillStyle="#fff";
      ctx.fillText(tails[j],15+j*60,h-15);
      ctx.fillStyle="#007bff";
    }
    setTimeout(()=>step(i+1),600);
  }
  step(0);
}