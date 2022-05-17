export interface Theme {
    capeCod: string;
    error: string;
    ebb: string;
    ebb2: string;
    dustyGrey: string;
    alto: string;
    concrete: string;
    alabaster: string;
    lemonGrass: string;
    success: string;
    white: string;
}

export const defaultTheme: Theme = {
    alabaster: '#f9f9f9',
    alto: '#d8d8d8',
    capeCod: '#313938',
    concrete: '#f3f2f2',
    dustyGrey: '#9a9a9a',
    ebb: '#eae5e4',
    ebb2: '#eeeceb',
    error: '#F5222D',
    lemonGrass: '#9f9f92',
    success: '#22CFA4',
    white: '#ffffff',
};



const themes: Record<string, Theme> = {
  fetefully: {
    ...defaultTheme,
  },
};

export const theme = process.env.THEME_PREFIX
  ? themes[process.env.THEME_PREFIX]
  : themes['fetefully'];


