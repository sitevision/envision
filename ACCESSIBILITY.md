# Envision accessibility statement

Sitevision is committed to making Envision usable by people with disabilities. This statement covers the Envision UI
library, its documentation, and its component examples. [Envision documentation](https://envisionui.io/)

## Accessibility goals and status

Our goal is to meet the applicable Web Content Accessibility Guidelines (WCAG) 2.2 Level AA criteria in Envision
components, documentation, and examples. Project-wide conformance is currently unverified. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Envision supports the latest stable releases of major web browsers. The accessibility of a website or app built with
Envision depends on how it uses components, including its markup, content, themes, and custom interactions.
[Envision browser support](README.md#supported-browsers)

## Known limitations

The deprecated Image slider can keep rotating while keyboard focus is inside it when autoplay is enabled. If you use the
legacy slider, turn off autoplay or switch to Image Viewer 2, which supports keyboard navigation and respects the user's
reduced-motion preference. [Image Viewer 2 accessibility guidance](https://envisionui.io/components/image-viewer-2/#accessibility)

## Report an accessibility barrier

If you have trouble using an Envision component or its documentation, tell the Envision maintainers through
[GitHub Issues](https://github.com/sitevision/envision/issues).

Describe what you were trying to do and what got in your way. If you can, include the component name or page link,
the Envision version, and the browser, operating system, or assistive technology you used.

## Contributing

When changing a component or example, use semantic HTML and follow the project's guidance on WAI-ARIA. Check the
affected interactions with a keyboard and, where relevant, a screen reader. Include any accessibility
limitations and workarounds in the component documentation. [Envision contributing guide](CONTRIBUTING.md)

Last updated 23 November 2026.
