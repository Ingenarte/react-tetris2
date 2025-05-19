declare module '@axe-core/playwright' {
  export function injectAxe(
    page: import('@playwright/test').Page
  ): Promise<void>;

  export function checkA11y(
    page: import('@playwright/test').Page,
    context?: string,
    options?: {
      includedImpacts?: string[];
      detailedReport?: boolean;
      detailedReportOptions?: { html: boolean };
    }
  ): Promise<void>;
}
