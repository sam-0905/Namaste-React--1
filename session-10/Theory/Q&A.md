## Namaste React Course by Akshay Saini

## Chapter 10 - What you see is that what sells

## Theory Assignment: 
##  Explore all the ways of writing css. 

### There are several ways of css:
- First way is to create a separate stylesheet(index.css) and in code we create a style using a className,id,..etc. It in also know as `Native Css`

-	Second way is `Inline` styling.

```
style = {{
  backgroundColor : "red"
}}

```

-	Third way is using library or Framework.

```
 MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
```

-	Fourth way is to using `SCSS & SASS`.

-	Fifth way is `Styled components` -  styled-components lets you write actual CSS in your JavaScript.Styled-components allows you to create components and attach styles to it using ES6 tagged template literals. The styles attached are written in CSS.

```
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
`;

const Example1 = () => {
  return (
    <main>
      <Button>Click me</Button>
    </main>
  );
};

export default Example1;
```

## How do we configure tailwind?

Steps to use tailwind css in app : 
- Install tailwind css

```
npm install -D tailwindcss postcss
npx tailwindcss init
```

- Configure PostCSS
```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

- Configure your template paths

```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##  In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)? 
 
#### `Content`
The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```

#### `Theme`
The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

```

`tailwind.config.js`

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

####  `Plugins`
The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```
#### For more reference ```[https://tailwindcss.com/docs/configuration#theme]``` .

### Why do we have `.postcssrc `file?


PostCSS is a CSS parser, framework or API that allows us to use plugins which can do various tasks. We use PostCSS because tailwind is installed as a PostCSS plugin. 

While installing tailwind, install postcss as its peer dependency. Create a '.postcssrc' file in project root, and enable the tailwindcss plugin.

It is a tool for transforming css with js.It helps to tells our `parcel` and browser to understant that we are using `Tailwindcss`

```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
#### For more refernce `[https://www.freecodecamp.org/news/what-is-postcss/]`
