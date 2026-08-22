const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'spins');
function forge(tick=0){
  const s=fs.readdirSync(DIR).filter(f=>f.endsWith('.sf')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/vector:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=s.reduce((a,b)=>a+b,0)/s.length;
  console.log(`[spinforge] tick=${tick}  avg_vector=${avg.toFixed(3)}  spins=${s.length}`);
  return {avg:+avg.toFixed(3),spins:s.length};
}
module.exports={forge};
if(require.main===module){console.log('SPINFORGE…\n');for(let t=0;t<8;t++)forge(t);}
