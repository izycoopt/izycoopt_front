<script>
	// @ts-nocheck
	import { deleteTodo, toggleTodoCompleted } from '../stores/todoStore';
	export let todo;
	deleteTodo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
	<input
		class="mr-2 form-checkbox h-5 w-5"
		name=""
		checked={todo.completed}
		on:change={() => {
			// @ts-ignore
			toggleTodoCompleted(todo.id, todo.completed);
		}}
		type="checkbox"
	/>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}> {todo.text}</span>
	<button
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded 
    focus:outline-none focus:shadow-outline"
		on:click={() => {
			// @ts-ignore
			deleteTodo(todo.id);
		}}
	/>
</li>
