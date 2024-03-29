export interface GeolocationButtonProps {
  onClick: () => void;
};

export interface CookieBannerProps {
  title?: string;
  description?: LocalePortableTextBlock;
  acceptButton?: string;
  rejectButton?: string;
}
