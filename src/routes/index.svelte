<script>
	// @ts-nocheck
	import { loadTodos, todos } from '../stores/todoStore';
	import Todo from '../components/Todo.svelte';
	import TodoForm from '../components/TodoForm.svelte';
	loadTodos();
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">To do list</h1>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} index={todo.id} />
	{/each}
</main>
