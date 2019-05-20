
//5.4 vuejs

//官网 http://cn.vuejs.org/

var vm = new Vue({
    el : '#app',
    data: {
    　　message : 'Hello world, I am Vue.js',
        adc:12,
        gender : '',
    　　 checked : '',

    　　 selected : '',
    　　 multiSelected : []
    },
    methods:{
        console:function(){
            console.log(this.adc)
    }
    
  },
  created:function(){
    console.log("createad")
}
});

console.log(document.querySelector('#dspan'));


 