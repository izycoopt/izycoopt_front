<script>
	import { supabase } from '../supabase.js';
	const logout = () => {
		console.log('logout');
		supabase.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end">
	<button
		class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-2"
		on:click={logout}
	>
		Log out
	</button>
</div>
