# Form Over UI

## This JS and CSS code will help you to create "Form over UI" experiment to save development time.

## Follow steps, read carefully

## Step 1

#### Copy the code from [code.js](code.js) and paste it into you project js

#### Copy the code from [code.css](code.css) into your project css.

## Step 2

Put your Asana task URL
<u>In your code.js file it's row #2</u>

## Step 3

<u>Fill formElements object</u> with proper data from task description or figma mockup

<u>In your code.js file it's row #4 - #16</u>

See example below:

```sh
const formElements = {
  customHTMLBefore: `
	${ /*This html goes is inserted before the form */'' }
    <div class="spz-company-logo">
      <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726515821/Code_Templates_assets/Form_Over_UI/placholder_logo.svg"/>
    </div>
	  <div class="spz-superheading">Eyebrow</div>
    <div class="spz-form-heading">Show me Demo</div>
    <div class="spz-subheading">Optional subhead of the form.</div>
  `,
  customHTMLAfter: `
    ${ /*This html goes after the form button. To make empty, set as. */'' }
    <p>No credit required.</p>
    `,
};
```

## Step 4

#### <u>Identify and set</u> proper form selector or form wrapper(keep in mind that all dynamic fields which may appear also have to be included)

<u>in your code.js file it's row #19</u>

Examples of selectors:
- "#some_form_id"
- ".some_form_unique_classname"
- ".some_form_wrapper form"
- "form[aria-label='Contact form']"
- etc...

```sh
const formUniqueSelector = "#change_me"
```

## Step 5 (Make labels floating)
#### Fill inputSelectors array with proper input selectors.

<u>Row #22 in your code.js file</u>

#### Fill labelValues array with the data from the mockup.

<u>Row #25 in your code.js file</u>

```sh
const inputsSelectors = ["#input1_id", "#input2_id"] //Examples of selectors: "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
const labelValues = ["Label1 Value", "Label2 Value"] //Grab values from Figma design: "First Name", "Last Name", "Email" etc...
```
#### Selector should be unique for each element as document.querySelector() is used to select elements

## Step 6

<u>Delete anonymous function before pushing code to A/B testing platform. It's needed only for internal purposes.</u>

<u>Row #36 in your code.js file</u>

### If you defined unique form selector, inputsSelectors, labelValues  and formElements properly if will work out of the box.

This is how it will render in the browser
![How it looks in browser](how-it-looks.png)

## Tested on:

https://my.optimoroute.com/signup
https://app.cbinsights.com/signup
https://try.drata.com/demo
https://www.ntop.com/request-a-demo/
https://www.glofox.com/
https://www.bodydetails.com/