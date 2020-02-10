<template>
	<div>
		<h1 class="display-2 font-weight-light">Создать задачу</h1>
		<v-container fluid>
			<form>
				<v-row class="justify-center">
					<v-col
					cols="6"
					>
					<v-text-field
					label="Название задачи"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row class="justify-center">
				<v-col
				cols="6"
				>
				<v-textarea
				name="input-7-1"
				label="Постановка задачи"
				value=""
				counter="256"
				></v-textarea>
			</v-col>
		</v-row>


		<v-row class="justify-center">
			<v-col cols="6">
				<v-menu
				ref="menu1"
				v-model="menu1"
				:close-on-content-click="false"
				transition="scale-transition"
				offset-y
				max-width="290px"
				min-width="290px"
				>
				<template v-slot:activator="{ on }">
					<v-text-field
					v-model="dateFormatted"
					label="Срок задачи"
					persistent-hint
					prepend-icon="event"
					@blur="date = parseDate(dateFormatted)"
					v-on="on"
					></v-text-field>
				</template>
				<v-date-picker v-model="date" locale="ru-RU" first-day-of-week="1" no-title @input="menu1 = false"></v-date-picker>
			</v-menu>
			<div class="my-2">
				<v-btn middle dark color="primary">Создать</v-btn>
			</div>
		</v-col>
	</v-row>
</form>
</v-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	data: vm => ({
		date: new Date().toISOString().substr(0, 10),
		dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
		menu1: false
	}),
	computed: {
		computedDateFormatted () {
			return this.formatDate(this.date)
		},
	},
	watch: {
		date (val) {
			this.dateFormatted = this.formatDate(this.date)
		},
	},
	methods: {
		formatDate (date) {
			if (!date) return null
				const [year, month, day] = date.split('-')
			return `${day}/${month}/${year}`
		},
		parseDate (date) {
			if (!date) return null
				const [month, day, year] = date.split('/')
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
		},
	}
}
</script>
