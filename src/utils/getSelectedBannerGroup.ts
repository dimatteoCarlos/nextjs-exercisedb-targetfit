type GetSelectedBannerGroupType = {
  localStorageKey?: string;
  bannerOptionsName: {
    [key: string]: string;
  };
};

export function getSelectedBannerGroup({
  localStorageKey = 'mainBanner',
  bannerOptionsName,
}: GetSelectedBannerGroupType): string {
  const bannerValuesArray = Object.values(bannerOptionsName);

  console.log({ localStorageKey });

  if (bannerValuesArray.length === 0) {
    throw new Error('No banner options available');
  }

  const bannerStored: string | null = localStorage.getItem(localStorageKey);

  //incluir si es un json valido
  const selectedBannerGroup: string =
    bannerStored &&
    bannerStored != null &&
    bannerValuesArray.includes(JSON.parse(bannerStored)) &&
    bannerStored !== ''
      ? JSON.parse(bannerStored)
      : bannerValuesArray[Math.floor(Math.random() * bannerValuesArray.length)];

  localStorage.setItem(localStorageKey, JSON.stringify(selectedBannerGroup));

  return selectedBannerGroup;
}
