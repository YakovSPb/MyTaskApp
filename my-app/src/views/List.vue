<template>
	<div>
		<h1 class="display-2 font-weight-light">Список задач</h1>
		<v-container fluid>
			<v-row class="justify-center">
				<v-col cols="12" v-if="this.tasks.length">
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Задача</th>
									<th class="text-center">Дата</th>
									<th class="text-center">Описание</th>
									<th class="text-center">Статус</th>
									<th class="text-center">Править</th>
								</tr>
							</thead>
							<tbody class="table">
								<tr v-for="(task, idx) in tasks" :key="task.id">
									<td>{{ idx + 1 }}</td>
									<td :class="{itemsuccess: task.status=='выполнено'}" class="text-left"><b>{{ task.title }}</b></td>
									<td :class="{itemsuccess: task.status=='выполнено'}">{{ new Date(task.date).toLocaleDateString() }}</td>
									<td :class="{itemsuccess: task.status=='выполнено'}" :title="task.description" class="td-desc"><div class="smalltext">{{ task.description }}</div></td>
									<td class="status" :class="{active: task.status=='активна' || task.status=='просрочена'}">{{ task.status }}</td>
									<td>
										<div class="my-2">
											<router-link :to="'task/' + task.id">
												<i class="material-icons">edit</i>
											</router-link>
										</div>
									</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-col>
				<v-col cols="6" v-else>
					<div class="d-flex justify-center align-center">
						<span>Список задач пуст.</span><i class="material-icons">free_breakfast</i>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	metaInfo: {
		title: 'Все задачи'
	},
	computed: {
		tasks() {
			return this.$store.getters.tasks
		}
	}
}
</script>

<style lang="scss" scoped>
.td-desc{
	max-width: 400px;
	text-align: left;
}
.smalltext{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.status{
	color: #43A047;
}
.active{
	color: #EF5350!important;
}

.itemsuccess{
	color: gray;
	text-decoration: line-through;	
	b{
		font-weight: normal
	}
}

</style>