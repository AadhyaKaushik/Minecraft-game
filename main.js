var canvas = new fabric.Canvas("myCanvas");

block_height = 30;
block_width = 30;
block_object = "";

player_x = 10;
player_y = 10;
player_object = "";

function player_update(){

    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set
        ({

            top:player_y, left:player_x

        });
        canvas.add(player_object);
    });

}

function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){

        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set
        ({

            top:player_y, left:player_x

        });
        canvas.add(block_object);
    });

}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e){

    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == "38"){

        console.log("UP");
        up();

    }

    if(keypressed == "40"){

        console.log("DOWN");
        down();

    }

    if(keypressed == "37"){

        console.log("LEFT");
        left();

    }

    if(keypressed == "39"){

        console.log("RIGHT");
        right();
    }
    
    
    if(keypressed == "87"){

        console.log("W");
        new_image("wall.jpg");

    }
    if(keypressed == "71"){

        console.log("G");
        new_image("ground.png");

    }
    if(keypressed == "76"){

        console.log("L");
        new_image("light_green.png");

    }
    if(keypressed == "84"){

        console.log("T");
        new_image("trunk.jpg");

    }
    if(keypressed == "82"){

        console.log("R");
        new_image("roof.jpg");

    }
    if(keypressed == "89"){

        console.log("Y");
        new_image("yellow_wall.png");

    }
    if(keypressed == "68"){

        console.log("D");
        new_image("dark_green.png");

    }
     if(keypressed == "7"){

        console.log("C");
        new_image("cloud.jpg");

    }
    if(keypressed == "85"){

        console.log("U");
        new_image("unique.png");

    }

    if(e.shiftKey == true && keypressed =="80"){

        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }

    if(e.shiftKey == true && keypressed =="77"){

        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }
}
function up(){

    if(player_y >= 0){

        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();

    }

}
function down(){

    if(player_y <= 500){

        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();

    }

}
function left(){

    if(player_x >= 0){

        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();

    }

}
function right(){

    if(player_x <= 850){

        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();

    }

}