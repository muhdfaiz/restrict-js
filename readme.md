## JS Loading Overlay

Restrict JS useful when you want to prevent or allow certain character for the input fields. For example the phone number field you maybe
want to allow people to insert numeric only or numeric with plus.

By default, all the keyboard buttons are allow

```markdown
backspace
delete
shift
left arrow
right arrow
up arrow
down arrow
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE9++, Edge

### How To Install
```markdown
NPM
npm install --save restrict-js

Yarn
yarn add restrict-js
```

### Demo
- [https://muhdfaiz.github.io/restrict-js//](https://muhdfaiz.github.io/restrict-js//)

### How To Use

#### Import the javscript file
```markdown
import 'restrict-js'

or

<script src="restrict-js.min.js"></script>
```

#### Add `data-restrict-js` at your input field. For example you want to accept only alpha numeric. You can set the value as `alphanumeric`
```markdown
data-restrict-js="alphanumeric"
```

#### Example input field
```markdown
<input id="phone_number" name="phone_number" type="text" class="form-control" data-restrict-js="numeric">
```

#### Available predefined rules

```markdown
alpha - Only allow alphabet. A-Z
numeric - Only allow numeric. 0-9
alphanumeric - Only allow alphabet numeric. A-Z,0-9
alphaspace - Only allow alphabet and space.
alphadash - Only allow alphabet and dash (-)
```