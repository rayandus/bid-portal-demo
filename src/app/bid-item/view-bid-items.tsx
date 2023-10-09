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
import AddIcon from '@mui/icons-material/Add';
import { BidExpiryDuration, Button, Container } from '../common/components';
import { useBidItems } from './hooks';
import { formatAmount } from '../common/helpers';
import { useNavigate } from 'react-router-dom';

export enum ViewBidItemsEnum {
  ALL = 'all',
  MANAGED = 'managed',
}

interface ViewBidItemsProps {
  variant: ViewBidItemsEnum;
}

const ViewBidItems = (props: ViewBidItemsProps) => {
  const { variant } = props;

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const isManagedView = variant === ViewBidItemsEnum.MANAGED;

  const { data: bidItems = [] } = useBidItems({ variant });

  const navigate = useNavigate();

  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      setPage(newPage);
    },
    [],
  );

  const handleRowsPerPageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setRowsPerPage(value);
    setPage(0);
  }, []);

  const handleCreateBidItem = useCallback(() => {
    navigate('/create-bid-item');
  }, [navigate]);

  return (
    <ViewBidItemsContainer maxWidth="md">
      <Action>
        {!isManagedView && (
          <>
            <Button variant="contained" width="20%" color="warning">
              Ongoing
            </Button>
            <Button variant="contained" width="20%" color="success">
              Completed
            </Button>
          </>
        )}
        {isManagedView && (
          <Button variant="contained" startIcon={<AddIcon />} width="20%" onClick={handleCreateBidItem}>
            Create Item
          </Button>
        )}
      </Action>
      <TableWrap>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Current Price</TableCell>
              <TableCell align="center">Duration</TableCell>
              {!isManagedView && <TableCell align="center">Bid</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {bidItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
              <Row key={item.id}>
                <Cell component="th" scope="row">
                  {item.name}
                </Cell>
                <Cell align="right">{formatAmount({ value: item.currentPrice })}</Cell>
                <Cell align="center">
                  <BidExpiryDuration {...item.currentExpiryDuration} />
                </Cell>
                {!isManagedView && (
                  <Cell align="center">
                    <Button variant="contained" size="small" width="100%">
                      Bid
                    </Button>
                  </Cell>
                )}
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableWrap>
      {/* TO DO: Server-side pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={bidItems.length}
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

export default ViewBidItems;
