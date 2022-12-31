import {IIterator, IIteratorAggregator, Action} from '../../src'

class Node implements IIteratorAggregator<Node>{
  public readonly children: Node[] = []

  constructor(private readonly _name: string){}

  get name(): string{
    return this._name
  }
  addChild(child: Node): void{
    this.children.push(child);
  }

  hasChildren(): boolean{
    return this.children.length>0
  } 

  getIterator(): IIterator<Node>{
    return new FirstBreadthIterator(this);
  }
 
  forEach(action: Action<Node>): void{
    const iterator = this.getIterator();
    while(iterator.hasNext()){
      action(iterator.getNext())
    }
  }
}

export class FirstBreadthIterator implements IIterator<Node> {
  private readonly items: Node[] = []
  
  constructor(node: Node){
    this.items.push(node);
  }

  hasNext(): boolean {
      return this.items.length>0
  }

  getNext(): Node {
      let current = this.items.shift() as Node;
      current?.children.forEach(child=>{
        this.items.push(child);
      })
      return current
  }
}

describe('iterator test', ()=>{
  test('test node',()=>{
    const root = new Node('root')
    const node1 = new Node('node1')
    const node2 = new Node('node2')
    const node3 = new Node('node3')
    const node4 = new Node('node4')
    const node5 = new Node('node5')
    const node6 = new Node('node6')
    const node7 = new Node('node7')
  
    root.addChild(node1)
    root.addChild(node2)
    root.addChild(node3)
    node1.addChild(node4)
    node1.addChild(node5)
    node5.addChild(node6)
    node2.addChild(node7)

    const iterator = root.getIterator()
    let str = ''
    while(iterator.hasNext()){
      let node = iterator.getNext()
      str += '---' + node.name
    }
    console.log(str)

    str = ''
    root.forEach(node=>{
      str += '---' + node.name
    })

    console.log(str)
  })
})
