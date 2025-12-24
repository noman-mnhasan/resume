

const jobPositionEntries = document.querySelectorAll('.job-position');

jobPositionEntries.forEach(position => {

    position.innerHTML = `
        <table>
            <tr>
                <td style="width: 250px;">
                    ${position.getAttribute('position-name')}
                </td>
                <td>
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                </td>
                <td>
                    ${position.getAttribute('position-tenure')}
                </td>
            </tr>
        </table>
    `;
});



