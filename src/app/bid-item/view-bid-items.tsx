import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled/macro';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import { Button, Container } from '../common/components';

const ViewBidItems = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      setPage(newPage);
    },
    [],
  );

  const handleRowsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);
      setRowsPerPage(value);
      setPage(0);
    },
    [],
  );

  return (
    <ViewBidItemsContainer maxWidth="md">
      <Action>
        <Button variant="contained" width="20%" color="warning">Ongoing</Button>
        <Button variant="contained" width="20%" color="success">Completed</Button>
      </Action>
      <TableWrap>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Current Price</TableCell>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Bid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.id}>
                  <Cell component="th" scope="row">
                    {row.name}
                  </Cell>
                  <Cell align="right">{row.currentPrice}</Cell>
                  <Cell align="center">{row.duration}</Cell>
                  <Cell align="center">
                    <Button variant="contained" size="small" width="100%">
                      Bid
                    </Button>
                  </Cell>
                </Row>
              ))}
          </TableBody>
        </Table>
      </TableWrap>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </ViewBidItemsContainer>
  );
};

const Action = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 30px auto;
`;

const ViewBidItemsContainer = styled(Container)`
  margin-top: 150px;
  padding-bottom: 50px;
`;

const TableWrap = styled(TableContainer)`
  margin-top: 20px;
`;

const Row = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

const Cell = styled(TableCell)`
  border: 0;
`;

const createData = (id: string, name: string, currentPrice: string, duration: string) => {
  return { id, name, currentPrice, duration };
};

const rows = [
  createData('1001', 'Item name 1', '$100.00', '1h3m'),
  createData('1002', 'Item name 2', '$100.00', '1h3m'),
  createData('1003', 'Item name 3', '$100.00', '1h3m'),
  createData('1004', 'Item name 4', '$100.00', '1h3m'),
  createData('1005', 'Item name 5', '$100.00', '1h3m'),
  createData('1006', 'Item name 6', '$100.00', '1h3m'),
  createData('1007', 'Item name 7', '$100.00', '1h3m'),
  createData('1008', 'Item name 8', '$100.00', '1h3m'),
  createData('1009', 'Item name 9', '$100.00', '1h3m'),
  createData('1010', 'Item name 10', '$100.00', '1h3m'),
  createData('1011', 'Item name 11', '$100.00', '1h3m'),
  createData('1012', 'Item name 12', '$100.00', '1h3m'),
];

export default ViewBidItems;
