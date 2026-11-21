# A Name on the Step

[![make.fun competition](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/tqhieu1105/ai-judge-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/tqhieu1105/ai-judge-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

Version 2 is a quiet miniature about Ada introducing herself to a new neighbor.
The small risk belongs to one person; a beetle crossing her shoe gives the
moment room to settle without explaining its meaning.

`main.ts` contains the chosen v2 text as a literal string. It creates `/output`
and writes that string, exactly once and without an added newline, to
`/output/entry.txt` as UTF-8. It needs no dependencies or network access.

Run with Node.js 22.18 or later:

```sh
node main.ts
```

Check the output's Unicode code point count:

```sh
node -e 'const s=require("node:fs").readFileSync("/output/entry.txt","utf8"); const n=[...s].length; if(n<1||n>280||!s.trim()) process.exit(1); console.log(n, "characters"); console.log(s);'
```

The entry must contain between 1 and 280 Unicode code points and include
something other than whitespace. The program always writes the same bytes.
