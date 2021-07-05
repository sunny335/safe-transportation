import { userContants } from '../actions/constants';

const initState = {
  propertie: [
    {
      id: 1,
      Name: 'Dreamy House',
      location: 'Dhaka',
      price: '23,43,000 TK',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 1,
      Name: 'Shopno Bilash',
      location: 'Chittagonj',
      price: '29,43,000 TK',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 1,
      Name: 'Dreamy House',
      location: 'Comilla',
      price: '22,43,000 TK',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 1,
      Name: 'Dreamy House',
      location: 'Chandpur',
      price: '29,43,000 TK',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 1,
      Name: 'Dreamy House',
      location: 'Chandpur',
      price: '26,43,000 TK',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ],
};

export default (state = initState, action) => {
  //   switch (action.type) {
  //     case userContants.USER_REGISTER_REQUEST:
  //       state = {
  //         ...state,
  //         loading: true,
  //       };
  //       break;
  //     case userContants.USER_REGISTER_FAILURE:
  //       state = {
  //         ...state,
  //         loading: true,
  //         error: action.payload.error,
  //         message: 'sdfgdg',
  //       };
  //       break;
  //     case userContants.USER_REGISTER_SUCCESS:
  //       state = {
  //         ...state,
  //         loading: false,
  //         message: action.payload.message,
  //       };
  //       break;
  //   }
  return state;
};
