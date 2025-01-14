import { Metadata } from "next";
import React from "react";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypePrettyCode from "rehype-pretty-code";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import remarkDirective from "remark-directive";
import remarkDeflist from "remark-deflist";
import supersub from "remark-supersub";
import { unified } from "unified";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { db } from "@/lib/db";
import { BlogType } from "@/types";
import { BLOGSERIALIZER } from "@/lib/serializers";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import ExpandableText from "../../../components/ReadMore";

type Props = Promise<{ slug: string }>;

const BlogPage = async ({ params }: { params: Props }) => {
  const { slug } = await params;
  const { content, ...blog }: BlogType = BLOGSERIALIZER(
    await db.blog.findUnique({
      where: {
        slug: slug,
      },
    })
  );

  if (!blog) {
    return (
      <div className="bg-background mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[calc(100vw-2.5rem)] lg:max-w-full mx-auto h-[calc(100vh-64px-44px)]">
          <p className="text-muted-foreground">Blog not found</p>
        </div>
      </div>
    );
  }

  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective) // Handle directives
    .use(remarkDeflist) // Handle definition lists
    .use(supersub) // Handle subscript/superscript
    .use(remarkMath) // Handle math
    .use(remarkGfm) // GFM
    .use(remarkGemoji) // Emoji support
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML
    .use(rehypeRaw) // Allow raw HTML
    .use(rehypeSlug) // Generate slugs for headings
    .use(rehypePrettyCode, {
      theme: "github-dark-default",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
      keepBackground: false,
    })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const html = (await processor.process(markdownContent)).toString();

  return (
    <>
      <style>
        {`
            main {
              max-height: calc(100vh - 64px);
              overflow-y: auto;
              &::-webkit-scrollbar {
                display: block;
                width: 10px;
              }
              &::-webkit-scrollbar-track {
                @apply bg-background;
              }
              &::-webkit-scrollbar-thumb {
                @apply bg-accent rounded-full;
              }
            }
          `}
      </style>
      <div
        className={`bg-background mx-auto min-h-[calc(100vh-64px-44px)] pt-5 pb-14`}
      >
        <div className="flex flex-col items-center justify-center max-w-[calc(100vw-2.5rem)] lg:max-w-full mx-auto gap-5">
          <div className="min-w-full lg:min-w-[56rem] lg:w-[56rem]">
            <Card className="h-full flex flex-col bg-accent/50 justify-between border-none">
              <CardHeader className="p-4 pb-0 h-full">
                <CardTitle className="flex flex-col gap-2 relative">
                  <h2 className="dark:text-white text-black text-4xl truncate">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(blog.createdAt, blog.updatedAt)}
                    </span>
                  </div>
                </CardTitle>
                <CardDescription className="text-md pt-3 flex flex-col">
                  <ExpandableText
                    text={blog.description}
                    maxLength={"max"}
                    expandable={false}
                  />
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2 items-center p-4 pt-3">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-rose-800/50 border border-rose-700 rounded-full text-[13px] text-rose-800 dark:text-rose-500 font-semibold capitalize select-none"
                  >
                    {tag}
                  </span>
                ))}
              </CardFooter>
            </Card>
          </div>
          <div
            className="dark:prose-invert prose !max-w-[100ch]"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

const markdownContent = `
---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

___

---

***

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
      `;
