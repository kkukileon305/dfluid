export interface UnsplashResponse {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: UnsplashResponseLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: UnsplashResponseTopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  tags_preview: Tag[];
  views: number;
  downloads: number;
  topics: any[];
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface UnsplashResponseLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: null;
  city: null;
  country: null;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface Tag {
  type: Type;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: UnsplashResponseLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface CoverPhotoTopicSubmissions {
  health: Health;
}

export interface Health {
  status: string;
  approved_on: Date;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: null;
  paypal_email: null;
}

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search',
}

export interface UnsplashResponseTopicSubmissions {}
