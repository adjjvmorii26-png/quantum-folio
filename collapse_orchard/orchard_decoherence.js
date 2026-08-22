const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'decays');
function decohere(tick=0){
  const d=fs.readdirSync(DIR).filter(f=>f.endsWith('.co')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/pressure:\s*([\d.]+)/)||[])[1]||0.4);
  });
  const avg=d.reduce((a,b)=>a+b,0)/d.length;
  console.log(`[orchard] tick=${tick}  pressure=${avg.toFixed(3)}  decays=${d.length}`);
  return {pressure:+avg.toFixed(3),decays:d.length};
}
module.exports={decohere};
if(require.main===module){console.log('COLLAPSE ORCHARD…\n');for(let t=0;t<6;t++)decohere(t);}
