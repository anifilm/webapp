import { ADD_COLOR, RATE_COLOR, REMOVE_COLOR, SORT_COLORS } from './constants';
import { v4 } from 'uuid';

export const addColor = (title, color) => ({
  type: ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
});

export const removeColor = (id) => ({
  type: REMOVE_COLOR,
  id,
});

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating,
});

export const sortColors = (sortedBy) =>
  sortedBy === 'rating'
    ? {
        type: SORT_COLORS,
        sortBy: 'SORTED_BY_RATING',
      }
    : sortedBy === 'title'
    ? {
        type: SORT_COLORS,
        sortBy: 'SORTED_BY_TITLE',
      }
    : {
        type: SORT_COLORS,
        sortBy: 'SORTED_BY_DATE',
      };
