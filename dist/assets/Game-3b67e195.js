import{g as T,r as m,o as t,c as l,a as s,f as y,b as I,w as x,t as h,F as k,h as j,i,j as c,d as S,p as q,e as P}from"./index-76d147a3.js";import z from"./TrueFalseGame-74e56f12.js";import F from"./SelectGame-1502f023.js";import V from"./NumberInputGame-bcdd3e6a.js";import D from"./ClassifyGame-2bfd9b95.js";import B from"./SortGame-bcd9f9b0.js";import L from"./FindTheItemGame-66a2cf3f.js";import M from"./AutoNumberingGame-264a230d.js";import R from"./NumberingGame-574601c8.js";import{_ as E}from"./logo-63b3c80a.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./cover_story-396db36e.js";import"./description-52f6e5ba.js";import"./VirtualNumPad-9ae152ad.js";import"./vuedraggable.umd-8b429fed.js";import"./jquery-43fbda2a.js";function N(o,r=""){const _=new Date,f=String(_.getMonth()+1).padStart(2,"0"),e=String(_.getDate()).padStart(2,"0"),n=f+e;var d=(G=>G.map(w=>w.join(",")).join(`
`))(o);d="\uFEFF"+d;var p=new Blob([d],{type:"text/csv;charset=utf-8;"});const v=URL.createObjectURL(p),u=document.createElement("a");u.href=v,u.download=`${r}_${n}.csv`,document.body.appendChild(u),u.click()}const H="/ptwa/assets/previous-3dde6022.png",J="/ptwa/assets/next-6472dbad.png",O="/ptwa/assets/submit-a28a6feb.png",K="/ptwa/assets/start-975a6cab.png",W="/ptwa/assets/restart-71a84adc.png",X="/ptwa/assets/hint-246d1e79.png",Y="/ptwa/assets/download-ee878fd7.png",Z="/ptwa/assets/info-3a0296c2.png",$="/ptwa/assets/calculator-0f73568e.png",ee="/ptwa/assets/record-055dff9a.png",se="/ptwa/assets/elephant-ed934cfa.gif";const te={data(){return{GameType:"",GameStatus:"NotStart",download_data:[],GameID:"",Subject:"",Grade:"",Name:"",Nowlevel:1,Subjects:{Math:"數學",Chinese:"國語",Technology:"多元科技"},GameConfig:{},time:0,intervalId:null}},created(){this.GameID=this.$route.params.id,this.Subject=this.$route.params.Subject,this.Grade=this.$route.params.Grade,this.Name=this.$route.params.GameName,(async()=>{const o=await T("./Grade"+this.Grade+"/"+this.GameID+".json");this.GameConfig=o.data,this.GameType=this.GameConfig.GameType})()},methods:{CheckAnswer(o){console.log("Game View Get Component Reply: "+o)},dataPreprocess(){for(var o in this.GameConfig.Questions);console.log(levelname),N(levelname)},StartGame(){this.GameStatus="Progressing",this.startTimer(),this.dataPreprocess()},tocsv(o){console.log(o),N(o)},reloadPage(){location.reload()},changelevel(o){this.Nowlevel=o,this.pauseTimer(),this.resetTimer()},NextQuestion(){this.Nowlevel<this.GameConfig.TotalLevel&&this.Nowlevel++,this.pauseTimer(),this.resetTimer()},PreviousQuestion(){this.Nowlevel>1&&this.Nowlevel--,this.pauseTimer(),this.resetTimer()},startTimer(){console.log("timer is started"),!this.intervalId&&(this.intervalId=setInterval(()=>{this.time++},1e3))},pauseTimer(){clearInterval(this.intervalId),this.intervalId=null},resetTimer(){this.pauseTimer(),this.time=0}},components:{TrueFalseGame:z,SelectGame:F,NumberInputGame:V,ClassifyGame:D,SortGame:B,FindTheItemGame:L,AutoNumberingGame:M,NumberingGame:R}},a=o=>(q("data-v-3c6a116d"),o=o(),P(),o),oe={class:"container navbar navbar-expand-lg navbar-light sticky-top justify-content-center",style:{"justify-content":"flex-start !important"}},ne=a(()=>s("a",{class:"navbar-brand mt-2 mb-2",href:"#",alt:"Home"},[s("img",{src:E,class:"img-fluid"})],-1)),ie={class:"container sticky-top",style:{"--bs-breadcrumb-divider":"'>'"}},ae={class:"breadcrumb mb-0"},re=a(()=>s("li",{class:"breadcrumb-item"},[s("i",{class:"bi bi-house"}),s("a",{href:"#"}," 主頁")],-1)),me={class:"breadcrumb-item","aria-current":"page"},le=a(()=>s("i",{class:"bi bi-book-half"},null,-1)),ce={class:"breadcrumb-item active","aria-current":"page"},ue=a(()=>s("i",{class:"bi bi-pen"},null,-1)),de={class:"container-fluid"},ge={class:"row mt-3 justify-content-center"},he={class:"col-8 GameArea"},_e={class:"row levelbutton"},pe={class:"d-grid gap-2 d-md-flex justify-content-center mb-3 levebar",style:{width:"100"}},ve=a(()=>s("button",{type:"button",class:"btn btn-primary",disabled:""},"關卡",-1)),Ge=["onClick"],we={key:0,type:"button",class:"btn btn-primary",disabled:""},be={class:"row Game_Component"},fe={class:"col-3 card SideBar"},Ce=a(()=>s("p",{class:"card-title h4 mt-3"},"功能區",-1)),ye={class:"card-body",style:{"border-style":"none"}},ke={class:"list-group mt-1"},Ne=a(()=>s("img",{src:H,class:"img-hover-zoom"},null,-1)),Se=[Ne],Ae=a(()=>s("img",{src:J,class:"img-hover-zoom"},null,-1)),Qe=[Ae],Te={key:0,class:"list-group-item"},Ie=a(()=>s("img",{src:O,class:"img-hover-zoom"},null,-1)),xe=[Ie],je=a(()=>s("img",{src:K,class:"img-hover-zoom"},null,-1)),qe=[je],Pe=a(()=>s("img",{src:W,class:"img-hover-zoom"},null,-1)),ze=[Pe],Fe={key:3,class:"list-group-item"},Ve=a(()=>s("img",{src:X,class:"img-hover-zoom"},null,-1)),De=[Ve],Be=a(()=>s("img",{src:Y,class:"img-hover-zoom"},null,-1)),Le=[Be],Me=S('<a class="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-3c6a116d><img src="'+Z+'" class="img-hover-zoom" data-v-3c6a116d></a><a class="list-group-item" data-v-3c6a116d><img src="'+$+'" class="img-hover-zoom" data-v-3c6a116d></a><a class="list-group-item" data-v-3c6a116d><img src="'+ee+'" class="img-hover-zoom" data-v-3c6a116d></a>',3),Re=S('<div class="fade modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-3c6a116d><div class="modal-dialog modal-xl" data-v-3c6a116d><div class="modal-content" data-v-3c6a116d><div class="modal-header" data-v-3c6a116d><h1 class="modal-title fs-5" id="exampleModalLabel" data-v-3c6a116d>不會玩嗎?請看教學影片:</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-3c6a116d></button></div><div class="modal-body justify-content-center" data-v-3c6a116d><img src="'+se+'" data-v-3c6a116d></div><div class="modal-footer" data-v-3c6a116d><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-3c6a116d>我知道了!</button></div></div></div></div>',1);function Ee(o,r,_,f,e,n){const C=m("router-link"),d=m("TrueFalseGame"),p=m("SelectGame"),v=m("NumberInputGame"),u=m("ClassifyGame"),G=m("SortGame"),w=m("FindTheItemGame"),A=m("AutoNumberingGame"),Q=m("NumberingGame");return t(),l(k,null,[s("header",null,[s("nav",oe,[ne,s("div",ie,[s("ol",ae,[re,s("li",me,[le,y(),I(C,{to:{name:"GameSelect",params:{id:this.Grade}}},{default:x(()=>[y(h(this.Grade)+" 年級 "+h(e.Subjects[e.Subject]),1)]),_:1},8,["to"])]),s("li",ce,[ue,s("a",null,h(this.Name),1)])])])])]),s("section",null,[s("div",de,[s("div",ge,[s("div",he,[s("div",_e,[s("div",pe,[ve,(t(!0),l(k,null,j(e.GameConfig.Questions,(g,b)=>(t(),l("div",{key:b,class:"grid-item"},[s("button",{type:"button",class:"btn btn-primary w-auto",onClick:Ue=>n.changelevel(b+1)},h(b+1),9,Ge)]))),128)),e.GameStatus=="Progressing"?(t(),l("button",we,"時間 : "+h(e.time),1)):i("",!0)])]),s("div",be,[e.GameConfig.GameType=="TrueFalse"?(t(),c(d,{key:0,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,imgsrc:e.GameConfig.Questions[e.Nowlevel-1].img,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","imgsrc","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="SelectGame"?(t(),c(p,{key:1,question:e.GameConfig.Questions[1].Question,imgsrc:e.GameConfig.Questions[1].img,answer:e.GameConfig.Questions[1].Answer,onCheckAnswer:n.CheckAnswer},null,8,["question","imgsrc","answer","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="NumberInputGame"?(t(),c(v,{key:2,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,imgsrc:e.GameConfig.Questions[e.Nowlevel-1].img,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","imgsrc","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="ClassifyGame"?(t(),c(u,{key:3,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="SortGame"?(t(),c(G,{key:4,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="FindTheItemGame"?(t(),c(w,{key:5,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,imgsrc:e.GameConfig.Questions[e.Nowlevel-1].img,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","imgsrc","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="AutoNumberingGame"?(t(),c(A,{key:6,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","onCheckAnswer"])):i("",!0),e.GameConfig.GameType=="NumberingGame"?(t(),c(Q,{key:7,question:e.GameConfig.Questions[e.Nowlevel-1].Question,answer:e.GameConfig.Questions[e.Nowlevel-1].Answer,imgsrc:e.GameConfig.Questions[e.Nowlevel-1].img,onCheckAnswer:n.CheckAnswer},null,8,["question","answer","imgsrc","onCheckAnswer"])):i("",!0)])]),s("div",fe,[Ce,s("div",ye,[s("div",ke,[s("a",{class:"list-group-item",onClick:r[0]||(r[0]=g=>n.PreviousQuestion())},Se),s("a",{class:"list-group-item",onClick:r[1]||(r[1]=g=>n.NextQuestion())},Qe),e.GameStatus=="Progressing"?(t(),l("a",Te,xe)):i("",!0),e.GameStatus=="NotStart"?(t(),l("a",{key:1,class:"list-group-item",onClick:r[2]||(r[2]=g=>n.StartGame())},qe)):i("",!0),(e.GameStatus=="Progressing",t(),l("a",{key:2,class:"list-group-item",onClick:r[3]||(r[3]=g=>n.reloadPage())},ze)),e.GameStatus=="Progressing"?(t(),l("a",Fe,De)):i("",!0),e.GameStatus=="Done"?(t(),l("a",{key:4,class:"list-group-item",onClick:r[4]||(r[4]=g=>n.tocsv(this.download_data))},Le)):i("",!0),Me])])]),Re])])])],64)}const rs=U(te,[["render",Ee],["__scopeId","data-v-3c6a116d"]]);export{rs as default};
