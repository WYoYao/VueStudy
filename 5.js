

var app=new Vue({
    el:'#app',
    data:{

    },
    beforeCreate:function(){
        console.log(this);
    },
    methods:{
        parentClick:function(){
            console.log('3');
        },
        childrenclick:function(){
            console.log('2');
        },
        sonclick:function(){
            console.log('1');
        }
    }
})