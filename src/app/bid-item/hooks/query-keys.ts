import { ViewBidItemsEnum } from '../view-bid-items';

const queryKeys = {
  getBidItems: (variant: ViewBidItemsEnum) => {
    return ['get-bid-items', variant];
  },
};

export default queryKeys;
