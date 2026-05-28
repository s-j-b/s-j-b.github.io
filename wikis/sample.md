# J-Reader Sample Document

This file exercises every markdown element so the design process has real content to work with.

---

## Headings

# H1 — The quick brown fox
## H2 — jumps over the lazy dog
### H3 — Pack my box with five dozen liquor jugs
#### H4 — How vexingly quick daft zebras jump
##### H5 — The five boxing wizards jump quickly
###### H6 — Sphinx of black quartz, judge my vow

---

## Body Text & Inline Formatting

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

This paragraph has *italic text*, **bold text**, ***bold italic***, ~~strikethrough~~, and `inline code`. Here is a [hyperlink to example.com](https://example.com) with some text after it.

You can also write a longer sentence with a `code snippet in the middle` to check how it sits within the flow of body text, and then continue on naturally.

---

## Code Blocks

Inline code: `const x = 42;` sits within prose.

Fenced code block:

```python
def fibonacci(n: int) -> list[int]:
    seq = [0, 1]
    while len(seq) < n:
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

print(fibonacci(10))
```

```bash
npm run dev
git commit -m "add jreader"
```

```
Plain block — no language hint. Useful for config files, logs, plaintext.
key = value
another_key = another_value
```

---

## Mathematics

Inline math: The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Display math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}, \quad
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$

The Euler identity: $e^{i\pi} + 1 = 0$.

A matrix:

$$
A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}
$$

---

## Blockquotes

> A single-line blockquote. Simple, clean.

> A longer blockquote that spans multiple lines. The goal here is to see how the left border, indentation, and font treatment handle prose that wraps to a second or third line in the reading column.

> Nested blockquotes:
> > This is a reply or sub-quote. It should be visually distinguishable from the outer quote.

---

## Lists

### Unordered

- First item at the top level
- Second item, also top level
  - Nested child item
  - Another nested child
    - Doubly nested — how deep does it go?
- Back to top level

### Ordered

1. Step one — establish the baseline
2. Step two — iterate
3. Step three — compare side by side
   1. Sub-step A
   2. Sub-step B
4. Step four — lock it in

### Task List (GFM)

- [x] Install dependencies
- [x] Create directory structure
- [ ] Write MarkdownRenderer component
- [ ] Design font comparison
- [ ] Lock in heading styles

---

## Tables

| Element     | Tag          | Phase | Notes                          |
|-------------|--------------|-------|--------------------------------|
| Heading 1   | `h1`         | 1     | Largest, most prominent        |
| Paragraph   | `p`          | 1     | Core reading unit              |
| Code block  | `pre > code` | 1     | Monospace, background          |
| Blockquote  | `blockquote` | 1     | Left border, italic            |
| Table       | `table`      | 1     | This very table                |
| Math block  | KaTeX        | 1     | Via remark-math + rehype-katex |
| Syntax hl.  | —            | 2     | Deferred                       |
| Mobile      | —            | 3     | Deferred                       |

---

## Horizontal Rule

Text above the rule.

---

Text below the rule.

---

## Mixed Content — Real World Example

This section simulates the kind of content that will actually appear in wiki documents: a mix of headings, prose, code, and math together.

### The Fourier Transform

The **Fourier transform** decomposes a function into its constituent frequencies. For a function $f(t)$, the transform is:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(t)\, e^{-2\pi i \xi t}\, dt
$$

This is useful in signal processing, image compression (JPEG uses the **discrete cosine transform**, a variant), and differential equations.

A simple Python implementation of the DFT:

```python
import numpy as np

def dft(x: np.ndarray) -> np.ndarray:
    N = len(x)
    n = np.arange(N)
    k = n.reshape((N, 1))
    M = np.exp(-2j * np.pi * k * n / N)
    return np.dot(M, x)
```

> Note: In practice, use `np.fft.fft()` — it runs in $O(N \log N)$ rather than $O(N^2)$.

Key properties:

| Property      | Time domain       | Frequency domain  |
|---------------|-------------------|-------------------|
| Linearity     | $af + bg$         | $a\hat{f}+b\hat{g}$ |
| Time shift    | $f(t - t_0)$      | $e^{-2\pi i\xi t_0}\hat{f}(\xi)$ |
| Convolution   | $(f * g)(t)$      | $\hat{f}(\xi)\cdot\hat{g}(\xi)$ |
| Parseval      | $\int\|f\|^2$     | $\int\|\hat{f}\|^2$ |
