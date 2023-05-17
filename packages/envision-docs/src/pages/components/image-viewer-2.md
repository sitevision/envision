---
title: Image viewer 2
---

## UNDER CONSTRUCTION

<div id="zoomTest2"  class="env-m-vertical--large">
<a class="env-link env-d--inline-block" href="/placeholders/originals/02.jpeg" data-zoom>
      <img src="/placeholders/225x100/02.jpeg" alt="Walking Tour in Amsterdam">
   </a>
</div>

<div id="zoomTest" class="example-imageviewer2-images env-cardholder-grid" style="max-width: 34em; margin: 0 auto;--env-cardholder-grid-column-width: 8em">
<a href="/placeholders/originals/02.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/02.jpeg" alt="Walking Tour in Amsterdam">
</a>
<a href="/placeholders/originals/03.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/03.jpeg" alt="Walking Tour in Amsterdam">
</a>
<a href="/placeholders/originals/04.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/04.jpeg" alt="Walking Tour in Amsterdam">
</a>
<a href="/placeholders/originals/08.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/08.jpeg" alt="Walking Tour in Amsterdam">
</a>
<a href="/placeholders/originals/09.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/09.jpeg" alt="Walking Tour in Amsterdam">
</a>
<a href="/placeholders/originals/10.jpeg" data-zoom class="env-flex__item">
<img loading="lazy" src="/placeholders/225x100/10.jpeg" alt="Walking Tour in Amsterdam">
</a>
</div>

<div lang="en">
<section id="myCarousel"
class="env-border env-p-around--medium env-m-vertical--large"
         aria-label="Highlighted television shows">
      <div>
          <span data-href="/placeholders/originals/10.jpeg" data-zoom class="env-image-viewer-2__item__zoom">
            <img src="/placeholders/900x400/10.jpeg" alt="Walking Tour in Amsterdam">
          </span>
        <div class="env-image-viewer-2__viewer__caption env-text">
         Dynamic Europe: Amsterdam, Prague, Berlin, 7 pm Tuesday, March 3, on TV
        </div>
      </div>
      <div>
          <span data-href="/placeholders/originals/05.jpeg" data-zoom class="env-image-viewer-2__item__zoom">
            <img src="/placeholders/900x400/05.jpeg" alt="Land's End in Cornwall">
          </span>
        <div class="env-image-viewer-2__viewer__caption env-text">
            <a href="#">
              Travel to Southwest England and Paris
            </a>
        </div>
      </div>
      <div>
            <img data-href="/placeholders/originals/02.jpeg" data-zoom src="/placeholders/900x400/02.jpeg" alt="Mom and daughter play Daniel Tiger game on notebook computer.">
        <div class="env-image-viewer-2__viewer__caption env-text">
            <a href="#">
              Great Children's Programming on Public TV
            </a>
        </div>
      </div>
</section>
</div>

<div id="myCarousel2"
         aria-label="Highlighted television shows">
      <div>
          <span data-href="/placeholders/originals/10.jpeg" data-zoom class="env-image-viewer-2__item__zoom">
            <img src="/placeholders/900x400/10.jpeg" alt="Walking Tour in Amsterdam">
          </span>
        <div class="env-image-viewer-2__viewer__caption">
         Dynamic Europe: Amsterdam, Prague, Berlin, 7 pm Tuesday, March 3, on TV
        </div>
      </div>
      <div>
          <span data-href="/placeholders/originals/05.jpeg" data-zoom class="env-image-viewer-2__item__zoom">
            <img src="/placeholders/900x400/05.jpeg" alt="Land's End in Cornwall">
          </span>
        <div class="env-image-viewer-2__viewer__caption">
            <a href="#">
              Travel to Southwest England and Paris
            </a>
        </div>
      </div>
      <div>
            <img data-href="/placeholders/originals/02.jpeg" data-zoom src="/placeholders/900x400/02.jpeg" alt="Mom and daughter play Daniel Tiger game on notebook computer.">
        <div class="env-image-viewer-2__viewer__caption">
            <a href="#">
              Great Children's Programming on Public TV
            </a>
        </div>
      </div>
</div>

### Carousel View and Behavior Options

**Display controls and captions outside of image**

This option is more accessible than rendering controls and captions within the image, because controls are easier to
perceive and captions are easier to read without rotating images behind them.

**Pause auto-rotation on load (reload needed)**

This option controls whether the carousel is paused or playing on page load. The paused option improves accessibility
for users with visual impairments and people who are distracted or confused by auto-rotation, but allows users to start
auto-rotation using the start/stop button.

Note: If the user has chosen reduced motion in system settings, auto-rotation will always be paused on load.

**Disable auto-rotation**

This option improves accessibility for users with visual impairments and people who are distracted or confused by
auto-rotation by disabling the auto-rotation feature and removing the start/stop button from the user interface. Users
can use the previous and next buttons to manually navigate through the slides.

## Keyboard Support

### Rotation Control Button

**Tab**

Moves focus through interactive elements in the carousel.

Rotation control, previous slide, and next slide buttons precede the slide content in the Tab sequence.

**Enter or Space**

Toggle the auto rotation of slides in the carousel.

### Next and Previous Slide Buttons

**Enter or Space**

Display next or previous slide in the carousel.

## Role, Property, State, and Tabindex Attributes

**section (role region)**

Role region is implied for any section element that has an accessible name.
Defines the carousel and its controls as a landmark region.

**aria-roledescription="carousel"**

Informs assistive technologies to identify the element as a "carousel" rather than a "region."

NOTE: The aria-roledescription value is defined using the language of the page and should be localized by the author.

**aria-label="Highlighted television shows"**

Provides a label that describes the content in the carousel region.

**aria-live="off"**

Identifies the container element as a live region that is in the "off" state, meaning assistive technology users are not
informed about changes to the region.

The live region is off when the carousel is automatically rotating.

**aria-live="polite"**

This causes screen readers to automatically announce the content of slides when the next and previous slide buttons are
activated.

**aria-roledescription="slide"**

Informs assistive technologies to identify the element as a "slide" rather than a "group."

Affects how the assistive technology renders the role but does not remove any assistive technology functions related to
group elements.

NOTE: The aria-roledescription value is defined using the language of the page and should be localized by the author.

**aria-label="N of 6"**

Provides each slide with a distinct label that helps the user understand which of the 6 slides is displayed.

Note: Normally, including set position and size information in an accessible name is not appropriate. An exception is
helpful in this implementation because group elements do not support aria-setsize or aria-posinset.

**aria-label="LABEL_STRING"**

Defines the accessible name for the pause auto-rotation button and the next and previous slide buttons.

**aria-controls="IDREF"**

Refers to the div that contains all the slides.
