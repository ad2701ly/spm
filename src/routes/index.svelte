<script lang="ts">
    let user: User = {
        hp: "",
        pass: "",
    };

    async function login() {
        const request = await fetch("/login.json", {
            method: "post",
            body: JSON.stringify(user),
        });
        const hasil = await request.json();

        console.log(hasil);
    }
</script>

<svelte:head>
    <title>TeMan Milktawa</title>
</svelte:head>
<form>
    <input type="text" bind:value={user.hp} />
    <input type="password" bind:value={user.pass} />
</form>

<button on:click={login}>Submit</button>
