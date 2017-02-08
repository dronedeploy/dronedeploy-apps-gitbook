

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
      var html = '<li class="user">';
      html += '<div class="username">Name: ';
      html += user.firstName + ' ' + user.lastName;
      html += '</div>';
      if(user.organization) {
        html += '<div class="organization">';
        html += '<img src="';
        html += user.organization.logoUrl;
        html += '" alt="Logo for organization';
        html += user.organization.name;
        html += '">';
      }
      html += '<div class="role">Role: ';
      html += user.role;
      html += '</div>';
      html += '<div class="email">Email: ';
      html += user.email;
      html += '</div>';
      html += '</div>';
      html += '</li>';
      return html;
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



