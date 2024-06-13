export type AllowLocationDialogProps = {
  open: boolean;
  onClose: (allow: boolean) => void;
};

export interface CookieBannerProps {
  title?: string;
  description?: LocalePortableTextBlock;
  acceptButton?: string;
  rejectButton?: string;
}

export interface FacilitiesData {
  latitude: number;
  longitude: number;
}

export interface GeolocationButtonProps {
  onClick: () => void;
}

export interface Kita {
  address: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface MapComponentProps {
  userPosition: { lat: number; lng: number };
  onPlacesFetched: (places: any[]) => void;
}

export interface ResultProps {
  canSmoke: boolean;
  closestDistance: number | null;
}

export interface School {
  latitude: number;
  longitude: number;
}

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}
