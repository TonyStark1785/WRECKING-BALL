class Ball{
    constructor(x, y, radius){
        var options = { 
        'density': 4,
        'frictionAir': 0.005
        }
        this.body=Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        ellipse(pos.x, pos.y, this.radius, this.radius)
    }
}
