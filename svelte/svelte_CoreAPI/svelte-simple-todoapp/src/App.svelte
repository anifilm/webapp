<script>
  import { writable } from 'svelte/store'
  import Todo from './Todo.svelte'

  let title = ''
  let todos = writable([])
  let id = 0

  function createTodo() {
    if (!title.trim()) {
      title = ''
      return
    }
    $todos.push({
      id,
      title
    })
    $todos = $todos
    title = ''
    id += 1
  }

  // 엔터키 입력으로 해당 함수 실행 예제
  // if (e.key === 'Enter') { createTodo() }
  // e.key === 'Enter' ? createTodo() : undefined
  // e.key === 'Enter' && createTodo()

</script>

<input
  bind:value={title}
  type="text"
  on:keydown={(e) => {
    e.key === 'Enter' && createTodo()
  }}
 />
<button on:click={createTodo}>Create Todo</button>

{#each [...$todos].reverse() as todo}
  <Todo {todos} {todo}/>
{/each}
