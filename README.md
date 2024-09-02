# react-native-gesture-handler cursor style crash repro

* `npm i`
* `npx expo prebuild -p ios`
* `npm run ios`

On both the simulator and a real device, I get:
`Exception thrown while executing UI block: -[RNGestureHandlerButton setCursor:]: unrecognized selector sent to instance 0x1143bb2e0`

Commenting out the two broken buttons in `app/index.tsx` and reloading works fine.
