import FLATS from '../../data/flat.data';

const initialState = {
  availableFlats: FLATS,
  userFlats: FLATS.filter(flat => flat.ownerId === 'u1')
};

export default (state = initialState, action) => {
  return state;
};


