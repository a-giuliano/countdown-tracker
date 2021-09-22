import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'countdown-tracker',
  styleUrl: 'countdown-tracker.css',
  shadow: true,
})
export class CountdownTracker {
  @Prop() endDate: string;

  @State() days: string = '00';
  @State() hours: string = '00';
  @State() minutes: string = '00';
  @State() seconds: string = '00';

  private endDateObj: Date;
  private stopId: number;

  componentWillLoad() {
    this.endDateObj = new Date(this.endDate);
    this.tick();
  }

  tick() {
    // example value: 80834343, time in milliseconds between endDate and now
    const timeRemaining = this.endDateObj.getTime() - new Date().getTime();

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
          <p class="label">Days</p>
          <p class="value">{this.days}</p>
        </div>
        <p class="colon">:</p>
        <div class="column">
          <p class="label">Hours</p>
          <p class="value">{this.hours}</p>
        </div>
        <p class="colon">:</p>
        <div class="column">
          <p class="label">Minutes</p>
          <p class="value">{this.minutes}</p>
        </div>
        <p class="colon">:</p>
        <div class="column">
          <p class="label">Seconds</p>
          <p class="value">{this.seconds}</p>
        </div>
      </Host>
    );
  }
}
