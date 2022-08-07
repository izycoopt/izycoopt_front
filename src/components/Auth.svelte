<script>
	// @ts-nocheck
	import { supabase } from '../supabase';

	let loading = false;
	let email;
	const handeLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			console.log('check email');
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl font-bold text-center text-grat-800 mc:text-3xl">Log in</h1>

<p class="text-center mt-2">Sign in via magic link with your email</p>

<form on:submit|preventDefault={handeLogin}>
	<div class="flex flex-col text-sm mn-2">
		<label for="email">Email</label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none rounded-lg focus:border-gray-500"
			name="email"
			type="email"
			placeholder="email"
			bind:value={email}
		/>
		<button
			type="submit"
			class="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded  shadow-sm
    focus:outline-none focus:shadow-outline"
		>
			Log in</button
		>
	</div>
</form>
