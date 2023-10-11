import { useCallback } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import queryKeys from './query-keys';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import { BidItem } from '../types';
import { ViewBidItemsEnum } from '../view-bid-items';

type UseBidItemsResponse = UseQueryResult<BidItem[], ApiError>;

interface UseBidItemsProps {
  variant: ViewBidItemsEnum;
}

const useBidItems = (props: UseBidItemsProps): UseBidItemsResponse => {
  const { variant } = props;

  const { axiosInstance } = useApiService();

  const fetch = useCallback(async () => {
    const endpoint = variant === ViewBidItemsEnum.ALL ? '/bid-item/all' : '/bid-item';

    const response = await axiosInstance.get<BidItem[]>(endpoint);

    return response.data;
  }, [axiosInstance, variant]);

  const result = useQuery(queryKeys.getBidItems(), () => fetch(), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError: (_error: ApiError) => {},
  });

  return result;
};

export default useBidItems;
