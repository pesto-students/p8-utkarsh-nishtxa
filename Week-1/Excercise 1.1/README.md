
After we enter the url and press the enter button, The whole process involves the browser, operating system, ISP, the server where the site is hosted, and the services running in that server.

First let us explore the key functionality of the browser.

A Browser is an application software that enables a users to look for, access, view websites. websites are collections of files such as HTML, CSS, Javascript, and images, which tells a browser how it can display the site and its related data such as images.
Web browsers are mainly used to display and access websites on the internet, as well as other content created with programming languages such as Hypertext Markup Language (HTML) and Extensible Markup Language (XML). 
Browsers can work with different protocols such as Hypertext Transfer Protocol (HTTP), secure HTTP (HTTPS), File Transfer Protocol (FTP), email handling, and files. 
A web browser’s main objective is to render HTML. When a web page is loaded on a browser, it processes the HTML, which may contain data such as text, links, and references to images and other items such as CSS and JavaScript functions. Then these objects are rendered by browser in the browser window after being processed. Web browser supports various types of HTML (such as XHTML and HTML 5), dynamic JavaScript, and secure website encryption. Developers can build highly interactive websites due to the capabilities of modern web browsers. Ajax, for instance, allows a web browser to dynamically update the data on a webpage without requiring the page to be reloaded. CSS advancements allows a browsers to display responsive website layouts, and browsers use cookies to store your preferences for specific websites.

Now let us explore High level Components of a browser with the help of a diagram

 ![image](https://user-images.githubusercontent.com/120875265/208314394-bfc152d2-8590-4ed9-935d-b002b34caef8.png)




1. User Interface
It is the GUI for the browser application which gives different control and access to user.
2. Browser Engine
The bridge between the interface and the engine. It monitors the render engine and manipulates the inputs coming from multiple user interfaces.
3. Networking
The protocol provides an URL and manages safety, privacy and communication.
4. Data Storage
The cookies store is a uniform layer that the browsers use. It works as a data store for storing user preferences.
5. JavaScript Interpreter
It allows compilation of JavaScript code in a document and the executes it. This enables all the functionality which we see in a website.
Rendering engine and its use:
A rendering engine draws text and images on the screen. The engine draws structured text from a document like html, and formats it properly based on the given style declarations (as given in CSS, SASS). The primary job of browser engine is to convert HTML documents and other resources in an interactive visual representation.

Parsers (HTML, CSS, etc) and Tree construction.
Parser analyzes and converts a program into a format that a runtime environment can run, for example the JS engine in the browsers. The browser parses HTML into a DOM tree. Whereas HTML parsing involves tokenization and tree construction.
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.
Script Processor and order of script processing.
Script processor oversees pre-processing of scripts in web browsers, Script processing include browser systems and methods of loading/rendering a page by processing the web document (HTML page) in parallel. A scanner process scans the web document, identifies scripts, and starts the downloading of the scripts. As the scripts are loaded, an HTML parser generates an identifier for each script and the sends the scripts and associated identifiers to a script engine. The script engine parses, analyzes, compiles, and otherwise prepares the scripts for execution in an order that may be different than the execution order of the scripts.
The model of the web is synchronous. It is expected scripts to be parsed and executed immediately when parser reaches a <script> tag. Document Parsing stops until the script has been executed. For external scripts, the resource must first be fetched from the network - this is also done synchronously, and parsing stops until the resource is fetched. This model was specified in HTML4 and 5 specifications. Developers can include the "defer" attribute in a script, to not halt document parsing and execute it once the document is parsed. However HTML5 includes an option to label the script as asynchronous so it will be parsed and executed on a different thread.
Layout and Painting:
The DOM trees are combined into a render tree, which is further used to compute the layout of every visible element and serves as an input to the paint process which renders the pixels on screen.
In the painting or rasterization phase, the browser transform each box calculated in the layout phase to the actual pixels on the screen. Painting consists of drawing all the visual part of an element on the screen, inclusive of text, colors, borders, shadows, and replaced elements such as buttons and images.

