# Tints and Shades Generator Tool Guide

## What is Tints and Shades Generator?

**Tints and Shades Generator** is a web tool that creates color variations that look truly natural to the human eye, all from a single base color.

**Tints** are lighter colors made by mixing the base color with white. **Shades** are darker colors made by mixing the base color with black.

But this tool doesn't just mix colors in a simple way. It uses the latest **oklch color space** technology to make color changes feel perceptually smooth and natural.

Oklch lets us adjust "lightness," "hue," and "chroma" in a way that's much closer to how people actually see color. So, no matter what color you start with, you get gradients that just feel right.

For example, when you lighten blue towards white, you don't get a dull, washed-out blue—you get a clean, beautiful light blue. When you darken a color towards black, you keep the richness and depth, not just a muddy gray.

Thanks to this, designers and developers can instantly create unified, beautiful palettes without tedious manual tweaking. Whether it's for web design, UI, or brand colors, this tool is practical and reliable.

## Why was this tool created?

Ever found yourself thinking, "I love this color, but I wish I had a lighter version," or "I want a deeper, richer shade"?

But when you try to adjust colors by hand, they often end up looking dull or not quite right.

**Tints and Shades Generator** was made to solve those color struggles. With just one color, you get a full, natural gradient—no more muddy or awkward transitions. Every color keeps its character, and the balance of brightness and vibrancy always feels good.

## Technical Details & Why It Matters

This tool uses the **oklch color space** for all color mixing and gradients.
Oklch is designed to match human color perception, so gradients look much more natural than with traditional RGB or Lab mixing.

- Mixing with white (#fff) and black (#000) is done in oklch
- TailwindCSS color scales are generated using oklch
- Any color you choose will produce smooth, perceptually-correct gradients

That means colors rarely break or look off, and the balance of lightness and vibrancy is always spot-on.

## When to use it?

### When creating websites or apps

"I've decided on the main color, but thinking about hover colors for buttons, background colors, text colors... it's overwhelming"
→ Get a complete set of unified colors from just one color

### When using TailwindCSS

"I want to define custom colors, but thinking about all scales from 50 to 950?"
→ The "✨Tailwind" tab creates ready-to-use color scales instantly

### When deciding brand colors

"I've decided on the logo color, but I need color variations for the entire site"
→ Get rich color options while maintaining brand color consistency

## How to use (Let's try it out)

### Step 1: Choose a color

- Enter `#3b82f6` in the color input field at the top left (this is blue)
- Or click the color picker (small square button) next to it to choose any color you like
- ※Currently only supports HEX format (6-digit color codes starting with #)

### Step 2: Adjust intensity

- Move the "Weight" slider on the right side
- Smaller numbers create gradual changes, larger numbers create bold changes
- The default setting of "5" works well, but adjust to your preference

### Step 3: View and copy results

A color palette will be displayed in the center of the screen:

- **Light colors (Tints)**: Like mixing white with the original color
- **Original color (Base)**: The exact color you entered (with alert icon)
- **Dark colors (Shades)**: Like mixing black with the original color

Click on any color you like to copy its code. You should see "Copied!" appear in the top right.

### Step 4: Adjust display (optional)

In the settings on the right, you can:

- **Theme switching**: Check colors in dark mode too
- **Display options**: Add borders or hide codes
- **Step size**: Fine-tune adjustments down to 0.1% increments

## Using different tabs

- **All**: See all colors (this is the default)
- **Tints**: When you only want to see light colors
- **Shades**: When you only want to see dark colors
- **✨Tailwind**: TailwindCSS color scale format (50-950)

## Useful tips

**When unsure about color selection**: Click the 🔄 button at the top left for random colors. You might discover something unexpected.

**For fine adjustments**: Set the "Step size" below Weight settings to 0.1 for extremely precise control.

**To improve workflow efficiency**: Bookmark URLs with colors you use frequently. Colors are saved with the `?color=` parameter.

---

This tool was created with the intention of "shortening color decision time so you can spend more time on creation." We hope it helps you create wonderful works.
