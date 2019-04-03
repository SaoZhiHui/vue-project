 
 
 
 Vue.component("my-header",{
 	name:"my-header",
 	
 	
 	template:`
 	<div>
 	  <div class="my-header-left" >
 	  <a>1</a><a>1</a>
 	  </div>
 	  
 	  <div class="my-header-right">
 	  <a>2</a><a>2</a>
 	 </div>
 	 

 	 <div class="my-header-props">
 	 {{ todo }} {{ chuHhhh }} 
 	 <button @click= "@emit('hed-message',message) "> 111</button>
 	 </div>
 	 
 	 
 	 
 	
 	</div>
 	  `,
 	data:function(){
 		return{
 			ddd:""

 		}
 	},
 	props:{
 	todo: {
 		type:String,
 		default:""
 	},
 	
 	chuHhhh: {
 		type:Number,
 		default:0
 	},
 	
 	fu:{
 		type:String,
 		default:""
 	},
 	
 	
 	},
 	
   	methods: {
   		handleFunction: function (){
   			this.flg = !this.flg;
   			
   		},
   		
   		count : function (){
   			console.log("111")
   			this.ddd = this.todo;
   		}
   		
   	},
   	
   	
   	watch: {
   		handleFunction: function (oldvalue,newvalue){
			this.flg = !this.flg;
   			console.log(oldvalue,"原来的值",newvalue,"新的值")
   		},
   		
   		
   	},
   	
 });
 
   var vm = new Vue({
   	el:"#warp",
   	data:function () {
   		return{
   			message:"fdsfdd ",
   			message2:222,
   			flg:true,
   			tol:0
   		}
   	},
   	
   	methods: {
 		handleFunction: function (){
 			this.flg = !this.flg;
 			
 		},
 		
		
// 		hed-message: function(data){
// 			this.tol += 1;
// 			console.log(data);
// 		},
	
 	},
 	
 	
 	watch: {
 		flg: function (oldvalue,newvalue){
// 			this.flg = !this.flg;
 			console.log(oldvalue,"原来的值",newvalue,"新的值")
 		},
 	},
   	
   	
   })
