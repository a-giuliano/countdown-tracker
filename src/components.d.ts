/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CountdownTracker {
        "endDate": string;
    }
}
declare global {
    interface HTMLCountdownTrackerElement extends Components.CountdownTracker, HTMLStencilElement {
    }
    var HTMLCountdownTrackerElement: {
        prototype: HTMLCountdownTrackerElement;
        new (): HTMLCountdownTrackerElement;
    };
    interface HTMLElementTagNameMap {
        "countdown-tracker": HTMLCountdownTrackerElement;
    }
}
declare namespace LocalJSX {
    interface CountdownTracker {
        "endDate"?: string;
    }
    interface IntrinsicElements {
        "countdown-tracker": CountdownTracker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "countdown-tracker": LocalJSX.CountdownTracker & JSXBase.HTMLAttributes<HTMLCountdownTrackerElement>;
        }
    }
}
