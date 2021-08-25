<script>
    import DataTable from '$lib/ui/DataTable.svelte'
    import Switch from '$lib/ui/Switch.svelte'

    const shareRow = (id) => {
        console.log('shared: ', id);
    }
    const deleteRow = (id) => {
        console.log('deleted: ', id);
    }

    const head = {
        rank: {
            render: true,
			type: 'value',
			title: 'Rank',
			sort: true,
        },
        game: {
            render: true,
			type: 'value',
			title: 'Game',
			sort: true,
        },
        score: {
			render: true,
			type: 'value',
			title: 'Score',
			sort: true,
        },
        times_ranked: {
			render: true,
			type: 'value',
            format: 'number-with-commas',
			title: 'Times Ranked',
			sort: true,
        },
        share: {
			render: true,
			type: 'icon',
            icon: 'share',
			title: '',
			sort: false,
            func: shareRow
        },
        delete: {
			render: true,
			type: 'icon',
            icon: 'trash',
			title: '',
			sort: false,
            func: deleteRow
        },
        id: {
            render: false,
			type: 'value',
			title: 'ID',
			sort: true,
        },
        active: {
            render: false,
			type: 'component',
            title: 'Status',
			component: Switch,
            width: 50,
			propModel: {
				// propName: info from row data (sql query) to send through as the prop value
				key: 'id',
				active: 'active'
			}
        }
    }

    const rows = [
        {
            rank: 1,
            game: 'Eclipse',
            score: 87.5,
            times_ranked: 1222,
            active: 1,
            id: 10
        },
        {
            rank: 2,
            game: 'TI4',
            score: 86.5,
            times_ranked: 2244,
            active: 1,
            id: 11
        },
        {
            rank: 3,
            game: 'Brass: Birmingham',
            score: 85.5,
            times_ranked: 6985,
            active: 1,
            id: 12
        },
        {
            rank: 4,
            game: 'Terraforming Mars',
            score: 84.5,
            times_ranked: 1234,
            active: 1,
            id: 13
        },
        {
            rank: 5,
            game: 'Gloomhaven',
            score: 83.5,
            times_ranked: 2244,
            active: 1,
            id: 14
        },
        {
            rank: 6,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 15
        },
        {
            rank: 7,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 16
        },
        {
            rank: 8,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 17
        },
        {
            rank: 9,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 18
        },
        {
            rank: 10,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 19
        },
        {
            rank: 11,
            game: 'Concordia',
            score: 82.5,
            times_ranked: 2277,
            active: 1,
            id: 20
        },
    ]

</script>

<h2>Data Table</h2>
<DataTable striped={true} {head} {rows} searchable={true} paginate={true} pageSize={5} />

<style>

    h2 {
        margin: 2rem 0 1rem 0;
    }

</style>