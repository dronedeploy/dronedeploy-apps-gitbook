# Link

## Link.open

**Overview**

Since apps run on Web, iOS, and Android some things like links can be a little more complicated. In order to abstract this complexity we've added a method \`dronedeployApi.Link.open\` that abstracts Cordova methods that need to be called on native devices.

**Example**

```javascript
// Will open in new window, similar to `window.open('https://www.google.com/')`
dronedeployApi.Link.open('https://www.google.com/');
```

**[Example: Link.open](link/example-link.open.md)**
