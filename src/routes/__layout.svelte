<script>
	// @ts-nocheck
	import Auth from '../components/Auth.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import { user } from '../stores/authStore';
	import { supabase } from '../supabase';
	import { loadTodos } from '../stores/todoStore';
	console.log(supabase.auth.user());
	user.set(supabase.auth.user());
	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			loadTodos();
		}
	});
</script>

<div class="container mx-auto my-6 max-w-lg bg-red">
	{#if $user}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
