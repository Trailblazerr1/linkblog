## A link blog made with Golang parser (Still a WIP)       
       
Here's how it works:

1. Content is added to lowercase from phone/laptop.
2. Markdown data is being fetched from lowercase in json.
3. json is parsed and is converted into html by a predefined template. This parser is written in go.
4. The generated index.html is a static link blog.


## TODO
    - Fix date bugs.
    - Add RSS support.
    - Refactor and clear Go parser and template's code and commit it.
    - Automate the process using Github Actions.
    - Linkback to hoomepage.
