const refColors = {
  refPrimary: {
    0: 'rgba(var(--ref-palette-primary0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-primary10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-primary20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-primary25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-primary30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-primary35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-primary40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-primary50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-primary60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-primary70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-primary80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-primary90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-primary95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-primary98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-primary99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-primary100), <alpha-value>)',
  },

  refSecondary: {
    0: 'rgba(var(--ref-palette-secondary0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-secondary10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-secondary20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-secondary25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-secondary30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-secondary35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-secondary40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-secondary50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-secondary60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-secondary70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-secondary80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-secondary90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-secondary95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-secondary98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-secondary99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-secondary100), <alpha-value>)',
  },

  refTertiary: {
    0: 'rgba(var(--ref-palette-tertiary0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-tertiary10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-tertiary20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-tertiary25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-tertiary30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-tertiary35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-tertiary40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-tertiary50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-tertiary60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-tertiary70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-tertiary80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-tertiary90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-tertiary95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-tertiary98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-tertiary99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-tertiary100), <alpha-value>)',
  },

  refNeutral: {
    0: 'rgba(var(--ref-palette-neutral0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-neutral10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-neutral20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-neutral25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-neutral30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-neutral35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-neutral40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-neutral50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-neutral60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-neutral70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-neutral80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-neutral90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-neutral95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-neutral98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-neutral99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-neutral100), <alpha-value>)',
  },

  refNeutralVariant: {
    0: 'rgba(var(--ref-palette-neutral-variant0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-neutral-variant10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-neutral-variant20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-neutral-variant25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-neutral-variant30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-neutral-variant35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-neutral-variant40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-neutral-variant50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-neutral-variant60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-neutral-variant70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-neutral-variant80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-neutral-variant90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-neutral-variant95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-neutral-variant98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-neutral-variant99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-neutral-variant100), <alpha-value>)',
  },

  refError: {
    0: 'rgba(var(--ref-palette-error0), <alpha-value>)',
    10: 'rgba(var(--ref-palette-error10), <alpha-value>)',
    20: 'rgba(var(--ref-palette-error20), <alpha-value>)',
    25: 'rgba(var(--ref-palette-error25), <alpha-value>)',
    30: 'rgba(var(--ref-palette-error30), <alpha-value>)',
    35: 'rgba(var(--ref-palette-error35), <alpha-value>)',
    40: 'rgba(var(--ref-palette-error40), <alpha-value>)',
    50: 'rgba(var(--ref-palette-error50), <alpha-value>)',
    60: 'rgba(var(--ref-palette-error60), <alpha-value>)',
    70: 'rgba(var(--ref-palette-error70), <alpha-value>)',
    80: 'rgba(var(--ref-palette-error80), <alpha-value>)',
    90: 'rgba(var(--ref-palette-error90), <alpha-value>)',
    95: 'rgba(var(--ref-palette-error95), <alpha-value>)',
    98: 'rgba(var(--ref-palette-error98), <alpha-value>)',
    99: 'rgba(var(--ref-palette-error99), <alpha-value>)',
    100: 'rgba(var(--ref-palette-error100), <alpha-value>)',
  },
} as const;

export const colors = {
  ...refColors,
  primaryLight: refColors.refPrimary[40],
  primaryDark: refColors.refPrimary[80],
  primaryAuto: 'rgba(var(--sys-color-primary), <alpha-value>)',
  onPrimaryLight: refColors.refPrimary[100],
  onPrimaryDark: refColors.refPrimary[20],
  onPrimaryAuto: 'rgba(var(--sys-color-on-primary), <alpha-value>)',
  primaryContainerLight: refColors.refPrimary[90],
  primaryContainerDark: refColors.refPrimary[30],
  primaryContainerAuto: 'rgba(var(--sys-color-primary-container), <alpha-value>)',
  onPrimaryContainerLight: refColors.refPrimary[10],
  onPrimaryContainerDark: refColors.refPrimary[90],
  onPrimaryContainerAuto: 'rgba(var(--sys-color-on-primary-container), <alpha-value>)',

  secondaryLight: refColors.refSecondary[40],
  secondaryDark: refColors.refSecondary[80],
  secondaryAuto: 'rgba(var(--sys-color-secondary), <alpha-value>)',
  onSecondaryLight: refColors.refSecondary[100],
  onSecondaryDark: refColors.refSecondary[20],
  onSecondaryAuto: 'rgba(var(--sys-color-on-secondary), <alpha-value>)',
  secondaryContainerLight: refColors.refSecondary[90],
  secondaryContainerDark: refColors.refSecondary[30],
  secondaryContainerAuto: 'rgba(var(--sys-color-secondary-container), <alpha-value>)',
  onSecondaryContainerLight: refColors.refSecondary[10],
  onSecondaryContainerDark: refColors.refSecondary[90],
  onSecondaryContainerAuto: 'rgba(var(--sys-color-on-secondary-container), <alpha-value>)',

  tertiaryLight: refColors.refTertiary[40],
  tertiaryDark: refColors.refTertiary[80],
  tertiaryAuto: 'rgba(var(--sys-color-tertiary), <alpha-value>)',
  onTertiaryLight: refColors.refTertiary[100],
  onTertiaryDark: refColors.refTertiary[20],
  onTertiaryAuto: 'rgba(var(--sys-color-on-tertiary), <alpha-value>)',
  tertiaryContainerLight: refColors.refTertiary[90],
  tertiaryContainerDark: refColors.refTertiary[30],
  tertiaryContainerAuto: 'rgba(var(--sys-color-tertiary-container), <alpha-value>)',
  onTertiaryContainerLight: refColors.refTertiary[10],
  onTertiaryContainerDark: refColors.refTertiary[90],
  onTertiaryContainerAuto: 'rgba(var(--sys-color-on-tertiary-container), <alpha-value>)',

  backgroundLight: refColors.refNeutral[99],
  backgroundDark: refColors.refNeutral[10],
  backgroundAuto: 'rgba(var(--sys-color-background), <alpha-value>)',
  onBackgroundLight: refColors.refNeutral[10],
  onBackgroundDark: refColors.refNeutral[90],
  onBackgroundAuto: 'rgba(var(--sys-color-on-background), <alpha-value>)',

  surfaceLight: refColors.refNeutral[99],
  surfaceDark: refColors.refNeutral[10],
  surfaceAuto: 'rgba(var(--sys-color-surface), <alpha-value>)',
  onSurfaceLight: refColors.refNeutral[10],
  onSurfaceDark: refColors.refNeutral[90],
  onSurfaceAuto: 'rgba(var(--sys-color-on-surface), <alpha-value>)',

  surfaceVariantLight: refColors.refNeutral[90],
  surfaceVariantDark: refColors.refNeutral[30],
  surfaceVariantAuto: 'rgba(var(--sys-color-surface-variant), <alpha-value>)',
  onSurfaceVariantLight: refColors.refNeutral[30],
  onSurfaceVariantDark: refColors.refNeutral[80],
  onSurfaceVariantAuto: 'rgba(var(--sys-color-on-surface-variant), <alpha-value>)',

  outlineLight: refColors.refNeutral[50],
  outlineDark: refColors.refNeutral[60],
  outlineVariantAuto: 'rgba(var(--sys-color-outline-variant), <alpha-value>)',
  outlineVariantLight: refColors.refNeutral[80],
  outlineVariantDark: refColors.refNeutral[30],
  onOutlineVariantAuto: 'rgba(var(--sys-color-on-outline-variant), <alpha-value>)',

  errorLight: refColors.refError[40],
  errorDark: refColors.refError[80],
  errorAuto: 'rgba(var(--sys-color-error), <alpha-value>)',
  onErrorLight: refColors.refError[100],
  onErrorDark: refColors.refError[20],
  onErrorAuto: 'rgba(var(--sys-color-on-error), <alpha-value>)',
  errorContainerLight: refColors.refError[90],
  errorContainerDark: refColors.refError[30],
  errorContainerAuto: 'rgba(var(--sys-color-error-container), <alpha-value>)',
  onErrorContainerLight: refColors.refError[10],
  onErrorContainerDark: refColors.refError[90],
  onErrorContainerAuto: 'rgba(var(--sys-color-on-error-container), <alpha-value>)',

  inversePrimaryLight: refColors.refPrimary[80],
  inversePrimaryDark: refColors.refPrimary[40],
  inversePrimaryAuto: 'rgba(var(--sys-color-inverse-primary), <alpha-value>)',
  inverseSurfaceLight: refColors.refNeutral[20],
  inverseSurfaceDark: refColors.refNeutral[90],
  inverseSurfaceAuto: 'rgba(var(--sys-color-inverse-surface), <alpha-value>)',
  inverseOnSurfaceLight: refColors.refNeutral[95],
  inverseOnSurfaceDark: refColors.refNeutral[25],
  inverseOnSurfaceAuto: 'rgba(var(--sys-color-inverse-on-surface), <alpha-value>)',

  surfaceTint: refColors.refPrimary[40],
  shadow: refColors.refNeutral[0],
  scrim: refColors.refNeutral[0],
} as const;
