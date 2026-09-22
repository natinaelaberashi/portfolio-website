const rows=[
["OPS-1001","2026-01-03","Support A","Access","P2","Email","Resolved",5.2,"Yes","No","User configuration"],
["OPS-1002","2026-01-04","Support B","Transaction","P1","Portal","Resolved",8.4,"Yes","Yes","System error"],
["OPS-1003","2026-01-05","Support A","Account","P3","Email","Resolved",3.1,"Yes","No","User configuration"],
["OPS-1004","2026-01-06","Support C","Transaction","P2","Portal","Resolved",11.6,"No","Yes","Integration issue"],
["OPS-1005","2026-01-07","Support B","Access","P2","Chat","Resolved",6.0,"Yes","No","User configuration"],
["OPS-1006","2026-01-09","Support C","Reporting","P3","Email","Resolved",4.3,"Yes","No","Data quality"],
["OPS-1007","2026-01-11","Support A","Transaction","P1","Portal","Resolved",9.8,"Yes","Yes","System error"],
["OPS-1008","2026-01-12","Support B","Account","P2","Chat","Resolved",7.2,"Yes","No","User configuration"],
["OPS-1009","2026-01-14","Support C","Transaction","P2","Portal","Resolved",13.1,"No","Yes","Integration issue"],
["OPS-1010","2026-01-15","Support A","Access","P3","Email","Resolved",2.8,"Yes","No","User configuration"],
["OPS-1011","2026-01-17","Support B","Reporting","P3","Email","Resolved",5.1,"Yes","No","Data quality"],
["OPS-1012","2026-01-18","Support C","Transaction","P1","Portal","Resolved",10.7,"No","Yes","System error"],
["OPS-1013","2026-01-20","Support A","Account","P2","Chat","Resolved",6.4,"Yes","No","User configuration"],
["OPS-1014","2026-01-22","Support B","Transaction","P2","Portal","Resolved",12.4,"No","Yes","Integration issue"],
["OPS-1015","2026-01-23","Support C","Access","P3","Email","Resolved",4.0,"Yes","No","User configuration"],
["OPS-1016","2026-01-25","Support A","Reporting","P3","Email","Resolved",5.7,"Yes","No","Data quality"],
["OPS-1017","2026-01-27","Support B","Transaction","P1","Portal","Resolved",9.1,"Yes","Yes","System error"],
["OPS-1018","2026-01-28","Support C","Account","P2","Chat","Resolved",7.9,"Yes","No","User configuration"],
["OPS-1019","2026-01-29","Support A","Transaction","P2","Portal","Resolved",14.2,"No","Yes","Integration issue"],
["OPS-1020","2026-01-31","Support B","Access","P3","Email","Resolved",3.6,"Yes","No","User configuration"]
].map(r=>({id:r[0],date:r[1],team:r[2],category:r[3],priority:r[4],channel:r[5],status:r[6],hours:r[7],sla:r[8],exception:r[9],root:r[10]}));

const $=id=>document.getElementById(id);
const unique=k=>[...new Set(rows.map(r=>r[k]))];
function fillSelect(id,key){unique(key).forEach(v=>$(id).insertAdjacentHTML("beforeend",`<option>${v}</option>`))}
fillSelect("teamFilter","team");fillSelect("priorityFilter","priority");fillSelect("categoryFilter","category");

function filtered(){return rows.filter(r=>(teamFilter.value==="All"||r.team===teamFilter.value)&&(priorityFilter.value==="All"||r.priority===priorityFilter.value)&&(categoryFilter.value==="All"||r.category===categoryFilter.value))}
function pct(n,d){return d?Math.round(n/d*1000)/10:0}
function counts(data,key){return data.reduce((a,r)=>(a[r[key]]=(a[r[key]]||0)+1,a),{})}
function renderBars(id,obj,mode="count"){
 const vals=Object.entries(obj).sort((a,b)=>b[1]-a[1]);const max=Math.max(...vals.map(x=>x[1]),1);
 $(id).innerHTML=vals.map(([k,v])=>`<div class="barrow"><span>${k}</span><div class="track"><div class="fill" style="width:${v/max*100}%"></div></div><strong>${mode==="pct"?v+"%":v}</strong></div>`).join("");
}
function render(){
 const d=filtered(), total=d.length, sla=d.filter(r=>r.sla==="Yes").length, ex=d.filter(r=>r.exception==="Yes").length;
 $("totalCases").textContent=total;$("sla").textContent=pct(sla,total)+"%";$("avgResolution").textContent=(d.reduce((s,r)=>s+r.hours,0)/Math.max(total,1)).toFixed(1)+"h";$("exceptionRate").textContent=pct(ex,total)+"%";
 renderBars("categoryChart",counts(d,"category"));
 const team={};unique("team").forEach(t=>{const x=d.filter(r=>r.team===t);team[t]=pct(x.filter(r=>r.sla==="Yes").length,x.length)});renderBars("teamChart",team,"pct");
 renderBars("rootChart",counts(d.filter(r=>r.exception==="Yes"),"root"));
 const byCat=counts(d,"category"), topCat=Object.entries(byCat).sort((a,b)=>b[1]-a[1])[0];
 $("findings").innerHTML=[
  `Workload is highest in <b>${topCat?topCat[0]:"—"}</b> with ${topCat?topCat[1]:0} cases.`,
  `Current SLA compliance is <b>${pct(sla,total)}%</b> across the selected scope.`,
  `Exception rate is <b>${pct(ex,total)}%</b>; investigate recurring root causes before changing process.`,
  `Use the dashboard as a management view, then drill into case-level evidence before taking action.`
 ].map(x=>`<div class="finding">${x}</div>`).join("");
}
["teamFilter","priorityFilter","categoryFilter"].forEach(id=>$(id).addEventListener("change",render));
$("reset").addEventListener("click",()=>{teamFilter.value=priorityFilter.value=categoryFilter.value="All";render()});
render();