import { ExpiryDuration } from '../../common/components';

export enum BidStatusEnum {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
}

export interface BidItem {
  id: string;
  userId: string;
  name: string;
  startPrice: number;
  isActive: boolean;
  status: BidStatusEnum;
  expiryDuration: ExpiryDuration;
  expiryStartDateTime?: string;
  currentPrice: number;
  currentExpiryDuration: ExpiryDuration;
}
