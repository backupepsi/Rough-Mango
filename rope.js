class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   fly(){
       this.rope.bodyA = null
   } 

}