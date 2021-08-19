var canvas= new fabric.Canvas("my_canvas");

var ball_x=0;
var ball_y=0;

var hole_x=300;
var hole_y=300;

var hole_object="";
var block_image_width = 5;
var block_image_height = 5;

var hole="";

function load_img()
{
	fabric.Image.fromURL("hole.png",function(Img)
	{
		hole=Img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);

		hole.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole);
	});
	new_image();
}

var ball_obj="";

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img)
	{
      ball_obj=Img;
	  ball_obj.scaleToWidth(50);
	  ball_obj.scaleToHeight(50);

	  ball_obj.set({
		  top:ball_y,
		  left:ball_x
	  });
	  canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_y==hole_y)&&(ball_x==hole_x))
	{
      canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You have Hit the Goal!";
	document.getElementById("my_canvas").style.borderColor="red";
	}
     else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			
		}
	}
	
	function up()
	{
		if(ball_y>=0)
		{
			ball_y=ball_y-10;
			console.log("Up arrow is clicked");
			canvas.remove(ball_obj);
			load_img();
		}
	}

	function down()
	{
		 if(ball_y<=550)
		 {
			 ball_y=ball_y+10;
			 console.log("Down arrow is pressed");
			 canvas.remove(ball_obj);
			 load_img();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_y>=0)
			{
				ball_x=ball_x-10;
				console.log("Left arrow is pressed");
				canvas.remove(ball_obj);
				load_img();
			}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+10;
			console.log("Right arrow is pressed");
			canvas.remove(ball_obj);
			load_img();
		}
	}
	
}

