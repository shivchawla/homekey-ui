import PropTypes from 'prop-types';

export const CountryPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
});

// export const NavigationStatePropType = PropTypes.shape({
//   routes: PropTypes.arrayOf(NavigationRoutePropType).isRequired,
//   index: PropTypes.number.isRequired,
// });

// export const SceneRendererPropType = {
//   layout: PropTypes.shape({
//     measured: PropTypes.bool.isRequired,
//     height: PropTypes.number.isRequired,
//     width: PropTypes.number.isRequired,
//   }).isRequired,
//   navigationState: NavigationStatePropType.isRequired,
//   position: PropTypes.instanceOf(Animated.Value).isRequired,
//   jumpToIndex: PropTypes.func.isRequired,
//   getLastPosition: PropTypes.func.isRequired,
//   subscribe: PropTypes.func.isRequired,
// };
