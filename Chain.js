class Chain{
    constructor(body1 ,body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 50

        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain );
    }
    display(){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        
        stroke("brown");
        strokeWeight(4);
        line(point1.x , point1.y , point2.x , point2.y)
    }     
}
