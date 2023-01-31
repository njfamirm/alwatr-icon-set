import {html, css, customElement, property, when} from '@alwatr/element';
import {untilEvent} from '@alwatr/util';

import {AlwatrSurface} from '../card/surface.js';

import '../button/button.js';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-snackbar': AlwatrSnackbar;
  }
}

/**
 * Alwatr snackbar (toast) ui element.
 */
@customElement('alwatr-snackbar')
export class AlwatrSnackbar extends AlwatrSurface {
  static override styles = [
    AlwatrSurface.styles,
    css`
      :host {
        --_surface-color-on: var(--sys-color-inverse-on-surface-hsl);
        --_surface-color-bg: var(--sys-color-inverse-surface-hsl);

        display: flex;
        align-items: center;
        padding: calc(0.5 * var(--sys-spacing-track));
        gap: var(--sys-spacing-track);
        position: fixed;
        bottom: calc(2 * var(--sys-spacing-track));
        left: calc(3 * var(--sys-spacing-track));
        right: calc(3 * var(--sys-spacing-track));
        border-radius: var(--sys-radius-xsmall);

        box-sizing: border-box;
        max-width: calc(var(--sys-breakpoint-handset) - 6 * var(--sys-spacing-track));
        /* margin: 0 auto; */

        font-family: var(--sys-typescale-body-medium-font-family-name);
        font-weight: var(--sys-typescale-body-medium-font-weight);
        font-size: var(--sys-typescale-body-medium-font-size);
        letter-spacing: var(--sys-typescale-body-medium-letter-spacing);
        line-height: var(--sys-typescale-body-medium-line-height);
        user-select: none;

        /* close state */
        opacity: 0;
        transform: translateY(200%) scale(1);
        pointer-events: none;
        transition-property: opacity, transform;
        transition-duration: var(--sys-motion-duration-medium-out);
        transition-timing-function: var(--sys-motion-easing-exiting);
        /* will-change: opacity, transform; */
      }

      :host([opened]) {
        opacity: 1;
        transform: translateY(0px) scale(1);
        pointer-events: auto;
        transition-duration: var(--sys-motion-duration-medium);
        transition-timing-function: var(--sys-motion-easing-incoming);
      }

      :host([closing]) {
        transform: translateY(0px) scale(0.94);
      }

      .message {
        padding: var(--sys-spacing-track);
        flex-grow: 1;
        flex-shrink: 1;
        white-space: pre-line;
      }

      alwatr-button {
        --_surface-color-on: var(--sys-color-inverse-primary-hsl);
        padding: var(--sys-spacing-track) calc(2 * var(--sys-spacing-track));
        flex-grow: 0;
        flex-shrink: 0;
        align-self: flex-end;
      }
    `,
  ];

  private _opened = false;
  set open(open: boolean) {
    this._logger.logProperty('open', open);
    if (this._opened === open) return;
    this._opened = open;
    this.updateComplete.then(async () => {
      if (this._opened !== open) return;
      this.toggleAttribute('opened', open);
      this.toggleAttribute('closing', !open);
      if (!open) {
        await untilEvent(this, 'transitionend');
        this.removeAttribute('closing');
      }
    });
  }
  get open(): boolean {
    return this._opened;
  }

  @property({type: String})
    message?: string;

  @property({type: String})
    actionLabel?: string;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('elevated', '3');

    document.addEventListener('click', () => {
      if (this.open) return;
      this.message = 'سلام یره، چطوری؟';
      this.actionLabel = 'خوب';
      this.open = true;
      setTimeout(() => {
        this.open = false;
      }, 30_000);
    });
  }

  override render(): unknown {
    return html`<span class="message">${this.message}</span>${when(
        this.actionLabel,
        () => html`<alwatr-button>${this.actionLabel}</alwatr-button>`,
    )}`;
  }
}
