class Slingshot{
    constructor(body1 ,pointb){
        var options = {
            bodyA: body1,
            pointB: pointb,
            stiffness: 0.04,
            length: 10
        }
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
        this.pointb= pointb
        this.sling = Constraint.create(options);
        World.add(world,this.sling );
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointb;

            push();
            if(point1.x < 220){
                stroke(18,22,2);
                strokeWeight(7);
                line(point1.x-25 , point1.y , point2.x-15 , point2.y+5);
                line(point1.x-25 , point1.y , point2.x+20 , point2.y+5);
                image(this.sling3,point1.x-30,point1.y-6,15,30) 
            } 
            
            else{
                stroke(48,22,8);
                strokeWeight(7);
                line(point1.x-25 , point1.y , point2.x-15 , point2.y+5);
                line(point1.x-25 , point1.y , point2.x+20 , point2.y+5);
                image(this.sling3,point1.x+25,point1.y-6,15,30) 
            }
            pop();
        } 
    }     
}


