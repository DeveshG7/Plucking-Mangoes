class Chain{

constructor(bodyA, pointB){

var options = {
bodyA : bodyA,
pointB :pointB,
stiffness : 0.004,
lenght : 10

}

this.pointB=pointB;

this.rope = Constraint.create(options);

World.add(world, this.rope);
}

fly(){
    this.rope.bodyA=null;
}

 attach(body){
 this.rope.bodyA=body;
 }


display(){
    if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3.5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}