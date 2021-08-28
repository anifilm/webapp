<script>
  import { onDestroy, tick, createEventDispatcher } from 'svelte';
  import { cards } from '~/store/list';
  import { autoFocusout } from '~/actions/autoFocusout';

  export let listId;
  export let card;

  let isEditMode = false;
  let title;
  let textareaEl;

  const dispatch = createEventDispatcher();

  function saveCard() {
    if (title.trim()) {
      cards.edit({
        listId: listId,
        cardId: card.id,
        title: title.trim()
      });
    }
    offEditMode();
  }
  function removeCard() {
    cards.remove({
      listId,
      cardId: card.id
    });
    offEditMode();
  }
  async function onEditMode() {
    isEditMode = true;
    title = card.title;
    //dispatch('editMode', true);
    await tick();
    textareaEl && textareaEl.focus();
  }
  function offEditMode() {
    isEditMode = false;
    //dispatch('editMode', false);
  }

  onDestroy(() => {
    offEditMode();
  })
</script>

<div class="card" data-card-id={card.id}>
  {card.title}
</div>

<style lang="scss">
  .card {
    margin-bottom: 8px;
  }
</style>
