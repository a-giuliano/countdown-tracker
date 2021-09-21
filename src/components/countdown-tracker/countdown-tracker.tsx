import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'countdown-tracker',
  styleUrl: 'countdown-tracker.css',
  shadow: true,
})
export class CountdownTracker {
  @Prop() endDate: Date;

  @State() days: string = '00';
  @State() hours: string = '00';
  @State() minutes: string = '00';
  @State() seconds: string = '00';

  private stopId: number;

  componentWillLoad() {
    this.tick();
  }

  tick() {
    const timeRemaining = this.endDate.getTime() - new Date().getTime();

    if (timeRemaining < 0) {
      cancelAnimationFrame(this.stopId);
      return;
    }

    this.seconds = Math.floor((timeRemaining / 1000) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    this.minutes = Math.floor((timeRemaining / (1000 * 60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    this.hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    this.days = Math.floor((timeRemaining / (24 * 60 * 60 * 1000)) % 30).toLocaleString('en-US', { minimumIntegerDigits: 2 });

    this.stopId = requestAnimationFrame(this.tick.bind(this));
  }

  render() {
    return (
      <Host>
        <div class="column">
          <p>DAYS</p>
          <p>{this.days}</p>
        </div>
        <p>:</p>
        <div class="column">
          <p>HOURS</p>
          <p>{this.hours}</p>
        </div>
        <p>:</p>
        <div class="column">
          <p>MINUTES</p>
          <p>{this.minutes}</p>
        </div>
        <p>:</p>
        <div class="column">
          <p>SECONDS</p>
          <p>{this.seconds}</p>
        </div>
      </Host>
    );
  }
}
