import KanbanAPI from '../api/KanbanAPI.js';
import DropZone from './DropZone.js';

export default class Item {
  constructor(id, content) {
    //const bottomDropZone = DropZone.createDropZone();

    this.elements = {};
    this.elements.root = Item.createRoot();
    this.elements.input = this.elements.root.querySelector('.kanban__item-input');

    this.elements.root.dataset.id = id;
    this.elements.input.textContent = content;
    this.content = content;
    //this.elements.root.appendChild(bottomDropZone);

    const onBlur = () => {
      const newContent = this.elements.input.textContent.trim();
    }
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
			<div class="kanban__item" draggable="true">
				<div class="kanban__item-input" contenteditable></div>
			</div>
		`).children[0];
  }
}
