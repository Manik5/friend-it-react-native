import FLATS from '../../data/flat.data';
import { DELETE_FLAT } from '../actions/flat.action';

const initialState = {
  availableFlats: FLATS,
  userFlats: FLATS.filter(flat => flat.ownerId === 'u1')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FLAT:
      return {
        ...state,
        userFlats: state.userFlats.filter(
          flat => flat.id !== action.fid
        ),
        availableFlats: state.userFlats.filter(
          flat => flat.id !== action.fid
        )
      };
  }
  return state;
};


