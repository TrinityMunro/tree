const drawTree = require("./asciitree");

class Node {
  left = null;
  right = null;
  weight = 0;
  value;

  constructor(value) {
    this.value = value;
  }
}

class Tree {
  root = null;

  insert(value, cur = this.root) {
    if (cur === null) {
      return void (this.root = new Node(value));
    }
    if (value < cur.value) {
      if (cur.left) {
        this.insert(value, cur.left);
      } else {
        cur.left = new Node(value);
      }
    } else {
      if (cur.right) {
        this.insert(value, cur.right);
      } else {
        cur.right = new Node(value);
      }
    }
  }

  dps(cb, cur = this.root, index = 0) {
    if (!cur) {
      return;
    }
    cb(cur.value, index++);
    this.dps(cb, cur.left, index);
    this.dps(cb, cur.right, index);
  }

  bfs(cb, cur = this.root) {
    const lookup = {};
    this.dps(
      (value, index) =>
        lookup[index] ? lookup[index].push(value) : (lookup[index] = [value]),
      cur
    );
    for (const arr of Object.values(lookup)) for (const elem of arr) cb(elem);
  }

  insertAVL(value, cur = this.root) {
    if (cur === null) {
      return void (this.root = new Node(value));
    }
    if (value < cur.value) {
      cur.weight--;
      if (cur.left) {
        if (cur.weight){

        }
        this.insert(value, cur.left);
      } else {
        cur.left = new Node(value);
      }
    } else {
      cur.weight++;
      if (cur.right) {
        if (cur.weight){
          
        }
        this.insert(value, cur.right);
      } else {
        cur.right = new Node(value);
      }
    }
  }
}

const tree = new Tree();
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(6);

tree.insert(7);
tree.bfs(console.log);
