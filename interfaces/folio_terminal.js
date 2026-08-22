const {forge}=require('../spinforge/spinforge_core.js');
const {decohere}=require('../collapse_orchard/orchard_decoherence.js');
const {weave}=require('../entangle_loom/loom_weaver.js');
const {noise}=require('../noise_basilica/basilica_random.js');
async function run(){
  console.log('Folio Terminal…\n');
  console.log('Spinforge:',forge(0));
  console.log('Orchard:',decohere(0));
  console.log('Entangle:',weave(0));
  console.log('Noise:',noise(0));
}
if(require.main===module)run();
