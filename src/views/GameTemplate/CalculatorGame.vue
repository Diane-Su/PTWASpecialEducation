<template>
<div class="container">
    <div class="calculatorBody">
        <div class="unit btn-group" style="flex-direction: row-reverse;">
            <div class="units" v-for="item in Title">
                <button type="button" v-if="item != null">{{ item }}</button>
                <div class="space" v-if="item == null"></div>
            </div>
        </div>
        <div class="carry btn-group" v-for="(carries,Row) in Carry">
            <div class="Carrys" v-for="(items,cnt) in carries">
                <button ref="Carry" :class="{'btn--line':this.CarryLine[Row][cnt]}">
                    {{ items }}
                    <q-menu anchor="top left" self="bottom left" class="q-menu">
                        <div class="Btns">
                            <button @click="CarryInput(Row,cnt,0)">0</button>
                            <button v-for="index in 5" @click="CarryInput(Row,cnt,index)">{{index}}</button>
                            <button v-for="index in 5" @click="CarryInput(Row,cnt,index+5)">{{index+5}}</button>
                            <button @click="CarryInput(Row,cnt,'/')">/</button>
                            <button @click="CarryInput(Row,cnt,'delete')"><q-icon name="bi-trash"></q-icon></button>
                        </div>
                    </q-menu>
                </button>
            </div>
        </div>
        <hr>
        <div class="number-area">
            <div class="NumberRow btn-group" v-for="(items,Row) in Num_list">
                <button v-if="Row != 0">
                    {{ Sy_list[Row] }}
                    <q-menu anchor="top left" self="bottom left" class="q-menu" v-if="this.SymbolEditable[Row]">
                        <div class="Btns">
                            <button @click="SymbolInput(Row,'+')">+</button>
                            <button @click="SymbolInput(Row,'-')">-</button>
                        </div>
                    </q-menu>
                </button>
                <div class="space"></div>
                <div class="NumbersContainer btn-group">
                    <button v-for="(item,Col) in items" :class="{ 'btn--line': this.ButtonLine[Row][Col]}">
                        {{item}}
                        <q-menu anchor="top left" self="bottom left" class="q-menu" v-if="this.NumberEditable[Row][Col]">
                            <div class="Btns">
                                <button @click="NumInput(Row,Col,0)">0</button>
                                <button v-for="index in 5" @click="NumInput(Row,Col,index)">{{index}}</button>
                                <button v-for="index in 4" @click="NumInput(Row,Col,index+5)">{{index+5}}</button>
                                <button @click="NumInput(Row,Col,'/')">/</button>
                                <button @click="NumInput(Row,Col,'delete')"><q-icon name="bi-trash"></q-icon></button>
                            </div>
                        </q-menu>
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <div class="answer btn-group">
            <div class="AnswerContainer" v-for="(item,Col) in Ans">
                <button :class="{'btn-wrong': this.WrongAnswerMarkup[Col], 'btn-normal': this.WrongAnswerMarkup[Col] == false }" class="btn-wrong">
                    {{item}}
                    <q-menu anchor="top left" self="bottom left" class="q-menu">
                        <div class="Btns">
                            <button @click="AnsInput(Col,0)">0</button>
                            <button v-for="index in 5" @click="AnsInput(Col,index)">{{index}}</button>
                            <button v-for="index in 5" @click="AnsInput(Col,index+5)">{{index+5}}</button>
                            <button @click="AnsInput(Col,'delete')"><q-icon name="bi-trash"></q-icon></button>
                        </div>
                    </q-menu>
                </button>
            </div>
        </div>
        <div class="buttons">
            <button @click="CheckAnswer">檢查答案</button>
        </div>
    </div>
</div>
</template>
        
<script>
import draggable from 'vuedraggable';
export default {
    name: "calculator",
    display: "calculator",
    components: {
        draggable
    },
    props: {
        GameData: {
            type: Object,
            required: true
        },
        GameConfig: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            Num_list: [],
            Sy_list: [],
            Ans:[],
            Carry:[],
            Title:[],
            ButtonLine: [],
            CarryLine: [],
            AnswerLine: [],
            NumberEditable: [],
            SymbolEditable: [],
            WrongAnswerMarkup: [],
            NumberRow: 2,
            NumberAmount: 8,
            Data: {
                Unit: "Time",
                CarryAmount: 2,
                CustomeUnit: undefined,
                NumberAmount: 5,
                Preset: {
                    Number: [
                        "123",
                        "456"
                    ],
                    Symbol: '-'
                },
                Answer: {
                    Carry: [
                        '4',
                        '8'
                    ],
                    Answer: '34',
                    Number: [
                        "123",
                        "456"
                    ],
                    Symbol: '-'
                }
            },
            CustomeUnit: undefined,
            UnitPreset:{
                UseUnit: "Volume",
                Units:{
                    Number:{
                        Title:["個位","十位","百位","千位","萬位"],
                        Total:5
                    },
                    Time:{
                        Title:["秒",null,"分",null,"時",null,"日"],
                        Total:4
                    },
                    Weight:{
                        Title:["公克",null,null,"公斤",null,null,"公噸"],
                        Total:4
                    },
                    Length:{
                        Title:["毫米",null,"公分",null,"公尺",null,"公里"],
                        Total:4
                },
                    Volume:{
                        Title:["毫升",null,null,"公升",null,null,"公秉"],
                        Total:3
                    }
                }
            }
        };
    },
    mounted(){
        this.Data = this.GameData;
        this.NumberAmount = this.Data.NumberAmount;
        if (this.Data.CustomeUnit != undefined){
            for(var i = 0; i<this.CustomeUnit.length; i++){
                this.Title.push(this.CustomeUnit[i]);
            }
        }else{
            for(var i = 0; i< this.NumberAmount; i++){
                this.Title.push(this.UnitPreset.Units[this.UnitPreset.UseUnit].Title[i]);
            }
        }
        for(var i = 0; i<=this.NumberAmount; i++){
            this.Ans.push("");
            this.AnswerLine.push(false);
            this.WrongAnswerMarkup.push(false);
        }

        for(var i = 0; i < this.Data.CarryAmount; i++){
            let temp = [];
            let templine = [];
            for(var x = 0; x < this.NumberAmount; x++){
                temp.push("");
                templine.push(false);
            }
            this.Carry.push(temp);
            this.CarryLine.push(templine);
        }
        for(var x = 0; x < this.NumberRow ; x++){
            console.log('test');
            let temp = [];
            this.Sy_list.push("");
            this.SymbolEditable.push(true);
            let tempNumber = [];
            let tempeditable = [];
            for(var i = 0; i<this.NumberAmount; i++){
                temp.push("");
                tempNumber.push(false);
                tempeditable.push(true);
            }
            this.Num_list.push(temp);
            this.ButtonLine.push(tempNumber);
            this.NumberEditable.push(tempeditable);
        }
        this.UseUnit(this.Data.Unit);
        this.PresetCalculator();
    },
    methods: {
        CarryInput(Row,index,num){
            if (num == 'delete'){
                this.Carry[Row][index] = "";
            }
            else if (num == '/'){
                this.CarryLine[Row][index] = !this.CarryLine[index];
            }
            else{
                this.Carry[Row][index] = num;
            }
        },
        NumInput(Row,Col,num){
            if (num == 'delete'){
                this.Num_list[Row][Col] = "";
            }
            else if (num == '/'){
                this.ButtonLine[Row][Col] = !this.ButtonLine[Row][Col];
            }
            else{
                this.Num_list[Row][Col] = num;
            }
        },
        AnsInput(index,num){
            this.WrongAnswerMarkup[index] = false;
            if (num == 'delete'){
                this.Ans[index] = "";
            }
            else if (num == '/'){
                this.AnswerLine[index] = !this.AnswerLine[index];
            }
            else{
                this.Ans[index] = num;
            }
        },
        PresetCalculator: function(){
            for(var i in this.Data.Preset.Number){
                let temp = this.Num_list[i].length-1;
                if (this.Data.Preset.Symbol != undefined && this.Data.Preset.Symbol != null && this.Data.Preset.Symbol != ""){                    
                    this.Sy_list[i] = this.Data.Preset.Symbol;
                    this.SymbolEditable[i] = false;
                }
                for(var j = this.Data.Preset.Number[i].length - 1; j >= 0; j--){
                    this.Num_list[i][temp] = this.Data.Preset.Number[i][j];
                    this.NumberEditable[i][temp] = false;
                    temp--;
                }
            }
        },
        SymbolInput(index,num){
            this.Sy_list[index] = num;
        },
        SetUnit: function(num){
            if(!( this.NumberAmount==8 && num == 1 ) && !(this.NumberAmount==2 && num==-1)){
                this.NumberAmount = this.NumberAmount + num;
                console.log(this.NumberAmount);
                this.Title = [];
                this.Num_list = [];
                this.Sy_list = [];
                this.Carry = [];
                this.Ans = [];
                this.ButtonLine = [];
                this.CarryLine = [];
                for(var i = 0; i<this.NumberAmount; i++){
                    this.Title.push(this.UnitPreset.Units[this.UnitPreset.UseUnit].Title[i]);
                }
                for(var i = 0; i<=this.NumberAmount; i++){
                    this.Carry.push([]);
                    this.Ans.push([]);
                }
                for(var x = 0; x < this.NumberRow ; x++){
                    let temp = [];
                    this.Sy_list.push([]);
                    for(var i = 0; i<this.NumberAmount; i++){
                        temp.push([]);
                    }
                    this.Num_list.push(temp);
                }
            }
        },
        UseUnit: function(unit){
            this.UnitPreset.UseUnit = unit;
            this.Title = [];
            for(var i = 0; i<this.NumberAmount; i++){
                this.Title.push(this.UnitPreset.Units[this.UnitPreset.UseUnit].Title[i]);
            }
        },
        CheckAnswer(){
            let AnswerCheck = true;
            for(var i in this.Data.Answer.Number){
                let temp = this.Num_list[i].length - 1;
                for(var j = this.Data.Answer.Number[i].length - 1; j >= 0; j--){
                    if (this.Num_list[i][temp] != this.Data.Answer.Number[i][j]){
                        AnswerCheck = false;
                        console.log('Number Wrong');
                    }
                    temp--;
                }
            }
            let temp = this.Ans.length - 1;
            for(var i = this.Data.Answer.Answer.length - 1; i >= 0; i--){
                if (this.Ans[temp] != this.Data.Answer.Answer[i]){
                    AnswerCheck = false;
                    this.WrongAnswerMarkup[temp] = true;
                }
                temp--;
            }
            //Carry
            if (this.Data.Answer.Carry != undefined && this.Data.Answer.Carry != null && this.Data.Answer.Carry != []){
                for(var i in this.Data.Answer.Carry){
                    let temp = this.Carry[i].length - 1;
                    for(var j = this.Data.Answer.Carry[i].length - 1; j >= 0; j--){
                        if (this.Carry[i][temp] != this.Data.Answer.Carry[i][j]){
                            AnswerCheck = false;
                            console.log('Carry Wrong');
                        }
                        temp--;
                    }
                }
            }
            if(AnswerCheck){
                this.$emit('play-effect', 'CorrectSound');
                this.$emit('add-record', [this.Data.Answer, this.Answer, "正確"]);
                this.$emit('next-question');
            }
            else{
                this.$emit('play-effect', 'WrongSound',)
                this.$emit('add-record', [this.Data.Answer, this.Answer, "錯誤"]);
            }
        },
        clear: function(evt) {
            for(var x in this.Carry){
                for(var y in this.Carry[x]){
                    this.Carry[x][y] = "";
                }
            }
            for(var x in this.Ans){
                this.Ans[x] = "";
                this.WrongAnswerMarkup[x] = false;
            }
            for(var x in this.Num_list){
                for(var y in this.Num_list[x]){
                    this.Num_list[x][y] = "";
                }
            }
            for(var x in this.Sy_list){
                this.Sy_list[x] = "";
            }
            this.PresetCalculator();
        }
    }
};
</script>
<style lang="scss" scope>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
}
.calculatorBody {
    display: flex;
    flex-direction: column;
    .btn-group {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 12px;
        margin: 5px 0;
        .btn--line{
            background: linear-gradient( 60deg, transparent 49.5%, black 45.5%, black 51.5%, transparent 50%);
        }
    }
    .number-area button{
        background-color: $primary-color;
    }
    .carry button{
        background-color: $sub-color;
        color: $hightlight-color;
    }
    .answer {
        .btn-wrong{
            background-color: $error-color;
        }
        .btn-normal{
            background-color: $sub-color;
        }
    }
    .unit button{
        background-color: $accent-color;
        height: auto;
        border: none;
    }
    .btn-primary{
        width: 40px;
    }
}
.space{
    width: 40px;
}

.buttons{
    display: flex;
    flex-direction: row;    
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 20px;
    button{
        height: 3rem;
        width: 10rem;
        background-color: $accent-color;
    }
}
hr{
    height:2px;
    border-width:0;
    color:$dark-color;
    background-color:$dark-color;
}
.Btns{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
    button {
        border: none;
        border-radius: 15px;
        height: 40px;
        width: 40px;
    }
}

button{
    border: none;
    border-radius: 10px;
    color: $dark-color;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 60px;
    font-size: x-large;
    font-weight: bold;
}
</style>