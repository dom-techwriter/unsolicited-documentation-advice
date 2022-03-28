# Visualizer boilerplate


```html
<h1>Basic details about the tax payer</h1>
    <ul>
        <li>Name: {{belvo.tax_payer_information.name}} {{belvo.tax_payer_information.first_last_name}} {{belvo.tax_payer_information.second_last_name}}</li>
        <li>RFC: {{belvo.tax_payer_information.rfc}}</li>
    </ul>

<h2>Economic activities</h2>

<table class="tftable" border="1">
    <tr>
        <th>Economic Activity</th>
        <th>Percentage</th>
    </tr>
    
    {{#each response.economic_activity}}
        <tr id=row_{{@key}} onClick="handleClick(this.id)">
            <td id={{@key}}>{{economic_activity}}</td>
            <td>{{percentage}}</td>
        </tr>
    {{/each}}
</table>

```