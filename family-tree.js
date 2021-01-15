class FamilyTree {
  constructor(value) {
    this.value = value;
    if (!value) throw new Error('Please add a value');
    if (typeof value !== 'string') throw new Error('Invalid initalizer, please use string');
    this.children = [];
    this.size = 1;
  }

  insert(child) {
    this.children.push(new FamilyTree(child));
    this.size++;
  }

  familySize() {
    return this.size;
  }

  findMember(name) {
    return this.children.find(child => child.value === name)
  }

  log() {

  }
}

module.exports = FamilyTree;
