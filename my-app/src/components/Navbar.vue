<template>
	<div>
		<v-navigation-drawer
		v-model="drawer"
		app
		right
		>
		<v-list dense>
			<v-list-item link to="/">
				<v-list-item-action>
					<v-icon>mdi-home</v-icon>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title>Создать задачу</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-list-item link to="/list">
				<v-list-item-action>
					<v-icon>mdi-contact-mail</v-icon>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title>Все задачи</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>

	<v-app-bar
	app
	color="cyan"
	dark
	>
<router-link to="/">
	<img src="../assets/logo.png" height="50" width="50" alt="alt">
</router-link>
	<v-spacer />

	<v-toolbar-title>Мои задачи</v-toolbar-title>

	<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
</v-app-bar>
</div>
</template>

<script>
export default{
	name: 'Navbar',
	data: () => ({
		drawer: null,
	}),
}
</script>