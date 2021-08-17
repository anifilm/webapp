<script>
  import Wrap from './Wrap.svelte';

  let fruits = {
    apple: {
      value: '',
      options: {
        readonly: false,
        disabled: false,
        placeholder: 'placeholder A'
      }
    },
    banana: {
      value: 'BANANA',
      options: {
        disabled: false,
        placeholder: 'placeholder B'
      }
    }
  };

  function add(name) {
    console.log('add: ' + name);
  }
  function update(name) {
    console.log('update: ' + name);
  }
  function remove(name) {
    console.log('remove: ' + name);
  }
</script>

<main>
  <Wrap scopeName="apple" let:_name>
    <label class="fruits__{_name}" name="{_name}">
      <input
        bind:value={fruits[_name].value}
        readonly={fruits[_name].options.readonly}
        disabled={fruits[_name].options.disabled}
        placeholder={fruits[_name].options.placeholder}
        on:change={() => add(_name)}
      />
    </label>
  </Wrap>

  <Wrap scopeName="banana" let:_name>
    <input
      bind:value={fruits[_name].value}
      disabled={fruits[_name].options.disabled}
      placeholder={fruits[_name].options.placeholder}
      on:change={() => update(_name)}
    />
  </Wrap>

  <Wrap scopeName="cherry" let:_name>
    <div
      class="hello-{_name}"
      name="{_name}"
      on:click={() => remove(_name)}
    >
      {_name}
    </div>
  </Wrap>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
