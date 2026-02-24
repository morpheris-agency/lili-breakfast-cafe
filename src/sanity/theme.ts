import { buildLegacyTheme } from 'sanity'

const props = {
    '--my-white': '#fafafa',
    '--my-black': '#0f0e0e',
    '--brand-primary': '#D4AF37', // A soft gold accent
    '--coffee-brown': '#3A2E28',
    '--sand-beige': '#f5f0eb',
    '--soft-green': '#A5A58D',
    '--state-info': '#4a90e2',
    '--state-success': '#4caf50',
    '--state-warning': '#ff9800',
    '--state-danger': '#f44336',
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-black'],
    '--white': props['--my-white'],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': props['--my-white'],
    '--component-text-color': props['--my-black'],

    /* Brand */
    '--brand-primary': props['--brand-primary'],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--brand-primary'],
    '--default-button-success-color': props['--state-success'],
    '--default-button-warning-color': props['--state-warning'],
    '--default-button-danger-color': props['--state-danger'],

    /* State */
    '--state-info-color': props['--state-info'],
    '--state-success-color': props['--state-success'],
    '--state-warning-color': props['--state-warning'],
    '--state-danger-color': props['--state-danger'],

    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],

    '--focus-color': props['--brand-primary'],
})
