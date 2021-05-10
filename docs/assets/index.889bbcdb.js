import{d as e,c as o,a as t,b as a,t as s,w as r,p as n,e as l,o as d,r as c,f as p,v as u,g as i,h as m,F as g,i as v,j as f,k as b}from"./vendor.3a56250d.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,r)=>{const n=new URL(e,a);if(self[o].moduleMap[n])return t(self[o].moduleMap[n]);const l=new Blob([`import * as m from '${n}';`,`${o}.moduleMap['${n}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),s(d)},onload(){t(self[o].moduleMap[n]),s(d)}});document.head.appendChild(d)})),self[o].moduleMap={}}}("/studying-vuejs-crud/assets/");var T=e({name:"ProgressionBar",props:{progression:{type:Number,default:0}},setup:e=>({percentage:o((()=>`${e.progression}%`))})});const y=r();n("data-v-5767a2fb");const w={class:"progress-bar"},h={class:"progress-bar-label"};l();const _=y(((e,o,r,n,l,c)=>(d(),t("div",w,[a("div",{class:"progress-bar-inner",style:{width:e.percentage}},null,4),a("span",h,s(e.percentage),1)]))));T.render=_,T.__scopeId="data-v-5767a2fb";var j=e({name:"NewTodoInput",setup(e,{emit:o}){const t=c("");return{todo:t,createTodo:()=>{o("create",t.value),t.value=""}}}});const k=r();n("data-v-2e26b742");const I=a("label",{for:"newTodo",class:"input-label"}," Insira uma nova tarefa ",-1),L={class:"input-group"},C=a("button",{type:"submit",class:"input-submit","aria-label":"salvar"},"+",-1);l();const U=k(((e,o,s,r,n,l)=>(d(),t("form",{class:"input-form",onSubmit:o[2]||(o[2]=i(((...o)=>e.createTodo&&e.createTodo(...o)),["prevent"]))},[I,a("div",L,[p(a("input",{id:"newTodo",type:"text",class:"input-control",placeholder:"Insira uma nova tarefa",autofocus:"","onUpdate:modelValue":o[1]||(o[1]=o=>e.todo=o)},null,512),[[u,e.todo]]),C])],32))));j.render=U,j.__scopeId="data-v-2e26b742";var $=e({name:"TodoCard",emits:["toggle","delete"],props:{todo:{type:Object,required:!0}},setup:e=>({completion:o((()=>e.todo.completed?"completed":"pending"))})});const M=r();n("data-v-65a5d5b4");const N={class:"todo-card-text"};l();const O=M(((e,o,r,n,l,c)=>(d(),t("div",{class:["todo-card",e.completion],onClick:o[2]||(o[2]=o=>e.$emit("toggle"))},[a("span",{class:"todo-delete",title:"Excluir",onClick:o[1]||(o[1]=i((o=>e.$emit("delete")),["stop"]))}," × "),a("span",N,s(e.todo.task),1)],2))));$.render=O,$.__scopeId="data-v-65a5d5b4";var R=e({name:"App",components:{ProgressionBar:T,NewTodoInput:j,TodoCard:$},setup(){const e=JSON.parse(localStorage.getItem("my_todos")),t=c(e||[]),a=o((()=>{const e=t.value.reduce(((e,o)=>e+Number(o.completed)),0);return Math.round(e/t.value.length*100)||0}));return m(t,(()=>{localStorage.setItem("my_todos",JSON.stringify(t.value))}),{deep:!0}),{todos:t,completion:a,addTodo:e=>{t.value.push({task:e,completed:!1})},deleteTodo:e=>{confirm("Tem certeza de que deseja excluir essa tarefa?")&&t.value.splice(e,1)},toggleTodo:e=>{t.value[e].completed=!t.value[e].completed}}}});const S=a("header",null,[a("h1",null,"Lista de Afazeres")],-1),x={key:0,class:"todos-grid"},B={key:1,class:"no-todos"},E=a("p",null,"Você parece estar em dia com suas tarefas! 😎",-1),F=a("footer",null,[a("small",null,"LacusSoft © 2020-2021 - Todos os direitos reservados")],-1);R.render=function(e,o,s,r,n,l){const c=f("progression-bar"),p=f("new-todo-input"),u=f("todo-card");return d(),t(g,null,[S,a("main",null,[a(c,{progression:e.completion},null,8,["progression"]),a(p,{onCreate:e.addTodo},null,8,["onCreate"]),e.todos.length?(d(),t("div",x,[(d(!0),t(g,null,v(e.todos,((o,a)=>(d(),t(u,{key:a,todo:o,onToggle:o=>e.toggleTodo(a),onDelete:o=>e.deleteTodo(a)},null,8,["todo","onToggle","onDelete"])))),128))])):(d(),t("div",B,[E]))]),F],64)},b(R).mount("#app");