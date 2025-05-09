# Test Prompts

---

The image @index.png shows the rendered visual of @index.html . Using these as baseline examples of html, can you please write a new @test.html  page to look something like @test.png ? Do not look at any other files. Primarily focus on layout, do not "visual" styles to elements like buttons, inputs, links, instead let the imported styles do their work.

<!-- Result: including index.png seems to be throwing off the model. It just reproduces index.html. Cursor might not be specifying which image is which? -->

---

**The Task**
Using @index.html as baseline examples of html with the mirai.css library, please look at @test.png and write a new @test.html page

**Rules**
- Do not look at any other files other than those mentioned
- The imported `mirai.css` file contains styles for most native html elements. This includes: input, button, a, all text elements, dialog, details, progress, select, textarea, radio, checkbox, table. Do not style these elements directly other than for layout purposes
- Use the markup in @index.html as an example of using mirai.css

<!-- Result: better, but still unacceptably bad. Model doesn't know how to use variables properly. there are lots of other layout issues. -->

---

**The Task**
Using @index.html as baseline examples of html with the mirai.css library, please look at @test.png and write a new @test.html page.

**Rules**
- Do not look at any other files other than those mentioned
- The imported `mirai.css` file contains styles for most native html elements. This includes: input, button, a, all text elements, dialog, details, progress, select, textarea, radio, checkbox, table. Do not style these elements directly other than for layout purposes
- Use the markup in @index.html  as an example of using mirai.css
- Use @mirai.css.md as a reference for what vars are available

<!-- Result: Individual component usage is really good. Layout is totally wonky, model does not know what classes from index.html example are from mirai and what are not... -->

<!-- Result 2: Claude-3.5-sonnet - less good than last time somehow... -->

<!-- Result 3: Gemini 2.5 pro - better layout, too much styling, added js  -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html . Please write in only unstyled semantic html. We want the default look of the browser. Only use css for basic responsive layout and positioning.

<!-- Result: gpt4.1 - back to basics, pretty good output -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html . Please write in only unstyled semantic html. We want the default look of the browser. Only use css for basic responsive layout, display, position, margin, padding, gap, etc... Please add spacing between elements and padding around content blocks where appropriate; Elements should never touch eachother or borders. Please **do not** write css for visual styling of elements. ie no color, background color, font-size, or anything else that changes the default appearance of native html elements. In cases where semantic html dictates the use of a list, you may unstyle the default list in order to layout list elements in a row or other layout. 

<!-- Result: better layout, but still adding visual styles -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html .  

Please write in only unstyled semantic html. We want the default look of the browser. 

Only use css only for basic responsive *layout* properties. Please add spacing between elements and padding around content blocks where appropriate; Elements should never touch each other or borders. 

**Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap.

Please **do not** write css to style the *appearance* of elements. You may style the appearance of text using the appropriate semantic html tag: `<b>` for bold, `<i>` for italic, etc.

**Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font. 

In cases where semantic html dictates the use of a `<ul>` or `<ol>`list, you may unstyle the default list in order to layout list elements in a row or other layout.

please keep the linked stylesheet at the top

<!-- Result: Wow, pretty good, we lost the responsive part and it still styled the border and border-radius, but we are getting there -->

---