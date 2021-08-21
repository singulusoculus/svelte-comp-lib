<script>
    import { fade } from 'svelte/transition'
    import Icon from '$lib/ui/Icon.svelte'
    import TextField from '$lib/ui/TextField.svelte'
    import Button from '$lib/ui/Button.svelte'

    export let head = {}
    export let rows = []
    export let striped = false
    export let highlight = false
    export let searchable = false
    export let paginate = true
    export let pageSize = 10

    let currentPage = 1
    let pageCount = Math.ceil(rows.length / pageSize)
    let lastPage = pageCount
    let totalItems = rows.length
    let visibleRows

    $: pages = newRows.reduce((result, item, index) => {
        const pageIndex = Math.floor(index / pageSize)
        if(!result[pageIndex]) {
            result[pageIndex] = [] // start new page
        }

        result[pageIndex].push(item)
        return result

    }, [])

    $: {
        if(paginate) {
            if(pages[currentPage - 1]) {
                visibleRows = pages[currentPage - 1]
            } else {
                visibleRows = []
            }
        } else {
            visibleRows = newRows
        }
    }
    
    $: from = (pageSize * currentPage) - (pageSize - 1)
    $: to = currentPage === lastPage ? totalItems : (pageSize * currentPage)

    let sorted_by;
    let sorted_asc = {};
    let tableEl
    let colCount = Object.keys(head).filter(h => head[h].render === true).length

    $: newRows = addPropsToRows(head, rows)

    // returns array of object keys
    const keys = (obj) => {
        return Object.keys(obj)
    }

    // get string or object value
    const val = (attr) => {
        if (!attr) return "";
        if (typeof attr === "object") return attr.title || "";
        return attr;
    } 

    const component = (attr) => {
        if (!attr) return '';
        if ((typeof attr === "object" && typeof attr.component === "function") || typeof attr === "function") {
            return attr.component
        }
        return attr
    }

    const props = (attr) => {
        if (typeof attr === "object") return attr.props || {};
        return {};
    }

    const addPropsToRows = (headers, rows) => {
        rows.forEach((row) => {
            keys(headers).forEach((h) => {
                if (headers[h].type === 'component' && headers[h].hasOwnProperty('propModel')) {
                    let props = {}
                    let propModel = Object.entries(headers[h].propModel)
                    propModel.forEach((prop) => {
                        props[prop[0]] = row[prop[1]]
                        row.props = props
                    })
                }
            })
        })
        return rows
    }

    const sort = (h) => {
        let data
        if (sorted_asc[h]) {
            data = rows.sort((a,b) => a[h]<b[h] ? 1:-1)
            sorted_asc[h] = false;
        } else {
            data = rows.sort((a,b) => a[h]>b[h] ? 1:-1)
            sorted_asc[h] = true;
        }
        newRows = rows
        sorted_by = h;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    const handleSearch = (e) => {
        const searchText = e.detail
        let filtered = rows.filter((item) => item.game.toLowerCase().includes(searchText.toLowerCase()))
        if (filtered.length > 0) {
            newRows = filtered
        } else {
            newRows = []
        }
    }

    const handleCopyClick = () => {
        const el = tableEl
        const body = document.body
        let range 
        let sel
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
        }
        document.execCommand("Copy");

        // Deselect
        if (window.getSelection) {
            if (window.getSelection().empty) {  // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
                window.getSelection().removeAllRanges();
                }
        }
        console.log('Copied!')
        // toasts.pushToast({msg: 'The table has been copied'})
    }

    const downloadCSV = (csv, filename) => {
        let csvFile;
        let downloadLink;

        // CSV file
        csvFile = new Blob([csv], {type: "text/csv"});

        // Download link
        downloadLink = document.createElement("a");

        // File name
        downloadLink.download = filename;

        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);

        // Hide download link
        downloadLink.style.display = "none";

        // Add the link to DOM
        document.body.appendChild(downloadLink);

        // Click download link
        downloadLink.click();
    }

    const exportTableToCSV = () => {
        const filename = 'export.csv'
        const csv = [];
        const rows = tableEl.querySelectorAll("tr")
        // const rows = tableEl
    
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            
            for (var j = 0; j < cols.length; j++) 
                row.push(cols[j].innerText);
            
            csv.push(row.join(","));        
        }

        // Download CSV file
        downloadCSV(csv.join("\n"), filename);
    }
</script>

<style>
    table {
        width: 100%;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 1.5rem;
    }

    table, th, td {
        border: none;
    }

    thead {
        color: var(--text);
    }

    tr {
        border-bottom: 1px solid var(--black);
    }

    td, th {
        padding: 7px 4px;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
    }

    table.striped>tbody>tr:nth-child(odd) {
        background-color: rgba(242,242,242,0.5);
    }

    table.striped tr {
        border-bottom: none;
    }

    table.highlight>tbody>tr {
        -webkit-transition: background-color .25s ease;
        transition: background-color .25s ease;
    }

    table.highlight>tbody>tr:hover {
        background-color: rgba(242,242,242,0.5);
    }

    a {
        text-decoration: underline;
        display: flex;
        align-items: center;
    }

    .sortable {
        cursor: pointer;
    }

    td > :global(.icon) {
        cursor: pointer;
    }

    .controls {
        display: flex; 
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .buttons {
        display: flex;
    }

    .pagination {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    .page-buttons {
        display: flex;
    }

</style>

<div class="controls">
    {#if searchable}
    <TextField prependIcon='search' label="Search"  on:textChange={handleSearch} />
    {/if}
    <div class="buttons">
        <Button text='Copy' on:clicked={handleCopyClick} icon='copy' />
        <Button text='CSV' on:clicked={exportTableToCSV} icon='file-text' />
    </div>
</div>

<table class:striped="{striped}" class:highlight="{highlight}" bind:this={tableEl}>
    <thead>
        <tr>
            {#each keys(head) as h}
                {#if head[h].render}
                    <th style="width: {head[h].width ? head[h].width : "unset"}{head[h].width ? "px" : ""};" >
                        {#if head[h].sort}
                            <div on:click={() => sort(h)} class="sortable">
                                {#if sorted_by !== h}
                                    {val(head[h])} <Icon name="chevron-up-down" size={15} />
                                {:else}
                                    {#if sorted_asc[h]}
                                        {val(head[h])} <Icon name="chevron-down" size={15} />
                                    {:else}
                                        {val(head[h])} <Icon name="chevron-up" size={15} />
                                    {/if}
                                {/if}
                            </div>
                            {:else}
                            {val(head[h])}
                        {/if}
                    </th>
                {/if}
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each visibleRows as row}
            <tr class="c-{row.item}">
                {#each keys(head) as h}
                    {#if head[h].render}
                        <td>
                            {#if head[h].type === 'component'}
                                <svelte:component this={component(head[h])} {...props(row)} />
                            {:else if head[h].type === 'link'}
                                <a href="{head[h].link}{row[head[h].linkVar]}" 
                                    target="popup"
                                    on:click={() => {window.open("", "popup", "width=1000,height=700"); return false;}}
                                >
                                    {val(row[h])} 
                                    <Icon name="external-link" size={12} />
                                </a>
                            {:else if head[h].type === 'icon'}
                                <Icon name={head[h].icon} on:clicked={head[h].func(row.id)} />
                            {:else if head[h].type === 'value'}
                                {#if head[h].format === 'currency'}
                                    {formatter.format(val(row[h]))}
                                {:else}
                                    {val(row[h])}
                                {/if}
                            {:else}
                                {val(row[h])}
                            {/if}
                        </td>
                    {/if}
                {/each}
            </tr>
        {:else}
        <tr><td colspan={colCount} style="text-align:center;">No Items Found</td></tr>
        {/each}
    </tbody>
</table>

{#if paginate}
<div class="pagination">
    <div class="page-info">
        <span>Page {currentPage} of {lastPage} (Items {from} - {to} of {totalItems})</span>
    </div>

    <div class="page-buttons">
        <Button text="First" on:clicked={() => {currentPage = 1}} disabled={currentPage === 1} />
        <Button text="Previous" on:clicked={() => {currentPage = currentPage - 1}} disabled={currentPage === 1}/>
        <Button text="Next" on:clicked={() => {currentPage = currentPage + 1}} disabled={currentPage === lastPage} />
        <Button text="Last" on:clicked={() => {currentPage = lastPage}} disabled={currentPage === lastPage} />

    </div>
</div>
{/if}