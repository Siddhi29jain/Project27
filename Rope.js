class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB : {x:offsetX,y:offsetY}
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
       
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    


