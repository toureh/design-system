import { Component, h } from '@stencil/core';
import { BaseButton } from '../../base/base-button';

customElements.define('base-button', BaseButton as any);

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <base-button><slot></slot></base-button>
    );
  }
}