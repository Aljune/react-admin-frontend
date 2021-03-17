import {useEffect, useState} from "react";
import {
    makeStyles ,
    FormControl,
    Table,
    TableBody ,
    TableCell ,
    TableContainer ,
    TableHead ,
    TableRow ,
    Paper,
    Box,
    InputLabel } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
         minWidth: 650,
    },
});        
export const UserList = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/test')
        .then(res => res.json())
        .then(json => setData(json[('data')]))
  }, []);
    return (
        <>
    
        <InputLabel>
         <Box py={3}> Users </Box>
        </InputLabel>
        <FormControl fullWidth={true}>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">introduction</TableCell>
                    <TableCell align="right">location</TableCell>
                    <TableCell align="right">cost</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row) => (
                    <TableRow key={row[('id')]}>
                    <TableCell component="th" scope="row">
                        {row[('name')]}
                    </TableCell>
                    <TableCell align="right">{row[('introduction')]}</TableCell>
                    <TableCell align="right">{row[('location')]}</TableCell>
                    <TableCell align="right">{row[('cost')]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </FormControl>
        </>
    );
};
export default UserList;
