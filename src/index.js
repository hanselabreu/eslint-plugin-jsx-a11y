/* eslint-disable global-require */

module.exports = {
  rules: {
    "accessible-emoji": require("./rules/accessible-emoji"),
    "alt-text": require("./rules/alt-text"),
    "anchor-ambiguous-text": require("./rules/anchor-ambiguous-text"),
    "anchor-has-content": require("./rules/anchor-has-content"),
    "anchor-is-valid": require("./rules/anchor-is-valid"),
    "aria-activedescendant-has-tabindex": require("./rules/aria-activedescendant-has-tabindex"),
    "aria-props": require("./rules/aria-props"),
    "aria-proptypes": require("./rules/aria-proptypes"),
    "aria-role": require("./rules/aria-role"),
    "aria-unsupported-elements": require("./rules/aria-unsupported-elements"),
    "autocomplete-valid": require("./rules/autocomplete-valid"),
    "click-events-have-key-events": require("./rules/click-events-have-key-events"),
    "control-has-associated-label": require("./rules/control-has-associated-label"),
    "heading-has-content": require("./rules/heading-has-content"),
    "html-has-lang": require("./rules/html-has-lang"),
    "iframe-has-title": require("./rules/iframe-has-title"),
    "img-redundant-alt": require("./rules/img-redundant-alt"),
    "interactive-supports-focus": require("./rules/interactive-supports-focus"),
    "label-has-associated-control": require("./rules/label-has-associated-control"),
    "label-has-for": require("./rules/label-has-for"),
    lang: require("./rules/lang"),
    "media-has-caption": require("./rules/media-has-caption"),
    "mouse-events-have-key-events": require("./rules/mouse-events-have-key-events"),
    "no-access-key": require("./rules/no-access-key"),
    "no-aria-hidden-on-focusable": require("./rules/no-aria-hidden-on-focusable"),
    "no-autofocus": require("./rules/no-autofocus"),
    "no-distracting-elements": require("./rules/no-distracting-elements"),
    "no-interactive-element-to-noninteractive-role": require("./rules/no-interactive-element-to-noninteractive-role"),
    "no-noninteractive-element-interactions": require("./rules/no-noninteractive-element-interactions"),
    "no-noninteractive-element-to-interactive-role": require("./rules/no-noninteractive-element-to-interactive-role"),
    "no-noninteractive-tabindex": require("./rules/no-noninteractive-tabindex"),
    "no-onchange": require("./rules/no-onchange"),
    "no-redundant-roles": require("./rules/no-redundant-roles"),
    "no-static-element-interactions": require("./rules/no-static-element-interactions"),
    "prefer-tag-over-role": require("./rules/prefer-tag-over-role"),
    "role-has-required-aria-props": require("./rules/role-has-required-aria-props"),
    "role-supports-aria-props": require("./rules/role-supports-aria-props"),
    scope: require("./rules/scope"),
    "tabindex-no-positive": require("./rules/tabindex-no-positive"),
  },
  configs: {
    recommended: require("./recommended"),
    strict: require("./strict"),
  },
};
