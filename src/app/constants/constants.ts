import { District } from '../models/district';
import { State } from '../models/state';
import { Stats } from '../models/stats';

export const Statistics: Stats[] = [
  {
    marketRate: '₹12',
    name: 'HDFC',
    number: 112,
    weight: '5%',
    value: '₹1,536',
  },
  {
    marketRate: '₹10',
    name: 'SBI',
    number: 13,
    weight: '2%',
    value: '₹150',
  },
  {
    name: 'Yes Bank',
    number: 123,
    marketRate: '₹120',
    weight: '3%',
    value: '₹1,200',
  },
  {
    name: 'BOB',
    number: 321,
    marketRate: '₹145',
    weight: '10%',
    value: '₹12,000',
  },
  {
    name: 'ICICI',
    number: 400,
    marketRate: '₹145',
    weight: '10%',
    value: '₹13,000',
  },
];

export const DISTRICTS: District[] = [
  { distId: 1, text: 'Anantapur' },
  { distId: 1, text: 'Chittoor' },
  { distId: 1, text: 'East Godavari' },
  { distId: 1, text: 'Guntur' },
  { distId: 1, text: 'Krishna' },
  { distId: 1, text: 'Kurnool' },
  { distId: 1, text: 'Nellore' },
  { distId: 1, text: 'Prakasam' },
  { distId: 1, text: 'Srikakulam' },
  { distId: 1, text: 'Visakhapatnam' },
  { distId: 1, text: 'Vizianagaram' },
  { distId: 1, text: 'West Godavari' },
  { distId: 1, text: 'YSR Kadapa' },
];

export const STATES: State[] = [
  { id: 1, text: 'Andhra Pradesh' },
  { id: 2, text: 'Arunachal Pradesh' },
  { id: 3, text: 'Assam' },
  { id: 4, text: 'Bihar' },
  { id: 5, text: 'Chhattisgarh' },
  { id: 6, text: 'Goa' },
  { id: 7, text: 'Gujarat' },
  { id: 8, text: 'Haryana' },
  { id: 9, text: 'Himachal Pradesh' },
  { id: 10, text: 'Jharkhand' },
  { id: 11, text: 'Karnataka' },
  { id: 12, text: 'Kerala' },
  { id: 13, text: 'Madhya Pradesh' },
  { id: 14, text: 'Maharashtra' },
  { id: 15, text: 'Manipur' },
  { id: 16, text: 'Meghalaya' },
  { id: 17, text: 'Mizoram' },
  { id: 18, text: 'Nagaland' },
  { id: 19, text: 'Odisha' },
  { id: 20, text: 'Punjab' },
  { id: 21, text: 'Rajasthan' },
  { id: 22, text: 'Sikkim' },
  { id: 23, text: 'Tamil Nadu' },
  { id: 24, text: 'Telangana' },
  { id: 25, text: 'Tripura' },
  { id: 26, text: 'Uttarakhand' },
  { id: 27, text: 'Uttar Pradesh' },
  { id: 28, text: 'West Bengal' },
];
