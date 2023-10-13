expo-font
react-native-dotenv
axios

## NOTES

# What is bluetooth beacon

Yes, you can use a combination of geolocation and Bluetooth Low Energy (BLE) technology to determine if a person is inside a rectangular boundary (geofence) and in front of you within that boundary. Here's a detailed approach:

1. **Setup and Beacon Placement:**
   - Define the rectangular boundary of your classroom and mark the coordinates of its corners (latitude and longitude).
   - Strategically place BLE beacons inside the classroom to cover different areas. The beacons should be spread out to ensure coverage and accuracy.

2. **BLE Beacon Advertising:**
   - Configure the BLE beacons to advertise unique identifiers (UUIDs) that your app can detect.
   - Use the `react-native-ble-plx` library to scan for nearby BLE devices (including beacons) within the classroom.

3. **Geolocation and Rectangular Boundary:**
   - Continuously obtain the user's geolocation using the device's built-in GPS or Wi-Fi positioning.
   - Compare the user's geolocation (latitude and longitude) with the coordinates of the rectangular boundary to determine if they are inside the classroom.

4. **Bluetooth and Proximity:**
   - Use the BLE signal strength (RSSI) to estimate the proximity of the user to the beacons.
   - Place BLE beacons near the entrance of the classroom and along the front side to ensure that they are detected when a person is in front.

5. **Positional Determination:**
   - Combine the geolocation information and BLE signal strength data to make a determination.
   - If the user's geolocation is within the rectangular boundary and the signal strength from the nearest front-side beacon is strong, you can infer that the person is likely in front of you inside the classroom.

6. **Thresholds and Calibration:**
   - Establish signal strength thresholds that indicate "in front" based on signal strength variations during testing.
   - Calibrate the system by testing it with real users in different scenarios to fine-tune the thresholds and improve accuracy.

7. **User Feedback:**
   - Provide clear user feedback through the app's interface to indicate whether the person is determined to be in front of you inside the classroom.

Keep in mind that this approach requires careful calibration and testing in the actual classroom environment to ensure accuracy. The precision of the system will depend on factors such as the accuracy of geolocation, the quality of BLE signals, and the density and placement of beacons.

Additionally, note that the accuracy of positioning within a rectangular boundary using this method might not be extremely high, and there could be limitations due to signal interference or other environmental factors. Consider this approach as a way to provide a rough indication rather than highly precise positioning.


# How lat and long works?

Latitude and longitude are the two primary coordinates used to specify a location on the Earth's surface. They form a geographic coordinate system that enables you to pinpoint any point on the planet.

- **Latitude (North-South Coordinate):** Latitude measures the distance north or south of the equator, which is an imaginary line that circles the Earth horizontally. Latitude is expressed in degrees, with positive values for locations north of the equator (0°) and negative values for locations south of the equator (0°). The equator itself is at 0° latitude.

- **Longitude (East-West Coordinate):** Longitude measures the distance east or west of the Prime Meridian, an imaginary line that runs vertically from the North Pole to the South Pole, passing through Greenwich, London. Longitude is also expressed in degrees, with positive values for locations east of the Prime Meridian (0°) and negative values for locations west of it. The Prime Meridian itself is at 0° longitude.

To determine if a person is behind or in front of a reference latitude and longitude, you need to consider both the latitude and longitude values of the reference point and the person's location. Let's break it down:

1. **Latitude Comparison:**
   - If the person's latitude is greater (numerically larger) than the reference latitude, they are to the north of the reference point.
   - If the person's latitude is smaller (numerically smaller) than the reference latitude, they are to the south of the reference point.

2. **Longitude Comparison:**
   - If the person's longitude is greater (numerically larger) than the reference longitude, they are to the east of the reference point.
   - If the person's longitude is smaller (numerically smaller) than the reference longitude, they are to the west of the reference point.

When you combine these comparisons, you can determine whether the person is behind (south or west) or in front of (north or east) the reference point.

Here's an example:

Let's say the reference point has a latitude of 40.0° and a longitude of -75.0°. If a person's location is at latitude 41.0° and longitude -74.0°, you can compare the values:

- Latitude: Person's latitude (41.0°) is greater than reference latitude (40.0°), indicating the person is to the north.
- Longitude: Person's longitude (-74.0°) is greater than reference longitude (-75.0°), indicating the person is to the east.

Therefore, in this example, the person is in front of the reference latitude and longitude.

Remember that these calculations provide a simple determination of relative position based on latitude and longitude values. They don't take into account factors like altitude, curvature of the Earth, or the specific orientation of the person. For more precise spatial analysis, especially in three-dimensional environments, additional techniques and technologies may be required.