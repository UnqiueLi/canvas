window.onload=function(){
			var canvas=document.getElementById("canvas");
			canvas.width=1300;
			canvas.height=600;
			var digitWidth=7;  //每个数字点阵圆的数量
			var tokenWidth=4;  //冒号数字点阵圆的数量
			var margin_top=100; //y轴偏移量
			var margin_left=150; //x轴的偏移量
			var radius=8; //圆点半径
			//目标结束事件
			var eDate = {
				year:new Date().getFullYear(),
				date:23,
				hours:0,
				minutes:0,
				seconds:0
			}
			var context=canvas.getContext('2d');

			setInterval(function(){
				Update();
				drawArr();
			
			},1000);
				var endDate = new Date();
				endDate.setYear(eDate.year)
				endDate.setDate(eDate.date)
				endDate.setHours(eDate.hours)
				endDate.setMinutes(eDate.minutes)
				endDate.setSeconds(eDate.seconds);
			function Update(){

				// var date = new Date();
				// var hours=date.getHours();
				// var minutes=date.getMinutes();
				// var seconds=date.getSeconds();
				
				//截至到目标时间一共需要多少秒
				 endTime = (endDate.getTime() - (new Date().getTime())) / 1000;
				 hours = parseInt(endTime/3600);
				 minutes = parseInt((endTime - (hours*3600)) / 60);
				 seconds = endTime % 60;
			}
			function drawArr(){
				context.clearRect(0,0,canvas.width,canvas.height);
				drawDigit(0,0,parseInt(hours/10),context);
				drawDigit(digitWidth*2*(radius+1)+20,0,hours%10,context);
				drawDigit(2*(digitWidth*2*(radius+1)+20),0,10,context);
				drawDigit(2*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,parseInt(minutes/10),context);
				drawDigit(3*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,parseInt(minutes%10),context);
				drawDigit(4*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,10,context);
				drawDigit(4*(digitWidth*2*(radius+1)+20) + 2*(tokenWidth*2*(radius+1)+20) ,0,parseInt(seconds/10),context);
				drawDigit(5*(digitWidth*2*(radius+1)+20) + 2*(tokenWidth*2*(radius+1)+20) ,0,parseInt(seconds%10),context);
			}
			function drawDigit(x,y,num,context){
				for(var i=0;i<digit[num].length;i++){
					for(var j=0;j<digit[num][i].length;j++){
						if(digit[num][i][j]==1){
							context.beginPath();
							context.fillStyle="red";
							context.arc(margin_left+x+j*2*(radius+1)+(radius+1),margin_top+y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI)
							context.closePath();
							context.fill();
						}
					}
				}
			}
}