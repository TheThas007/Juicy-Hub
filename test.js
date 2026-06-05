const fetchJS = async () => { 
  const res = await fetch('https://juicyhub.vercel.app/admin/gallery'); 
  const html = await res.text(); 
  const jsFiles = html.match(/src="([^"]+\.js)"/g) || []; 
  console.log(`Found ${jsFiles.length} JS files.`); 
  for (const script of jsFiles) { 
    const url = new URL(script.match(/src="([^"]+)"/)[1], 'https://juicyhub.vercel.app'); 
    const jsRes = await fetch(url); 
    const jsText = await jsRes.text(); 
    if (jsText.includes('Error adding image')) { 
      console.log('Found alert in ' + url); 
      return; 
    } 
  } 
  console.log('Alert not found in client bundles!'); 
}; 
fetchJS();
