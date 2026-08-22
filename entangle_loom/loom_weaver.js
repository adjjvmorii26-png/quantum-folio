const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'bindings');
function weave(tick=0){
  const b=fs.readdirSync(DIR).filter(f=>f.endsWith('.el')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/strength:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=b.reduce((a,c)=>a+c,0)/b.length;
  console.log(`[entangle] tick=${tick}  strength=${avg.toFixed(3)}  binds=${b.length}`);
  return {strength:+avg.toFixed(3),binds:b.length};
}
module.exports={weave};
if(require.main===module){console.log('ENTANGLE LOOM…\n');for(let t=0;t<6;t++)weave(t);}
