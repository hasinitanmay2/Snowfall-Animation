class Snowflake{
    constructor(x,y,angle){
        var options = {
            restitution : 0,
            friction : 0,
            density : 0.1, 
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width =50;
        this.height =50;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);

    }

    display(){
        //var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}