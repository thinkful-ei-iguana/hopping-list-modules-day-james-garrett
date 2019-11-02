import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.error(`Name not valid`);
  }
}

function findAndToggleChecked(id) {
  let item = this.findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let foundItem = this.findById(id);
    foundItem.name = name;
  } catch (error) {
    console.error(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  let deleteItem = this.findById(id);
  let itemIndex = this.items.findIndex(item => item === deleteItem);
  this.items.splice(itemIndex, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
