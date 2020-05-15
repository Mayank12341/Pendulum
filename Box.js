class Box {
  constructor(x, y ) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 100,100,options);

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y,100,100);
  }
};
