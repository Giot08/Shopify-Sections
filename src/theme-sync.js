const { execSync } = require('child_process');
const path = require('path');
require('dotenv').config();

try {
  process.chdir(path.join(__dirname, '../theme'));
  const command = `theme get --password=${process.env.SHOPIFY_PASSWORD} --store="${process.env.SHOPIFY_STORE}" --themeid=${process.env.SHOPIFY_THEME_ID}`;
    execSync(command, { stdio: 'inherit' });
  
  console.log('✅ Sincronización completada exitosamente');
} catch (error) {
  console.error('❌ Error durante la sincronización:', error.message);
  process.exit(1);
} 