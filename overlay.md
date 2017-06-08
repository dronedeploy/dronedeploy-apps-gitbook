# Overlay

**Overview**
Open a closable overlay over the map and add additional content onto the overlay itself.

**Example Call**

```javascript
// Open the overlay
var title = 'Overlay Title';
dronedeployApi.Overlay.open(title);

// Close the overlay
dronedeployApi.Overlay.close();
```

**How to Use**
There are several steps you want to keep in mind when utilizing the dashboard overlay. You will need two separate plugins, one for the dashboard and one for the overlay itself.
1. Drag your dashboard plugin (that opens the overlay) into any App Zone on the sidebar.
2. Once you open the overlay using your dashboard plugin, you can add another plugin to the App Zone on the overlay itself.
3. Make sure to specify that your overlay plugin belongs to the same app as your dashboard plugin when prompted!

[**Full Example**](/overlay/example-overlay.basic.md)

**Note: ** If the dashboard or overlay plugins don't seem to be working after dropping in the source code to either App Zone, try refreshing the page. This is a known issue, and will be fixed shortly!