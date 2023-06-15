namespace $ {

	export function $bun_tasks_time_is_today( date: string ) {
		var today = new Date().setHours( 0, 0, 0, 0 )

		var target = new Date( date ).setHours( 0, 0, 0, 0 )

		return target === today
	}

	export function $bun_tasks_time_is_prev( date: string ) {
		var today = new Date().setHours( 0, 0, 0, 0 )

		var target = new Date( date ).setHours( 0, 0, 0, 0 )

		return today > target
	}

	export function $bun_tasks_time_is_next( date: string ) {
		var today = new Date().setHours( 0, 0, 0, 0 )

		var target = new Date( date ).setHours( 0, 0, 0, 0 )

		return target > today
	}

}
