window.onload=function(){
			var canvas=document.getElementById("canvas");
			canvas.width=1300;
			canvas.height=600;
			var digitWidth=7;
			var tokenWidth=4;
			var margin_top=100;
			var margin_left=150;

			var context=canvas.getContext('2d');
			var radius=8;

			var date = new Date();
			var hours=date.getHours();
			var minutes=date.getMinutes();
			var seconds=date.getSeconds();
	
			
			drawDigit(0,0,parseInt(hours/10),context);
			drawDigit(digitWidth*2*(radius+1)+20,0,hours%10,context);
			drawDigit(2*(digitWidth*2*(radius+1)+20),0,10,context);
			drawDigit(2*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,parseInt(minutes/10),context);
			drawDigit(3*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,minutes%10,context);
			drawDigit(4*(digitWidth*2*(radius+1)+20) + tokenWidth*2*(radius+1)+20 ,0,10,context);
			drawDigit(4*(digitWidth*2*(radius+1)+20) + 2*(tokenWidth*2*(radius+1)+20) ,0,parseInt(seconds/10),context);
			drawDigit(5*(digitWidth*2*(radius+1)+20) + 2*(tokenWidth*2*(radius+1)+20) ,0,seconds%10,context);

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