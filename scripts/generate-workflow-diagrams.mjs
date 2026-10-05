import {writeFileSync,readFileSync,mkdirSync} from 'node:fs';
// The same authored layout produces portable SVG and editable Excalidraw shapes.
const palette={paper:'#f8f5ef',surface:'#fffdf9',ink:'#19212f',body:'#4c596b',blue:'#2455d6',line:'#d4d9e0',wash:'#eef1f8'};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const specs=[];
function drawing(name,title,subtitle,height=560){
 let parts=[],elements=[],n=0;
 const el=(type,x,y,width,height,extra={})=>{const id=`${name}-${++n}`;elements.push({id,type,x,y,width,height,angle:0,strokeColor:palette.line,backgroundColor:'transparent',fillStyle:'solid',strokeWidth:1,strokeStyle:'solid',roughness:0,opacity:100,groupIds:[],frameId:null,roundness:null,seed:n,version:1,versionNonce:n,isDeleted:false,boundElements:null,updated:0,link:null,locked:false,...extra});return id;};
 function text(x,y,s,size=15,color=palette.ink,weight=400){
  parts.push(`<text x="${x}" y="${y}" fill="${color}" font-family="Inter,Arial,sans-serif" font-size="${size}" font-weight="${weight}">${esc(s)}</text>`);
  el('text',x,y-size,s.length*size*.55,size*1.3,{text:s,fontSize:size,fontFamily:2,textAlign:'left',verticalAlign:'top',containerId:null,originalText:s,autoResize:true,lineHeight:1.3,strokeColor:color});
 }
 function rect(x,y,w,h,fill=palette.surface,stroke=palette.line,dash=false){
  parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${fill}" stroke="${stroke}"${dash?' stroke-dasharray="5 4"':''}/>`);
  el('rectangle',x,y,w,h,{backgroundColor:fill,strokeColor:stroke,strokeStyle:dash?'dashed':'solid',roundness:{type:3}});
 }
 function box(x,y,w,h,kicker,title,lines=[],human=false){
  rect(x,y,w,h,human?palette.wash:palette.surface,human?'#91a9dd':palette.line);
  text(x+17,y+25,kicker,11,human?palette.blue:palette.body,500);
  text(x+17,y+53,title,16,palette.ink,600);
  lines.forEach((l,i)=>text(x+17,y+79+i*19,l,12,palette.body));
 }
 function arrow(points,label='',lx=0,ly=0,dashed=false){
  parts.push(`<polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${palette.blue}" stroke-width="1.6"${dashed?' stroke-dasharray="5 4"':''} marker-end="url(#arrow)"/>`);
  const x=points[0][0],y=points[0][1];el('arrow',x,y,Math.max(...points.map(p=>p[0]))-Math.min(...points.map(p=>p[0])),Math.max(...points.map(p=>p[1]))-Math.min(...points.map(p=>p[1])),{strokeColor:palette.blue,strokeWidth:1.6,points:points.map(p=>[p[0]-x,p[1]-y]),startBinding:null,endBinding:null,startArrowhead:null,endArrowhead:'arrow',elbowed:false});
  if(label)text(lx,ly,label,11,palette.blue);
 }
 function logo(icon,x,y,w,h){
  const s=readFileSync(`site/assets/icons/${icon}.svg`,'utf8');
  const opening=s.match(/<svg\b[^>]*>/)?.[0];
  const view=opening?.match(/viewBox="([^"]+)"/)?.[1]||'0 0 24 24';
  const inner=s.slice(s.indexOf('>',s.indexOf('<svg'))+1,s.lastIndexOf('</svg>'));
  parts.push(`<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${view}">${inner}</svg>`);
 }
 text(30,37,title,20,palette.ink,600);text(30,61,subtitle,12,palette.body);
 return {text,rect,box,arrow,logo,save(){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="${height}" viewBox="0 0 1100 ${height}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="${palette.blue}" stroke-width="1.5"/></marker></defs><rect width="1100" height="${height}" fill="${palette.paper}"/>${parts.join('\n')}</svg>\n`;
  writeFileSync(`site/assets/diagrams/${name}.svg`,svg);
  writeFileSync(`docs/diagrams/${name}.excalidraw`,JSON.stringify({type:'excalidraw',version:2,source:'Rovara authored role layout; generate-workflow-diagrams.mjs',elements,appState:{viewBackgroundColor:palette.paper,gridSize:null},files:{}},null,2)+'\n');
  specs.push({name,title,subtitle,height,elements:elements.length});
 }};
}
mkdirSync('site/assets/diagrams',{recursive:true});mkdirSync('docs/diagrams',{recursive:true});
{
 const d=drawing('journey','From request through review','Illustrative native workflow · blue surfaces mark owner decisions',620);
 d.box(30,100,230,130,'01 / EXPLICIT REQUEST','Give it a task',['Slack or your coding tool','Project context + constraints']);
 d.box(300,100,230,130,'02 / OWNER DECISION','Approve the plan',['Quick: one plan approval','Full: requirements → design → plan'],true);
 d.box(570,100,230,130,'03 / YOUR AWS ACCOUNT','AgentX writes the code',['Prepared project workspace','Files and context for follow-ups']);
 d.arrow([[260,165],[298,165]]);d.arrow([[530,165],[568,165]]);
 d.box(570,300,230,130,'04 / CURRENT CANDIDATE','Checks + AI reviews',['Named output + code reference','Request reviews after checks pass']);
 d.arrow([[685,230],[685,298]]);
 d.box(300,300,230,130,'05 / GITHUB','Draft PRs for review',['Inspect the diff and repository CI','Track every required linked PR']);
 d.arrow([[570,365],[532,365]]);
 d.box(30,300,230,130,'06 / OWNER DECISION','Respond to feedback',['Inspect proposed fixes','Approve selected changes'],true);
 d.arrow([[300,365],[262,365]]);
 d.arrow([[145,300],[145,266],[685,266],[685,232]],'Approved fixes repeat coding, checks and reviews',250,255,true);
 d.box(850,190,220,148,'YOUR TEAM','The final merge',['Human review + repository rules','GitHub owns PR merge state'],true);
 d.arrow([[530,416],[825,416],[825,265],[848,265]]);
 d.text(32,482,'No silent follow-up coding. A feedback proposal needs the owner’s decision.',13,palette.body);
 d.text(32,514,'A changed candidate needs fresh dependent evidence. Missing checks remain visible.',13,palette.body);
 d.text(32,558,'This explains the workflow. It is not a captured task or a claim of production delivery.',11,palette.body);
 d.save();
}
{
 const d=drawing('verification','Which code did the evidence inspect?','Native workflow readiness · checks and AI findings have distinct evidence roles',560);
 d.box(30,112,210,140,'CANDIDATE A','Current code',['Identified commit / tree','Task + project context']);
 d.box(315,112,310,140,'EVIDENCE FOR A','Checks + separate AI reviews',['Command, environment, output','Code / security findings + attribution','All required reports match A']);
 d.box(700,112,350,140,'NATIVE WORKFLOW','PR-ready decision',['Required check and review policy','Repository CI and merge rules remain','your team’s separate review controls']);
 d.arrow([[240,182],[313,182]]);d.arrow([[625,182],[698,182]]);
 d.arrow([[135,252],[135,317]]);
 d.box(30,320,210,132,'A CHANGE','Candidate B',['New code identity','Previous dependent results stale']);
 d.box(315,320,310,132,'FRESH EVIDENCE FOR B','Rerun and inspect',['New checks + separate reviews','Failed, missing or stale → blocked']);
 d.arrow([[240,385],[313,385]]);
 d.arrow([[625,386],[672,386],[672,222],[698,222]],'Only current results',701,386);
 d.text(32,506,'AI reviews are attributed assessments. Named checks establish their own results, not universal correctness.',12,palette.body);
 d.save();
}
{
 const d=drawing('lifecycle','Workspace lifetime and task history are different','Follow-ups keep context · closeout preserves the record before Canvas cleanup',560);
 const x=[30,300,570,840];
 d.box(x[0],107,230,128,'START','Request + plan',['A task record is created','Planning stays read-only']);
 d.box(x[1],107,230,128,'WAIT FOR OWNER','Current decision',['Approve or request changes','No silent implementation'],true);
 d.box(x[2],107,230,128,'WORK + INSPECT','Code, checks, reviews',['Prepared project workspace','Current candidate evidence']);
 d.box(x[3],107,230,128,'WAIT FOR TEAM','PRs + feedback',['Approved follow-up fixes','All required PR states visible'],true);
 for(let i=0;i<3;i++)d.arrow([[x[i]+230,172],[x[i+1]-2,172]]);
 d.arrow([[950,235],[950,274],[685,274],[685,237]],'Approved feedback returns to work',704,263,true);
 d.rect(30,320,500,166,palette.surface,palette.line);d.text(50,350,'Workspace resources',16,palette.ink,600);
 d.text(50,380,'Idle compute can stop while files and context remain.',12,palette.body);
 d.text(50,403,'Retained storage still costs money.',12,palette.body);
 d.text(50,426,'Cancel work ≠ close workspace ≠ remove deployment.',12,palette.body);
 d.text(50,449,'Preserve unpublished changes before workspace closure.',12,palette.body);
 d.rect(570,320,500,166,palette.wash,'#91a9dd');d.text(590,350,'Terminal closeout',16,palette.ink,600);
 d.text(590,380,'Verify canonical artifacts + decisions → record references',12,palette.body);
 d.text(590,403,'Then delete task Canvas copies; retry visible failures.',12,palette.body);
 d.text(590,426,'Slack replies and GitHub comments remain in their services.',12,palette.body);
 d.text(590,449,'Task record retention follows configuration.',12,palette.body);
 d.arrow([[950,235],[1085,235],[1085,302],[820,302],[820,318]]);
 d.text(32,524,'Waiting is a workflow state. It is not evidence of failure, completion, or an indefinitely retained workspace.',12,palette.body);d.save();
}
{
 const d=drawing('architecture','Your cloud. Connected to the tools your team uses.','Role-level architecture · separate reviewers do not imply separate machines',770);
 d.text(30,101,'ENTRY AND REVIEW SURFACES',11,palette.body,500);
 d.box(30,119,220,125,'SLACK','Task thread + Canvas',['Plans, notices and owner controls']);d.logo('slack-icon',202,133,25,25);
 d.box(30,279,220,125,'CODING TOOL','Local MCP client',['Claude Code, Codex, Cursor','Authorized developer task calls']);
 d.box(30,439,220,125,'BROWSER','Feedback review page',['Authenticated task details','Owner decisions through API']);
 d.rect(292,94,538,604,'#f1f3f7','#97a8bd',true);d.logo('aws',313,110,42,28);d.text(370,131,'YOUR AWS ACCOUNT',12,palette.ink,600);
 d.box(315,158,492,130,'COORDINATE','Authorized control plane',['Task / workflow record · plan versions · owner decisions','Candidate references · PR coordination · dispatch']);
 d.box(315,326,492,175,'EC2 + ENCRYPTED EBS','Project workspace and operations',['Coding: read, edit, run commands','Checks: command execution and saved results','Code + security: separate read-only AI review sessions','Devcontainer environment when configured']);
 d.box(315,552,234,115,'DYNAMODB','Task and operation state',['Workflow + decisions + retries']);
 d.box(570,552,237,115,'S3','Artifacts and sessions',['Plans, output, review references']);
 d.arrow([[250,181],[313,181]]);d.arrow([[250,341],[272,341],[272,229],[313,229]]);
 d.arrow([[250,501],[282,501],[282,254],[313,254]]);
 d.arrow([[560,288],[560,324]]);d.arrow([[315,258],[303,258],[303,607],[313,607]]);d.arrow([[690,501],[690,550]]);
 d.box(865,158,205,152,'GITHUB','PRs, comments, CI',['Authoritative merge state','Signed, scoped events','Reconcile current state']);
 d.arrow([[830,205],[863,205]]);d.arrow([[865,261],[832,261]]);
 d.box(865,355,205,183,'CONFIGURED ROUTES','Models + connectors',['Bedrock: AWS-hosted','External providers / vendor','MCP servers: requests leave','your account as configured']);
 d.arrow([[807,405],[863,405]]);
 d.text(32,741,'The AWS account is the documented security boundary. This is a role overview, not a complete network assessment.',12,palette.body);d.save();
}
writeFileSync('docs/diagrams/layout-manifest.json',JSON.stringify({generator:'scripts/generate-workflow-diagrams.mjs',qualification:'Owner-approved workflow preview; icons are present in SVG exports, editable Excalidraw has role text and geometry.',diagrams:specs},null,2)+'\n');
console.log('Generated four SVG diagrams and matching editable Excalidraw role layouts.');
