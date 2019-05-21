![](/docs/assets/Screenshot%202017-02-08%2017.23.06.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1 class="title">User.get example</h1>
  <ul id="user-list"></ul>
  <script>
    var userList = document.getElementById('user-list');

    function formatOutput(user) {
    //es6 template string
      return `
        <li class="user">
          <div class="username">Name: ${user.firstName} ${user.lastName}</div>
          ${user.organization ? formatOrganization(user.organization) : ''}
          <div class="role">Role: ${user.role}</div>
          <div class="email">Email: ${user.email}</div>
        </li>
      `
    }

    function formatOrganization(org) {
    //es6 template string
      return `
          <div class="organization">
            <img src="${org.logoUrl}" alt="Logo for organization ${org.name}">
          </div>
      `
    }

    new DroneDeploy({ version: 1 })
      .then(function(dronedeployApi) {
        return dronedeployApi.User.get();
      })
      .then(function(user) {
        userList.innerHTML = formatOutput(user);
      })
  </script>
</body>
</html>
```



