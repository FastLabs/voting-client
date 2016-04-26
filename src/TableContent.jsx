import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table'



class TableContent extends React.Component {

    render () {
        return (<Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>
                        ID
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>)
    }

}

export default TableContent;