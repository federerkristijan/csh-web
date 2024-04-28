export interface CookieBannerProps {
  title?: string;
  description?: LocalePortableTextBlock;
  acceptButton?: string;
  rejectButton?: string;
}

export interface FacilitesData {
  latitude: number;
  longitude: number;
}

export interface GeolocationButtonProps {
  onClick: () => void;
};

export interface Kita {
  address: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ResultProps {
  canSmoke: boolean;
}

export interface School {
  latitude: number;
  longitude: number;
}
