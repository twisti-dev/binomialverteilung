export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationGroup {
  group: string;
  pages: string[];
}

export interface NavigationTab {
  tab: string;
  groups: NavigationGroup[];
}

export const navigationTabs: NavigationTab[] = [
  {
    tab: "Lernen",
    groups: [
      {
        group: "Bernoulli",
        pages: ["bernoulli/bernoulli"]
      },
      {
        group: "Sigma",
        pages: ["sigma/normalverteilung", "sigma/sigma"]
      },
      {
        group: "Bedingte Wahrscheinlichkeit",
        pages: [
          "bedingte-wahrscheinlichkeit/bedingte-wahrscheinlichkeit",
          "bedingte-wahrscheinlichkeit/stochastische-unabhaengigkeit",
          "bedingte-wahrscheinlichkeit/stochastische-abhaengigkeit"
        ]
      },
      {
        group: "Binomialverteilung",
        pages: ["binomialverteilung", "binom/example"]
      },
      {
        group: "Beispielaufgaben",
        pages: ["examples/naturparktouristen", "examples/porzellanmanufaktur"]
      }
    ]
  },
  {
    tab: "Übungsaufgaben",
    groups: [
      {
        group: "Allgemein",
        pages: ["excersises/excersises"]
      },
      {
        group: "Bernoulli",
        pages: []
      },
      {
        group: "Binomialverteilung",
        pages: []
      }
    ]
  }
];

export function getPageTitle(slug: string): string {
  const titles: Record<string, string> = {
    'bernoulli/bernoulli': 'Bernoulli',
    'sigma/normalverteilung': 'Normalverteilung',
    'sigma/sigma': 'Sigma',
    'bedingte-wahrscheinlichkeit/bedingte-wahrscheinlichkeit': 'Bedingte Wahrscheinlichkeit',
    'bedingte-wahrscheinlichkeit/stochastische-unabhaengigkeit': 'Stochastische Unabhängigkeit',
    'bedingte-wahrscheinlichkeit/stochastische-abhaengigkeit': 'Stochastische Abhängigkeit',
    'binomialverteilung': 'Binomialverteilung',
    'binom/example': 'Example',
    'examples/naturparktouristen': 'Naturpark Touristen',
    'examples/porzellanmanufaktur': 'Porzellanmanufaktur',
    'excersises/excersises': 'Übungsaufgaben'
  };
  return titles[slug] || slug.split('/').pop()?.replace(/-/g, ' ') || '';
}
