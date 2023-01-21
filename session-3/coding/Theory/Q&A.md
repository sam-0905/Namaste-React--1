--What is JSX?
      JSX is a Html like syntax , but it is not Html inside JavaScript.JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements. 
##### Example
      `const Title = <h1>This is JSX !</h1>`

--Superpowers of JSX .
      
  ### It enhances:

     -Readability
     -Maintainable
     -javascript expressions in JSX : JSX supports all js expressions by wrapping them in {}
     -JSX Prevents Injection Attacks:It is safe to embed user input in JSX.This helps prevent XSS     (cross-site-scripting) attacks.
     -JSX Represents Objects:Babel compiles JSX down to React.createElement() calls.


--Role of type attribute in script tag? What options can I use there?

     The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

   ## type attribute:
      text/javascript : It is the basic standard of writing javascript code inside the <script> tag.

 ##### Syntax
    `<script type="text/javascript"></script>`

    `text/ecmascript` : this value indicates that the script is following the EcmaScript standards.
    `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
    `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
    `text/typescript`: As the name suggest the script is written in TypeScript.


--{TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} in JSX

      {TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. 
      The {} can embed a javascript expression or a variable inside it.

      <TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

      <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.