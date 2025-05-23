---
title: Status colors
description: The “Status Colors” section provides distinct hues representing success, warnings, errors, and informational states.
---

Status colors are UI colors that are used to signal a status,
for example if a user is logged in or when new messages have arrived.

Status colors have a main color and a matching contrast color for text.

Status color text should be used when status color is applied to text on section background.

<div class="example-grid">
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--neutral">
      <p>Neutral</p>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--active">
      <p>Active</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--active">Active text</p>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--attention">
      <p>Attention</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--attention">Attention text</p>
  </div>
   <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--error">
      <p>Error</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--error">Error text</p>
  </div>
</div>

## Examples of usage

<div class="example-grid">
  <div class="example-grid__col example-grid__col--50">
      <div class="example-grid__box">
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Badge</h3>
         <span class="env-badge env-badge--neutral">8</span>
         <span class="env-badge env-badge--active">Logged in</span>
         <span class="env-badge env-badge--attention">42</span>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Custom inline SVG decoration</h3>
         <button type="button" class="env-button env-button--large env-button--icon env-button--link">
            Alerts
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="env-icon env-icon--medium" aria-hidden="true">
               <circle cx="20" cy="4" r="4" class="env-icon--attention"></circle>
               <g transform="matrix(1,0,0,1,0,0)"><path d="M12,24c-1.23,0-2.36-.8-2.72-2.04-.12-.4,.11-.81,.51-.93,.4-.11,.81,.11,.93,.51,.21,.71,.95,1.11,1.66,.91,.44-.13,.78-.47,.91-.91,.12-.4,.54-.62,.93-.51,.4,.12,.62,.53,.51,.93-.27,.93-.99,1.65-1.92,1.92-.27,.08-.53,.11-.8,.11Z"></path><path d="M12,3.75c-.41,0-.75-.34-.75-.75V.75c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V3c0,.41-.34,.75-.75,.75Z"></path><path d="M21,19.5H3c-.29,0-.55-.16-.67-.42-.13-.26-.09-.56,.08-.79,0,0,1.34-1.9,1.34-7.79C3.75,5.95,7.45,2.25,12,2.25c.37,0,.74,.02,1.1,.07,.41,.06,.7,.43,.64,.84-.05,.41-.44,.7-.84,.64-.3-.04-.6-.06-.9-.06-3.72,0-6.75,3.03-6.75,6.75,0,3.95-.57,6.26-1.04,7.5h15.5c-.45-1.16-.92-3.26-.96-6.99,0-.41,.33-.75,.74-.76,.42-.03,.75,.33,.76,.74,.06,5.91,1.24,7.19,1.25,7.2,.25,.2,.33,.52,.22,.82-.11,.3-.41,.49-.73,.49Z"></path></g>
            </svg>
         </button>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Error message</h3>
   <div class="env-form-field env-form-field--error">
   <label for="error" class="env-form-label">Email</label>
   <input
      type="text"
      class="env-form-input"
      id="error"
      value="wrong @address.com"
      aria-describedby="error-feedback"
      >
   <span id="error-feedback" class="env-form-field-help">Please enter a valid email address</span>
</div>
      </div>
   </div>
   <div class="example-grid__col example-grid__col--50">
      <div class="example-grid__box">
         <h3 class="env-ui-text-caption example-ui-color-status-heading">
            Status badge
         </h3>
         <h4 class="env-ui-text-subheading">Lorem Ipsumsson</h4>
         <p class="env-ui-text-caption">
            <span class="env-status-badge env-status-badge--active">Logged in</span>
         </p>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Status badge on Profile image</h3>
         <div class="env-profile-image env-profile-image--small">
            <img
               src="https://envisionui.io/placeholders/profile/200x200/01.webp"
               alt="Example profile image" />
            <div class="env-status-badge env-status-badge--active">Logged in</div>
         </div>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Text</h3>
         <p class="env-text env-text--active">Logged in</p>
         <p class="env-text env-text--attention">New message</p>
         <p class="env-text env-text--error">An error occurred</p>
      </div>
   </div>
</div>

Documentation of examples:

- [Status variant Badge](/components/badge/#status-variant)
- [Custom inline SVG decoration](/components/icons/#attention)
- [Status badge](/components/badge/#status-badge)
- [Status badge on Profile image](/components/profile-image/#status-badge)
- [Form error message](/forms/form-elements/#validation)
- [Text status colors](/typography/basic-text/#status-colors)
