## Screenshots
<img width="1511" alt="image" src="https://user-images.githubusercontent.com/1621344/165623158-54751109-c6d8-4b74-8e9d-f433e99694f2.png">
<img width="1511" alt="image" src="https://user-images.githubusercontent.com/1621344/165622910-ffd060fc-6ac1-48c0-817f-124a7d52ff69.png">
<img width="1512" alt="image" src="https://user-images.githubusercontent.com/1621344/165623041-ce83df69-965a-4b0b-af3d-e26589117de6.png">

## How to run
### Running the app
- npm run install
- npm run dev
### Running the tests
- npm run test:unit

## Technical Choices
- Used Vue as you guys are using it I believe. I used 3 as well in order for me to explore the new version.
- Used Pinia to easily managed the state.
- Used Vue-Router to easily configure the routes.
- Used vanilla CSS as I don't have experience using Tailwind (**willing to learn**).
- Used native browser inputs to save time
- Avoided making reusable element to save time.

## Architecture
- `/assets` - CSS styling that is reusable across the app
- `/datas` - Data of countries & plans
- `/logic` - Business logic of the premium calculator (**with unit test**). Purely typescript to make it easy to test and to port to other platform like ReactNative
- `/router` - Routing configuration
- `/stores` - States that are shareable across the app
- `/types` - Typings mainly for countries & plans
- `/views` - Page of the app.
