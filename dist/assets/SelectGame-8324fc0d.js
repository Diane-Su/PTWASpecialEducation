import{G as r}from"./get_assets-e072c5da.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{o as s,c as o,a as e,t as a,F as l,j as _,p as h,e as m}from"./index-b5bc5a4d.js";const u={name:"SelectGame",data(){return{imageUrl:"",question:[]}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},methods:{CheckAnswer(t){t==this.GameData.Answer?(this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[this.GameData.Answer,t,"正確"]),this.$emit("next-question"),console.log("check answer : True")):(this.$emit("play-effect","WrongSound"),this.$emit("add-record",[this.GameData.Answer,t,"錯誤"]),console.log("check answer : False"))}},created(){for(var t in this.GameData.Question)this.question.push(this.GameData.Question[t]);this.imageUrl=r(this.id,this.GameData.img),console.log(this.imageUrl)}},p=t=>(h("data-v-5d129ef2"),t=t(),m(),t),f={class:"container"},g={class:"index"},G={class:"h1",style:{"font-weight":"bold"}},v=p(()=>e("br",null,null,-1)),y={class:"Info"},D={class:""},S={class:"card mx-auto"},b={class:"card-body d-flex justify-content-center"},x=["src","alt"],k={class:"selection"},q={class:"h2"},w={class:"mb-2"},C=["onClick"];function $(t,A,I,j,i,n){return s(),o("div",f,[e("div",g,[e("p",G,a(this.GameConfig.GlobalTitle),1),v,e("div",y,[e("div",D,[e("div",S,[e("div",b,[e("img",{class:"GameImg",src:i.imageUrl,alt:this.GameData.img_alt},null,8,x)])])]),e("div",k,[e("p",q,a(this.GameData.Question_Text),1),(s(!0),o(l,null,_(i.question,c=>(s(),o("div",w,[e("button",{type:"button",onClick:F=>n.CheckAnswer(c)},a(c),9,C)]))),256))])])])])}const T=d(u,[["render",$],["__scopeId","data-v-5d129ef2"]]);export{T as default};
