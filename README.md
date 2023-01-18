# Slider

Responsive slider build in a native javascript ES6 with a nice transitions effects.

## Features

- Navigation Arrows (Desktop View Only). When the last slide is reached, it is automatically repeat
  from the start (continues loop).
- Navigation Dots (Desktop and Mobile). with a quick navigation, they are
  provide an indication of the active slide.
- Configurable Auto Play Option to switch between slides based on a given time duration.
- The slider is self initialized, which means you can use it without having to write any custom
  javascript code.
- Smooth transition effect between slides, the smooth transition effect is take into account
  the direction of navigation, and it is moving to the same direction of navigation (Forward/Backward,
  Left to right/Right to left)

#### auto play

- You can add the auto play for the silder by adding class "auto-play" to the element with class "slider".
- To specify the auto play duration for the slider add a custom attribute [auto-data-autoplay-duration="3000"] for the element with class "slider" and then specify the duration in milliseconds.
  - In case of not specifying the auto play duration a default "3000 milliseconds" will be used.
