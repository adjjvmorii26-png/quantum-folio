const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'resonances');
function noise(tick=0){
  const n=fs.readdirSync(DIR).filter(f=>f.endsWith('.nb')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/amplitude:\s*([\d.]+)/)||[])[1]||0.3);
  });
  const avg=n.reduce((a,b)=>a+b,0)/n.length;
  console.log(`[noise] tick=${tick}  amplitude=${avg.toFixed(3)}  bands=${n.length}`);
  return {amplitude:+avg.toFixed(3),bands:n.length};
}
module.exports={noise};
if(require.main===module){console.log('NOISE BASILICA…\n');for(let t=0;t<5;t++)noise(t);}
