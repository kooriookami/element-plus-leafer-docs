import{C as m,M as p,L as g,F as d}from"./icon.Bqd_dtW-.js";import{E as s}from"./index.HCiN5ZYe.js";import{E as h}from"./index.Cw_LaD1T.js";import{E as y,D as B}from"./delete.CDOhHpgQ.js";import{S as v}from"./share.BI86qPDy.js";import{d as _,s as E,y as x,o as R,c as L}from"./framework.DUrWDx4n.js";class z extends m{constructor(t,e){super(t,e)}get __tag(){return"ElButtonGroup"}render(){const{size:t,type:e,children:n=[]}=this.props;n.length>1&&n.forEach((o,a)=>{if(t&&(o.props.size=t),e&&(o.props.type=e),a===0){const r=p.fourNumber(o.cornerRadius);r[1]=0,r[2]=0,o.cornerRadius=r}else if(a===n.length-1){const r=p.fourNumber(o.cornerRadius);r[0]=0,r[3]=0,o.cornerRadius=r}else o.cornerRadius=0}),this.set({gap:1,children:n})}}const c=z,C='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"/></svg>',G='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>',D=_({__name:"group",setup(i){const t=E();return x(()=>{const e=new g({view:t.value,type:"draw",height:32}),n=new s({text:"Previous Page",type:"primary",icon:C}),o=new s({text:"Next Page",type:"primary",children:[new h({icon:G,size:14,color:"white"})]}),a=new c({children:[n,o]}),r=new s({type:"primary",icon:y}),u=new s({type:"primary",icon:v}),l=new s({type:"primary",icon:B}),w=new c({children:[r,u,l]}),f=new d({gap:10,children:[a,w]});e.add(f)}),(e,n)=>(R(),L("div",{ref_key:"container",ref:t},null,512))}});export{D as default};
