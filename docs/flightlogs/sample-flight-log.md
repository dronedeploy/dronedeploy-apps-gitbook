# Sample Flight Log

This is our latest specification for flight logs. Our support for any other version of flight logs are depricated. If you received a flight log from customer that is not upto this specification, we recommend that you notify users with some messaging that an older version of flight log was used. 

### Download our sample flight log [here](https://www.dropbox.com/s/922zzgckavrmevn/587936ec02c50e25fa9cf365_2017-01-13-202254-159_2017-01-13-202714-779.log?dl=0).

### File Name Convention

`587936ec02c50e25fa9cf365_2017-01-13-202254-159_2017-01-13-202714-779.log`

Plan ID: 587936ec02c50e25fa9cf365  
Start Time Stamp: 2017-01-13-202254-159 \(yyyy-MM-dd-hhmmss-SSS\)  
End Time Stamp:  2017-01-13-202714-779 \(yyyy-MM-dd-hhmmss-SSS\)

### Header

```
#DroneDeploy    2.1.0
#Flight Recorder
Session ID    587936ec02c50e25fa9cf365
Session Start    01/13/2017 20:22:54
#Device
Device Model    iPhone
Device User Interface Idiom    iPhone    0
Device Operating System    iOS    10.2
Device SSID    
#Aircraft
Aircraft Model    Phantom 4 Pro
Aircraft Name    dd
Aircraft Firmware    01.02.0304
#Aircraft Battery
Full Charge Volume (mAh)    5974
Remaining Life (%)    0
Discharges    1
#Components
Battery Cells Number    4
Battery Serial Number    0DQADB703108WN
Battery Firmware    02.00.07.26
Flight Controller Serial Number    07JDDAK001012B
Flight Controller Firmware    03.02.15.14
Gimbal Firmware    01.50.12.84
Remote Control Serial Number    0CKL1A02L8
Remote Control Firmware    01.03.00.00+
Camera Serial Number    0BDDDBE00100V3
```

### Main Body

```
Date/Time (UTC)    Elapsed Time (sec)    Info    Device Latitude (Degrees)    Device Longitude (Degrees)    Device Location Last Updated (ms)    Aircraft Battery Power (%)    Aircraft Battery Charge (mAh)    Aircraft Battery Current (mA)    Aircraft Battery Voltage (mV)    Aircraft Battery Temperature (Fahrenheit)    Aircraft Battery Last Updated (ms)    Aircraft Battery Cell 1 Voltage    Aircraft Battery Cell 2 Voltage    Aircraft Battery Cell 3 Voltage    Aircraft Battery Cell 4 Voltage    Aircraft Battery Cell Voltage Last Updated (ms)    Aircraft Latitude (Degrees)    Aircraft Longitude (Degrees)    Aircraft Speed (mph)    Aircraft Barometric Altitude (ft)    Aircraft Heading (Degrees)    Aircraft Vel - X (mph)    Aircraft Vel - Y (mph)    Aircraft Vel - Z (mph)    Aircraft Pitch (Degrees)    Aircraft Roll (Degrees)    Aircraft Satellites    Aircraft Motors On    Aircraft Flying    Aircraft Flight Mode    Aircraft Flight Mode Value    Aircraft IMU Preheating    Aircraft Ultrasonic On    Aircraft Ultrasonic Altitude (ft)    Aircraft Vision On    Aircraft GPS Signal    Aircraft GPS Signal Value    Aircraft No-fly    Aircraft No-fly Value    Aircraft No-fly Latitude (Degrees)    Aircraft No-fly Longitude (Degrees)    Aircraft No-fly Radius (ft)    Home Latitude (Degrees)    Home Longitude (Degrees)    Aircraft Smart Go-home Flight Time Remaining (sec)    Aircraft Smart Go-home Flight Return Time (sec)    Aircraft Smart Go-home Landing Time (sec)    Aircraft Smart Go-home Return Power (%)    Aircraft Smart Go-home Landing Power (%)    Aircraft Smart Go-home Radius (ft)    Aircraft Smart Go-home Requesting    Aircraft System State Last Updated (ms)    Gimbal Pitch (Degrees)    Gimbal Roll (Degrees)    Gimbal Yaw (Degrees)    Gimbal Mode    Gimbal Mode Value    Gimbal Pitch at Stop    Gimbal Roll at Stop    Gimbal Yaw at Stop    Gimbal Status Last Updated (ms)    Landing Gear is Movable    Landing Gear Status    Landing Gear Status Value    Landing Gear Mode    Landing Gear Mode Value    Landing Gear Last Updated (ms)    RC State    RC State Value    RC Left Horizontal    RC Left Vertical    RC Right Horizontal    RC Right Vertical    RC Left Wheel    RC Right Wheel    RC Landing Gear    RC Landing Gear Value    RC Go Home    RC Record     RC Shutter    RC Playback    RC Pause    RC Custom 1    RC Custom 2    RC State Last Updated (ms)    RC Battery (%)    RC Battery State Last Updated (ms)    RC Sattelites    RC Horizontal Accuaracy (ft)    RC Latitude (Degrees)    RC Longitude (Degrees)    RC GSP Data is Valid    RC GPS State Last Updated (ms)    RC Signal 1    RC Signal 2    RC Signal Last Updated (ms)    LB Signal 1    LB Signal 2    LB Signal Last Updated (ms)    Aircraft Camera Mode    Aircraft Camera Mode Value    Aircraft Camera Overheated    Aircraft Camera Sensor Error    Aircraft Camera Recording    Aircraft Camera Raw Capture    Aircraft Camera Interval Capture    Aircraft Camera Burst Capture    Aircraft Camera Single Capture    Aircraft Camera Storing Photo    Aircraft Camera State Last Updated (ms)    Aircraft Camera SD Card Exists    Aircraft Camera SD Card Remaining (%)    Aircraft Camera SD Card State Last Updated (ms)    Aircraft Camera Changeable Lens Supported    Aircraft Camera Lens Installed    Aircraft Camera Lens Type    Aircraft Camera Lens Type Value    Aircraft Camera Lens AF Enabled    Aircraft Camera Lens Focus Mode    Aircraft Camera Lens Focus Mode Value    Aircraft Camera Lens Focus Status    Aircraft Camera Lens Focus Status Value    Aircraft Camera Lens MF Assistant    Aircraft Camera Lens AF Assistant    Aircraft Camera Lens Assistant Working    Aircraft Camera Lens State Last Updated (ms)    Device > Aircraft Distance - XY (ft)
01/13/2017 20:22:54    0.169    Mission did take off    37.77178839318247    -122.407485069821    121    0    0    0    0    0    No Data    4099    4100    4096    4098    30    37.77181960628966    -122.4074304459029    0    0    33.1    0    0    0    -1.4    -1.7    19    1    0    TakeOff    41    0    1    0.328084    0    Very Strong    5    Flying Normally    0    -180    -180    0    37.77181913575728    -122.4074251897526    0    0    0    0    0    0    0    68    0    0    33.90000152587891    Yaw Follow    2    0    0    0    68    0    Unknown    0    Unknown    3    No Data    3    2    0    0    0    0    0    0    No Present    0    0    0    0    0    0    0    0    68    0    No Data    0    0    0    0    0    No Data    100    100    155    N/A    N/A    No Data    Shoot Photo    0    0    0    0    0    0    0    0    0    67    1    68.5107    67    0    1    AF    0    1    Auto    1    Idle    0    0    0    0    67    19.454875566298
01/13/2017 20:22:54    0.268        37.77178839318247    -122.407485069821    220    0    0    0    0    0    No Data    4099    4100    4096    4098    95    37.77181960569202    -122.4074304584804    0    0    33.1    0    0    0    -1.3    -1.7    19    1    0    TakeOff    41    0    1    0.328084    0    Very Strong    5    Flying Normally    0    -180    -180    0    37.77181913575728    -122.4074251897526    0    0    0    0    0    0    0    65    0    0    33.79999923706055    Yaw Follow    2    0    0    0    65    0    Unknown    0    Unknown    3    No Data    3    2    0    0    0    0    0    0    No Present    0    0    0    0    0    0    0    0    65    0    No Data    0    0    0    0    0    No Data    100    100    254    N/A    N/A    No Data    Shoot Photo    0    0    0    0    0    0    0    0    0    65    1    68.5107    65    0    1    AF    0    1    Auto    1    Idle    0    0    0    0    167    19.45179792084206
01/13/2017 20:22:54    0.368        37.77178839318247    -122.407485069821    320    0    0    0    0    0    No Data    4099    4100    4096    4098    15    37.77181959836646    -122.407430459737    0    0    33.1    0    0    0    -1.3    -1.7    19    1    0    TakeOff    41    0    1    0.328084    0    Very Strong    5    Flying Normally    0    -180    -180    0    37.77181913575728    -122.4074251897526    0    0    0    0    0    0    0    63    0    0    33.79999923706055    Yaw Follow    2    0    0    0    62    0    Unknown    0    Unknown    3    No Data    3    2    0    0    0    0    0    0    No Present    0    0    0    0    0    0    0    0    62    0    No Data    0    0    0    0    0    No Data    100    100    354    N/A    N/A    No Data    Shoot Photo    0    0    0    0    0    0    0    0    0    61    1    68.5107    61    0    1    AF    0    1    Auto    1    Idle    0    0    0    0    61    19.44994456286924
```

### Footer

If no footer information is present in the flight log, it implies that the app crashed or closed mid flight. We recommend to have a check if footer is available in the flight log.

```
#Flight Recorder Session End
Date/Time (UTC)    01/13/2017 20:27:14
Elapsed Time (sec)    260.618
```



